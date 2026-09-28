/**
 * State.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { StateOwner } from './_base/Parents';

import type { StateTypes } from './Enums/StateTypes';

import type { EndnoteTextFrames } from './EndnoteTextFrames';
import type { EPSs } from './EPSs';
import type { EPSTexts } from './EPSTexts';
import type { Graphics } from './Graphics';
import type { GraphicLines } from './GraphicLines';
import type { Groups } from './Groups';
import type { Images } from './Images';
import type { Ovals } from './Ovals';
import type { PageItem } from './PageItem';
import type { PageItems } from './PageItems';
import type { PDFs } from './PDFs';
import type { PICTs } from './PICTs';
import type { Polygons } from './Polygons';
import type { Rectangles } from './Rectangles';
import type { SplineItems } from './SplineItems';
import type { SVGs } from './SVGs';
import type { TextFrames } from './TextFrames';
import type { WMFs } from './WMFs';
import type { Button } from './Button';
import type { MultiStateObject } from './MultiStateObject';
import type { RadioButton } from './RadioButton';

/**
 * One appearance state of a {@link MultiStateObject}, {@link Button}, or
 * {@link RadioButton} — for example, a button's Up/Rollover/Down artwork, or
 * one panel of a slideshow-style multi-state object.
 *
 * Its child collections hold this state's own artwork — shapes, placed graphics, and
 * text frames — but not the interactive object types (buttons, form fields,
 * multi-state objects) that a full page or layer can hold.
 */
export interface State<M extends Mode = 'single'>
  extends EventTargetDOMObject<StateOwner, M>,
    IndexedDOMObject<StateOwner, M>,
    NamableDOMObject<StateOwner, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'State';

  /** Resolves the proxy into the individual {@link State} objects it stands for. */
  getElements(): State<'single'>[];


  /** The unique numeric ID of the state within its multi-state object. */
  readonly id: Read<M, number>;
  /** {@link Ovals} (ellipses) directly in this state. */
  readonly ovals: Ovals<State>;

  /** {@link SplineItems} (rectangles, ovals, polygons, graphic lines) directly in this state. */
  readonly splineItems: SplineItems<State>;

  /** All {@link PageItem}s in this state regardless of type. */
  readonly pageItems: PageItems<State>;

  /** {@link Rectangles} directly in this state. */
  readonly rectangles: Rectangles<State>;

  /** {@link GraphicLines} directly in this state. */
  readonly graphicLines: GraphicLines<State>;

  /** {@link TextFrames} directly in this state. */
  readonly textFrames: TextFrames<State>;

  /** {@link Polygons} directly in this state. */
  readonly polygons: Polygons<State>;

  /** {@link EndnoteTextFrames} directly in this state. */
  readonly endnoteTextFrames: EndnoteTextFrames<State>;

  /** {@link Groups} directly in this state. */
  readonly groups: Groups<State>;

  /** {@link EPSTexts} directly in this state. */
  readonly epstexts: EPSTexts<State>;

  /** Bitmap {@link Images} (TIFF, JPEG, PNG, GIF…) directly in this state. */
  readonly images: Images<State>;

  /** Placed {@link Graphics} of any file format directly in this state. */
  readonly graphics: Graphics<State>;

  /** {@link EPSs} directly in this state. */
  readonly epss: EPSs<State>;

  /** {@link WMFs} directly in this state. */
  readonly wmfs: WMFs<State>;

  /** {@link PICTs} directly in this state. */
  readonly picts: PICTs<State>;

  /** {@link PDFs} directly in this state. */
  readonly pdfs: PDFs<State>;

  /** {@link SVGs} directly in this state. */
  readonly svgs: SVGs<State>;

  /** Whether this is the currently active/displayed state of its parent object. */
  get active(): Read<M, boolean>;
  set active(value: boolean);

  /** Whether this state is enabled in exported PDFs. */
  get enabled(): Read<M, boolean>;
  set enabled(value: boolean);

  /**
   * For a button state, the user action that triggers it. For a
   * {@link MultiStateObject} state (which has no user actions), a plain
   * numeric identifier instead.
   */
  get statetype(): Read<M, StateTypes | number>;
  set statetype(value: StateTypes | number);

  /** Releases this state's appearance as an independent page item and removes the state from its parent object. */
  releaseAsObject(): Read<M, void>;

  /** Moves the state to a new position within its parent object's states collection. */
  move(newPosition: number): Read<M, void>;

  /** Adds page items to this state's artwork. */
  addItemsToState(pageitems: PageItem | PageItem[]): Read<M, void>;

  /** Deletes the state. */
  remove(): Read<M, void>;
}
