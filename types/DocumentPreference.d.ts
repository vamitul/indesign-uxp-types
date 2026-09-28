/**
 * DocumentPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { MeasurementValue } from './_base/Types';
import type { DocumentIntentOptions } from './Enums/DocumentIntentOptions';
import type { HorizontalOrVertical } from './Enums/HorizontalOrVertical';
import type { PageBindingOptions } from './Enums/PageBindingOptions';
import type { PageOrientation } from './Enums/PageOrientation';
import type { UIColors } from './Enums/UIColors';

/**
 * Document layout defaults (page size, orientation, facing pages, ruler origin) readable/writable at both the document and application-default level.
 */
export interface DocumentPreference<M extends Mode = 'single'> extends EventTargetDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'DocumentPreference';

  /** Resolves the proxy into the individual {@link DocumentPreference} objects it stands for. */
  getElements(): DocumentPreference<'single'>[];

  /** The height of the page. */
  get pageHeight(): Read<M, number>;
  set pageHeight(value: MeasurementValue);

  /** The width of the page. */
  get pageWidth(): Read<M, number>;
  set pageWidth(value: MeasurementValue);

  /** Whether the page is wider than it is tall, or taller than it is wide — see {@link PageOrientation}. */
  get pageOrientation(): Read<M, PageOrientation>;
  set pageOrientation(value: PageOrientation);

  /** The color of the column guides, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values,, or as a UI color. */
  get columnGuideColor(): Read<M, number[] | UIColors>;
  set columnGuideColor(value: number[] | UIColors);

  /** The color of the margin guides, specified either as an array of three doubles, each in the range 0 to 255, representing R, G, and B values, or as a UI color. */
  get marginGuideColor(): Read<M, number[] | UIColors>;
  set marginGuideColor(value: number[] | UIColors);

  /** If true, the document A-master has primary text frames when a new document is created. */
  get createPrimaryTextFrame(): Read<M, boolean>;
  set createPrimaryTextFrame(value: boolean);

  /** The number of pages in the document. (Range: 1 to 9999) */
  get pagesPerDocument(): Read<M, number>;
  set pagesPerDocument(value: number);

  /** If true, the document has facing pages. */
  get facingPages(): Read<M, boolean>;
  set facingPages(value: boolean);

  /** The amount to offset the top document bleed. */
  get documentBleedTopOffset(): Read<M, number>;
  set documentBleedTopOffset(value: MeasurementValue);

  /** The amount to offset the bottom document bleed. Note: To set the bleed bottom offset, document bleed uniform size must be false. */
  get documentBleedBottomOffset(): Read<M, number>;
  set documentBleedBottomOffset(value: MeasurementValue);

  /** The amount to offset the inside or left document bleed. Note: To set the bleed inside or left offset, document bleed uniform size must be false. */
  get documentBleedInsideOrLeftOffset(): Read<M, number>;
  set documentBleedInsideOrLeftOffset(value: MeasurementValue);

  /** The amount to offset the outside or right document bleed. Note: To set the bleed outside or right offset, document bleed uniform size must be false. */
  get documentBleedOutsideOrRightOffset(): Read<M, number>;
  set documentBleedOutsideOrRightOffset(value: MeasurementValue);

  /** If true, uses the document bleed top offset value for bleed offset measurements on all sides of the document. The default setting is true. */
  get documentBleedUniformSize(): Read<M, boolean>;
  set documentBleedUniformSize(value: boolean);

  /** The amount to offset the top slug. */
  get slugTopOffset(): Read<M, number>;
  set slugTopOffset(value: MeasurementValue);

  /** The amount to offset the bottom slug. Note: To set the slug bottom offset, document slug uniform size must be false. */
  get slugBottomOffset(): Read<M, number>;
  set slugBottomOffset(value: MeasurementValue);

  /** The amount to offset the inside or left slug. Note: To set the slug inside or left offset, document slug uniform size must be false. */
  get slugInsideOrLeftOffset(): Read<M, number>;
  set slugInsideOrLeftOffset(value: MeasurementValue);

  /** The amount to offset the outside or right slug. Note: To set the slug right or outside offset, document slug uniform size must be false. */
  get slugRightOrOutsideOffset(): Read<M, number>;
  set slugRightOrOutsideOffset(value: MeasurementValue);

  /** If true, uses the slug top offset value for slug measurements on all sides of the document. The default value is false. */
  get documentSlugUniformSize(): Read<M, boolean>;
  set documentSlugUniformSize(value: boolean);

  /**
   * If true, preserves the layout of spreads that contained more than two pages when allow
   * page shuffle was turned on.
   *
   * If false, changes multi-page spreads to two-page spreads if the spreads were created or
   * changed since allow page shuffle was turned on.
   */
  get preserveLayoutWhenShuffling(): Read<M, boolean>;
  set preserveLayoutWhenShuffling(value: boolean);

  /** If true, guarantees that when pages are added to a spread it will contain a maximum of two pages. If false, allows pages to be added or moved into existing spreads. For override information, see preserve layout when shuffling. */
  get allowPageShuffle(): Read<M, boolean>;
  set allowPageShuffle(value: boolean);

  /** If true, overprints black when saving the document. */
  get overprintBlack(): Read<M, boolean>;
  set overprintBlack(value: boolean);

  /** If true, denotes that the hidden spread is visible on document. If false, denotes that the hidden spread is not not visible on document. */
  get spreadHiddenVisibility(): Read<M, boolean>;
  set spreadHiddenVisibility(value: boolean);

  /** If true, locks column guides. */
  get columnGuideLocked(): Read<M, boolean>;
  set columnGuideLocked(value: boolean);

  /** The starting page number for a document. This is the same as the starting page number for the first section of a document. Default value is 1. */
  get startPageNumber(): Read<M, number>;
  set startPageNumber(value: number);

  /** What kind of output the document is intended for — print, web, or a mobile device; see {@link DocumentIntentOptions}. */
  get intent(): Read<M, DocumentIntentOptions>;
  set intent(value: DocumentIntentOptions);

  /** Whether pages are bound left-to-right or right-to-left; see {@link PageBindingOptions}. */
  get pageBinding(): Read<M, PageBindingOptions>;
  set pageBinding(value: PageBindingOptions);

  /** The direction of text in the column. */
  get columnDirection(): Read<M, HorizontalOrVertical>;
  set columnDirection(value: HorizontalOrVertical);

  /** The size of the page. */
  get pageSize(): Read<M, string>;
  set pageSize(value: string);

  /** If true, causes UI-based snippet import to use original location for page items. */
  get snippetImportUsesOriginalLocation(): Read<M, boolean>;
  set snippetImportUsesOriginalLocation(value: boolean);
}
