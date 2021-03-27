import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { SongsService } from 'src/app/servicio/songs.service';
import * as moment from 'moment';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private songsService: SongsService) { }


  currentDataSong: any = [];
  paused: any;

  audio = new Audio();

  audioEvents = [
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timeupdate",
    "canplay",
    "loadedmetadata",
    "loadstart"
  ];

  ngOnInit(): void {
    this.songsService.currentSong.subscribe(route => {
      this.currentDataSong = route;
      this.loadAudio(this.audio);
      this.paused = true;
    })
  }


  loadAudio(audio: any) {
    this.audio.volume = 0.5;
    this.streamObserver(audio).subscribe(event => { });
  }

  playAudio(audio: any) {
    this.paused = false;
    audio.play();
  }

  pauseAudio(audio: any) {
    this.paused = true;
    audio.pause();
  }

  currentTime = '00:00';
  duration = '00:00';
  seek = 0;

  durationSeconds = 0;

  streamObserver(audio: any) {
    return new Observable(observer => {


      this.audio.src = this.currentDataSong.route_song;
      this.audio.load();
      //Autoplay
      //this.audio.play();

      //Update current Time & duration
      const handler = (event: Event) => {
        this.seek = this.audio.currentTime;
        this.currentTime = this.timeFormat(this.audio.currentTime);
        this.duration = this.timeFormat(this.audio.duration);
        this.durationSeconds = this.audio.duration;
        

        if(this.currentTime === this.duration) {
          this.paused = true;
          this.currentTime = '00:00';
        }
      }

      this.addEvent(this.audio, this.audioEvents, handler);

    });
  }

  addEvent(obj: HTMLAudioElement, events: any[], handler: (event: Event) => void) {
    events.forEach(event => {
      obj.addEventListener(event, handler);
    });
  }

  setVolume(event: any) {
    this.audio.volume = event.target.value;
  }

  timeFormat(time: number, format="mm:ss") {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }

  seekTo(event: any) {
    this.audio.currentTime = event.target.value;
  }


}
