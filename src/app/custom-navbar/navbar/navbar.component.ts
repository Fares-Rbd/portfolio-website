import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  currentLang: string = 'EN'; // Default language

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private translate: TranslateService
  ) {
    // Initialize with current language
    this.currentLang = this.translate.currentLang || 'EN';
  }

  toggleMenu() {
    const menu = this.el.nativeElement.querySelector(
      '.menu-links'
    ) as HTMLElement;
    const icon = this.el.nativeElement.querySelector(
      '.hamburger-icon span'
    ) as HTMLElement;

    menu.classList.toggle('open');
    icon.classList.add('fade-out');

    setTimeout(() => {
      if (menu.classList.contains('open')) {
        icon.textContent = 'menu_open';
      } else {
        icon.textContent = 'menu';
      }
      icon.classList.remove('fade-out');
      icon.classList.add('fade-in');
    }, 100);

    icon.addEventListener(
      'animationend',
      () => {
        icon.classList.remove('fade-in');
      },
      { once: true }
    );
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.scrollY;
    const navbar = document.getElementById('hamburger-nav');

    if (navbar) {
      if (scrollPosition > 0) {
        this.renderer.addClass(navbar, 'shadow');
      } else {
        this.renderer.removeClass(navbar, 'shadow');
      }
    }
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
  }

  // Adding the new functionality
  toggleHamMenu() {
    const hamMenu = this.el.nativeElement.querySelector(
      '.ham-menu'
    ) as HTMLElement;
    const offScreenMenu = this.el.nativeElement.querySelector(
      '.off-screen-menu'
    ) as HTMLElement;

    if (hamMenu && offScreenMenu) {
      hamMenu.classList.toggle('active');
      offScreenMenu.classList.toggle('active');
    }
  }
}
