/**
 * MultiStateObject.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { FormField } from './FormField';
import type { PageItem } from './PageItem';

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
import type { Button } from './Button';
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
 * A multi-state object: a page item that cycles through multiple named
 * {@link State appearance states} — the basis for slideshow-style interactive
 * content and the base building block {@link Button} specializes with PDF
 * behaviors.
 */
export interface MultiStateObject<TParent = PageItemParent, M extends Mode = 'single'> extends FormField<TParent, MultiStateObject, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'MultiStateObject';

  /** Resolves the proxy into the individual {@link MultiStateObject} objects it stands for. */
  getElements(): MultiStateObject<TParent, 'single'>[];

  /** {@link States} owned by this object. */
  readonly states: States;

  /** {@link Ovals} (ellipses) directly on this object. */
  readonly ovals: Ovals<MultiStateObject>;

  /** {@link SplineItems} directly on this object. */
  readonly splineItems: SplineItems<MultiStateObject>;

  /** {@link Rectangles} directly on this object. */
  readonly rectangles: Rectangles<MultiStateObject>;

  /** {@link GraphicLines} directly on this object. */
  readonly graphicLines: GraphicLines<MultiStateObject>;

  /** {@link TextFrames} directly on this object. */
  readonly textFrames: TextFrames<MultiStateObject>;

  /** {@link Polygons} directly on this object. */
  readonly polygons: Polygons<MultiStateObject>;

  /** {@link EndnoteTextFrames} directly on this object. */
  readonly endnoteTextFrames: EndnoteTextFrames<MultiStateObject>;

  /** {@link Groups} directly on this object. */
  readonly groups: Groups<MultiStateObject>;

  /** {@link EPSTexts} directly on this object. */
  readonly epstexts: EPSTexts<MultiStateObject>;

  /** {@link Paths} drawn directly on this object. */
  readonly paths: Paths;

  /** Bitmap {@link Images} (TIFF, JPEG, PNG, GIF…) directly on this object. */
  readonly images: Images<MultiStateObject>;

  /** {@link EPSs} directly on this object. */
  readonly epss: EPSs<MultiStateObject>;

  /** {@link WMFs} directly on this object. */
  readonly wmfs: WMFs<MultiStateObject>;

  /** {@link PICTs} directly on this object. */
  readonly picts: PICTs<MultiStateObject>;

  /** {@link PDFs} directly on this object. */
  readonly pdfs: PDFs<MultiStateObject>;

  /** Whether the object is initially hidden when displayed in an exported file. */
  get initiallyHidden(): Read<M, boolean>;
  set initiallyHidden(value: boolean);

  /**
   * Brings the object to the front of its layer, or just in front of `reference`.
   * @param reference An item with the same parent to move directly in front of.
   */
  bringToFront(reference?: PageItem): Read<M, void>;

  /**
   * Sends the object to the back of its layer, or just behind `reference`.
   * @param reference An item with the same parent to move directly behind.
   */
  sendToBack(reference?: PageItem): Read<M, void>;

  /** Brings the object forward one step in the stacking order. */
  bringForward(): Read<M, void>;

  /** Sends the object backward one step in the stacking order. */
  sendBackward(): Read<M, void>;

  /** Adds one or more page items to this object as a new appearance state. */
  addItemsAsState(pageitems: PageItem | PageItem[]): Read<M, void>;

  /** Releases all of this object's states as independent page items, then destroys this object. */
  releaseAsObjects(): Read<M, void>;
}
