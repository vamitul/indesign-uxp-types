/**
 * PrintBookletOption.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { MeasurementValue } from './_base/Types';
import type { Document } from './Document';
import type { BookletTypeOptions } from './Enums/BookletTypeOptions';
import type { PageRange } from './Enums/PageRange';
import type { SignatureSizeOptions } from './Enums/SignatureSizeOptions';

/**
 * Settings for printing pages as an imposed booklet — how they're grouped into
 * signatures for binding, plus the spacing, margins, and bleed the imposition needs.
 */
export interface PrintBookletOption<M extends Mode = 'single'> extends EventTargetDOMObject<Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'PrintBookletOption';

  /** Resolves the proxy into the individual {@link PrintBookletOption} objects it stands for. */
  getElements(): PrintBookletOption<'single'>[];

  /** The pages to print, specified either as a {@link PageRange} value or a string. To specify a range, separate page numbers in the string with a hyphen (-); to specify separate pages, separate page numbers with a comma (,). */
  get pageRange(): Read<M, PageRange | string>;
  set pageRange(value: PageRange | string);

  /** How pages are imposed for the booklet — saddle-stitched, perfect-bound, or laid out consecutively. See {@link BookletTypeOptions}. */
  get bookletType(): Read<M, BookletTypeOptions>;
  set bookletType(value: BookletTypeOptions);

  /** The amount of space between pages. */
  get spaceBetweenPages(): Read<M, number>;
  set spaceBetweenPages(value: MeasurementValue);

  /** The amount of bleed between pages. */
  get bleedBetweenPages(): Read<M, number>;
  set bleedBetweenPages(value: MeasurementValue);

  /** The amount of creep (binding adjustment based on paper thickness) to add. */
  get creep(): Read<M, number>;
  set creep(value: MeasurementValue);

  /** The number of pages per signature, for perfect binding. See {@link SignatureSizeOptions}. */
  get signatureSize(): Read<M, SignatureSizeOptions>;
  set signatureSize(value: SignatureSizeOptions);

  /** Top margin of the printed booklet. */
  get topMargin(): Read<M, number>;
  set topMargin(value: MeasurementValue);

  /** Bottom margin of the printed booklet. */
  get bottomMargin(): Read<M, number>;
  set bottomMargin(value: MeasurementValue);

  /** Left margin of the printed booklet. */
  get leftMargin(): Read<M, number>;
  set leftMargin(value: MeasurementValue);

  /** Right margin of the printed booklet. */
  get rightMargin(): Read<M, number>;
  set rightMargin(value: MeasurementValue);

  /** If true, automatically adjust margins to fit the specified printer's marks and bleed area. */
  get autoAdjustMargins(): Read<M, boolean>;
  set autoAdjustMargins(value: boolean);

  /** If true, make all margins equal to the top margin. */
  get marginsUniformSize(): Read<M, boolean>;
  set marginsUniformSize(value: boolean);

  /** If true, print blank spreads. */
  get printBlankPrinterSpreads(): Read<M, boolean>;
  set printBlankPrinterSpreads(value: boolean);
}
