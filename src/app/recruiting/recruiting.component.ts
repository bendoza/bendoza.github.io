import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-recruiting',
  standalone: true,
  imports: [],
  templateUrl: './recruiting.component.html',
  styleUrl: './recruiting.component.css'
})
export class RecruitingComponent implements AfterViewInit, OnDestroy {
  private lastScroll = 0;
  private scrollHandler = () => this.handleScroll();

  ngAfterViewInit(): void {
    window.addEventListener('scroll', this.scrollHandler);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  handleScroll(): void {
    const header = document.getElementById('header');
    if (!header) return;

    const currentScroll = window.pageYOffset;

    if (currentScroll > this.lastScroll && currentScroll > 50) {
      header.classList.add('-translate-y-full');
    } else {
      header.classList.remove('-translate-y-full');
    }

    this.lastScroll = currentScroll;
  }
}
