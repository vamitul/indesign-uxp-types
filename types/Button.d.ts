/**
 * Button.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { FormField } from './FormField';
import type { PageItem } from './PageItem';

import type { AnimationBehaviors } from './AnimationBehaviors';
import type { Behaviors } from './Behaviors';
import type { ClearFormBehaviors } from './ClearFormBehaviors';
import type { GotoAnchorBehaviors } from './GotoAnchorBehaviors';
import type { GotoFirstPageBehaviors } from './GotoFirstPageBehaviors';
import type { GotoLastPageBehaviors } from './GotoLastPageBehaviors';
import type { GotoNextPageBehaviors } from './GotoNextPageBehaviors';
import type { GotoNextStateBehaviors } from './GotoNextStateBehaviors';
import type { GotoNextViewBehaviors } from './GotoNextViewBehaviors';
import type { GotoPageBehaviors } from './GotoPageBehaviors';
import type { GotoPreviousPageBehaviors } from './GotoPreviousPageBehaviors';
import type { GotoPreviousStateBehaviors } from './GotoPreviousStateBehaviors';
import type { GotoPreviousViewBehaviors } from './GotoPreviousViewBehaviors';
import type { GotoStateBehaviors } from './GotoStateBehaviors';
import type { GotoURLBehaviors } from './GotoURLBehaviors';
import type { MovieBehaviors } from './MovieBehaviors';
import type { OpenFileBehaviors } from './OpenFileBehaviors';
import type { PrintFormBehaviors } from './PrintFormBehaviors';
import type { ShowHideFieldsBehaviors } from './ShowHideFieldsBehaviors';
import type { SoundBehaviors } from './SoundBehaviors';
import type { SubmitFormBehaviors } from './SubmitFormBehaviors';
import type { ViewZoomBehaviors } from './ViewZoomBehaviors';

import type { EndnoteTextFrames } from './EndnoteTextFrames';
import type { EPSs } from './EPSs';
import type { EPSTexts } from './EPSTexts';
import type { GraphicLines } from './GraphicLines';
import type { Groups } from './Groups';
import type { Images } from './Images';
import type { Ovals } from './Ovals';
import type { Paths } from './Paths';
import type { PDFs } from './PDFs';
import type { PICTs } from './PICTs';
import type { Polygons } from './Polygons';
import type { Rectangles } from './Rectangles';
import type { SplineItems } from './SplineItems';
import type { States } from './States';
import type { TextFrames } from './TextFrames';
import type { WMFs } from './WMFs';
import type { PageItemParent } from './_base/Parents';
import type { Path } from './Path';
import type { State } from './State';
import type { AnchoredObjectSetting } from './AnchoredObjectSetting';
import type { AnimationSetting } from './AnimationSetting';
import type { Article } from './Article';
import type { BackgroundTask } from './BackgroundTask';
import type { ContentTransparencySetting } from './ContentTransparencySetting';
import type { FitOptions } from './Enums/FitOptions';
import type { FillTransparencySetting } from './FillTransparencySetting';
import type { FlexObjects } from './FlexObjects';
import type { Graphic } from './Graphic';
import type { Graphics } from './Graphics';
import type { Layer } from './Layer';
import type { Library } from './Library';
import type { LinkedPageItemOption } from './LinkedPageItemOption';
import type { ObjectStyle } from './ObjectStyle';
import type { Page } from './Page';
import type { PageItems } from './PageItems';
import type { Preferences } from './Preferences';
import type { SVGs } from './SVGs';
import type { StrokeTransparencySetting } from './StrokeTransparencySetting';
import type { TextWrapPreference } from './TextWrapPreference';
import type { TimingSetting } from './TimingSetting';
import type { TransparencySetting } from './TransparencySetting';
import type { XMLElement } from './XMLElement';
import type { NamableDOMObject } from './_base/DomObjects';
import type { GraphicAttributes } from './_base/GraphicAttributes';

/**
 * A PDF push-button form field, the richest {@link FormField} leaf.
 *
 * Carries multiple named {@link State appearance states}, its own drawn
 * {@link Path paths}, and the full set of PDF interactive behaviors —
 * page/view/state navigation, media playback, form submission.
 */
export interface Button<TParent = PageItemParent, M extends Mode = 'single'> extends FormField<TParent, Button, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Button';

  /** Resolves the proxy into the individual {@link Button} objects it stands for. */
  getElements(): Button<TParent, 'single'>[];

  /** {@link AnimationBehaviors} attached to this button. */
  readonly animationBehaviors: AnimationBehaviors;

  /** {@link Behaviors} of every kind attached to this button. */
  readonly behaviors: Behaviors;

  /** {@link ClearFormBehaviors} attached to this button. */
  readonly clearFormBehaviors: ClearFormBehaviors;

  /** {@link GotoAnchorBehaviors} attached to this button. */
  readonly gotoAnchorBehaviors: GotoAnchorBehaviors;

  /** {@link GotoFirstPageBehaviors} attached to this button. */
  readonly gotoFirstPageBehaviors: GotoFirstPageBehaviors;

  /** {@link GotoLastPageBehaviors} attached to this button. */
  readonly gotoLastPageBehaviors: GotoLastPageBehaviors;

  /** {@link GotoNextPageBehaviors} attached to this button. */
  readonly gotoNextPageBehaviors: GotoNextPageBehaviors;

  /** {@link GotoNextStateBehaviors} attached to this button. */
  readonly gotoNextStateBehaviors: GotoNextStateBehaviors;

  /** {@link GotoNextViewBehaviors} attached to this button. */
  readonly gotoNextViewBehaviors: GotoNextViewBehaviors;

  /** {@link GotoPageBehaviors} attached to this button. */
  readonly gotoPageBehaviors: GotoPageBehaviors;

  /** {@link GotoPreviousPageBehaviors} attached to this button. */
  readonly gotoPreviousPageBehaviors: GotoPreviousPageBehaviors;

  /** {@link GotoPreviousStateBehaviors} attached to this button. */
  readonly gotoPreviousStateBehaviors: GotoPreviousStateBehaviors;

  /** {@link GotoPreviousViewBehaviors} attached to this button. */
  readonly gotoPreviousViewBehaviors: GotoPreviousViewBehaviors;

  /** {@link GotoStateBehaviors} attached to this button. */
  readonly gotoStateBehaviors: GotoStateBehaviors;

  /** {@link GotoURLBehaviors} attached to this button. */
  readonly gotoURLBehaviors: GotoURLBehaviors;

  /** {@link MovieBehaviors} attached to this button. */
  readonly movieBehaviors: MovieBehaviors;

  /** {@link OpenFileBehaviors} attached to this button. */
  readonly openFileBehaviors: OpenFileBehaviors;

  /** {@link PrintFormBehaviors} attached to this button. */
  readonly printFormBehaviors: PrintFormBehaviors;

  /** {@link ShowHideFieldsBehaviors} attached to this button. */
  readonly showHideFieldsBehaviors: ShowHideFieldsBehaviors;

  /** {@link SoundBehaviors} attached to this button. */
  readonly soundBehaviors: SoundBehaviors;

  /** {@link SubmitFormBehaviors} attached to this button. */
  readonly submitFormBehaviors: SubmitFormBehaviors;

  /** {@link ViewZoomBehaviors} attached to this button. */
  readonly viewZoomBehaviors: ViewZoomBehaviors;

  /** {@link States} (appearance states) of this button, e.g. Up/Rollover/Down artwork. */
  readonly states: States;

  /** {@link Ovals} (ellipses) directly on this button. */
  readonly ovals: Ovals<Button>;

  /** {@link SplineItems} directly on this button. */
  readonly splineItems: SplineItems<Button>;

  /** {@link Rectangles} directly on this button. */
  readonly rectangles: Rectangles<Button>;

  /** {@link GraphicLines} directly on this button. */
  readonly graphicLines: GraphicLines<Button>;

  /** {@link TextFrames} directly on this button. */
  readonly textFrames: TextFrames<Button>;

  /** {@link Polygons} directly on this button. */
  readonly polygons: Polygons<Button>;

  /** {@link EndnoteTextFrames} directly on this button. */
  readonly endnoteTextFrames: EndnoteTextFrames<Button>;

  /** {@link Groups} directly on this button. */
  readonly groups: Groups<Button>;

  /** {@link EPSTexts} directly on this button. */
  readonly epstexts: EPSTexts<Button>;

  /** {@link Paths} drawn directly on this button. */
  readonly paths: Paths;

  /** Bitmap {@link Images} (TIFF, JPEG, PNG, GIF…) directly on this button. */
  readonly images: Images<Button>;

  /** {@link EPSs} directly on this button. */
  readonly epss: EPSs<Button>;

  /** {@link WMFs} directly on this button. */
  readonly wmfs: WMFs<Button>;

  /** {@link PICTs} directly on this button. */
  readonly picts: PICTs<Button>;

  /** {@link PDFs} directly on this button. */
  readonly pdfs: PDFs<Button>;

  /** Whether the button is hidden until triggered by a behavior, in the exported PDF. */
  get hiddenUntilTriggered(): Read<M, boolean>;
  set hiddenUntilTriggered(value: boolean);

  /** Whether the button prints, in the exported PDF. */
  get printableInPdf(): Read<M, boolean>;
  set printableInPdf(value: boolean);

  /**
   * Brings the button to the front of its layer, or just in front of `reference`.
   * @param reference An item with the same parent to move directly in front of.
   */
  bringToFront(reference?: PageItem): Read<M, void>;

  /**
   * Sends the button to the back of its layer, or just behind `reference`.
   * @param reference An item with the same parent to move directly behind.
   */
  sendToBack(reference?: PageItem): Read<M, void>;

  /** Brings the button forward one step in the stacking order. */
  bringForward(): Read<M, void>;

  /** Sends the button backward one step in the stacking order. */
  sendBackward(): Read<M, void>;

  /** Converts the button to the page item currently shown in its active state; page items from other states are lost. */
  convertToObject(): Read<M, void>;
}
