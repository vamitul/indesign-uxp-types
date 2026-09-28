/**
 * ParagraphBorderBottomOriginEnum.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ParagraphBorderBottomOriginEnum: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ParagraphBorderBottomOriginEnum extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ParagraphBorderBottomOriginEnum>): boolean;

  /**
   * @internal **WARNING:** `__ParagraphBorderBottomOriginEnum` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ParagraphBorderBottomOriginEnum]: never;
}


/**
 * Makes the paragraph border bottom origin based on descent of the text in the paragraph.
 */
interface ParagraphBorderBottomOriginEnum_DESCENT_BOTTOM_ORIGIN extends ParagraphBorderBottomOriginEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886601828;
}

/**
 * Makes the paragraph border bottom origin based on baseline of the text in the paragraph.
 */
interface ParagraphBorderBottomOriginEnum_BASELINE_BOTTOM_ORIGIN extends ParagraphBorderBottomOriginEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886601826;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for specifying basis of the bottom origin of the paragraph border.
 */
export declare namespace ParagraphBorderBottomOriginEnum {
/**
 * Makes the paragraph border bottom origin based on descent of the text in the paragraph.
 */
type DESCENT_BOTTOM_ORIGIN = ParagraphBorderBottomOriginEnum_DESCENT_BOTTOM_ORIGIN;

/**
 * Makes the paragraph border bottom origin based on baseline of the text in the paragraph.
 */
type BASELINE_BOTTOM_ORIGIN = ParagraphBorderBottomOriginEnum_BASELINE_BOTTOM_ORIGIN;

}
/**
 * Options for specifying basis of the bottom origin of the paragraph border.
 */
export declare const ParagraphBorderBottomOriginEnum: typeof Enumeration & {

  /**
   * Makes the paragraph border bottom origin based on descent of the text in the paragraph.
   */
  readonly DESCENT_BOTTOM_ORIGIN: ParagraphBorderBottomOriginEnum_DESCENT_BOTTOM_ORIGIN;
  /**
   * Makes the paragraph border bottom origin based on descent of the text in the paragraph.
   */
  readonly descentBottomOrigin: ParagraphBorderBottomOriginEnum_DESCENT_BOTTOM_ORIGIN;
  /**
   * Makes the paragraph border bottom origin based on descent of the text in the paragraph.
   */
  readonly descentbottomorigin: ParagraphBorderBottomOriginEnum_DESCENT_BOTTOM_ORIGIN;

  /**
   * Makes the paragraph border bottom origin based on baseline of the text in the paragraph.
   */
  readonly BASELINE_BOTTOM_ORIGIN: ParagraphBorderBottomOriginEnum_BASELINE_BOTTOM_ORIGIN;
  /**
   * Makes the paragraph border bottom origin based on baseline of the text in the paragraph.
   */
  readonly baselineBottomOrigin: ParagraphBorderBottomOriginEnum_BASELINE_BOTTOM_ORIGIN;
  /**
   * Makes the paragraph border bottom origin based on baseline of the text in the paragraph.
   */
  readonly baselinebottomorigin: ParagraphBorderBottomOriginEnum_BASELINE_BOTTOM_ORIGIN;

}
