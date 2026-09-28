/**
 * ExportPresetFormat.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ExportPresetFormat: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ExportPresetFormat extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ExportPresetFormat>): boolean;

  /**
   * @internal **WARNING:** `__ExportPresetFormat` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ExportPresetFormat]: never;
}


/**
 * PDF export presets.
 */
interface ExportPresetFormat_PDF_EXPORT_PRESETS_FORMAT extends ExportPresetFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1716745324;
}

/**
 * Printer presets.
 */
interface ExportPresetFormat_PRINTER_PRESETS_FORMAT extends ExportPresetFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1918071916;
}

/**
 * Flattener presets.
 */
interface ExportPresetFormat_FLATTENER_PRESETS_FORMAT extends ExportPresetFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1951626348;
}

/**
 * Document presets.
 */
interface ExportPresetFormat_DOCUMENT_PRESETS_FORMAT extends ExportPresetFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1683190892;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The type of preset to import or export.
 */
export declare namespace ExportPresetFormat {
/**
 * PDF export presets.
 */
type PDF_EXPORT_PRESETS_FORMAT = ExportPresetFormat_PDF_EXPORT_PRESETS_FORMAT;

/**
 * Printer presets.
 */
type PRINTER_PRESETS_FORMAT = ExportPresetFormat_PRINTER_PRESETS_FORMAT;

/**
 * Flattener presets.
 */
type FLATTENER_PRESETS_FORMAT = ExportPresetFormat_FLATTENER_PRESETS_FORMAT;

/**
 * Document presets.
 */
type DOCUMENT_PRESETS_FORMAT = ExportPresetFormat_DOCUMENT_PRESETS_FORMAT;

}
/**
 * The type of preset to import or export.
 */
export declare const ExportPresetFormat: typeof Enumeration & {

  /**
   * PDF export presets.
   */
  readonly PDF_EXPORT_PRESETS_FORMAT: ExportPresetFormat_PDF_EXPORT_PRESETS_FORMAT;
  /**
   * PDF export presets.
   */
  readonly pdfExportPresetsFormat: ExportPresetFormat_PDF_EXPORT_PRESETS_FORMAT;
  /**
   * PDF export presets.
   */
  readonly pdfexportpresetsformat: ExportPresetFormat_PDF_EXPORT_PRESETS_FORMAT;

  /**
   * Printer presets.
   */
  readonly PRINTER_PRESETS_FORMAT: ExportPresetFormat_PRINTER_PRESETS_FORMAT;
  /**
   * Printer presets.
   */
  readonly printerPresetsFormat: ExportPresetFormat_PRINTER_PRESETS_FORMAT;
  /**
   * Printer presets.
   */
  readonly printerpresetsformat: ExportPresetFormat_PRINTER_PRESETS_FORMAT;

  /**
   * Flattener presets.
   */
  readonly FLATTENER_PRESETS_FORMAT: ExportPresetFormat_FLATTENER_PRESETS_FORMAT;
  /**
   * Flattener presets.
   */
  readonly flattenerPresetsFormat: ExportPresetFormat_FLATTENER_PRESETS_FORMAT;
  /**
   * Flattener presets.
   */
  readonly flattenerpresetsformat: ExportPresetFormat_FLATTENER_PRESETS_FORMAT;

  /**
   * Document presets.
   */
  readonly DOCUMENT_PRESETS_FORMAT: ExportPresetFormat_DOCUMENT_PRESETS_FORMAT;
  /**
   * Document presets.
   */
  readonly documentPresetsFormat: ExportPresetFormat_DOCUMENT_PRESETS_FORMAT;
  /**
   * Document presets.
   */
  readonly documentpresetsformat: ExportPresetFormat_DOCUMENT_PRESETS_FORMAT;

}
