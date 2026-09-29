/**
 * Html5ExportPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { TextExportFormatEnum } from './Enums/TextExportFormatEnum';

/**
 * HTML5 export preferences.
 */
export interface Html5ExportPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Html5ExportPreference';

  /** Resolves the proxy into the individual {@link Html5ExportPreference} objects it stands for. */
  getElements(): Html5ExportPreference<'single'>[];

  /** The format of text to export (HTML or SVG). */
  get textExportFormat(): Read<M, TextExportFormatEnum>;
  set textExportFormat(value: TextExportFormatEnum);

  /** Whether to copy fonts during export. */
  get copyFonts(): Read<M, boolean>;
  set copyFonts(value: boolean);
}
