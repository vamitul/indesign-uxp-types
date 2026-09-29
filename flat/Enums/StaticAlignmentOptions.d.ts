/**
 * StaticAlignmentOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __StaticAlignmentOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface StaticAlignmentOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<StaticAlignmentOptions>): boolean;

  /**
   * @internal **WARNING:** `__StaticAlignmentOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__StaticAlignmentOptions]: never;
}


/**
 * Left align the text.
 */
interface StaticAlignmentOptions_LEFT_ALIGN extends StaticAlignmentOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1818584692;
}

/**
 * Center align the text.
 */
interface StaticAlignmentOptions_CENTER_ALIGN extends StaticAlignmentOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1667591796;
}

/**
 * Right align the text.
 */
interface StaticAlignmentOptions_RIGHT_ALIGN extends StaticAlignmentOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1919379572;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether static text aligns left, center, or right.
 */
export declare namespace StaticAlignmentOptions {
/**
 * Left align the text.
 */
type LEFT_ALIGN = StaticAlignmentOptions_LEFT_ALIGN;

/**
 * Center align the text.
 */
type CENTER_ALIGN = StaticAlignmentOptions_CENTER_ALIGN;

/**
 * Right align the text.
 */
type RIGHT_ALIGN = StaticAlignmentOptions_RIGHT_ALIGN;

}
/**
 * Whether static text aligns left, center, or right.
 */
export declare const StaticAlignmentOptions: typeof Enumeration & {

  /**
   * Left align the text.
   */
  readonly LEFT_ALIGN: StaticAlignmentOptions_LEFT_ALIGN;
  /**
   * Left align the text.
   */
  readonly leftAlign: StaticAlignmentOptions_LEFT_ALIGN;
  /**
   * Left align the text.
   */
  readonly leftalign: StaticAlignmentOptions_LEFT_ALIGN;

  /**
   * Center align the text.
   */
  readonly CENTER_ALIGN: StaticAlignmentOptions_CENTER_ALIGN;
  /**
   * Center align the text.
   */
  readonly centerAlign: StaticAlignmentOptions_CENTER_ALIGN;
  /**
   * Center align the text.
   */
  readonly centeralign: StaticAlignmentOptions_CENTER_ALIGN;

  /**
   * Right align the text.
   */
  readonly RIGHT_ALIGN: StaticAlignmentOptions_RIGHT_ALIGN;
  /**
   * Right align the text.
   */
  readonly rightAlign: StaticAlignmentOptions_RIGHT_ALIGN;
  /**
   * Right align the text.
   */
  readonly rightalign: StaticAlignmentOptions_RIGHT_ALIGN;

}
