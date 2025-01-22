import { Injectable } from '@angular/core';
import { IBlog } from '../shared/types/blog-type';
import { all_blogs } from '../shared/data/blog-data';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }


  // video modal
  public videoUrl: string = 'https://www.youtube.com/embed/ssrNcwxALS4';
  public isVideoOpen: Boolean = false;
  public iframeElement: HTMLIFrameElement | null = null;
  // modal video play
  playVideo(videoId: string) {
    const videoOverlay = document.querySelector('#video-overlay');
    this.videoUrl = `https://www.youtube.com/embed/${videoId}`;
    if (!this.iframeElement) {
      this.iframeElement = document.createElement('iframe');
      this.iframeElement.setAttribute('src', this.videoUrl);
      this.iframeElement.style.width = '60%';
      this.iframeElement.style.height = '80%';
    }

    this.isVideoOpen = true;
    videoOverlay?.classList.add('open');
    videoOverlay?.appendChild(this.iframeElement);
  }
  // close modal video
  closeVideo() {
    const videoOverlay = document.querySelector('#video-overlay.open');

    if (this.iframeElement) {
      this.iframeElement.remove();
      this.iframeElement = null;
    }

    this.isVideoOpen = false;
    videoOverlay?.classList.remove('open');
  }


    // Get blogs
    public get blogs(): Observable<IBlog[]> {
      return of(all_blogs);
    };
  
    // Get blog By id
    public getBlogById(id: string): Observable<IBlog | undefined> {
      return this.blogs.pipe(map((items: IBlog[]) => {
        const blog = items.find((p: IBlog) => Number(p.id) === Number(id));
        return blog;
      }));
    }
  
}
