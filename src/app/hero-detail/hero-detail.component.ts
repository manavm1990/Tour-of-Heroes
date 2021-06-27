import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  // Decorate this component with the necessary Hero (or not)
  @Input() hero?: Hero;

  getHero() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe((hero) => {
      this.hero = hero;
    });
  }

  constructor(
    // Has info about the route (e.g. 'id' parameter)
    private route: ActivatedRoute,

    // Get info about hero 🦸🏾‍♂️
    private heroService: HeroService,

    // Used to navigate back to view that came here
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
}
