import { Component } from '@angular/core';
import { ResumeComponent } from '../resume/resume.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ResumeComponent, CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  darkMode = true;
  rotation = 0;

  toggleDarkMode() {
    this.rotation += 360;
    this.darkMode = !this.darkMode;
  }

}
