/**
 * VerticalJustification.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __VerticalJustification: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface VerticalJustification extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<VerticalJustification>): boolean;

  /**
   * @internal **WARNING:** `__VerticalJustification` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__VerticalJustification]: never;
}


/**
 * Text is aligned at the top of the object.
 */
interface VerticalJustification_TOP_ALIGN extends VerticalJustification {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1953460256;
}

/**
 * Text is center aligned vertically in the object. 
 */
interface VerticalJustification_CENTER_ALIGN extends VerticalJustification {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1667591796;
}

/**
 * Text is aligned at the bottom of the object.
 */
interface VerticalJustification_BOTTOM_ALIGN extends VerticalJustification {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1651471469;
}

/**
 * Lines of text are evenly distributed vertically between the top and bottom of the object.
 */
interface VerticalJustification_JUSTIFY_ALIGN extends VerticalJustification {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1785951334;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Vertical alignment options for text.
 */
export declare namespace VerticalJustification {
/**
 * Text is aligned at the top of the object.
 */
type TOP_ALIGN = VerticalJustification_TOP_ALIGN;

/**
 * Text is center aligned vertically in the object. 
 */
type CENTER_ALIGN = VerticalJustification_CENTER_ALIGN;

/**
 * Text is aligned at the bottom of the object.
 */
type BOTTOM_ALIGN = VerticalJustification_BOTTOM_ALIGN;

/**
 * Lines of text are evenly distributed vertically between the top and bottom of the object.
 */
type JUSTIFY_ALIGN = VerticalJustification_JUSTIFY_ALIGN;

}
/**
 * Vertical alignment options for text.
 */
export declare const VerticalJustification: typeof Enumeration & {

  /**
   * Text is aligned at the top of the object.
   */
  readonly TOP_ALIGN: VerticalJustification_TOP_ALIGN;
  /**
   * Text is aligned at the top of the object.
   */
  readonly topAlign: VerticalJustification_TOP_ALIGN;
  /**
   * Text is aligned at the top of the object.
   */
  readonly topalign: VerticalJustification_TOP_ALIGN;

  /**
   * Text is center aligned vertically in the object. 
   */
  readonly CENTER_ALIGN: VerticalJustification_CENTER_ALIGN;
  /**
   * Text is center aligned vertically in the object. 
   */
  readonly centerAlign: VerticalJustification_CENTER_ALIGN;
  /**
   * Text is center aligned vertically in the object. 
   */
  readonly centeralign: VerticalJustification_CENTER_ALIGN;

  /**
   * Text is aligned at the bottom of the object.
   */
  readonly BOTTOM_ALIGN: VerticalJustification_BOTTOM_ALIGN;
  /**
   * Text is aligned at the bottom of the object.
   */
  readonly bottomAlign: VerticalJustification_BOTTOM_ALIGN;
  /**
   * Text is aligned at the bottom of the object.
   */
  readonly bottomalign: VerticalJustification_BOTTOM_ALIGN;

  /**
   * Lines of text are evenly distributed vertically between the top and bottom of the object.
   */
  readonly JUSTIFY_ALIGN: VerticalJustification_JUSTIFY_ALIGN;
  /**
   * Lines of text are evenly distributed vertically between the top and bottom of the object.
   */
  readonly justifyAlign: VerticalJustification_JUSTIFY_ALIGN;
  /**
   * Lines of text are evenly distributed vertically between the top and bottom of the object.
   */
  readonly justifyalign: VerticalJustification_JUSTIFY_ALIGN;

}
