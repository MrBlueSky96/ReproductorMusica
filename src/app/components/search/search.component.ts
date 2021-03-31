import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../servicio/search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from "@angular/forms";
import { distinctUntilChanged, debounceTime, tap } from "rxjs/operators";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  searchText: any;
  playlists: any = [];

  searchControl = new FormControl("");

  constructor(private searchService: SearchService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    //const params = this.activatedRoute.snapshot.params;


    //Actualizando URL

    /*this.activatedRoute.params.subscribe(routeParams => {

    //if (params.searchText) {
      this.searchService.searchSongsAndPlaylists(routeParams.searchText)
      .subscribe(
        res => {
          this.onSubmit(this.searchText);
          this.playlists = res;
          console.log(res);
          
        },
        err => console.error(err)
      )
    //}
    
    }); */



    //Sin actualizar URL
    this.searchControl.valueChanges
      .pipe(
        //tap(() => (this.message = "User is typing...")),
        distinctUntilChanged(),
        debounceTime(500)
      )
      .subscribe((res: string) => {

        if (res.length > 0) {
          this.searchService.searchSongsAndPlaylists(res)
            .subscribe(
              res => {
                this.playlists = res;
                console.log(res);
              },
              err => console.error(err)
            )
        }

        //this.message = "User finished typing!";

      });


  }


  onSubmit(searchText: any) {
    this.searchText = searchText;
  }

  //Refrescar pantalla
  /*refresh() {
    window.location.reload();
  }*/

}
