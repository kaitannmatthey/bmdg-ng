import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent extends BaseComponent implements OnInit {
  title: string = "Actor-List";
  actors: Actor[] = [];

  constructor(private actorService: ActorService) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    
    // You can take out any of these console.log statements
    // They are for debugging
    console.log("calling all actors!") // confirms ngOnInit() has made it this far
    /* 
      we are subscribing to the actorService list 
      and saying whatever is returned from that service 
      call is going into jr, then execute these statements
    */
    this.actorService.list().subscribe(jr => {
      // jr returns Observable type, which we know will be a JsonResponse
      // tied to AJAX calls and service calls
      console.log("jr: ", jr); 
      // I'm expecting inside whatever is returned from Json, that there will be
      // something called "data" that I can cast as an Actor and put into an array
      this.actors = jr.data as Actor[];
      console.log("actors: ", this.actors);
    }); 
  }

}
