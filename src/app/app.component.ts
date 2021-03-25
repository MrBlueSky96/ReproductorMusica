import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReproductorMusica';

  /*@Input() songRoute: any;
  @Input() imageRoute: any;

  audio = new Audio();

  loadAudio(audio: any){
    //let audio = new Audio();
    audio.src = this.songRoute;
    audio.load();
    //audio.play();
    console.log(this.songRoute);
  }

  playAudio(audio: any){
    audio.play();
  }*/
}
