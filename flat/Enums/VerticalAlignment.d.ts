/**
 * VerticalAlignment.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __VerticalAlignment: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface VerticalAlignment extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<VerticalAlignment>): boolean;

  /**
   * @internal **WARNING:** `__VerticalAlignment` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__VerticalAlignment]: never;
}


/**
 * Place the anchored object at the top of the vertical reference point.
 */
interface VerticalAlignment_TOP_ALIGN extends VerticalAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1953460256;
}

/**
 * Place the anchored object at the bottom of the vertical reference point.
 */
interface VerticalAlignment_BOTTOM_ALIGN extends VerticalAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1651471469;
}

/**
 * Place the anchored object at the vertical center of the vertical reference point.
 */
interface VerticalAlignment_CENTER_ALIGN extends VerticalAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1667591796;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The vertical alignment of an anchored object.
 */
export declare namespace VerticalAlignment {
/**
 * Place the anchored object at the top of the vertical reference point.
 */
type TOP_ALIGN = VerticalAlignment_TOP_ALIGN;

/**
 * Place the anchored object at the bottom of the vertical reference point.
 */
type BOTTOM_ALIGN = VerticalAlignment_BOTTOM_ALIGN;

/**
 * Place the anchored object at the vertical center of the vertical reference point.
 */
type CENTER_ALIGN = VerticalAlignment_CENTER_ALIGN;

}
/**
 * The vertical alignment of an anchored object.
 */
export declare const VerticalAlignment: typeof Enumeration & {

  /**
   * Place the anchored object at the top of the vertical reference point.
   */
  readonly TOP_ALIGN: VerticalAlignment_TOP_ALIGN;
  /**
   * Place the anchored object at the top of the vertical reference point.
   */
  readonly topAlign: VerticalAlignment_TOP_ALIGN;
  /**
   * Place the anchored object at the top of the vertical reference point.
   */
  readonly topalign: VerticalAlignment_TOP_ALIGN;

  /**
   * Place the anchored object at the bottom of the vertical reference point.
   */
  readonly BOTTOM_ALIGN: VerticalAlignment_BOTTOM_ALIGN;
  /**
   * Place the anchored object at the bottom of the vertical reference point.
   */
  readonly bottomAlign: VerticalAlignment_BOTTOM_ALIGN;
  /**
   * Place the anchored object at the bottom of the vertical reference point.
   */
  readonly bottomalign: VerticalAlignment_BOTTOM_ALIGN;

  /**
   * Place the anchored object at the vertical center of the vertical reference point.
   */
  readonly CENTER_ALIGN: VerticalAlignment_CENTER_ALIGN;
  /**
   * Place the anchored object at the vertical center of the vertical reference point.
   */
  readonly centerAlign: VerticalAlignment_CENTER_ALIGN;
  /**
   * Place the anchored object at the vertical center of the vertical reference point.
   */
  readonly centeralign: VerticalAlignment_CENTER_ALIGN;

}
