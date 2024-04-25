# SCO - Angular Components

Angular Components es una librería de Angular publicada en NPM que ofrece una colección de componentes, servicios, pipes y más, diseñados para facilitar el desarrollo de aplicaciones web con Angular.

# Instalación
1- Para instalar la biblioteca se debe ejecutar el siguiente comando:
<pre>
npm i sco-angular-components
</pre>

2- Añadiremos lo siguiente en la sección assets del archivo 'Angular.json':
<pre>
{"glob": "**/*", "input": "node_modules/sco-angular-components/resources/img", "output": "resources/img/"}
</pre>

3- Añadiremos lo siguiente en la sección styles del archivo 'Angular.json':
<pre>
"node_modules/bootstrap/dist/css/bootstrap.min.css",
"node_modules/font-awesome/css/font-awesome.min.css",
"node_modules/sco-angular-components/resources/scss/sco-styles.scss",
"node_modules/sco-angular-components/resources/scss/font.scss",
"node_modules/sco-angular-components/resources/themes/theme-default.scss",
"node_modules/sco-angular-components/resources/themes/theme-dark.scss",
"node_modules/sco-angular-components/resources/themes/theme-blue.scss",
"node_modules/primeng/resources/themes/lara-light-blue/theme.css",
"node_modules/primeng/resources/primeng.min.css"
</pre>

4- Añadiremos lo siguiente en el archivo 'App.module':
<pre>
import { ScoAngularComponentsModule } from 'sco-angular-components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  
@NgModule({
  imports: {
    BrowserAnimationsModule,
    ScoAngularComponentsModule
  },
  bootstrap: { AppComponent }
})
  
export class AppModule { }
</pre>

# Características principales

- Resources
    - Themes
        - Theme default (theme-default)
        - Theme dark (theme-dark)
        - Theme blue (theme-blue)
    - Fonts (IBMPlexSans)
        - Bold (sco bold)
        - Bold Italic (sco bold italic)
        - Extra light (sco extra light)
        - Extra light Italic (sco extra light italic)
        - Italic (sco italic)
        - Light (sco light)
        - Light Italic (sco light italic)
        - Medium (sco medium)
        - Medium Italic (sco medium italic)
        - Regular (sco regular)
        - Semi Bold (sco semi bold)
        - Thin (sco thin)
        - Thin Italic (sco thin italic)
    - Styles
        - sco-overlay
        - sco-overlay-embedded
    - Img
        - SCO Logo (sco-logo.png)
        - Spinner (spinner.gif)
- Common
    - ScoAction<T> (Class)
    - ScoCallback<T> (Class)
    - ScoSelectItem<T> (Class)
    - ScoSelectedItem<T> (Class)
- Components
    - ScoAccordionModule
        - ScoAccordionComponent
    - ScoAppModule
        - ScoAppComponent
        - ScoDisplayResize (Class)
    - ScoBadgePillModule
        - ScoBadgePillComponent
    - ScoBlockListModule
        - ScoBlockItem<T> (Class)
        - ScoBlockListComponent
        - ScoBLockListItemComponent
        - ScoBlockListDataItemComponent
    - ScoButtonModule
        - ScoButtonComponent
    - ScoCalendarModule
        - ScoCalendarComponent
    - ScoCardModule
        - ScoCardComponent
    - ScoCheckboxModule
        - ScoCheckboxComponent
    - ScoDetailModule
        - ScoDetailComponent
    - ScoDropdownModule
        - ScoDropdownComponent
    - ScoFileUploaderModule
        - ScoFileUploaderComponent
    - ScoFormCrudModule
        - ScoFormCrudComponent
    - ScoGraphicsModule
        - ScoGraphisComponent
    - ScoIndicatorModule
        - ScoIndicatorComponent
    - ScoInputModule
        - ScoInputComponent
    - ScoLoginModule
        - ScoLoginComponent
    - ScoManageListModule
        - ScoManageListComponent
    - ScoMenuModule
        - ScoMenuComponent
        - MenuItem (Class)
    - ScoMenuMobileModule
        - ScoMenuMobileComponent
    - ScoModalModule
        - ScoModalComponent
        - ScoModalService
    - ScoMultipleButtonModule
        - ScoMultipleButtonComponent
        - ScoButton (Class)
    - ScoNgModelBaseModule
        - ScoNgModelBase
    - ScoPdfViewerModule
        - ScoPdfViewerComponent
        - ScoPdfViewer
    - ScoProgressBarModule
        - ScoProgressBarComponent
    - ScoRoundButtonModule
        - ScoRoundButtonComponent
    - ScoSignatureModule (WIP)
        - ScoSignatureComponent
    - ScoSpinnerMoudle
        - ScoSpinnerComponent
        - ScoSpinnerService
    - ScoSplitButtonModule
        - ScoSPlitButtonComponent
    - ScoTableModule
        - ScoTableComponent
        - ScoTableCol
        - ScoTableItem
    - ScoTabsModule
        - ScoTabsComponent
        - ScoTabItemComponent
    - ScoTextAreaModule
        - ScoTextAreaComponent
    - ScoToastModule
        - ScoToastComponent
        - ScoToastService
        - ScoToast
    - ScoToggleModule
        - ScoToggleComponent
- Constants
    - ScoToastConstants
    - ScoBlockListConstants
    - ScoResolutionConstants
    - ScoAccordionConstants
    - ScoModalTypeConstants
    - ScoThemeConstants
    - ScoInputTypeConstants
    - ScoTableConstants
    - ScoButtonConstants
    - ScoBadgeConstants
    - ScoFormCrudConstants
    - ScoCalendarConstants
    - ScoGraphicsConstants
    - ScoTranslateConstants
    - ScoPdfViewerConstants
- Directives
    - ScoClickOutsideModule
        - ScoClickOutsideDirective
    - ScoLoadIframeModule
        - ScoLoadIframeDirective
- Pipes
    - ScoJoinPipeModule
        - ScoJoinPipe
- Services
    - ScoConfigModule
        - ScoConfigService
        - ScoConfigPipe
    - ScoFormErrorsModule
        - ScoFormErrorsService
        - ScoFormErrorsPipe
        - ScoFormError
    - ScoResolutionModule
        - ScoResolutionService
        - ScoResolutionDirective
    - ScoTranslateModule
        - ScoTranslateService
        - ScoTranslatePipe
    - ScoCacheService
    - ScoConstantsService
    - ScoThemeService

# Ejemplo y documentación
- https://scoapps.es/sco-components/#/get-started

# Changelog
13.1.1:
    - Initial versión

13.1.2:
    - Update Documentation link readme

13.1.3:
    - Add icon button mode
    - Add icon transparent input
    - Update button showcase

13.1.4:
    - Add SCO menu component
    - Add SCO app base component

13.1.5:
    - Add translate pipe param to SCO menu component

13.1.6:
    - Add translate pipe param to SCO app component

13.1.7:
    - Add SCO menu mobile component
    - Update SCO app component to integrate SCO menu mobile

13.1.8:
    - Refactor translate service and add translate constants

13.1.9:
    - Add SCO Form errors service & showcase
    - Update SCO Login to integrate SCO Form errors service
    - Add SCO Modal closeWhenConfirm input param

13.1.10:
    - Update SCO Form erros showcase HTML & TS
    - ADD SCO Toast max limit & constant (5)
    - Fix SCO Login link buttons padding
    - ADD SCO Login vertical buttons input param

13.1.11:
    - ADD Sco login title input param

13.1.12:
    - ADD Sco app logo click output event

13.1.13:
    - ADD Sco app display resize output event
    - ADD Sco Display Resize Class

13.1.14:
    - ADD SCO Spinner service delay number param (Default is undefined) to hideSpinner function

13.1.15:
    - Fix SCO menu mobile submenu items do not open

13.1.16/19:
    - Refactor SCO Dropdown on options changes (Alpha)

13.1.20:
    - Refactor SCO Dropdown on options changes
    - Add setSelectedItem input param & unsetSelectedItem output event

13.1.21/22:
    - Sco app fix icon button always #FFF (Alpha)

13.1.23:
    - Sco app fix icon button always #FFF

13.1.24:
    - Sco Table add addButton margin right when tablet or mobile
    - Rename onnAddCrud output event to goToCreate output event

13.1.25:
    - SCO Form errors add errors without form
    - FIX Sco table select item event
    - ADD Sco block list input params of templates
    - ADD SCO Form crud module & showcase
    - ADD SCO Callback generic class
    - ADD SCO Form crud onFormConfirm callback
    - ADD SCO Form crud formAlwaysVisible input param & showcase

13.1.26:
    - Fix SCO Form crud import errors

13.1.27:
    - Fix SCO checkbox min-width
    - ADD SCO checkbox addOneItem input param

13.1.28:
    - ADD SCO toggle required input param && showcase
    - UPD SCO Resolution constants tablet max & web min to 1050px

13.1.29:
    - UPD delete SCO toggle label always in uppercase

13.1.30:
    - FIX SCO Table & SCO Blocklist action panels & overflow x

13.1.31:
    - FIX SCO Table & SCO Blocklist action panels & overflow x
    - ADD SCO Table, Blocklist & Formcrud actionsMarginBottom param & showcase

13.1.32:
    - Add SCO Pdf Viewer Module & showcase

13.1.33:
    - Add SCO Pdf Viewer initialZoom input param & showcase

13.1.34:
    - Fix SCO Pdf Viewer input path errors

13.1.35:
    - ADD Sco pdf viewer positionAbsolute input param

13.1.36:
    - ADD Sco pdf viewer background color property

13.1.37:
    - FIX Sco pdf viewer back button

13.1.38:
    - FIX Sco pdf viewer back button

13.1.39:
    - FIX Sco pdf viewer z-index
    - Refactor SCO file uploader

13.1.40:
    - Add Sco file uploader multiple files & accepted files input params

13.1.41:
    - ADD SCo input keyup output event

13.1.42:
    - ADD SCo pdf viewer comeBackButtonStayInRoute input param

13.1.43:
    - Delete unused constants