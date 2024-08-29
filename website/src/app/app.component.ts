import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { en_US, fr_FR, NzI18nService } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'website';

  constructor(
    private translate: TranslateService,
    private nzI18nService: NzI18nService
  ) {
    const browserLang = navigator.language;
    if (browserLang && browserLang.toUpperCase().includes('FR')) {
      translate.setDefaultLang('FR');
      this.nzI18nService.setLocale(fr_FR);
    } else {
      translate.setDefaultLang('EN');
      this.nzI18nService.setLocale(en_US);
    }
  }
}
