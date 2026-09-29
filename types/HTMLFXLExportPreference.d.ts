/**
 * HTMLFXLExportPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { PageRangeFormat } from './Enums/PageRangeFormat';

/**
 * HTML FXL export preferences.
 */
export interface HTMLFXLExportPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'HTMLFXLExportPreference';

  /** Resolves the proxy into the individual {@link HTMLFXLExportPreference} objects it stands for. */
  getElements(): HTMLFXLExportPreference<'single'>[];

  /** The page range to export, used when {@link epubPageRangeFormat} is `EXPORT_PAGE_RANGE`. */
  get epubPageRange(): Read<M, string>;
  set epubPageRange(value: string);

  /** Whether to export every page or restrict to the range in {@link epubPageRange} — see {@link PageRangeFormat}. */
  get epubPageRangeFormat(): Read<M, PageRangeFormat>;
  set epubPageRangeFormat(value: PageRangeFormat);
}
