/**
 * ComboBox.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { FormField } from './FormField';
import type { FormFieldSurface } from './_base/FormFieldMixins';
import type { PageItemParent } from './_base/Parents';
import type { AnchoredObjectSetting } from './AnchoredObjectSetting';
import type { AnimationSetting } from './AnimationSetting';
import type { Article } from './Article';
import type { BackgroundTask } from './BackgroundTask';
import type { Behaviors } from './Behaviors';
import type { ClearFormBehaviors } from './ClearFormBehaviors';
import type { ContentTransparencySetting } from './ContentTransparencySetting';
import type { EPSTexts } from './EPSTexts';
import type { EPSs } from './EPSs';
import type { FitOptions } from './Enums/FitOptions';
import type { FillTransparencySetting } from './FillTransparencySetting';
import type { FlexObjects } from './FlexObjects';
import type { GotoAnchorBehaviors } from './GotoAnchorBehaviors';
import type { GotoFirstPageBehaviors } from './GotoFirstPageBehaviors';
import type { GotoLastPageBehaviors } from './GotoLastPageBehaviors';
import type { GotoNextPageBehaviors } from './GotoNextPageBehaviors';
import type { GotoNextViewBehaviors } from './GotoNextViewBehaviors';
import type { GotoPreviousPageBehaviors } from './GotoPreviousPageBehaviors';
import type { GotoPreviousViewBehaviors } from './GotoPreviousViewBehaviors';
import type { GotoURLBehaviors } from './GotoURLBehaviors';
import type { Graphic } from './Graphic';
import type { GraphicLines } from './GraphicLines';
import type { Graphics } from './Graphics';
import type { Groups } from './Groups';
import type { Images } from './Images';
import type { Layer } from './Layer';
import type { Library } from './Library';
import type { LinkedPageItemOption } from './LinkedPageItemOption';
import type { MovieBehaviors } from './MovieBehaviors';
import type { ObjectStyle } from './ObjectStyle';
import type { OpenFileBehaviors } from './OpenFileBehaviors';
import type { Ovals } from './Ovals';
import type { PDFs } from './PDFs';
import type { PICTs } from './PICTs';
import type { Page } from './Page';
import type { PageItem } from './PageItem';
import type { PageItems } from './PageItems';
import type { Polygons } from './Polygons';
import type { Preferences } from './Preferences';
import type { PrintFormBehaviors } from './PrintFormBehaviors';
import type { Rectangles } from './Rectangles';
import type { SVGs } from './SVGs';
import type { ShowHideFieldsBehaviors } from './ShowHideFieldsBehaviors';
import type { SoundBehaviors } from './SoundBehaviors';
import type { SplineItems } from './SplineItems';
import type { State } from './State';
import type { StrokeTransparencySetting } from './StrokeTransparencySetting';
import type { SubmitFormBehaviors } from './SubmitFormBehaviors';
import type { TextFrames } from './TextFrames';
import type { TextWrapPreference } from './TextWrapPreference';
import type { TimingSetting } from './TimingSetting';
import type { TransparencySetting } from './TransparencySetting';
import type { ViewZoomBehaviors } from './ViewZoomBehaviors';
import type { WMFs } from './WMFs';
import type { XMLElement } from './XMLElement';
import type { NamableDOMObject } from './_base/DomObjects';
import type { GraphicAttributes } from './_base/GraphicAttributes';

/**
 * A PDF combo-box form field: an editable or fixed drop-down list of choices
 * in an interactive PDF form.
 */
export interface ComboBox<TParent = PageItemParent, M extends Mode = 'single'> extends FormField<TParent, ComboBox, M>, FormFieldSurface<ComboBox, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'ComboBox';

  /** Resolves the proxy into the individual {@link ComboBox} objects it stands for. */
  getElements(): ComboBox<TParent, 'single'>[];

  /** The PDF-export font family name for this field's text. */
  get appliedFont(): Read<M, string>;
  set appliedFont(value: string);

  /** The PDF-export font size for this field's text. */
  get fontSize(): Read<M, number>;
  set fontSize(value: number);

  /** The PDF-export font style name for this field's text. */
  get fontStyle(): Read<M, string>;
  set fontStyle(value: string);

  /** The list of choices offered by the combo box in the exported PDF. */
  get choiceList(): Read<M, string[]>;
  set choiceList(value: string[]);

  /** Whether the choices are sorted alphabetically in the exported PDF. */
  get sortChoices(): Read<M, boolean>;
  set sortChoices(value: boolean);

  /** Whether the field has right-to-left text enabled in the exported PDF. */
  get rightToLeftField(): Read<M, boolean>;
  set rightToLeftField(value: boolean);
}
