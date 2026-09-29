/**
 * FormFieldMixins.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './Types';
import type { Behaviors } from '../Behaviors';
import type { ClearFormBehaviors } from '../ClearFormBehaviors';
import type { GotoAnchorBehaviors } from '../GotoAnchorBehaviors';
import type { GotoFirstPageBehaviors } from '../GotoFirstPageBehaviors';
import type { GotoLastPageBehaviors } from '../GotoLastPageBehaviors';
import type { GotoNextPageBehaviors } from '../GotoNextPageBehaviors';
import type { GotoNextViewBehaviors } from '../GotoNextViewBehaviors';
import type { GotoPreviousPageBehaviors } from '../GotoPreviousPageBehaviors';
import type { GotoPreviousViewBehaviors } from '../GotoPreviousViewBehaviors';
import type { GotoURLBehaviors } from '../GotoURLBehaviors';
import type { MovieBehaviors } from '../MovieBehaviors';
import type { OpenFileBehaviors } from '../OpenFileBehaviors';
import type { PrintFormBehaviors } from '../PrintFormBehaviors';
import type { ShowHideFieldsBehaviors } from '../ShowHideFieldsBehaviors';
import type { SoundBehaviors } from '../SoundBehaviors';
import type { SubmitFormBehaviors } from '../SubmitFormBehaviors';
import type { ViewZoomBehaviors } from '../ViewZoomBehaviors';

import type { EPSs } from '../EPSs';
import type { EPSTexts } from '../EPSTexts';
import type { GraphicLines } from '../GraphicLines';
import type { Groups } from '../Groups';
import type { Images } from '../Images';
import type { Ovals } from '../Ovals';
import type { PDFs } from '../PDFs';
import type { PICTs } from '../PICTs';
import type { Polygons } from '../Polygons';
import type { Rectangles } from '../Rectangles';
import type { SplineItems } from '../SplineItems';
import type { TextFrames } from '../TextFrames';
import type { WMFs } from '../WMFs';

import type { PageItem } from '../PageItem';
import type { PageItemParent } from './Parents';

/**
 * The shared control surface of a simple (non-Button, non-MultiStateObject) interactive
 * form widget: {@link CheckBox}, {@link ComboBox}, {@link ListBox}, {@link RadioButton},
 * {@link TextBox}, and {@link SignatureField}.
 *
 * Covers the PDF-action behaviors these widgets support, their PDF-export
 * flags, their child page-item collections, and their stacking-order methods.
 */
export interface FormFieldSurface<TChildParent = PageItemParent, M extends Mode = 'single'> {
  /** {@link Behaviors} of every kind attached to this field. */
  readonly behaviors: Behaviors;

  /** {@link ClearFormBehaviors} attached to this field. */
  readonly clearFormBehaviors: ClearFormBehaviors;

  /** {@link GotoAnchorBehaviors} attached to this field. */
  readonly gotoAnchorBehaviors: GotoAnchorBehaviors;

  /** {@link GotoFirstPageBehaviors} attached to this field. */
  readonly gotoFirstPageBehaviors: GotoFirstPageBehaviors;

  /** {@link GotoLastPageBehaviors} attached to this field. */
  readonly gotoLastPageBehaviors: GotoLastPageBehaviors;

  /** {@link GotoNextPageBehaviors} attached to this field. */
  readonly gotoNextPageBehaviors: GotoNextPageBehaviors;

  /** {@link GotoNextViewBehaviors} attached to this field. */
  readonly gotoNextViewBehaviors: GotoNextViewBehaviors;

  /** {@link GotoPreviousPageBehaviors} attached to this field. */
  readonly gotoPreviousPageBehaviors: GotoPreviousPageBehaviors;

  /** {@link GotoPreviousViewBehaviors} attached to this field. */
  readonly gotoPreviousViewBehaviors: GotoPreviousViewBehaviors;

  /** {@link GotoURLBehaviors} attached to this field. */
  readonly gotoURLBehaviors: GotoURLBehaviors;

  /** {@link MovieBehaviors} attached to this field. */
  readonly movieBehaviors: MovieBehaviors;

  /** {@link OpenFileBehaviors} attached to this field. */
  readonly openFileBehaviors: OpenFileBehaviors;

  /** {@link PrintFormBehaviors} attached to this field. */
  readonly printFormBehaviors: PrintFormBehaviors;

  /** {@link ShowHideFieldsBehaviors} attached to this field. */
  readonly showHideFieldsBehaviors: ShowHideFieldsBehaviors;

  /** {@link SoundBehaviors} attached to this field. */
  readonly soundBehaviors: SoundBehaviors;

  /** {@link SubmitFormBehaviors} attached to this field. */
  readonly submitFormBehaviors: SubmitFormBehaviors;

  /** {@link ViewZoomBehaviors} attached to this field. */
  readonly viewZoomBehaviors: ViewZoomBehaviors;

  /** {@link Ovals} (ellipses) directly on this field. */
  readonly ovals: Ovals<TChildParent>;

  /** {@link SplineItems} directly on this field. */
  readonly splineItems: SplineItems<TChildParent>;

  /** {@link Rectangles} directly on this field. */
  readonly rectangles: Rectangles<TChildParent>;

  /** {@link GraphicLines} directly on this field. */
  readonly graphicLines: GraphicLines<TChildParent>;

  /** {@link TextFrames} directly on this field. */
  readonly textFrames: TextFrames<TChildParent>;

  /** {@link Polygons} directly on this field. */
  readonly polygons: Polygons<TChildParent>;

  /** {@link Groups} directly on this field. */
  readonly groups: Groups<TChildParent>;

  /** {@link EPSTexts} directly on this field. */
  readonly epstexts: EPSTexts<TChildParent>;

  /** Bitmap {@link Images} (TIFF, JPEG, PNG, GIF…) directly on this field. */
  readonly images: Images<TChildParent>;

  /** {@link EPSs} directly on this field. */
  readonly epss: EPSs<TChildParent>;

  /** {@link WMFs} directly on this field. */
  readonly wmfs: WMFs<TChildParent>;

  /** {@link PICTs} directly on this field. */
  readonly picts: PICTs<TChildParent>;

  /** {@link PDFs} directly on this field. */
  readonly pdfs: PDFs<TChildParent>;

  /** Whether the field is hidden until triggered by a behavior, in the exported PDF. */
  get hiddenUntilTriggered(): Read<M, boolean>;
  set hiddenUntilTriggered(value: boolean);

  /** Whether the field prints, in the exported PDF. */
  get printableInPdf(): Read<M, boolean>;
  set printableInPdf(value: boolean);

  /** Whether the field is read-only, in the exported PDF. */
  get readOnly(): Read<M, boolean>;
  set readOnly(value: boolean);

  /** Whether the field must be filled in before the PDF form can be submitted. */
  get required(): Read<M, boolean>;
  set required(value: boolean);

  /**
   * Brings the field to the front of its layer, or just in front of `reference`.
   * @param reference An item with the same parent to move directly in front of.
   */
  bringToFront(reference?: PageItem): Read<M, void>;

  /**
   * Sends the field to the back of its layer, or just behind `reference`.
   * @param reference An item with the same parent to move directly behind.
   */
  sendToBack(reference?: PageItem): Read<M, void>;

  /** Brings the field forward one step in the stacking order. */
  bringForward(): Read<M, void>;

  /** Sends the field backward one step in the stacking order. */
  sendBackward(): Read<M, void>;

  /** Converts the field to the page item currently shown in its active state; page items from other states are lost. */
  convertToObject(): Read<M, void>;
}
