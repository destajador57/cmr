import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {
  @ViewChild('fileInput') fileInput;
  files: FileList;

  constructor(public apiService: ApiService, private toastr: ToastrService) { }

  ngOnInit() {
    //error, info, success, warning
  }

  upload() {
    const fileBrowser = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      const formData = new FormData();
      formData.append('file', fileBrowser.files[0]);
      this.apiService.upload(formData);
      //this.fileInput.value = null;
      this.toastr.info('Tu archivo se cargo de forma correcta!', 'Ok!', {timeOut: 3000, closeButton: true});
    } else {
      this.toastr.error('Debes seleccionar un archivo!', 'Cuidado!', {timeOut: 3000, closeButton: true});
    }
  }
}
