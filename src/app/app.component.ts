import { ScoResolutionService } from 'projects/sco-components-lib/src/public-api';
import { ScoConstantsService } from '../../projects/sco-components-lib/src/services/sco-constants.service';
import { ScoThemeService } from '../../projects/sco-components-lib/src/services/sco-theme.service';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'sco-components';

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
