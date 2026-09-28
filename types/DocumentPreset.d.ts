/**
 * DocumentPreset.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { MeasurementValue } from './_base/Types';
import type { PageOrientation } from './Enums/PageOrientation';
import type { DocumentIntentOptions } from './Enums/DocumentIntentOptions';

/**
 * A named set of new-document settings (page size, margins, bleed/slug,
 * intent…) applied by {@link Application.documentPresets} when creating a
 * new document.
 */
export interface DocumentPreset<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Application, M>,
    IndexedDOMObject<Application, M>,
    NamableDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'DocumentPreset';

  /** Resolves the proxy into the individual {@link DocumentPreset} objects it stands for. */
  getElements(): DocumentPreset<'single'>[];

  /** The unique ID of the document preset. */
  readonly id: Read<M, number>;

  /**
   * The number of pages in the document.
   * @param value Range: `1`–`9999`.
   */
  get pagesPerDocument(): Read<M, number>;
  set pagesPerDocument(value: number);

  /** If `true`, the document has facing pages. */
  get facingPages(): Read<M, boolean>;
  set facingPages(value: boolean);

  /** The height of the page. */
  get pageHeight(): Read<M, number>;
  set pageHeight(value: MeasurementValue);

  /** The width of the page. */
  get pageWidth(): Read<M, number>;
  set pageWidth(value: MeasurementValue);

  /** Whether the page is wider than it is tall, or taller than it is wide — see {@link PageOrientation}. */
  get pageOrientation(): Read<M, PageOrientation>;
  set pageOrientation(value: PageOrientation);

  /**
   * The number of columns to place on the page.
   * @param value Range: `1`–`216`.
   */
  get columnCount(): Read<M, number>;
  set columnCount(value: number);

  /**
   * The distance between columns.
   * @param value Range: `0`–`1440`.
   */
  get columnGutter(): Read<M, number>;
  set columnGutter(value: MeasurementValue);

  /** The top margin. */
  get top(): Read<M, number>;
  set top(value: MeasurementValue);

  /** The bottom margin. */
  get bottom(): Read<M, number>;
  set bottom(value: MeasurementValue);

  /** The left margin. */
  get left(): Read<M, number>;
  set left(value: MeasurementValue);

  /** The right margin. */
  get right(): Read<M, number>;
  set right(value: MeasurementValue);

  /**
   * The inside (or left) document bleed offset. Requires
   * {@link documentBleedUniformSize} to be `false`.
   */
  get documentBleedInsideOrLeftOffset(): Read<M, number>;
  set documentBleedInsideOrLeftOffset(value: MeasurementValue);

  /** The top document bleed offset. */
  get documentBleedTopOffset(): Read<M, number>;
  set documentBleedTopOffset(value: MeasurementValue);

  /**
   * The outside (or right) document bleed offset. Requires
   * {@link documentBleedUniformSize} to be `false`.
   */
  get documentBleedOutsideOrRightOffset(): Read<M, number>;
  set documentBleedOutsideOrRightOffset(value: MeasurementValue);

  /**
   * The bottom document bleed offset. Requires
   * {@link documentBleedUniformSize} to be `false`.
   */
  get documentBleedBottomOffset(): Read<M, number>;
  set documentBleedBottomOffset(value: MeasurementValue);

  /**
   * The inside (or left) slug offset. Requires
   * {@link documentSlugUniformSize} to be `false`.
   */
  get slugInsideOrLeftOffset(): Read<M, number>;
  set slugInsideOrLeftOffset(value: MeasurementValue);

  /** The top slug offset. */
  get slugTopOffset(): Read<M, number>;
  set slugTopOffset(value: MeasurementValue);

  /**
   * The outside (or right) slug offset. Requires
   * {@link documentSlugUniformSize} to be `false`.
   */
  get slugRightOrOutsideOffset(): Read<M, number>;
  set slugRightOrOutsideOffset(value: MeasurementValue);

  /**
   * The bottom slug offset. Requires {@link documentSlugUniformSize} to be
   * `false`.
   */
  get slugBottomOffset(): Read<M, number>;
  set slugBottomOffset(value: MeasurementValue);

  /** If `true`, the document's A-Master has a primary text frame on new documents. */
  get createPrimaryTextFrame(): Read<M, boolean>;
  set createPrimaryTextFrame(value: boolean);

  /**
   * The starting page number of the document (equivalent to the starting
   * page number of its first section).
   * @param value Range: `1`–`999999`.
   * @default `1`
   */
  get startPageNumber(): Read<M, number>;
  set startPageNumber(value: number);

  /** What kind of output the document is intended for — print, web, or a mobile device; see {@link DocumentIntentOptions}. */
  get intent(): Read<M, DocumentIntentOptions>;
  set intent(value: DocumentIntentOptions);

  /**
   * If `true`, {@link documentBleedTopOffset} is applied to all sides of the
   * document's bleed.
   * @default `true`
   */
  get documentBleedUniformSize(): Read<M, boolean>;
  set documentBleedUniformSize(value: boolean);

  /**
   * If `true`, {@link slugTopOffset} is applied to all sides of the
   * document's slug.
   * @default `false`
   */
  get documentSlugUniformSize(): Read<M, boolean>;
  set documentSlugUniformSize(value: boolean);

  /** The name of the page size. */
  get pageSize(): Read<M, string>;
  set pageSize(value: string);

  /** Deletes the document preset. */
  remove(): Read<M, void>;

  /** Duplicates the document preset. */
  duplicate(): Read<M, DocumentPreset>;
}
