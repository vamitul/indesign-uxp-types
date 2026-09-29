/**
 * PDFAttribute.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { ImportedPage } from './ImportedPage';
import type { PDF } from './PDF';
import type { PDFCrop } from './Enums/PDFCrop';

/**
 * PDF attributes.
 */
export interface PDFAttribute<M extends Mode = 'single'> extends EventTargetDOMObject<PDF | ImportedPage, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'PDFAttribute';

  /** Resolves the proxy into the individual {@link PDFAttribute} objects it stands for. */
  getElements(): PDFAttribute<'single'>[];

  /** The page number of the PDF document page to place. */
  readonly pageNumber: Read<M, number>;

  /** Which area of the PDF page was placed — see {@link PDFCrop} for the choices (trim, media, bleed, art, or a content bounding box). */
  readonly pdfCrop: Read<M, PDFCrop>;

  /** If true, the background of the PDF is transparent. */
  readonly transparentBackground: Read<M, boolean>;
}
