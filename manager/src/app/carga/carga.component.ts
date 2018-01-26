import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {
  @ViewChild('fileInput') fileInput;
  files: FileList;

  constructor(public apiService: ApiService) { }

  ngOnInit() {
  }

  upload() {
    const fileBrowser = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      const formData = new FormData();
      formData.append('file', fileBrowser.files[0]);
      this.apiService.upload(formData);
    }
  }

  getFiles(event) {
    this.files = event.target.files;
  }

  logForm(event) {
      console.log(this.files);
  }
}
