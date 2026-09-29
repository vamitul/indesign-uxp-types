/**
 * TextTypeAlignments.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __TextTypeAlignments: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface TextTypeAlignments extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<TextTypeAlignments>): boolean;

  /**
   * @internal **WARNING:** `__TextTypeAlignments` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__TextTypeAlignments]: never;
}


/**
 * Aligns the ascender to the path (not the path's stroke).
 */
interface TextTypeAlignments_ASCENDER_TEXT_ALIGNMENT extends TextTypeAlignments {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952538995;
}

/**
 * Aligns descender to the path (not the path's stroke). 
 */
interface TextTypeAlignments_DESCENDER_TEXT_ALIGNMENT extends TextTypeAlignments {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952539763;
}

/**
 * Aligns the midpoint between the ascender and the descender to the path (not the path's stroke).
 */
interface TextTypeAlignments_CENTER_TEXT_ALIGNMENT extends TextTypeAlignments {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952539508;
}

/**
 * The text baseline is aligned to the path (not the path's stroke).
 */
interface TextTypeAlignments_BASELINE_TEXT_ALIGNMENT extends TextTypeAlignments {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952539244;
}

/**
 * The top-edge or right-edge baseline of the em box is aligned to the path. 
 */
interface TextTypeAlignments_ABOVE_RIGHT_EM_BOX_TEXT_ALIGNMENT extends TextTypeAlignments {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952543333;
}

/**
 * The bottom-edge or left-edge baseline of the em box is aligned to the path.
 */
interface TextTypeAlignments_BELOW_LEFT_EM_BOX_TEXT_ALIGNMENT extends TextTypeAlignments {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952607333;
}

/**
 * The ideographic character face box top-edge or right-edge baseline is aligned to the path.
 */
interface TextTypeAlignments_ABOVE_RIGHT_ICF_BOX_TEXT_ALIGNMENT extends TextTypeAlignments {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952543337;
}

/**
 * The ideographic character face box bottom-edge or left-edge baseline is aligned to the path.
 */
interface TextTypeAlignments_BELOW_LEFT_ICF_BOX_TEXT_ALIGNMENT extends TextTypeAlignments {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952607337;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The text alignment relative to the path.
 */
export declare namespace TextTypeAlignments {
/**
 * Aligns the ascender to the path (not the path's stroke).
 */
type ASCENDER_TEXT_ALIGNMENT = TextTypeAlignments_ASCENDER_TEXT_ALIGNMENT;

/**
 * Aligns descender to the path (not the path's stroke). 
 */
type DESCENDER_TEXT_ALIGNMENT = TextTypeAlignments_DESCENDER_TEXT_ALIGNMENT;

/**
 * Aligns the midpoint between the ascender and the descender to the path (not the path's stroke).
 */
type CENTER_TEXT_ALIGNMENT = TextTypeAlignments_CENTER_TEXT_ALIGNMENT;

/**
 * The text baseline is aligned to the path (not the path's stroke).
 */
type BASELINE_TEXT_ALIGNMENT = TextTypeAlignments_BASELINE_TEXT_ALIGNMENT;

/**
 * The top-edge or right-edge baseline of the em box is aligned to the path. 
 */
type ABOVE_RIGHT_EM_BOX_TEXT_ALIGNMENT = TextTypeAlignments_ABOVE_RIGHT_EM_BOX_TEXT_ALIGNMENT;

/**
 * The bottom-edge or left-edge baseline of the em box is aligned to the path.
 */
type BELOW_LEFT_EM_BOX_TEXT_ALIGNMENT = TextTypeAlignments_BELOW_LEFT_EM_BOX_TEXT_ALIGNMENT;

/**
 * The ideographic character face box top-edge or right-edge baseline is aligned to the path.
 */
type ABOVE_RIGHT_ICF_BOX_TEXT_ALIGNMENT = TextTypeAlignments_ABOVE_RIGHT_ICF_BOX_TEXT_ALIGNMENT;

/**
 * The ideographic character face box bottom-edge or left-edge baseline is aligned to the path.
 */
type BELOW_LEFT_ICF_BOX_TEXT_ALIGNMENT = TextTypeAlignments_BELOW_LEFT_ICF_BOX_TEXT_ALIGNMENT;

}
/**
 * The text alignment relative to the path.
 */
export declare const TextTypeAlignments: typeof Enumeration & {

  /**
   * Aligns the ascender to the path (not the path's stroke).
   */
  readonly ASCENDER_TEXT_ALIGNMENT: TextTypeAlignments_ASCENDER_TEXT_ALIGNMENT;
  /**
   * Aligns the ascender to the path (not the path's stroke).
   */
  readonly ascenderTextAlignment: TextTypeAlignments_ASCENDER_TEXT_ALIGNMENT;
  /**
   * Aligns the ascender to the path (not the path's stroke).
   */
  readonly ascendertextalignment: TextTypeAlignments_ASCENDER_TEXT_ALIGNMENT;

  /**
   * Aligns descender to the path (not the path's stroke). 
   */
  readonly DESCENDER_TEXT_ALIGNMENT: TextTypeAlignments_DESCENDER_TEXT_ALIGNMENT;
  /**
   * Aligns descender to the path (not the path's stroke). 
   */
  readonly descenderTextAlignment: TextTypeAlignments_DESCENDER_TEXT_ALIGNMENT;
  /**
   * Aligns descender to the path (not the path's stroke). 
   */
  readonly descendertextalignment: TextTypeAlignments_DESCENDER_TEXT_ALIGNMENT;

  /**
   * Aligns the midpoint between the ascender and the descender to the path (not the path's stroke).
   */
  readonly CENTER_TEXT_ALIGNMENT: TextTypeAlignments_CENTER_TEXT_ALIGNMENT;
  /**
   * Aligns the midpoint between the ascender and the descender to the path (not the path's stroke).
   */
  readonly centerTextAlignment: TextTypeAlignments_CENTER_TEXT_ALIGNMENT;
  /**
   * Aligns the midpoint between the ascender and the descender to the path (not the path's stroke).
   */
  readonly centertextalignment: TextTypeAlignments_CENTER_TEXT_ALIGNMENT;

  /**
   * The text baseline is aligned to the path (not the path's stroke).
   */
  readonly BASELINE_TEXT_ALIGNMENT: TextTypeAlignments_BASELINE_TEXT_ALIGNMENT;
  /**
   * The text baseline is aligned to the path (not the path's stroke).
   */
  readonly baselineTextAlignment: TextTypeAlignments_BASELINE_TEXT_ALIGNMENT;
  /**
   * The text baseline is aligned to the path (not the path's stroke).
   */
  readonly baselinetextalignment: TextTypeAlignments_BASELINE_TEXT_ALIGNMENT;

  /**
   * The top-edge or right-edge baseline of the em box is aligned to the path. 
   */
  readonly ABOVE_RIGHT_EM_BOX_TEXT_ALIGNMENT: TextTypeAlignments_ABOVE_RIGHT_EM_BOX_TEXT_ALIGNMENT;
  /**
   * The top-edge or right-edge baseline of the em box is aligned to the path. 
   */
  readonly aboveRightEmBoxTextAlignment: TextTypeAlignments_ABOVE_RIGHT_EM_BOX_TEXT_ALIGNMENT;
  /**
   * The top-edge or right-edge baseline of the em box is aligned to the path. 
   */
  readonly aboverightemboxtextalignment: TextTypeAlignments_ABOVE_RIGHT_EM_BOX_TEXT_ALIGNMENT;

  /**
   * The bottom-edge or left-edge baseline of the em box is aligned to the path.
   */
  readonly BELOW_LEFT_EM_BOX_TEXT_ALIGNMENT: TextTypeAlignments_BELOW_LEFT_EM_BOX_TEXT_ALIGNMENT;
  /**
   * The bottom-edge or left-edge baseline of the em box is aligned to the path.
   */
  readonly belowLeftEmBoxTextAlignment: TextTypeAlignments_BELOW_LEFT_EM_BOX_TEXT_ALIGNMENT;
  /**
   * The bottom-edge or left-edge baseline of the em box is aligned to the path.
   */
  readonly belowleftemboxtextalignment: TextTypeAlignments_BELOW_LEFT_EM_BOX_TEXT_ALIGNMENT;

  /**
   * The ideographic character face box top-edge or right-edge baseline is aligned to the path.
   */
  readonly ABOVE_RIGHT_ICF_BOX_TEXT_ALIGNMENT: TextTypeAlignments_ABOVE_RIGHT_ICF_BOX_TEXT_ALIGNMENT;
  /**
   * The ideographic character face box top-edge or right-edge baseline is aligned to the path.
   */
  readonly aboveRightIcfBoxTextAlignment: TextTypeAlignments_ABOVE_RIGHT_ICF_BOX_TEXT_ALIGNMENT;
  /**
   * The ideographic character face box top-edge or right-edge baseline is aligned to the path.
   */
  readonly aboverighticfboxtextalignment: TextTypeAlignments_ABOVE_RIGHT_ICF_BOX_TEXT_ALIGNMENT;

  /**
   * The ideographic character face box bottom-edge or left-edge baseline is aligned to the path.
   */
  readonly BELOW_LEFT_ICF_BOX_TEXT_ALIGNMENT: TextTypeAlignments_BELOW_LEFT_ICF_BOX_TEXT_ALIGNMENT;
  /**
   * The ideographic character face box bottom-edge or left-edge baseline is aligned to the path.
   */
  readonly belowLeftIcfBoxTextAlignment: TextTypeAlignments_BELOW_LEFT_ICF_BOX_TEXT_ALIGNMENT;
  /**
   * The ideographic character face box bottom-edge or left-edge baseline is aligned to the path.
   */
  readonly belowlefticfboxtextalignment: TextTypeAlignments_BELOW_LEFT_ICF_BOX_TEXT_ALIGNMENT;

}
