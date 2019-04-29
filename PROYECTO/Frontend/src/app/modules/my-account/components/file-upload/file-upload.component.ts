import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from 'src/app/modules/profile/services/player.service';

class ImageSnippet {
  pending = false;
  status = 'init';

  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'esn-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  @Input() imageUrl: string;
  selectedFile: ImageSnippet;

  constructor(private playerService: PlayerService) { }

  ngOnInit() { }

  onSuccess(response: any) {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
    this.imageUrl = response.headers.get('Location');
  }

  onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }

  processFile(imageInput) {
    const file = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.playerService
        .uploadAvatar(this.selectedFile.file)
        .subscribe(response => this.onSuccess(response), () => this.onError());
    });

    reader.readAsDataURL(file);
  }
}