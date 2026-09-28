/**
 * Layer.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { IndexedDOMObject, LabelableEventDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { UIColors } from './Enums/UIColors';
import type { LocationOptions } from './Enums/LocationOptions';

import type { Buttons } from './Buttons';
import type { CheckBoxes } from './CheckBoxes';
import type { ComboBoxes } from './ComboBoxes';
import type { Document } from './Document';
import type { EPSTexts } from './EPSTexts';
import type { EndnoteTextFrames } from './EndnoteTextFrames';
import type { FormFields } from './FormFields';
import type { Graphic } from './Graphic';
import type { GraphicLines } from './GraphicLines';
import type { Groups } from './Groups';
import type { Guides } from './Guides';
import type { ListBoxes } from './ListBoxes';
import type { MultiStateObjects } from './MultiStateObjects';
import type { Ovals } from './Ovals';
import type { PageItem } from './PageItem';
import type { PageItems } from './PageItems';
import type { Polygons } from './Polygons';
import type { RadioButtons } from './RadioButtons';
import type { Rectangles } from './Rectangles';
import type { SignatureFields } from './SignatureFields';
import type { SplineItems } from './SplineItems';
import type { TextBoxes } from './TextBoxes';
import type { TextFrames } from './TextFrames';
import type { AnyGraphic, AnyPageItem } from './_base/Unions';

/**
 * A layer of the document: everything drawn on it is shown, hidden, locked and
 * printed together, and sits in front of or behind everything on another layer.
 *
 * Layers span the whole document rather than a single page, so an item added to
 * a layer on page 1 obeys the same visibility and locking as one on page 40.
 * Their order in {@link Document.layers} is the stacking order, front to back.
 */
export interface Layer<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Document, M>,
    IndexedDOMObject<Document, M>,
    NamableDOMObject<Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Layer';

  /** Resolves the proxy into the individual {@link Layer} objects it stands for. */
  getElements(): Layer<'single'>[];

  /** The unique numeric ID of the layer within its document. Stable across reordering, unlike {@link index}. */
  readonly id: Read<M, number>;

  /** Every {@link PageItem} on this layer, recursing into nested groups. A snapshot array, not a live collection. */
  readonly allPageItems: Read<M, AnyPageItem[]>;

  /** Every {@link Graphic} on this layer, recursing into nested groups. A snapshot array, not a live collection. */
  readonly allGraphics: Read<M, AnyGraphic[]>;

  /** {@link Ovals} (ellipses) on this layer. */
  readonly ovals: Ovals;

  /** {@link SplineItems} on this layer. */
  readonly splineItems: SplineItems;

  /** All {@link PageItems} on this layer regardless of type. */
  readonly pageItems: PageItems;

  /** {@link Rectangles} on this layer. */
  readonly rectangles: Rectangles;

  /** {@link GraphicLines} on this layer. */
  readonly graphicLines: GraphicLines;

  /** {@link TextFrames} on this layer. */
  readonly textFrames: TextFrames;

  /** {@link Polygons} on this layer. */
  readonly polygons: Polygons;

  /** {@link EndnoteTextFrames} on this layer. */
  readonly endnoteTextFrames: EndnoteTextFrames;

  /** {@link Guides} assigned to this layer. */
  readonly guides: Guides;

  /** {@link Groups} on this layer. */
  readonly groups: Groups;

  /** {@link EPSTexts} on this layer. */
  readonly epstexts: EPSTexts;

  /** {@link FormFields} of every kind on this layer. */
  readonly formFields: FormFields;

  /** {@link Buttons} on this layer. */
  readonly buttons: Buttons;

  /** {@link MultiStateObjects} on this layer. */
  readonly multiStateObjects: MultiStateObjects;

  /** {@link CheckBoxes} on this layer. */
  readonly checkBoxes: CheckBoxes;

  /** {@link ComboBoxes} on this layer. */
  readonly comboBoxes: ComboBoxes;

  /** {@link ListBoxes} on this layer. */
  readonly listBoxes: ListBoxes;

  /** {@link RadioButtons} on this layer. */
  readonly radioButtons: RadioButtons;

  /** {@link TextBoxes} on this layer. */
  readonly textBoxes: TextBoxes;

  /** {@link SignatureFields} on this layer. */
  readonly signatureFields: SignatureFields;

  /** Whether the layer (and everything on it) is shown. */
  get visible(): Read<M, boolean>;
  set visible(value: boolean);

  /** Whether the layer is locked, preventing selection and editing of its items. */
  get locked(): Read<M, boolean>;
  set locked(value: boolean);

  /**
   * The layer's identifying color in the UI. Assign either an `[R, G, B]` triple
   * (each `0`–`255`) or a named {@link UIColors} value.
   */
  get layerColor(): Read<M, [number, number, number] | UIColors>;
  set layerColor(value: [number, number, number] | UIColors);

  /** Whether text-wrap on this layer's objects is ignored by other layers while this layer is hidden. */
  get ignoreWrap(): Read<M, boolean>;
  set ignoreWrap(value: boolean);

  /** Whether guides on the layer are shown. */
  get showGuides(): Read<M, boolean>;
  set showGuides(value: boolean);

  /** Whether guides on the layer are locked in place. */
  get lockGuides(): Read<M, boolean>;
  set lockGuides(value: boolean);

  /** Whether the layer prints. */
  get printable(): Read<M, boolean>;
  set printable(value: boolean);

  /**
   * Moves the layer within the layer stack.
   * @param reference The layer to move relative to. Required when `to` is
   * {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}; ignored otherwise.
   */
  move(to: LocationOptions, reference?: Layer): Read<M, Layer>;

  /** Deletes the layer and every item on it. */
  remove(): Read<M, void>;

  /** Duplicates the layer, including its items, directly above it. */
  duplicate(): Read<M, Layer>;

  /**
   * Merges other layers into this one; the merged items move onto this layer and
   * the source layers are removed.
   * @param withLayers The layer(s) to merge into this one.
   */
  merge(withLayers: Layer | Layer[]): Read<M, Layer>;
}
