import { FormsModule } from '@angular/forms';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Libreria
import { ScoAngularComponentsModule } from '../../projects/sco-angular-components/src/sco-angular-components.module';
import { ScoTranslateService } from '../../projects/sco-angular-components/src/services/sco-translate/sco-translate.service';
import { ScoConfigService } from '../../projects/sco-angular-components/src/services/sco-config/sco-config.service';

// Componentes
import { ShowcaseScoJoinPComponent } from './showcase/showcase-sco-join-p/showcase-sco-join-p.component';
import { ShowcaseScoSpinnerComponent } from './showcase/showcase-sco-spinner/showcase-sco-spinner.component';
import { ShowcaseScoDropdownComponent } from './showcase/showcase-sco-dropdown/showcase-sco-dropdown.component';
import { ShowcaseScoLoadIframeComponent } from './showcase/showcase-sco-load-iframe/showcase-sco-load-iframe.component';
import { ShowcaseScoToastComponent } from './showcase/showcase-sco-toast/showcase-sco-toast.component';
import { ShowcaseScoClickOutsideComponent } from './showcase/showcase-sco-click-outside/showcase-sco-click-outside.component';
import { ShowcaseScoConfigComponent } from './showcase/showcase-sco-config/showcase-sco-config.component';
import { ShowcaseScoDetailComponent } from './showcase/showcase-sco-detail/showcase-sco-detail.component';
import { ShowcaseScoBlockListComponent } from './showcase/showcase-sco-block-list/showcase-sco-block-list.component';
import { ShowcaseScoTabsComponent } from './showcase/showcase-sco-tabs/showcase-sco-tabs.component';
import { ShowcaseScoResolutionComponent } from './showcase/showcase-sco-resolution/showcase-sco-resolution.component';
import { ShowcaseScoAccordionComponent } from './showcase/showcase-sco-accordion/showcase-sco-accordion.component';
import { ShowcaseScoTranslateComponent } from './showcase/showcase-sco-translate/showcase-sco-translate.component';
import { ShowcaseScoToggleComponent } from './showcase/showcase-sco-toggle/showcase-sco-toggle.component';
import { ShowcaseScoModalComponent } from './showcase/showcase-sco-modal/showcase-sco-modal.component';
import { ShowcaseScoInputComponent } from './showcase/showcase-sco-input/showcase-sco-input.component';
import { ShowcaseScoButtonComponent } from './showcase/showcase-sco-button/showcase-sco-button.component';
import { ShowcaseScoBadgePillComponent } from './showcase/showcase-sco-badge-pill/showcase-sco-badge-pill.component';
import { ShowcaseScoTextAreaComponent } from './showcase/showcase-sco-text-area/showcase-sco-text-area.component';
import { ShowcaseScoSplitButtonComponent } from './showcase/showcase-sco-split-button/showcase-sco-split-button.component';
import { ShowcaseScoRoundButtonComponent } from './showcase/showcase-sco-round-button/showcase-sco-round-button.component';
import { ShowcaseScoProgressBarComponent } from './showcase/showcase-sco-progress-bar/showcase-sco-progress-bar.component';
import { ShowcaseScoMultipleButtonComponent } from './showcase/showcase-sco-multiple-button/showcase-sco-multiple-button.component';
import { ShowcaseScoManageListComponent } from './showcase/showcase-sco-manage-list/showcase-sco-manage-list.component';
import { ShowcaseScoCheckboxComponent } from './showcase/showcase-sco-checkbox/showcase-sco-checkbox.component';
import { ShowcaseScoCalendarComponent } from './showcase/showcase-sco-calendar/showcase-sco-calendar.component';
import { ShowcaseScoIndicatorComponent } from './showcase/showcase-sco-indicator/showcase-sco-indicator.component';
import { ShowcaseScoGraphicsComponent } from './showcase/showcase-sco-graphics/showcase-sco-graphics.component';
import { ShowcaseScoFileUploaderComponent } from './showcase/showcase-sco-file-uploader/showcase-sco-file-uploader.component';
import { ShowcaseScoCardComponent } from './showcase/showcase-sco-card/showcase-sco-card.component';
import { ShowcaseScoTableComponent } from './showcase/showcase-sco-table/showcase-sco-table.component';
import { ShowcaseScoLoginComponent } from './showcase/showcase-sco-login/showcase-sco-login.component';

//
import { MenuComponent } from './menu/menu.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { BaseShowcaseComponent } from './showcase/base-showcase/base-showcase.component';

export function configFactory(provider: ScoConfigService) {
  return () => provider.getDataFromJson('assets/config/data.json');
}

export function translateFactory(provider: ScoTranslateService) {
  return () => provider.getData('assets/i18n/');
}

@NgModule({
  declarations: [		
    AppComponent,
    ShowcaseScoJoinPComponent,
    ShowcaseScoSpinnerComponent,
    ShowcaseScoToastComponent,
    ShowcaseScoDropdownComponent,
    ShowcaseScoLoadIframeComponent,
    ShowcaseScoClickOutsideComponent,
    ShowcaseScoConfigComponent,
    ShowcaseScoDetailComponent,
    ShowcaseScoBlockListComponent,
    ShowcaseScoTabsComponent,
    ShowcaseScoResolutionComponent,
    ShowcaseScoAccordionComponent,
    ShowcaseScoTranslateComponent,
    ShowcaseScoToggleComponent,
    ShowcaseScoModalComponent,
    ShowcaseScoInputComponent,
    ShowcaseScoLoginComponent,
    ShowcaseScoTableComponent,
    ShowcaseScoCardComponent,
    ShowcaseScoFileUploaderComponent,
    ShowcaseScoButtonComponent,
    ShowcaseScoBadgePillComponent,
    ShowcaseScoTextAreaComponent,
    ShowcaseScoSplitButtonComponent,
    ShowcaseScoRoundButtonComponent,
    ShowcaseScoProgressBarComponent,
    ShowcaseScoMultipleButtonComponent,
    ShowcaseScoManageListComponent,
    ShowcaseScoCheckboxComponent,
    ShowcaseScoCalendarComponent,
    ShowcaseScoIndicatorComponent,
    ShowcaseScoGraphicsComponent,
    MenuComponent,
    GetStartedComponent,
    BaseShowcaseComponent,
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ScoAngularComponentsModule,
    FormsModule,
    CodeHighlighterModule
  ],
  providers: [
    ScoConfigService, 
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [
        ScoConfigService
      ],
      multi: true
    },
    ScoTranslateService, 
    {
      provide: APP_INITIALIZER,
      useFactory: translateFactory,
      deps: [
        ScoTranslateService
      ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
