import { ScoResolutionService } from 'projects/sco-angular-components/src/public-api';
import { ScoConstantsService } from '../../projects/sco-angular-components/src/services/sco-constants.service';
import { ScoThemeService } from '../../projects/sco-angular-components/src/services/sco-theme.service';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'sco-angular-components';

  constructor(
    public themeService: ScoThemeService,
    public constantsService: ScoConstantsService,
    private readonly resolutionService: ScoResolutionService,
  ) {
    this.themeService.changeTheme(this.constantsService.ScoThemeConstants.THEME_DEFAULT);
    this.resolutionService.setSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resolutionService.setSize(event.target.innerWidth);
  }
}
