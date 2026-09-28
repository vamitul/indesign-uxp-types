/**
 * ParagraphShadingTopOriginEnum.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ParagraphShadingTopOriginEnum: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ParagraphShadingTopOriginEnum extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ParagraphShadingTopOriginEnum>): boolean;

  /**
   * @internal **WARNING:** `__ParagraphShadingTopOriginEnum` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ParagraphShadingTopOriginEnum]: never;
}


/**
 * Makes the paragraph shading top origin based on ascent of the text in the paragraph.
 */
interface ParagraphShadingTopOriginEnum_ASCENT_TOP_ORIGIN extends ParagraphShadingTopOriginEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886606433;
}

/**
 * Makes the paragraph shading top origin based on baseline of the text in the paragraph.
 */
interface ParagraphShadingTopOriginEnum_BASELINE_TOP_ORIGIN extends ParagraphShadingTopOriginEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886606434;
}

/**
 * Makes the paragraph shading top origin based on leading of the text in the paragraph.
 */
interface ParagraphShadingTopOriginEnum_LEADING_TOP_ORIGIN extends ParagraphShadingTopOriginEnum {
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
 * Options for specifying basis of the top origin of the paragraph shading.
 */
export declare namespace ParagraphShadingTopOriginEnum {
/**
 * Makes the paragraph shading top origin based on ascent of the text in the paragraph.
 */
type ASCENT_TOP_ORIGIN = ParagraphShadingTopOriginEnum_ASCENT_TOP_ORIGIN;

/**
 * Makes the paragraph shading top origin based on baseline of the text in the paragraph.
 */
type BASELINE_TOP_ORIGIN = ParagraphShadingTopOriginEnum_BASELINE_TOP_ORIGIN;

/**
 * Makes the paragraph shading top origin based on leading of the text in the paragraph.
 */
type LEADING_TOP_ORIGIN = ParagraphShadingTopOriginEnum_LEADING_TOP_ORIGIN;

}
/**
 * Options for specifying basis of the top origin of the paragraph shading.
 */
export declare const ParagraphShadingTopOriginEnum: typeof Enumeration & {

  /**
   * Makes the paragraph shading top origin based on ascent of the text in the paragraph.
   */
  readonly ASCENT_TOP_ORIGIN: ParagraphShadingTopOriginEnum_ASCENT_TOP_ORIGIN;
  /**
   * Makes the paragraph shading top origin based on ascent of the text in the paragraph.
   */
  readonly ascentTopOrigin: ParagraphShadingTopOriginEnum_ASCENT_TOP_ORIGIN;
  /**
   * Makes the paragraph shading top origin based on ascent of the text in the paragraph.
   */
  readonly ascenttoporigin: ParagraphShadingTopOriginEnum_ASCENT_TOP_ORIGIN;

  /**
   * Makes the paragraph shading top origin based on baseline of the text in the paragraph.
   */
  readonly BASELINE_TOP_ORIGIN: ParagraphShadingTopOriginEnum_BASELINE_TOP_ORIGIN;
  /**
   * Makes the paragraph shading top origin based on baseline of the text in the paragraph.
   */
  readonly baselineTopOrigin: ParagraphShadingTopOriginEnum_BASELINE_TOP_ORIGIN;
  /**
   * Makes the paragraph shading top origin based on baseline of the text in the paragraph.
   */
  readonly baselinetoporigin: ParagraphShadingTopOriginEnum_BASELINE_TOP_ORIGIN;

  /**
   * Makes the paragraph shading top origin based on leading of the text in the paragraph.
   */
  readonly LEADING_TOP_ORIGIN: ParagraphShadingTopOriginEnum_LEADING_TOP_ORIGIN;
  /**
   * Makes the paragraph shading top origin based on leading of the text in the paragraph.
   */
  readonly leadingTopOrigin: ParagraphShadingTopOriginEnum_LEADING_TOP_ORIGIN;
  /**
   * Makes the paragraph shading top origin based on leading of the text in the paragraph.
   */
  readonly leadingtoporigin: ParagraphShadingTopOriginEnum_LEADING_TOP_ORIGIN;

}
