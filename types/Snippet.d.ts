/**
 * Snippet.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { PlaceGun } from './PlaceGun';
import type { PageItems } from './PageItems';
import type { TextFrames } from './TextFrames';
import type { Rectangles } from './Rectangles';
import type { SplineItems } from './SplineItems';
import type { Ovals } from './Ovals';
import type { GraphicLines } from './GraphicLines';
import type { Polygons } from './Polygons';
import type { Groups } from './Groups';
import type { Buttons } from './Buttons';
import type { FormFields } from './FormFields';
import type { MultiStateObjects } from './MultiStateObjects';
import type { EPSTexts } from './EPSTexts';
import type { Images } from './Images';
import type { Graphics } from './Graphics';
import type { EPSs } from './EPSs';
import type { WMFs } from './WMFs';
import type { PICTs } from './PICTs';
import type { PDFs } from './PDFs';
import type { CheckBoxes } from './CheckBoxes';
import type { ComboBoxes } from './ComboBoxes';
import type { ListBoxes } from './ListBoxes';
import type { RadioButtons } from './RadioButtons';
import type { TextBoxes } from './TextBoxes';
import type { SignatureFields } from './SignatureFields';
import type { SVGs } from './SVGs';

/**
 * An IDML snippet loaded into the place gun, ready to be placed into a
 * document. Exposes the page items it contains through the same child
 * collection accessors as a container object.
 */
export interface Snippet<M extends Mode = 'single'>
  extends LabelableEventDOMObject<PlaceGun, M>,
    IndexedDOMObject<PlaceGun, M>,
    NamableDOMObject<PlaceGun, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Snippet';

  /** Resolves the proxy into the individual {@link Snippet} objects it stands for. */
  getElements(): Snippet<'single'>[];

  /** The unique ID of the snippet. */
  readonly id: Read<M, number>;

  /** All page items in the snippet regardless of type. */
  readonly pageItems: PageItems<Snippet>;

  /** Text frames in the snippet. */
  readonly textFrames: TextFrames<Snippet>;

  /** Rectangles in the snippet. */
  readonly rectangles: Rectangles<Snippet>;

  /** Spline items (rectangles, ovals, polygons, graphic lines) in the snippet. */
  readonly splineItems: SplineItems<Snippet>;

  /** Ellipses in the snippet. */
  readonly ovals: Ovals<Snippet>;

  /** Graphic lines in the snippet. */
  readonly graphicLines: GraphicLines<Snippet>;

  /** Polygons in the snippet. */
  readonly polygons: Polygons<Snippet>;

  /** Groups in the snippet. */
  readonly groups: Groups<Snippet>;

  /** Buttons in the snippet. */
  readonly buttons: Buttons<Snippet>;

  /** Form fields of every kind in the snippet. */
  readonly formFields: FormFields<Snippet>;

  /** Multi-state objects in the snippet. */
  readonly multiStateObjects: MultiStateObjects<Snippet>;

  /** EPSTexts in the snippet. */
  readonly epstexts: EPSTexts<Snippet>;

  /** Bitmap images in the snippet. */
  readonly images: Images<Snippet>;

  /** Imported graphics of any format in the snippet. */
  readonly graphics: Graphics<Snippet>;

  /** EPS files in the snippet. */
  readonly epss: EPSs<Snippet>;

  /** WMF graphics in the snippet. */
  readonly wmfs: WMFs<Snippet>;

  /** PICT graphics in the snippet. */
  readonly picts: PICTs<Snippet>;

  /** PDF files in the snippet. */
  readonly pdfs: PDFs<Snippet>;

  /** Checkboxes in the snippet. */
  readonly checkBoxes: CheckBoxes<Snippet>;

  /** Comboboxes in the snippet. */
  readonly comboBoxes: ComboBoxes<Snippet>;

  /** Listboxes in the snippet. */
  readonly listBoxes: ListBoxes<Snippet>;

  /** Radio buttons in the snippet. */
  readonly radioButtons: RadioButtons<Snippet>;

  /** Text boxes in the snippet. */
  readonly textBoxes: TextBoxes<Snippet>;

  /** Signature fields in the snippet. */
  readonly signatureFields: SignatureFields<Snippet>;

  /** SVG files in the snippet. */
  readonly svgs: SVGs<Snippet>;

  /** Deletes the snippet. */
  remove(): Read<M, void>;
}
