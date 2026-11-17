import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoticiasService } from './noticias.service';
import { Noticia } from './noticia.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  noticias: Noticia[] = [];

  // Campos para Agregar
  nuevoTitulo = '';
  nuevoContenido = '';
  nuevaImagenUrl = '';
  nuevoAutor = '';

  // Campos para Editar
  editId: number | null = null;
  editTitulo = '';
  editContenido = '';
  editImagenUrl = '';
  editAutor = '';

  // Campo para Eliminar
  eliminarId: number | null = null;

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit(): void {
    this.actualizarLista();
  }

  actualizarLista(): void {
    this.noticias = this.noticiasService.obtenerNoticias();
  }

  onAgregar(): void {
    if (this.nuevoTitulo && this.nuevoContenido) {
      this.noticiasService.agregarNoticia(
        this.nuevoTitulo,
        this.nuevoContenido,
        this.nuevaImagenUrl || 'https://via.placeholder.com/150',
        this.nuevoAutor || 'Anónimo'
      );
      this.nuevoTitulo = '';
      this.nuevoContenido = '';
      this.nuevaImagenUrl = '';
      this.nuevoAutor = '';
      this.actualizarLista();
    }
  }

  onEditar(): void {
    if (this.editId !== null) {
      const exito = this.noticiasService.editarNoticia(
        this.editId,
        this.editTitulo,
        this.editContenido,
        this.editImagenUrl,
        this.editAutor
      );
      if (exito) {
        alert('Noticia actualizada con éxito');
        this.actualizarLista();
      } else {
        alert('No se encontró noticia con el ID especificado');
      }
    }
  }

  onEliminar(): void {
    if (this.eliminarId !== null) {
      const exito = this.noticiasService.eliminarNoticia(this.eliminarId);
      if (exito) {
        alert('Noticia eliminada correctamente');
        this.actualizarLista();
      } else {
        alert('No se encontró noticia con ese ID');
      }
    }
  }

  // Convierte el arreglo de noticias en texto plano JSON
  get noticiasJson(): string {
    return JSON.stringify(this.noticias, null, 2);
  }
}