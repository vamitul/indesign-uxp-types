/**
 * ParagraphBorderEnum.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ParagraphBorderEnum: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ParagraphBorderEnum extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ParagraphBorderEnum>): boolean;

  /**
   * @internal **WARNING:** `__ParagraphBorderEnum` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ParagraphBorderEnum]: never;
}


/**
 * Makes the paragraph border based on width of lines of text in the paragraph.
 */
interface ParagraphBorderEnum_TEXT_WIDTH extends ParagraphBorderEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886681207;
}

/**
 * Makes the paragraph border based on width of the column.
 */
interface ParagraphBorderEnum_COLUMN_WIDTH extends ParagraphBorderEnum {
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
 * Options for specifying basis of the width of the paragraph border.
 */
export declare namespace ParagraphBorderEnum {
/**
 * Makes the paragraph border based on width of lines of text in the paragraph.
 */
type TEXT_WIDTH = ParagraphBorderEnum_TEXT_WIDTH;

/**
 * Makes the paragraph border based on width of the column.
 */
type COLUMN_WIDTH = ParagraphBorderEnum_COLUMN_WIDTH;

}
/**
 * Options for specifying basis of the width of the paragraph border.
 */
export declare const ParagraphBorderEnum: typeof Enumeration & {

  /**
   * Makes the paragraph border based on width of lines of text in the paragraph.
   */
  readonly TEXT_WIDTH: ParagraphBorderEnum_TEXT_WIDTH;
  /**
   * Makes the paragraph border based on width of lines of text in the paragraph.
   */
  readonly textWidth: ParagraphBorderEnum_TEXT_WIDTH;
  /**
   * Makes the paragraph border based on width of lines of text in the paragraph.
   */
  readonly textwidth: ParagraphBorderEnum_TEXT_WIDTH;

  /**
   * Makes the paragraph border based on width of the column.
   */
  readonly COLUMN_WIDTH: ParagraphBorderEnum_COLUMN_WIDTH;
  /**
   * Makes the paragraph border based on width of the column.
   */
  readonly columnWidth: ParagraphBorderEnum_COLUMN_WIDTH;
  /**
   * Makes the paragraph border based on width of the column.
   */
  readonly columnwidth: ParagraphBorderEnum_COLUMN_WIDTH;

}
