import { ScoFileUploaderModule } from './components/sco-file-uploader/sco-file-uploader.module';
import { ScoTableModule } from './components/sco-table/sco-table.module';
import { ScoJoinPipeModule } from './pipes/sco-join-pipe/sco-join-pipe.module';
import { NgModule } from '@angular/core';
import { ScoSpinnerModule } from './components/sco-spinner/sco-spinner.module';
import { ScoToastModule } from './components/sco-toast/sco-toast.module';
import { ScoConstantsService } from './services/sco-constants.service';
import { ScoClickOutsideModule } from './directives/sco-click-outside/sco-click-outside.module';
import { ScoDropdownModule } from './components/sco-dropdown/sco-dropdown.module';
import { ScoLoadIframeModule } from './directives/sco-load-iframe/sco-load-iframe.module';
import { ScoConfigModule } from './services/sco-config/sco-config.module';
import { ScoDetailModule } from './components/sco-detail/sco-detail.module';
import { ScoBlockListModule } from './components/sco-block-list/sco-block-list.module';
import { ScoTabsModule } from './components/sco-tabs/sco-tabs.module';
import { ScoResolutionModule } from './services/sco-resolution/sco-resolution.module';
import { ScoAccordionModule } from './components/sco-accordion/sco-accordion.module';
import { ScoTranslateModule } from './services/sco-translate/sco-translate.module';
import { ScoNgModelBaseModule } from './components/sco-ng-model-base/sco-ng-model-base.module';
import { ScoToggleModule } from './components/sco-toggle/sco-toggle.module';
import { ScoModalModule } from './components/sco-modal/sco-modal.module';
import { ScoThemeService } from './services/sco-theme.service';
import { ScoCacheService } from './services/sco-cache.service';
import { ScoInputModule } from './components/sco-input/sco-input.module';
import { ScoLoginModule } from './components/sco-login/sco-login.module';
import { ScoCardModule } from './components/sco-card/sco-card.module';
import { ScoButtonModule } from './components/sco-button/sco-button.module';
import { ScoBadgePillModule } from './components/sco-badge-pill/sco-badge-pill.module';
import { ScoTextareaModule } from './components/sco-textarea/sco-textarea.module';
import { ScoSplitButtonModule } from './components/sco-split-button/sco-split-button.module';
import { ScoSignatureModule } from './components/sco-signature/sco-signature.module';
import { ScoRoundButtonModule } from './components/sco-round-button/sco-round-button.module';
import { ScoProgressBarModule } from './components/sco-progress-bar/sco-progress-bar.module';
import { ScoMultipleButtonModule } from './components/sco-multiple-button/sco-multiple-button.module';
import { ScoManageListModule } from './components/sco-manage-list/sco-manage-list.module';
import { ScoCheckboxModule } from './components/sco-checkbox/sco-checkbox.module';
import { ScoCalendarModule } from './components/sco-calendar/sco-calendar.module';
import { ScoIndicatorModule } from './components/sco-indicator/sco-indicator.module';
import { ScoGraphicsModule } from './components/sco-graphics/sco-graphics.module';
import { ScoMenuModule } from './components/sco-menu/sco-menu.module';
import { ScoAppModule } from './components/sco-app/sco-app.module';
import { ScoMenuMobileModule } from './components/sco-menu-mobile/sco-menu-mobile.module';
import { ScoFormErrorsModule } from './services/sco-form-errors/sco-form-errors.module';
import { ScoFormCrudModule } from './components/sco-form-crud/sco-form-crud.module';

@NgModule({
  declarations: [],
  imports: [
    ScoJoinPipeModule,
    ScoSpinnerModule,
    ScoToastModule,
    ScoClickOutsideModule,
    ScoDropdownModule,
    ScoLoadIframeModule,
    ScoConfigModule,
    ScoDetailModule,
    ScoBlockListModule,
    ScoTabsModule,
    ScoResolutionModule,
    ScoAccordionModule,
    ScoTranslateModule,
    ScoNgModelBaseModule,
    ScoToggleModule,
    ScoModalModule,
    ScoInputModule,
    ScoLoginModule,
    ScoTableModule,
    ScoCardModule,
    ScoFileUploaderModule,
    ScoButtonModule,
    ScoBadgePillModule,
    ScoTextareaModule,
    ScoSplitButtonModule,
    ScoSignatureModule,
    ScoRoundButtonModule,
    ScoProgressBarModule,
    ScoMultipleButtonModule,
    ScoManageListModule,
    ScoCheckboxModule,
    ScoCalendarModule,
    ScoIndicatorModule,
    ScoGraphicsModule,
    ScoMenuModule,
    ScoAppModule,
    ScoMenuMobileModule,
    ScoFormErrorsModule,
    ScoFormCrudModule,
  ],
  exports: [
    ScoJoinPipeModule,
    ScoSpinnerModule,
    ScoToastModule,
    ScoClickOutsideModule,
    ScoDropdownModule,
    ScoLoadIframeModule,
    ScoConfigModule,
    ScoDetailModule,
    ScoBlockListModule,
    ScoTabsModule,
    ScoResolutionModule,
    ScoAccordionModule,
    ScoTranslateModule,
    ScoNgModelBaseModule,
    ScoToggleModule,
    ScoModalModule,
    ScoInputModule,
    ScoLoginModule,
    ScoTableModule,
    ScoCardModule,
    ScoFileUploaderModule,
    ScoButtonModule,
    ScoBadgePillModule,
    ScoTextareaModule,
    ScoSplitButtonModule,
    ScoSignatureModule,
    ScoRoundButtonModule,
    ScoProgressBarModule,
    ScoMultipleButtonModule,
    ScoManageListModule,
    ScoCheckboxModule,
    ScoCalendarModule,
    ScoIndicatorModule,
    ScoGraphicsModule,
    ScoMenuModule,
    ScoAppModule,
    ScoMenuMobileModule,
    ScoFormErrorsModule,
    ScoFormCrudModule,
  ], 
  providers: [
    ScoConstantsService,
    ScoThemeService,
    ScoCacheService
  ]
})

export class ScoAngularComponentsModule { }
