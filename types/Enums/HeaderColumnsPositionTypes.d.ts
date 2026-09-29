/**
 * HeaderColumnsPositionTypes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __HeaderColumnsPositionTypes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface HeaderColumnsPositionTypes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<HeaderColumnsPositionTypes>): boolean;

  /**
   * @internal **WARNING:** `__HeaderColumnsPositionTypes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__HeaderColumnsPositionTypes]: never;
}


/**
 * Header columns repeat on the left edge of the table.
 */
interface HeaderColumnsPositionTypes_HEADER_COLUMNS_LEFT extends HeaderColumnsPositionTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1214467174;
}

/**
 * Header columns repeat on the right edge of the table.
 */
interface HeaderColumnsPositionTypes_HEADER_COLUMNS_RIGHT extends HeaderColumnsPositionTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1214468724;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which side of the table the repeating header columns sit on.
 */
export declare namespace HeaderColumnsPositionTypes {
/**
 * Header columns repeat on the left edge of the table.
 */
type HEADER_COLUMNS_LEFT = HeaderColumnsPositionTypes_HEADER_COLUMNS_LEFT;

/**
 * Header columns repeat on the right edge of the table.
 */
type HEADER_COLUMNS_RIGHT = HeaderColumnsPositionTypes_HEADER_COLUMNS_RIGHT;

}
/**
 * Which side of the table the repeating header columns sit on.
 */
export declare const HeaderColumnsPositionTypes: typeof Enumeration & {

  /**
   * Header columns repeat on the left edge of the table.
   */
  readonly headerColumnsLeft: HeaderColumnsPositionTypes_HEADER_COLUMNS_LEFT;
  /**
   * Header columns repeat on the left edge of the table.
   */
  readonly headercolumnsleft: HeaderColumnsPositionTypes_HEADER_COLUMNS_LEFT;
  /**
   * Header columns repeat on the left edge of the table.
   */
  readonly HEADER_COLUMNS_LEFT: HeaderColumnsPositionTypes_HEADER_COLUMNS_LEFT;

  /**
   * Header columns repeat on the right edge of the table.
   */
  readonly headerColumnsRight: HeaderColumnsPositionTypes_HEADER_COLUMNS_RIGHT;
  /**
   * Header columns repeat on the right edge of the table.
   */
  readonly headercolumnsright: HeaderColumnsPositionTypes_HEADER_COLUMNS_RIGHT;
  /**
   * Header columns repeat on the right edge of the table.
   */
  readonly HEADER_COLUMNS_RIGHT: HeaderColumnsPositionTypes_HEADER_COLUMNS_RIGHT;

}
