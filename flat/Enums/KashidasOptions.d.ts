/**
 * KashidasOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __KashidasOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface KashidasOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<KashidasOptions>): boolean;

  /**
   * @internal **WARNING:** `__KashidasOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__KashidasOptions]: never;
}


/**
 * Uses the default kashida setting.
 */
interface KashidasOptions_DEFAULT_KASHIDAS extends KashidasOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1801544805;
}

/**
 * Disables kashida justification.
 */
interface KashidasOptions_KASHIDAS_OFF extends KashidasOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1801547622;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether kashida justification (Arabic letter elongation) is applied when
 * justifying text.
 */
export declare namespace KashidasOptions {
/**
 * Uses the default kashida setting.
 */
type DEFAULT_KASHIDAS = KashidasOptions_DEFAULT_KASHIDAS;

/**
 * Disables kashida justification.
 */
type KASHIDAS_OFF = KashidasOptions_KASHIDAS_OFF;

}
/**
 * Whether kashida justification (Arabic letter elongation) is applied when
 * justifying text.
 */
export declare const KashidasOptions: typeof Enumeration & {

  /**
   * Uses the default kashida setting.
   */
  readonly DEFAULT_KASHIDAS: KashidasOptions_DEFAULT_KASHIDAS;
  /**
   * Uses the default kashida setting.
   */
  readonly defaultKashidas: KashidasOptions_DEFAULT_KASHIDAS;
  /**
   * Uses the default kashida setting.
   */
  readonly defaultkashidas: KashidasOptions_DEFAULT_KASHIDAS;

  /**
   * Disables kashida justification.
   */
  readonly KASHIDAS_OFF: KashidasOptions_KASHIDAS_OFF;
  /**
   * Disables kashida justification.
   */
  readonly kashidasOff: KashidasOptions_KASHIDAS_OFF;
  /**
   * Disables kashida justification.
   */
  readonly kashidasoff: KashidasOptions_KASHIDAS_OFF;

}
