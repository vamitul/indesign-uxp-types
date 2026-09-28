/**
 * Trapping.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __Trapping: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface Trapping extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<Trapping>): boolean;

  /**
   * @internal **WARNING:** `__Trapping` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__Trapping]: never;
}


/**
 * No trapping.
 */
interface Trapping_OFF extends Trapping {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1330005536;
}

/**
 * Application built-in.
 */
interface Trapping_APPLICATION_BUILTIN extends Trapping {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1114199152;
}

/**
 * Adobe in-RIP.
 */
interface Trapping_ADOBE_INRIP extends Trapping {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1919512660;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which trapping engine handles the job — none, InDesign's built-in trapping, or Adobe In-RIP
 * trapping.
 */
export declare namespace Trapping {
/**
 * No trapping.
 */
type OFF = Trapping_OFF;

/**
 * Application built-in.
 */
type APPLICATION_BUILTIN = Trapping_APPLICATION_BUILTIN;

/**
 * Adobe in-RIP.
 */
type ADOBE_INRIP = Trapping_ADOBE_INRIP;

}
/**
 * Which trapping engine handles the job — none, InDesign's built-in trapping, or Adobe In-RIP
 * trapping.
 */
export declare const Trapping: typeof Enumeration & {

  /**
   * No trapping.
   */
  readonly OFF: Trapping_OFF;
  /**
   * No trapping.
   */
  readonly off: Trapping_OFF;

  /**
   * Application built-in.
   */
  readonly APPLICATION_BUILTIN: Trapping_APPLICATION_BUILTIN;
  /**
   * Application built-in.
   */
  readonly applicationBuiltin: Trapping_APPLICATION_BUILTIN;
  /**
   * Application built-in.
   */
  readonly applicationbuiltin: Trapping_APPLICATION_BUILTIN;

  /**
   * Adobe in-RIP.
   */
  readonly ADOBE_INRIP: Trapping_ADOBE_INRIP;
  /**
   * Adobe in-RIP.
   */
  readonly adobeInrip: Trapping_ADOBE_INRIP;
  /**
   * Adobe in-RIP.
   */
  readonly adobeinrip: Trapping_ADOBE_INRIP;

}
