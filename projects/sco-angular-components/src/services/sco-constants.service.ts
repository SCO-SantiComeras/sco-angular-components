import { ScoPdfViewerConstants, ScoTranslateConstants } from './../constants/sco-constants';
import { ScoAccordionConstants, ScoBadgeConstants, ScoBlockListConstants, ScoButtonConstants, ScoCalendarConstants, ScoFormCrudConstants, ScoGraphicsConstants, ScoInputTypeConstants, ScoModalTypeConstants, ScoResolutionConstants, ScoTableConstants, ScoThemeConstants, ScoToastConstants } from '../constants/sco-constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoConstantsService {

  ScoToastConstants = ScoToastConstants;
  ScoBlockListConstants = ScoBlockListConstants;
  ScoResolutionConstants = ScoResolutionConstants;
  ScoAccordionConstants = ScoAccordionConstants;
  ScoModalTypeConstants = ScoModalTypeConstants;
  ScoThemeConstants = ScoThemeConstants;
  ScoInputTypeConstants = ScoInputTypeConstants;
  ScoTableConstants = ScoTableConstants;
  ScoButtonConstants = ScoButtonConstants;
  ScoBadgeConstants = ScoBadgeConstants;
  ScoFormCrudConstants = ScoFormCrudConstants;
  ScoCalendarConstants = ScoCalendarConstants;
  ScoGraphicsConstants = ScoGraphicsConstants;
  ScoTranslateConstants = ScoTranslateConstants;
  ScoPdfViewerConstants = ScoPdfViewerConstants;
  
  constructor() { }
}
