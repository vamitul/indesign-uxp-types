/**
 * GuideTypeOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __GuideTypeOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface GuideTypeOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<GuideTypeOptions>): boolean;

  /**
   * @internal **WARNING:** `__GuideTypeOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__GuideTypeOptions]: never;
}


/**
 * Ruler guide (default).
 */
interface GuideTypeOptions_RULER extends GuideTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1735618160;
}

/**
 * Liquid guide.
 */
interface GuideTypeOptions_LIQUID extends GuideTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1735617635;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Guide type options for ruler guides.
 */
export declare namespace GuideTypeOptions {
/**
 * Ruler guide (default).
 */
type RULER = GuideTypeOptions_RULER;

/**
 * Liquid guide.
 */
type LIQUID = GuideTypeOptions_LIQUID;

}
/**
 * Guide type options for ruler guides.
 */
export declare const GuideTypeOptions: typeof Enumeration & {

  /**
   * Ruler guide (default).
   */
  readonly RULER: GuideTypeOptions_RULER;
  /**
   * Ruler guide (default).
   */
  readonly ruler: GuideTypeOptions_RULER;

  /**
   * Liquid guide.
   */
  readonly LIQUID: GuideTypeOptions_LIQUID;
  /**
   * Liquid guide.
   */
  readonly liquid: GuideTypeOptions_LIQUID;

}
