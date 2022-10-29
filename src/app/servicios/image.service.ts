import { Injectable } from '@angular/core';
import {
  getDownloadURL,
  list,
  ref,
  Storage,
  uploadBytes,
} from '@angular/fire/storage';
@Injectable({
  providedIn: 'root',
})
export class ImageService {
  url: string = '';

  constructor(private storage: Storage) {}

  public uploadImage($event: any, name: string) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, 'imagen/' + name);
    uploadBytes(imgRef, file)
      .then((response) => {
        this.getImages();
      })
      .catch((error) => console.log(error));
  }

  getImages() {
    const imagesRef = ref(this.storage, 'imagen');
    list(imagesRef).then(async (response) => {
      for (let item of response.items) {
        this.url = await getDownloadURL(item);
        console.log('la url es: ' + this.url);
      }
    });
  }

  public uploadImageBanner($event: any, name: string) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, 'imagen/banner/' + name);
    uploadBytes(imgRef, file)
      .then((response) => {
        this.getImagesBanner();
      })
      .catch((error) => console.log(error));
  }

  getImagesBanner() {
    const imagesRef = ref(this.storage, 'imagen/banner');
    list(imagesRef).then(async (response) => {
      for (let item of response.items) {
        this.url = await getDownloadURL(item);
        console.log('la url es: ' + this.url);
      }
    });
  }
}
