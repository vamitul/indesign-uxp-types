/**
 * EndCap.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __EndCap: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface EndCap extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<EndCap>): boolean;

  /**
   * @internal **WARNING:** `__EndCap` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__EndCap]: never;
}


/**
 * A squared end that stops at the path's endpoint.
 */
interface EndCap_BUTT_END_CAP extends EndCap {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1650680176;
}

/**
 * A semicircular end that extends beyond the endpoint by half the stroke-width.
 */
interface EndCap_ROUND_END_CAP extends EndCap {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1919115632;
}

/**
 * A squared end that extends beyond the endpoint by half the stroke-width.
 */
interface EndCap_PROJECTING_END_CAP extends EndCap {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886020464;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * End cap types.
 */
export declare namespace EndCap {
/**
 * A squared end that stops at the path's endpoint.
 */
type BUTT_END_CAP = EndCap_BUTT_END_CAP;

/**
 * A semicircular end that extends beyond the endpoint by half the stroke-width.
 */
type ROUND_END_CAP = EndCap_ROUND_END_CAP;

/**
 * A squared end that extends beyond the endpoint by half the stroke-width.
 */
type PROJECTING_END_CAP = EndCap_PROJECTING_END_CAP;

}
/**
 * End cap types.
 */
export declare const EndCap: typeof Enumeration & {

  /**
   * A squared end that stops at the path's endpoint.
   */
  readonly BUTT_END_CAP: EndCap_BUTT_END_CAP;
  /**
   * A squared end that stops at the path's endpoint.
   */
  readonly buttEndCap: EndCap_BUTT_END_CAP;
  /**
   * A squared end that stops at the path's endpoint.
   */
  readonly buttendcap: EndCap_BUTT_END_CAP;

  /**
   * A semicircular end that extends beyond the endpoint by half the stroke-width.
   */
  readonly ROUND_END_CAP: EndCap_ROUND_END_CAP;
  /**
   * A semicircular end that extends beyond the endpoint by half the stroke-width.
   */
  readonly roundEndCap: EndCap_ROUND_END_CAP;
  /**
   * A semicircular end that extends beyond the endpoint by half the stroke-width.
   */
  readonly roundendcap: EndCap_ROUND_END_CAP;

  /**
   * A squared end that extends beyond the endpoint by half the stroke-width.
   */
  readonly PROJECTING_END_CAP: EndCap_PROJECTING_END_CAP;
  /**
   * A squared end that extends beyond the endpoint by half the stroke-width.
   */
  readonly projectingEndCap: EndCap_PROJECTING_END_CAP;
  /**
   * A squared end that extends beyond the endpoint by half the stroke-width.
   */
  readonly projectingendcap: EndCap_PROJECTING_END_CAP;

}
