/**
 * TabStopAlignment.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __TabStopAlignment: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface TabStopAlignment extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<TabStopAlignment>): boolean;

  /**
   * @internal **WARNING:** `__TabStopAlignment` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__TabStopAlignment]: never;
}


/**
 * Left-aligns text at the tab stop.
 */
interface TabStopAlignment_LEFT_ALIGN extends TabStopAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1818584692;
}

/**
 * Center-aligns text at the tab stop.
 */
interface TabStopAlignment_CENTER_ALIGN extends TabStopAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1667591796;
}

/**
 * Right-aligns text at the tab stop.
 */
interface TabStopAlignment_RIGHT_ALIGN extends TabStopAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1919379572;
}

/**
 * Aligns the specified character with the tab stop.
 */
interface TabStopAlignment_CHARACTER_ALIGN extends TabStopAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952604515;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Where text sits relative to a tab stop — flush left, flush right, centered, or aligned on a
 * specific character such as a decimal point.
 */
export declare namespace TabStopAlignment {
/**
 * Left.
 */
type LEFT_ALIGN = TabStopAlignment_LEFT_ALIGN;

/**
 * Center.
 */
type CENTER_ALIGN = TabStopAlignment_CENTER_ALIGN;

/**
 * Right.
 */
type RIGHT_ALIGN = TabStopAlignment_RIGHT_ALIGN;

/**
 * Aligns the specified character with the tab stop.
 */
type CHARACTER_ALIGN = TabStopAlignment_CHARACTER_ALIGN;

}
/**
 * Where text sits relative to a tab stop — flush left, flush right, centered, or aligned on a
 * specific character such as a decimal point.
 */
export declare const TabStopAlignment: typeof Enumeration & {

  /**
   * Left-aligns text at the tab stop.
   */
  readonly LEFT_ALIGN: TabStopAlignment_LEFT_ALIGN;
  /**
   * Left-aligns text at the tab stop.
   */
  readonly leftAlign: TabStopAlignment_LEFT_ALIGN;
  /**
   * Left-aligns text at the tab stop.
   */
  readonly leftalign: TabStopAlignment_LEFT_ALIGN;

  /**
   * Center-aligns text at the tab stop.
   */
  readonly CENTER_ALIGN: TabStopAlignment_CENTER_ALIGN;
  /**
   * Center-aligns text at the tab stop.
   */
  readonly centerAlign: TabStopAlignment_CENTER_ALIGN;
  /**
   * Center-aligns text at the tab stop.
   */
  readonly centeralign: TabStopAlignment_CENTER_ALIGN;

  /**
   * Right-aligns text at the tab stop.
   */
  readonly RIGHT_ALIGN: TabStopAlignment_RIGHT_ALIGN;
  /**
   * Right-aligns text at the tab stop.
   */
  readonly rightAlign: TabStopAlignment_RIGHT_ALIGN;
  /**
   * Right-aligns text at the tab stop.
   */
  readonly rightalign: TabStopAlignment_RIGHT_ALIGN;

  /**
   * Aligns the specified character with the tab stop.
   */
  readonly CHARACTER_ALIGN: TabStopAlignment_CHARACTER_ALIGN;
  /**
   * Aligns the specified character with the tab stop.
   */
  readonly characterAlign: TabStopAlignment_CHARACTER_ALIGN;
  /**
   * Aligns the specified character with the tab stop.
   */
  readonly characteralign: TabStopAlignment_CHARACTER_ALIGN;

}
