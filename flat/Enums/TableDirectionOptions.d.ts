/**
 * TableDirectionOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __TableDirectionOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface TableDirectionOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<TableDirectionOptions>): boolean;

  /**
   * @internal **WARNING:** `__TableDirectionOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__TableDirectionOptions]: never;
}


/**
 * Sets left-to-right table direction.
 */
interface TableDirectionOptions_LEFT_TO_RIGHT_DIRECTION extends TableDirectionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1278366308;
}

/**
 * Sets right-to-left table direction.
 */
interface TableDirectionOptions_RIGHT_TO_LEFT_DIRECTION extends TableDirectionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1379028068;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether a table's columns run left to right or right to left.
 */
export declare namespace TableDirectionOptions {
/**
 * Sets left-to-right table direction.
 */
type LEFT_TO_RIGHT_DIRECTION = TableDirectionOptions_LEFT_TO_RIGHT_DIRECTION;

/**
 * Sets right-to-left table direction.
 */
type RIGHT_TO_LEFT_DIRECTION = TableDirectionOptions_RIGHT_TO_LEFT_DIRECTION;

}
/**
 * Whether a table's columns run left to right or right to left.
 */
export declare const TableDirectionOptions: typeof Enumeration & {

  /**
   * Sets left-to-right table direction.
   */
  readonly LEFT_TO_RIGHT_DIRECTION: TableDirectionOptions_LEFT_TO_RIGHT_DIRECTION;
  /**
   * Sets left-to-right table direction.
   */
  readonly leftToRightDirection: TableDirectionOptions_LEFT_TO_RIGHT_DIRECTION;
  /**
   * Sets left-to-right table direction.
   */
  readonly lefttorightdirection: TableDirectionOptions_LEFT_TO_RIGHT_DIRECTION;

  /**
   * Sets right-to-left table direction.
   */
  readonly RIGHT_TO_LEFT_DIRECTION: TableDirectionOptions_RIGHT_TO_LEFT_DIRECTION;
  /**
   * Sets right-to-left table direction.
   */
  readonly rightToLeftDirection: TableDirectionOptions_RIGHT_TO_LEFT_DIRECTION;
  /**
   * Sets right-to-left table direction.
   */
  readonly righttoleftdirection: TableDirectionOptions_RIGHT_TO_LEFT_DIRECTION;

}
