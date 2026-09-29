/**
 * ImportFormat.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ImportFormat: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ImportFormat extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ImportFormat>): boolean;

  /**
   * @internal **WARNING:** `__ImportFormat` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ImportFormat]: never;
}


/**
 * Imports character styles.
 */
interface ImportFormat_CHARACTER_STYLES_FORMAT extends ImportFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1131565940;
}

/**
 * Imports paragraph styles.
 */
interface ImportFormat_PARAGRAPH_STYLES_FORMAT extends ImportFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1885885300;
}

/**
 * Imports character and paragraph styles.
 */
interface ImportFormat_TEXT_STYLES_FORMAT extends ImportFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1668305780;
}

/**
 * Imports table of contents styles.
 */
interface ImportFormat_TOC_STYLES_FORMAT extends ImportFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1415795572;
}

/**
 * Imports object styles.
 */
interface ImportFormat_OBJECT_STYLES_FORMAT extends ImportFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1332368244;
}

/**
 * Imports stroke styles.
 */
interface ImportFormat_STROKE_STYLES_FORMAT extends ImportFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1817408620;
}

/**
 * Imports table styles.
 */
interface ImportFormat_TABLE_STYLES_FORMAT extends ImportFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700033396;
}

/**
 * Imports cell styles.
 */
interface ImportFormat_CELL_STYLES_FORMAT extends ImportFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1698919284;
}

/**
 * Imports table and cell styles.
 */
interface ImportFormat_TABLE_AND_CELL_STYLES_FORMAT extends ImportFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700021107;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Style import options.
 */
export declare namespace ImportFormat {
/**
 * Imports character styles.
 */
type CHARACTER_STYLES_FORMAT = ImportFormat_CHARACTER_STYLES_FORMAT;

/**
 * Imports paragraph styles.
 */
type PARAGRAPH_STYLES_FORMAT = ImportFormat_PARAGRAPH_STYLES_FORMAT;

/**
 * Imports character and paragraph styles.
 */
type TEXT_STYLES_FORMAT = ImportFormat_TEXT_STYLES_FORMAT;

/**
 * Imports table of contents styles.
 */
type TOC_STYLES_FORMAT = ImportFormat_TOC_STYLES_FORMAT;

/**
 * Imports object styles.
 */
type OBJECT_STYLES_FORMAT = ImportFormat_OBJECT_STYLES_FORMAT;

/**
 * Imports stroke styles.
 */
type STROKE_STYLES_FORMAT = ImportFormat_STROKE_STYLES_FORMAT;

/**
 * Imports table styles.
 */
type TABLE_STYLES_FORMAT = ImportFormat_TABLE_STYLES_FORMAT;

/**
 * Imports cell styles.
 */
type CELL_STYLES_FORMAT = ImportFormat_CELL_STYLES_FORMAT;

/**
 * Imports table and cell styles.
 */
type TABLE_AND_CELL_STYLES_FORMAT = ImportFormat_TABLE_AND_CELL_STYLES_FORMAT;

}
/**
 * Style import options.
 */
export declare const ImportFormat: typeof Enumeration & {

  /**
   * Imports character styles.
   */
  readonly CHARACTER_STYLES_FORMAT: ImportFormat_CHARACTER_STYLES_FORMAT;
  /**
   * Imports character styles.
   */
  readonly characterStylesFormat: ImportFormat_CHARACTER_STYLES_FORMAT;
  /**
   * Imports character styles.
   */
  readonly characterstylesformat: ImportFormat_CHARACTER_STYLES_FORMAT;

  /**
   * Imports paragraph styles.
   */
  readonly PARAGRAPH_STYLES_FORMAT: ImportFormat_PARAGRAPH_STYLES_FORMAT;
  /**
   * Imports paragraph styles.
   */
  readonly paragraphStylesFormat: ImportFormat_PARAGRAPH_STYLES_FORMAT;
  /**
   * Imports paragraph styles.
   */
  readonly paragraphstylesformat: ImportFormat_PARAGRAPH_STYLES_FORMAT;

  /**
   * Imports character and paragraph styles.
   */
  readonly TEXT_STYLES_FORMAT: ImportFormat_TEXT_STYLES_FORMAT;
  /**
   * Imports character and paragraph styles.
   */
  readonly textStylesFormat: ImportFormat_TEXT_STYLES_FORMAT;
  /**
   * Imports character and paragraph styles.
   */
  readonly textstylesformat: ImportFormat_TEXT_STYLES_FORMAT;

  /**
   * Imports table of contents styles.
   */
  readonly TOC_STYLES_FORMAT: ImportFormat_TOC_STYLES_FORMAT;
  /**
   * Imports table of contents styles.
   */
  readonly tocStylesFormat: ImportFormat_TOC_STYLES_FORMAT;
  /**
   * Imports table of contents styles.
   */
  readonly tocstylesformat: ImportFormat_TOC_STYLES_FORMAT;

  /**
   * Imports object styles.
   */
  readonly OBJECT_STYLES_FORMAT: ImportFormat_OBJECT_STYLES_FORMAT;
  /**
   * Imports object styles.
   */
  readonly objectStylesFormat: ImportFormat_OBJECT_STYLES_FORMAT;
  /**
   * Imports object styles.
   */
  readonly objectstylesformat: ImportFormat_OBJECT_STYLES_FORMAT;

  /**
   * Imports stroke styles.
   */
  readonly STROKE_STYLES_FORMAT: ImportFormat_STROKE_STYLES_FORMAT;
  /**
   * Imports stroke styles.
   */
  readonly strokeStylesFormat: ImportFormat_STROKE_STYLES_FORMAT;
  /**
   * Imports stroke styles.
   */
  readonly strokestylesformat: ImportFormat_STROKE_STYLES_FORMAT;

  /**
   * Imports table styles.
   */
  readonly TABLE_STYLES_FORMAT: ImportFormat_TABLE_STYLES_FORMAT;
  /**
   * Imports table styles.
   */
  readonly tableStylesFormat: ImportFormat_TABLE_STYLES_FORMAT;
  /**
   * Imports table styles.
   */
  readonly tablestylesformat: ImportFormat_TABLE_STYLES_FORMAT;

  /**
   * Imports cell styles.
   */
  readonly CELL_STYLES_FORMAT: ImportFormat_CELL_STYLES_FORMAT;
  /**
   * Imports cell styles.
   */
  readonly cellStylesFormat: ImportFormat_CELL_STYLES_FORMAT;
  /**
   * Imports cell styles.
   */
  readonly cellstylesformat: ImportFormat_CELL_STYLES_FORMAT;

  /**
   * Imports table and cell styles.
   */
  readonly TABLE_AND_CELL_STYLES_FORMAT: ImportFormat_TABLE_AND_CELL_STYLES_FORMAT;
  /**
   * Imports table and cell styles.
   */
  readonly tableAndCellStylesFormat: ImportFormat_TABLE_AND_CELL_STYLES_FORMAT;
  /**
   * Imports table and cell styles.
   */
  readonly tableandcellstylesformat: ImportFormat_TABLE_AND_CELL_STYLES_FORMAT;

}
