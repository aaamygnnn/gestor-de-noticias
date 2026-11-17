import { Injectable } from '@angular/core';
import { Noticia } from './noticia.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private noticias: Noticia[] = [
    new Noticia(
      1,
      'Lanzamiento de Angular en Tecno Soluciones',
      'Se ha implementado el desarrollo de aplicaciones web con Angular.',
      'https://via.placeholder.com/150',
      'America'
    )
  ];

  private ultimoId: number = 1;

  // Método para obtener todas las noticias
  obtenerNoticias(): Noticia[] {
    return this.noticias;
  }

  // Módulo de agregación: Autogenera ID y recibe demás campos
  agregarNoticia(titulo: string, contenido: string, imagenUrl: string, autor: string): void {
    this.ultimoId++;
    const nuevaNoticia = new Noticia(this.ultimoId, titulo, contenido, imagenUrl, autor);
    this.noticias.push(nuevaNoticia);
  }

  // Módulo de utilidades (Edición): Recibe ID y campos actualizados
  editarNoticia(id: number, titulo: string, contenido: string, imagenUrl: string, autor: string): boolean {
    const indice = this.noticias.findIndex(n => n.id === id);
    if (indice !== -1) {
      this.noticias[indice] = new Noticia(id, titulo, contenido, imagenUrl, autor);
      return true;
    }
    return false;
  }

  // Módulo de eliminación: Solo recibe el ID
  eliminarNoticia(id: number): boolean {
    const indice = this.noticias.findIndex(n => n.id === id);
    if (indice !== -1) {
      this.noticias.splice(indice, 1);
      return true;
    }
    return false;
  }
}