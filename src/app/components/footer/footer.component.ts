import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterViewChecked } from '@angular/core';
import { SongsService } from 'src/app/servicio/songs.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() songRoute: any;
  @Input() imageRoute: any;


  rutaSong: any;

  constructor(private songsService: SongsService) { }

  ngOnInit(): void {
    this.songsService.currentSong.subscribe(song => {
      this.rutaSong = song;
    })
  }

  

  audio = new Audio();

  loadAudio(audio: any){
    /*let audio = new Audio();*/
    //audio = new Audio();
    audio.src = /*this.songRoute;*/this.rutaSong;
    audio.load();
    audio.play();
    console.log(this.songRoute);
  }

  playAudio(audio: any){
    //audio.pause();
    audio.play();
  }



  

}
