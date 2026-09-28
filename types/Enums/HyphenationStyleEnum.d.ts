/**
 * HyphenationStyleEnum.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __HyphenationStyleEnum: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface HyphenationStyleEnum extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<HyphenationStyleEnum>): boolean;

  /**
   * @internal **WARNING:** `__HyphenationStyleEnum` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__HyphenationStyleEnum]: never;
}


/**
 * Hyphenates at all possible hyphenation points.
 */
interface HyphenationStyleEnum_HYPH_ALL extends HyphenationStyleEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684106348;
}

/**
 * Hyphenates at all but unaesthetic hyphenation points.
 */
interface HyphenationStyleEnum_HYPH_ALL_BUT_UNAESTHETIC extends HyphenationStyleEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684103797;
}

/**
 * Hyphenates at aesthetic hyphenation points.
 */
interface HyphenationStyleEnum_HYPH_AESTHETIC extends HyphenationStyleEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684104563;
}

/**
 * Hyphenates at preferred aesthetic hyphenation points.
 */
interface HyphenationStyleEnum_HYPH_PREFERRED_AESTHETIC extends HyphenationStyleEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1685086565;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Provider hyphenation styles. Currently only supported by the Duden hyphenation provider.
 */
export declare namespace HyphenationStyleEnum {
/**
 * Hyphenates at all possible hyphenation points.
 */
type HYPH_ALL = HyphenationStyleEnum_HYPH_ALL;

/**
 * Hyphenates at all but unaesthetic hyphenation points.
 */
type HYPH_ALL_BUT_UNAESTHETIC = HyphenationStyleEnum_HYPH_ALL_BUT_UNAESTHETIC;

/**
 * Hyphenates at aesthetic hyphenation points.
 */
type HYPH_AESTHETIC = HyphenationStyleEnum_HYPH_AESTHETIC;

/**
 * Hyphenates at preferred aesthetic hyphenation points.
 */
type HYPH_PREFERRED_AESTHETIC = HyphenationStyleEnum_HYPH_PREFERRED_AESTHETIC;

}
/**
 * Provider hyphenation styles. Currently only supported by the Duden hyphenation provider.
 */
export declare const HyphenationStyleEnum: typeof Enumeration & {

  /**
   * Hyphenates at all possible hyphenation points.
   */
  readonly HYPH_ALL: HyphenationStyleEnum_HYPH_ALL;
  /**
   * Hyphenates at all possible hyphenation points.
   */
  readonly hyphAll: HyphenationStyleEnum_HYPH_ALL;
  /**
   * Hyphenates at all possible hyphenation points.
   */
  readonly hyphall: HyphenationStyleEnum_HYPH_ALL;

  /**
   * Hyphenates at all but unaesthetic hyphenation points.
   */
  readonly HYPH_ALL_BUT_UNAESTHETIC: HyphenationStyleEnum_HYPH_ALL_BUT_UNAESTHETIC;
  /**
   * Hyphenates at all but unaesthetic hyphenation points.
   */
  readonly hyphAllButUnaesthetic: HyphenationStyleEnum_HYPH_ALL_BUT_UNAESTHETIC;
  /**
   * Hyphenates at all but unaesthetic hyphenation points.
   */
  readonly hyphallbutunaesthetic: HyphenationStyleEnum_HYPH_ALL_BUT_UNAESTHETIC;

  /**
   * Hyphenates at aesthetic hyphenation points.
   */
  readonly HYPH_AESTHETIC: HyphenationStyleEnum_HYPH_AESTHETIC;
  /**
   * Hyphenates at aesthetic hyphenation points.
   */
  readonly hyphAesthetic: HyphenationStyleEnum_HYPH_AESTHETIC;
  /**
   * Hyphenates at aesthetic hyphenation points.
   */
  readonly hyphaesthetic: HyphenationStyleEnum_HYPH_AESTHETIC;

  /**
   * Hyphenates at preferred aesthetic hyphenation points.
   */
  readonly HYPH_PREFERRED_AESTHETIC: HyphenationStyleEnum_HYPH_PREFERRED_AESTHETIC;
  /**
   * Hyphenates at preferred aesthetic hyphenation points.
   */
  readonly hyphPreferredAesthetic: HyphenationStyleEnum_HYPH_PREFERRED_AESTHETIC;
  /**
   * Hyphenates at preferred aesthetic hyphenation points.
   */
  readonly hyphpreferredaesthetic: HyphenationStyleEnum_HYPH_PREFERRED_AESTHETIC;

}
