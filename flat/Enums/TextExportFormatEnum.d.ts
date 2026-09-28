/**
 * TextExportFormatEnum.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __TextExportFormatEnum: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface TextExportFormatEnum extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<TextExportFormatEnum>): boolean;

  /**
   * @internal **WARNING:** `__TextExportFormatEnum` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__TextExportFormatEnum]: never;
}


/**
 * Text with HTML tags.
 */
interface TextExportFormatEnum_HTML_TAG extends TextExportFormatEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701344364;
}

/**
 * Text with SVG tags.
 */
interface TextExportFormatEnum_SVG_TAG extends TextExportFormatEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1702065767;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether exported text uses HTML tags or SVG tags.
 */
export declare namespace TextExportFormatEnum {
/**
 * Text with HTML tags.
 */
type HTML_TAG = TextExportFormatEnum_HTML_TAG;

/**
 * Text with SVG tags.
 */
type SVG_TAG = TextExportFormatEnum_SVG_TAG;

}
/**
 * Whether exported text uses HTML tags or SVG tags.
 */
export declare const TextExportFormatEnum: typeof Enumeration & {

  /**
   * Text with HTML tags.
   */
  readonly HTML_TAG: TextExportFormatEnum_HTML_TAG;
  /**
   * Text with HTML tags.
   */
  readonly htmlTag: TextExportFormatEnum_HTML_TAG;
  /**
   * Text with HTML tags.
   */
  readonly htmltag: TextExportFormatEnum_HTML_TAG;

  /**
   * Text with SVG tags.
   */
  readonly SVG_TAG: TextExportFormatEnum_SVG_TAG;
  /**
   * Text with SVG tags.
   */
  readonly svgTag: TextExportFormatEnum_SVG_TAG;
  /**
   * Text with SVG tags.
   */
  readonly svgtag: TextExportFormatEnum_SVG_TAG;

}
