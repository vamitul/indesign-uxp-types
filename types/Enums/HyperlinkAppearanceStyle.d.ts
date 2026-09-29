/**
 * HyperlinkAppearanceStyle.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __HyperlinkAppearanceStyle: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface HyperlinkAppearanceStyle extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<HyperlinkAppearanceStyle>): boolean;

  /**
   * @internal **WARNING:** `__HyperlinkAppearanceStyle` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__HyperlinkAppearanceStyle]: never;
}


/**
 * Uses a solid stroke.
 */
interface HyperlinkAppearanceStyle_SOLID extends HyperlinkAppearanceStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936682084;
}

/**
 * Uses a dashed stroke.
 */
interface HyperlinkAppearanceStyle_DASHED extends HyperlinkAppearanceStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684108136;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Hyperlink border style options.
 */
export declare namespace HyperlinkAppearanceStyle {
/**
 * Uses a solid stroke.
 */
type SOLID = HyperlinkAppearanceStyle_SOLID;

/**
 * Uses a dashed stroke.
 */
type DASHED = HyperlinkAppearanceStyle_DASHED;

}
/**
 * Hyperlink border style options.
 */
export declare const HyperlinkAppearanceStyle: typeof Enumeration & {

  /**
   * Uses a solid stroke.
   */
  readonly SOLID: HyperlinkAppearanceStyle_SOLID;
  /**
   * Uses a solid stroke.
   */
  readonly solid: HyperlinkAppearanceStyle_SOLID;

  /**
   * Uses a dashed stroke.
   */
  readonly DASHED: HyperlinkAppearanceStyle_DASHED;
  /**
   * Uses a dashed stroke.
   */
  readonly dashed: HyperlinkAppearanceStyle_DASHED;

}
