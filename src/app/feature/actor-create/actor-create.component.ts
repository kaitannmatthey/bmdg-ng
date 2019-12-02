import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actor-create',
  templateUrl: './actor-create.component.html',
  styleUrls: ['./actor-create.component.css']
})
export class ActorCreateComponent implements OnInit {
  title: "Actor-Create";
  actor: Actor = new Actor();

  constructor(private actorService: ActorService, private router: Router) { }

  ngOnInit() {
  }

  save(): void {
    this.actorService.save(this.actor).subscribe(jr => {
      console.log("saved actor...");
      console.log(this.actor);
      this.router.navigateByUrl("/actors/list");
    });
  }
}
