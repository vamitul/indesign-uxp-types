/**
 * HyperlinkAppearanceHighlight.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __HyperlinkAppearanceHighlight: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface HyperlinkAppearanceHighlight extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<HyperlinkAppearanceHighlight>): boolean;

  /**
   * @internal **WARNING:** `__HyperlinkAppearanceHighlight` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__HyperlinkAppearanceHighlight]: never;
}


/**
 * Does not highlight the hyperlink.
 */
interface HyperlinkAppearanceHighlight_NONE extends HyperlinkAppearanceHighlight {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * Highlights the hyperlink fill color.
 */
interface HyperlinkAppearanceHighlight_INVERT extends HyperlinkAppearanceHighlight {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1853256308;
}

/**
 * Highlights the hyperlink border.
 */
interface HyperlinkAppearanceHighlight_OUTLINE extends HyperlinkAppearanceHighlight {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1869900910;
}

/**
 * Highlights the hyperlink border inset.
 */
interface HyperlinkAppearanceHighlight_INSET extends HyperlinkAppearanceHighlight {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1853056372;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for highlighting the hyperlink when selected.
 */
export declare namespace HyperlinkAppearanceHighlight {
/**
 * Does not highlight the hyperlink.
 */
type NONE = HyperlinkAppearanceHighlight_NONE;

/**
 * Highlights the hyperlink fill color.
 */
type INVERT = HyperlinkAppearanceHighlight_INVERT;

/**
 * Highlights the hyperlink border.
 */
type OUTLINE = HyperlinkAppearanceHighlight_OUTLINE;

/**
 * Highlights the hyperlink border inset.
 */
type INSET = HyperlinkAppearanceHighlight_INSET;

}
/**
 * Options for highlighting the hyperlink when selected.
 */
export declare const HyperlinkAppearanceHighlight: typeof Enumeration & {

  /**
   * Does not highlight the hyperlink.
   */
  readonly NONE: HyperlinkAppearanceHighlight_NONE;
  /**
   * Does not highlight the hyperlink.
   */
  readonly none: HyperlinkAppearanceHighlight_NONE;

  /**
   * Highlights the hyperlink fill color.
   */
  readonly INVERT: HyperlinkAppearanceHighlight_INVERT;
  /**
   * Highlights the hyperlink fill color.
   */
  readonly invert: HyperlinkAppearanceHighlight_INVERT;

  /**
   * Highlights the hyperlink border.
   */
  readonly OUTLINE: HyperlinkAppearanceHighlight_OUTLINE;
  /**
   * Highlights the hyperlink border.
   */
  readonly outline: HyperlinkAppearanceHighlight_OUTLINE;

  /**
   * Highlights the hyperlink border inset.
   */
  readonly INSET: HyperlinkAppearanceHighlight_INSET;
  /**
   * Highlights the hyperlink border inset.
   */
  readonly inset: HyperlinkAppearanceHighlight_INSET;

}
