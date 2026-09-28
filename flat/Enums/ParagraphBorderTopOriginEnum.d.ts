/**
 * ParagraphBorderTopOriginEnum.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ParagraphBorderTopOriginEnum: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ParagraphBorderTopOriginEnum extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ParagraphBorderTopOriginEnum>): boolean;

  /**
   * @internal **WARNING:** `__ParagraphBorderTopOriginEnum` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ParagraphBorderTopOriginEnum]: never;
}


/**
 * Makes the paragraph border top origin based on ascent of the text in the paragraph.
 */
interface ParagraphBorderTopOriginEnum_ASCENT_TOP_ORIGIN extends ParagraphBorderTopOriginEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886606433;
}

/**
 * Makes the paragraph border top origin based on baseline of the text in the paragraph.
 */
interface ParagraphBorderTopOriginEnum_BASELINE_TOP_ORIGIN extends ParagraphBorderTopOriginEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886606434;
}

/**
 * Makes the paragraph border top origin based on leading of the text in the paragraph.
 */
interface ParagraphBorderTopOriginEnum_LEADING_TOP_ORIGIN extends ParagraphBorderTopOriginEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1885492332;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for specifying basis of the top origin of the paragraph border.
 */
export declare namespace ParagraphBorderTopOriginEnum {
/**
 * Makes the paragraph border top origin based on ascent of the text in the paragraph.
 */
type ASCENT_TOP_ORIGIN = ParagraphBorderTopOriginEnum_ASCENT_TOP_ORIGIN;

/**
 * Makes the paragraph border top origin based on baseline of the text in the paragraph.
 */
type BASELINE_TOP_ORIGIN = ParagraphBorderTopOriginEnum_BASELINE_TOP_ORIGIN;

/**
 * Makes the paragraph border top origin based on leading of the text in the paragraph.
 */
type LEADING_TOP_ORIGIN = ParagraphBorderTopOriginEnum_LEADING_TOP_ORIGIN;

}
/**
 * Options for specifying basis of the top origin of the paragraph border.
 */
export declare const ParagraphBorderTopOriginEnum: typeof Enumeration & {

  /**
   * Makes the paragraph border top origin based on ascent of the text in the paragraph.
   */
  readonly ASCENT_TOP_ORIGIN: ParagraphBorderTopOriginEnum_ASCENT_TOP_ORIGIN;
  /**
   * Makes the paragraph border top origin based on ascent of the text in the paragraph.
   */
  readonly ascentTopOrigin: ParagraphBorderTopOriginEnum_ASCENT_TOP_ORIGIN;
  /**
   * Makes the paragraph border top origin based on ascent of the text in the paragraph.
   */
  readonly ascenttoporigin: ParagraphBorderTopOriginEnum_ASCENT_TOP_ORIGIN;

  /**
   * Makes the paragraph border top origin based on baseline of the text in the paragraph.
   */
  readonly BASELINE_TOP_ORIGIN: ParagraphBorderTopOriginEnum_BASELINE_TOP_ORIGIN;
  /**
   * Makes the paragraph border top origin based on baseline of the text in the paragraph.
   */
  readonly baselineTopOrigin: ParagraphBorderTopOriginEnum_BASELINE_TOP_ORIGIN;
  /**
   * Makes the paragraph border top origin based on baseline of the text in the paragraph.
   */
  readonly baselinetoporigin: ParagraphBorderTopOriginEnum_BASELINE_TOP_ORIGIN;

  /**
   * Makes the paragraph border top origin based on leading of the text in the paragraph.
   */
  readonly LEADING_TOP_ORIGIN: ParagraphBorderTopOriginEnum_LEADING_TOP_ORIGIN;
  /**
   * Makes the paragraph border top origin based on leading of the text in the paragraph.
   */
  readonly leadingTopOrigin: ParagraphBorderTopOriginEnum_LEADING_TOP_ORIGIN;
  /**
   * Makes the paragraph border top origin based on leading of the text in the paragraph.
   */
  readonly leadingtoporigin: ParagraphBorderTopOriginEnum_LEADING_TOP_ORIGIN;

}
