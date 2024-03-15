import { ScoResolutionService } from './../../../projects/sco-components-lib/src/services/sco-resolution/sco-resolution.service';
import { Component, ViewChild, ViewEncapsulation, ElementRef, HostListener } from '@angular/core';
import { ScoThemeService } from '../../../projects/sco-components-lib/src/services/sco-theme.service';
import { ScoSelectItem } from '../../../projects/sco-components-lib/src/common/sco-select-item';
import { ScoConstantsService } from '../../../projects/sco-components-lib/src/services/sco-constants.service';
import { ScoModalService } from '../../../projects/sco-components-lib/src/components/sco-modal/sco-modal.service';
import { ScoConfigService } from '../../../projects/sco-components-lib/src/services/sco-config/sco-config.service';
import { ScoDetailComponent } from '../../../projects/sco-components-lib/src/components/sco-detail/sco-detail.component';
import { ScoCacheService } from '../../../projects/sco-components-lib/src/services/sco-cache.service';
import { Router } from '@angular/router';
import { cloneDeep } from 'lodash-es';

@Component({
  selector: 'sco-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent<T> {

  public showMenuItems: boolean;
  public menuItemsOri: any[];
  public menuItemsFiltered: any[];
  public themes: ScoSelectItem<T>[];

  @ViewChild(ScoDetailComponent, {static: false}) detail: ScoDetailComponent;
  @ViewChild("main") main: ElementRef;

  public modalWith: number;
  public modalHeight: number;

  constructor(
    public cacheService: ScoCacheService,
    public configService: ScoConfigService,
    public constantsService: ScoConstantsService,
    private router: Router,
    private modalservice: ScoModalService,
    private themeService: ScoThemeService,
    public readonly resolutionService: ScoResolutionService,
  ) { 
    this.showMenuItems = false;
    this.menuItemsOri = this.configService.getData("menuItems");
    this.menuItemsFiltered = cloneDeep(this.menuItemsOri);
    this.themes = [
      new ScoSelectItem("Default", this.constantsService.ScoThemeConstants.THEME_DEFAULT),
      new ScoSelectItem("Dark", this.constantsService.ScoThemeConstants.THEME_DARK),
      new ScoSelectItem("Blue", this.constantsService.ScoThemeConstants.THEME_BLUE),
    ];

    this.modalWith = this.resolutionService.size != this.constantsService.ScoResolutionConstants.MOBILE
      ? 600
      : 300;
      
    this.modalHeight = this.resolutionService.size != this.constantsService.ScoResolutionConstants.MOBILE
      ? 300
      : 300;
  }

  clickLogo() {
    this.closeDetail();
    this.router.navigateByUrl('get-started');
  }

  goToRoute(route: string) {
    this.router.navigateByUrl(route);
    this.closeDetail();
  }

  openCloseMenu() {
    if (this.showMenuItems) {
      this.closeDetail();
    } else {
      this.main.nativeElement.scrollTo({ top: 0 })
      this.main.nativeElement.style.overflowY = "hidden";
      this.showMenuItems = !this.showMenuItems;
    }
  }

  openTheme() {
    this.modalservice.open("modal-theme");
  }

  changeTheme($event: ScoSelectItem<any>) {
    this.themeService.changeTheme($event.value);
  }

  closeModal($event) {

  }

  acceptModal($event) {
    
  }

  closeDetail() {
    if(this.detail) {
      this.detail.closeDetail(null);
    }
    setTimeout(() => {
      //this.main.nativeElement.scrollTo({top: 0});
      this.main.nativeElement.style.overflowY = "auto";
      this.menuItemsFiltered = this.menuItemsOri;
      this.showMenuItems = false;
    }, 600);
  }

  filterMenuItems($event) {

    if (!$event.target.value) {
      this.menuItemsFiltered = this.menuItemsOri;
    } else {
      this.menuItemsFiltered = cloneDeep(this.menuItemsOri).filter(mi => {
        mi.children = mi.children.filter(m => m.text.toLowerCase().includes($event.target.value.toLowerCase()));
        return mi.children.length > 0;
      });
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.modalWith = this.resolutionService.size != this.constantsService.ScoResolutionConstants.MOBILE
      ? 600
      : 300;
    
    this.modalHeight = this.resolutionService.size != this.constantsService.ScoResolutionConstants.MOBILE
      ? 300
      : 300;
  }
}
