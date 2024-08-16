import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from '../resume/resume.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  imports: [CommonModule, ResumeComponent],
  standalone: true,
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements AfterViewInit {

  darkMode = true;
  rotation = 0;
  private resetDuration = 300;

  blocks = Array(2000).fill(0);

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    
    const blocks = Array.from(this.elRef.nativeElement.querySelectorAll(".block")) as HTMLElement[];

    blocks.forEach((block) => {
      let timeoutId: number;

      block.addEventListener("mouseover", () => {
        clearTimeout(timeoutId);
        block.classList.add("active");

        // Remove the "active" class after some time
        timeoutId = window.setTimeout(() => {
          block.classList.remove("active");
        }, this.resetDuration);
      });

      block.addEventListener("mouseout", () => {
        timeoutId = window.setTimeout(() => {
          block.classList.remove("active");
        }, this.resetDuration);
      });
    });

  }

  toggleDarkMode() {
    this.rotation += 360;
    this.darkMode = !this.darkMode;
  }

}
