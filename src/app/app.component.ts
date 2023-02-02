import { Component } from '@angular/core';
import {environment} from './../environments/environment';
import {AuthService } from './services/auth.service';
import {UsersService } from './services/users.service';
import {FilesService} from './services/files.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = true;
  token = '';
  imgRta = '';

  constructor(
  private usersService: UsersService,
  private filesService: FilesService
  ){  }

  onLoaded(){
    console.log('log padre');
  }
  toggleImg(){
    this.showImg = !this.showImg;
  }
  createUser(){
    this.usersService.create({
      name: 'Alfredo123',
      email: 'alfred123@gmail.com',
      password : 'alfred123'
    }).subscribe(rta=>{
      console.log(rta);
    });
  }
//uses `` instead of ''
  downloadfile(){
    this.filesService.getFile(`my.pdf`,`https://young-sands-07814.herokuapp.com/api/files/dummy.pdf
`,`application/pdf`).subscribe()
  }
  onUpload(event : Event){
    const element = event.target as HTMLInputElement;
    const file =  element.files?.item(0);
    if(file){
      this.filesService.uploadFile(file).subscribe(rta => {
        this.imgRta = rta.location;
      });
    }
  }
}
