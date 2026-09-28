/**
 * RulerOrigin.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __RulerOrigin: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface RulerOrigin extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<RulerOrigin>): boolean;

  /**
   * @internal **WARNING:** `__RulerOrigin` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__RulerOrigin]: never;
}


/**
 * The zero point is at the top-left corner of the spread and the ruler increments continuously across all pages of the spread. 
 */
interface RulerOrigin_SPREAD_ORIGIN extends RulerOrigin {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1380143983;
}

/**
 * The top-left corner of each page is a new zero point on the horizontal ruler.
 */
interface RulerOrigin_PAGE_ORIGIN extends RulerOrigin {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1380143215;
}

/**
 * The zero point is at the top-left corner of the left-most page and at the top of the
 * binding spine.
 *
 * The horizontal ruler measures from the leftmost page to the binding edge, and from the
 * binding spine through the right edge of the right-most page. Also locks the zero point
 * and prevents manual overrides.
 */
interface RulerOrigin_SPINE_ORIGIN extends RulerOrigin {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1380143984;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Where the rulers' zero point sits — the spread, each page, or the binding spine.
 */
export declare namespace RulerOrigin {
/**
 * The zero point is at the top-left corner of the spread and the ruler increments continuously across all pages of the spread. 
 */
type SPREAD_ORIGIN = RulerOrigin_SPREAD_ORIGIN;

/**
 * The top-left corner of each page is a new zero point on the horizontal ruler.
 */
type PAGE_ORIGIN = RulerOrigin_PAGE_ORIGIN;

/**
 * The zero point is at the top-left corner of the left-most page and at the top of the
 * binding spine.
 *
 * The horizontal ruler measures from the leftmost page to the binding edge, and from the
 * binding spine through the right edge of the right-most page. Also locks the zero point
 * and prevents manual overrides.
 */
type SPINE_ORIGIN = RulerOrigin_SPINE_ORIGIN;

}
/**
 * Where the rulers' zero point sits — the spread, each page, or the binding spine.
 */
export declare const RulerOrigin: typeof Enumeration & {

  /**
   * The zero point is at the top-left corner of the spread and the ruler increments continuously across all pages of the spread. 
   */
  readonly SPREAD_ORIGIN: RulerOrigin_SPREAD_ORIGIN;
  /**
   * The zero point is at the top-left corner of the spread and the ruler increments continuously across all pages of the spread. 
   */
  readonly spreadOrigin: RulerOrigin_SPREAD_ORIGIN;
  /**
   * The zero point is at the top-left corner of the spread and the ruler increments continuously across all pages of the spread. 
   */
  readonly spreadorigin: RulerOrigin_SPREAD_ORIGIN;

  /**
   * The top-left corner of each page is a new zero point on the horizontal ruler.
   */
  readonly PAGE_ORIGIN: RulerOrigin_PAGE_ORIGIN;
  /**
   * The top-left corner of each page is a new zero point on the horizontal ruler.
   */
  readonly pageOrigin: RulerOrigin_PAGE_ORIGIN;
  /**
   * The top-left corner of each page is a new zero point on the horizontal ruler.
   */
  readonly pageorigin: RulerOrigin_PAGE_ORIGIN;

  /**
   * The zero point is at the top-left corner of the left-most page and at the top of the
   * binding spine.
   *
   * The horizontal ruler measures from the leftmost page to the binding edge, and from the
   * binding spine through the right edge of the right-most page. Also locks the zero point
   * and prevents manual overrides.
   */
  readonly SPINE_ORIGIN: RulerOrigin_SPINE_ORIGIN;
  /**
   * The zero point is at the top-left corner of the left-most page and at the top of the
   * binding spine.
   *
   * The horizontal ruler measures from the leftmost page to the binding edge, and from the
   * binding spine through the right edge of the right-most page. Also locks the zero point
   * and prevents manual overrides.
   */
  readonly spineOrigin: RulerOrigin_SPINE_ORIGIN;
  /**
   * The zero point is at the top-left corner of the left-most page and at the top of the
   * binding spine.
   *
   * The horizontal ruler measures from the leftmost page to the binding edge, and from the
   * binding spine through the right edge of the right-most page. Also locks the zero point
   * and prevents manual overrides.
   */
  readonly spineorigin: RulerOrigin_SPINE_ORIGIN;

}
