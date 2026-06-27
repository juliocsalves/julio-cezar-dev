import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Features } from './features/features';
import { Projects } from './projects/projects';
import { Process } from './process/process';
import { Stack } from './stack/stack';
import { Cta } from './cta/cta';

@Component({
  selector: 'app-home',
  imports: [Hero,Features, Projects, Process, Stack, Cta],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
