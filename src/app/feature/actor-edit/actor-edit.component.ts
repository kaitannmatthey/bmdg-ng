import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ActorService } from 'src/app/service/actor.service';
import { Actor } from 'src/app/model/actor.class';

@Component({
  selector: 'app-actor-edit',
  templateUrl: './actor-edit.component.html',
  styleUrls: ['./actor-edit.component.css']
})
export class ActorEditComponent implements OnInit {
  title: string = "Actor-Edit";
  actor: Actor = new Actor();
  id: number = 0;

  constructor( private actorService: ActorService,
    private router: Router,
    private route: ActivatedRoute,
    private loc: Location) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id'] )
    this.actorService.get(this.id).subscribe( jr => {
      this.actor = jr.data as Actor;
    });
  }

  save(): void {
    this.actorService.save(this.actor).subscribe(jr => {
      console.log("edited actor...");
      console.log(this.actor);
      this.router.navigateByUrl("/actors/list");
    });
  }

  backClicked() {
    this.loc.back();
  }
}
