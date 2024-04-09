import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetStartedComponent } from './get-started/get-started.component';

import { ShowcaseScoFileUploaderComponent } from './showcase/showcase-sco-file-uploader/showcase-sco-file-uploader.component';
import { ShowcaseScoCardComponent } from './showcase/showcase-sco-card/showcase-sco-card.component';
import { ShowcaseScoTableComponent } from './showcase/showcase-sco-table/showcase-sco-table.component';
import { ShowcaseScoLoginComponent } from './showcase/showcase-sco-login/showcase-sco-login.component';
import { ShowcaseScoLoadIframeComponent } from './showcase/showcase-sco-load-iframe/showcase-sco-load-iframe.component';
import { ShowcaseScoToastComponent } from './showcase/showcase-sco-toast/showcase-sco-toast.component';
import { ShowcaseScoJoinPComponent } from './showcase/showcase-sco-join-p/showcase-sco-join-p.component';
import { ShowcaseScoSpinnerComponent } from './showcase/showcase-sco-spinner/showcase-sco-spinner.component';
import { ShowcaseScoDropdownComponent } from './showcase/showcase-sco-dropdown/showcase-sco-dropdown.component';
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
import { ShowcaseScoMenuComponent } from './showcase/showcase-sco-menu/showcase-sco-menu.component';
import { ShowcaseScoAppComponent } from './showcase/showcase-sco-app/showcase-sco-app.component';
import { ShowcaseScoMenuMobileComponent } from './showcase/showcase-sco-menu-mobile/showcase-sco-menu-mobile.component';

const routes: Routes = [
  {path: 'sco-join-pipe', component: ShowcaseScoJoinPComponent},
  {path: 'sco-spinner', component: ShowcaseScoSpinnerComponent},
  {path: 'sco-toast', component: ShowcaseScoToastComponent},
  {path: 'sco-clickoutside', component: ShowcaseScoClickOutsideComponent},
  {path: 'sco-dropdown', component: ShowcaseScoDropdownComponent},
  {path: 'sco-load-iframe', component: ShowcaseScoLoadIframeComponent},
  {path: 'sco-config', component: ShowcaseScoConfigComponent}, 
  {path: 'sco-detail', component: ShowcaseScoDetailComponent},
  {path: 'sco-block-list', component: ShowcaseScoBlockListComponent},
  {path: 'sco-tabs', component: ShowcaseScoTabsComponent},
  {path: 'sco-resolution', component: ShowcaseScoResolutionComponent},
  {path: 'sco-accordion', component: ShowcaseScoAccordionComponent},
  {path: 'sco-translate', component: ShowcaseScoTranslateComponent},
  {path: 'sco-toggle', component: ShowcaseScoToggleComponent},
  {path: 'sco-modal', component: ShowcaseScoModalComponent},
  {path: 'sco-input', component: ShowcaseScoInputComponent},
  {path: 'sco-login', component: ShowcaseScoLoginComponent},
  {path: 'sco-table', component: ShowcaseScoTableComponent},
  {path: 'sco-card', component: ShowcaseScoCardComponent},
  {path: 'sco-file-uploader', component: ShowcaseScoFileUploaderComponent},
  {path: 'sco-button', component: ShowcaseScoButtonComponent},
  {path: 'sco-badge-pill', component: ShowcaseScoBadgePillComponent},
  {path: 'sco-text-area', component: ShowcaseScoTextAreaComponent},
  {path: 'sco-split-buttons', component: ShowcaseScoSplitButtonComponent},
  {path: 'sco-round-buttons', component: ShowcaseScoRoundButtonComponent},
  {path: 'sco-progress-bar', component: ShowcaseScoProgressBarComponent},
  {path: 'sco-multiple-buttons', component: ShowcaseScoMultipleButtonComponent},
  {path: 'sco-manage-list', component: ShowcaseScoManageListComponent},
  {path: 'sco-checkbox', component: ShowcaseScoCheckboxComponent},
  {path: 'sco-calendar', component: ShowcaseScoCalendarComponent},
  {path: 'sco-indicator', component: ShowcaseScoIndicatorComponent},
  {path: 'sco-graphics', component: ShowcaseScoGraphicsComponent},
  {path: 'sco-menu', component: ShowcaseScoMenuComponent},
  {path: 'sco-app', component: ShowcaseScoAppComponent},
  {path: 'sco-menu-mobile', component: ShowcaseScoMenuMobileComponent},
  
  //
  {path: '**', pathMatch: 'full', redirectTo: 'get-started'},
  {path: 'get-started', component: GetStartedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
