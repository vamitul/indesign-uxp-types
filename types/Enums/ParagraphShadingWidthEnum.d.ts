/**
 * ParagraphShadingWidthEnum.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ParagraphShadingWidthEnum: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ParagraphShadingWidthEnum extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ParagraphShadingWidthEnum>): boolean;

  /**
   * @internal **WARNING:** `__ParagraphShadingWidthEnum` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ParagraphShadingWidthEnum]: never;
}


/**
 * Makes the paragraph shading based on width of lines of text in the paragraph.
 */
interface ParagraphShadingWidthEnum_TEXT_WIDTH extends ParagraphShadingWidthEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886681207;
}

/**
 * Makes the paragraph shading based on width of the column.
 */
interface ParagraphShadingWidthEnum_COLUMN_WIDTH extends ParagraphShadingWidthEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1265399652;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for specifying basis of the width of the paragraph shading.
 */
export declare namespace ParagraphShadingWidthEnum {
/**
 * Makes the paragraph shading based on width of lines of text in the paragraph.
 */
type TEXT_WIDTH = ParagraphShadingWidthEnum_TEXT_WIDTH;

/**
 * Makes the paragraph shading based on width of the column.
 */
type COLUMN_WIDTH = ParagraphShadingWidthEnum_COLUMN_WIDTH;

}
/**
 * Options for specifying basis of the width of the paragraph shading.
 */
export declare const ParagraphShadingWidthEnum: typeof Enumeration & {

  /**
   * Makes the paragraph shading based on width of lines of text in the paragraph.
   */
  readonly TEXT_WIDTH: ParagraphShadingWidthEnum_TEXT_WIDTH;
  /**
   * Makes the paragraph shading based on width of lines of text in the paragraph.
   */
  readonly textWidth: ParagraphShadingWidthEnum_TEXT_WIDTH;
  /**
   * Makes the paragraph shading based on width of lines of text in the paragraph.
   */
  readonly textwidth: ParagraphShadingWidthEnum_TEXT_WIDTH;

  /**
   * Makes the paragraph shading based on width of the column.
   */
  readonly COLUMN_WIDTH: ParagraphShadingWidthEnum_COLUMN_WIDTH;
  /**
   * Makes the paragraph shading based on width of the column.
   */
  readonly columnWidth: ParagraphShadingWidthEnum_COLUMN_WIDTH;
  /**
   * Makes the paragraph shading based on width of the column.
   */
  readonly columnwidth: ParagraphShadingWidthEnum_COLUMN_WIDTH;

}
