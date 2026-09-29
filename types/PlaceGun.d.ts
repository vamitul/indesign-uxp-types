/**
 * PlaceGun.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { Snippets } from './Snippets';
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
import type { ImportedPages } from './ImportedPages';
import type { CheckBoxes } from './CheckBoxes';
import type { ComboBoxes } from './ComboBoxes';
import type { ListBoxes } from './ListBoxes';
import type { RadioButtons } from './RadioButtons';
import type { TextBoxes } from './TextBoxes';
import type { SignatureFields } from './SignatureFields';
import type { SVGs } from './SVGs';
import type { RotationDirection } from './Enums/RotationDirection';
import type { FilePath } from './_base/Types';

/**
 * The "place gun" — content loaded onto the cursor via {@link loadPlaceGun},
 * ready to be placed with a subsequent click or drag.
 */
export interface PlaceGun<M extends Mode = 'single'> extends EventTargetDOMObject<Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'PlaceGun';

  /** Resolves the proxy into the individual {@link PlaceGun} objects it stands for. */
  getElements(): PlaceGun<'single'>[];

  /** If `true`, the place gun is currently loaded with content. */
  readonly loaded: Read<M, boolean>;

  /** Snippets currently loaded in the place gun. */
  readonly snippets: Snippets;
  /** All page items currently loaded in the place gun. */
  readonly pageItems: PageItems<PlaceGun>;
  /** Text frames currently loaded in the place gun. */
  readonly textFrames: TextFrames<PlaceGun>;
  /** Rectangles currently loaded in the place gun. */
  readonly rectangles: Rectangles<PlaceGun>;
  /** Spline items currently loaded in the place gun. */
  readonly splineItems: SplineItems<PlaceGun>;
  /** Ovals currently loaded in the place gun. */
  readonly ovals: Ovals<PlaceGun>;
  /** Graphic lines currently loaded in the place gun. */
  readonly graphicLines: GraphicLines<PlaceGun>;
  /** Polygons currently loaded in the place gun. */
  readonly polygons: Polygons<PlaceGun>;
  /** Groups currently loaded in the place gun. */
  readonly groups: Groups<PlaceGun>;
  /** Buttons currently loaded in the place gun. */
  readonly buttons: Buttons<PlaceGun>;
  /** Form fields currently loaded in the place gun. */
  readonly formFields: FormFields<PlaceGun>;
  /** Multi-state objects currently loaded in the place gun. */
  readonly multiStateObjects: MultiStateObjects<PlaceGun>;
  /** EPS-text items currently loaded in the place gun. */
  readonly epstexts: EPSTexts<PlaceGun>;
  /** Placed raster images currently loaded in the place gun. */
  readonly images: Images<PlaceGun>;
  /** All placed graphics currently loaded in the place gun. */
  readonly graphics: Graphics<PlaceGun>;
  /** Placed EPS files currently loaded in the place gun. */
  readonly epss: EPSs<PlaceGun>;
  /** Placed WMF files currently loaded in the place gun. */
  readonly wmfs: WMFs<PlaceGun>;
  /** Placed PICT files currently loaded in the place gun. */
  readonly picts: PICTs<PlaceGun>;
  /** Placed PDF files currently loaded in the place gun. */
  readonly pdfs: PDFs<PlaceGun>;
  /** Placed imported pages currently loaded in the place gun. */
  readonly importedPages: ImportedPages<PlaceGun>;
  /** Check boxes currently loaded in the place gun. */
  readonly checkBoxes: CheckBoxes<PlaceGun>;
  /** Combo boxes currently loaded in the place gun. */
  readonly comboBoxes: ComboBoxes<PlaceGun>;
  /** List boxes currently loaded in the place gun. */
  readonly listBoxes: ListBoxes<PlaceGun>;
  /** Radio buttons currently loaded in the place gun. */
  readonly radioButtons: RadioButtons<PlaceGun>;
  /** Text boxes currently loaded in the place gun. */
  readonly textBoxes: TextBoxes<PlaceGun>;
  /** Signature fields currently loaded in the place gun. */
  readonly signatureFields: SignatureFields<PlaceGun>;
  /** SVG files currently loaded in the place gun. */
  readonly svgs: SVGs<PlaceGun>;

  /** Deletes the contents of the place gun. */
  abortPlaceGun(): Read<M, void>;

  /** Rotates the contents of the place gun, cycling which loaded item places next. */
  rotate(direction?: RotationDirection): Read<M, void>;

  /**
   * Loads the place gun with one or more files.
   * @param showingOptions Whether to display the import options dialog. Defaults to `false`.
   * @param withProperties Initial values for properties of the placed object(s).
   */
  loadPlaceGun(
    fileName: FilePath | FilePath[],
    showingOptions?: boolean,
    withProperties?: object,
  ): void;
}
