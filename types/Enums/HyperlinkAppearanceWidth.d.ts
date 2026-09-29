/**
 * HyperlinkAppearanceWidth.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __HyperlinkAppearanceWidth: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface HyperlinkAppearanceWidth extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<HyperlinkAppearanceWidth>): boolean;

  /**
   * @internal **WARNING:** `__HyperlinkAppearanceWidth` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__HyperlinkAppearanceWidth]: never;
}


/**
 * Uses a thin border.
 */
interface HyperlinkAppearanceWidth_THIN extends HyperlinkAppearanceWidth {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952999790;
}

/**
 * Uses a medium border.
 */
interface HyperlinkAppearanceWidth_MEDIUM extends HyperlinkAppearanceWidth {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701727588;
}

/**
 * Uses a thick border.
 */
interface HyperlinkAppearanceWidth_THICK extends HyperlinkAppearanceWidth {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952999787;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Hyperlink border weight options.
 */
export declare namespace HyperlinkAppearanceWidth {
/**
 * Uses a thin border.
 */
type THIN = HyperlinkAppearanceWidth_THIN;

/**
 * Uses a medium border.
 */
type MEDIUM = HyperlinkAppearanceWidth_MEDIUM;

/**
 * Uses a thick border.
 */
type THICK = HyperlinkAppearanceWidth_THICK;

}
/**
 * Hyperlink border weight options.
 */
export declare const HyperlinkAppearanceWidth: typeof Enumeration & {

  /**
   * Uses a thin border.
   */
  readonly THIN: HyperlinkAppearanceWidth_THIN;
  /**
   * Uses a thin border.
   */
  readonly thin: HyperlinkAppearanceWidth_THIN;

  /**
   * Uses a medium border.
   */
  readonly MEDIUM: HyperlinkAppearanceWidth_MEDIUM;
  /**
   * Uses a medium border.
   */
  readonly medium: HyperlinkAppearanceWidth_MEDIUM;

  /**
   * Uses a thick border.
   */
  readonly THICK: HyperlinkAppearanceWidth_THICK;
  /**
   * Uses a thick border.
   */
  readonly thick: HyperlinkAppearanceWidth_THICK;

}
