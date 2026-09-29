/**
 * PDFPlacePreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { PDFCrop } from './Enums/PDFCrop';

/**
 * PDF place preferences.
 */
export interface PDFPlacePreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'PDFPlacePreference';

  /** Resolves the proxy into the individual {@link PDFPlacePreference} objects it stands for. */
  getElements(): PDFPlacePreference<'single'>[];

  /** The page number of the PDF document page to place. */
  get pageNumber(): Read<M, number>;
  set pageNumber(value: number);

  /** Which area of the PDF page to place — see {@link PDFCrop} for the choices (trim, media, bleed, art, or a content bounding box). */
  get pdfCrop(): Read<M, PDFCrop>;
  set pdfCrop(value: PDFCrop);

  /** If true, the background of the PDF is transparent. */
  get transparentBackground(): Read<M, boolean>;
  set transparentBackground(value: boolean);

  /** The password to enter when opening the PDF document. Valid only when use security is true. Note: A script can set but not get this value. */
  get openDocumentPassword(): Read<M, string>;
  set openDocumentPassword(value: string);
}
