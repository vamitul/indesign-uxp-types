/**
 * FlexDirection.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __FlexDirection: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface FlexDirection extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<FlexDirection>): boolean;

  /**
   * @internal **WARNING:** `__FlexDirection` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__FlexDirection]: never;
}


/**
 * Row direction.
 */
interface FlexDirection_FLEX_ROW extends FlexDirection {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1715753591;
}

/**
 * Row reverse direction.
 */
interface FlexDirection_FLEX_ROW_REVERSE extends FlexDirection {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1715753586;
}

/**
 * Column direction.
 */
interface FlexDirection_FLEX_COLUMN extends FlexDirection {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1715749740;
}

/**
 * Column reverse direction.
 */
interface FlexDirection_FLEX_COLUMN_REVERSE extends FlexDirection {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1715749746;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The direction of the flex container.
 */
export declare namespace FlexDirection {
/**
 * Row direction.
 */
type FLEX_ROW = FlexDirection_FLEX_ROW;

/**
 * Row reverse direction.
 */
type FLEX_ROW_REVERSE = FlexDirection_FLEX_ROW_REVERSE;

/**
 * Column direction.
 */
type FLEX_COLUMN = FlexDirection_FLEX_COLUMN;

/**
 * Column reverse direction.
 */
type FLEX_COLUMN_REVERSE = FlexDirection_FLEX_COLUMN_REVERSE;

}
/**
 * The direction of the flex container.
 */
export declare const FlexDirection: typeof Enumeration & {

  /**
   * Row direction.
   */
  readonly FLEX_ROW: FlexDirection_FLEX_ROW;
  /**
   * Row direction.
   */
  readonly flexRow: FlexDirection_FLEX_ROW;
  /**
   * Row direction.
   */
  readonly flexrow: FlexDirection_FLEX_ROW;

  /**
   * Row reverse direction.
   */
  readonly FLEX_ROW_REVERSE: FlexDirection_FLEX_ROW_REVERSE;
  /**
   * Row reverse direction.
   */
  readonly flexRowReverse: FlexDirection_FLEX_ROW_REVERSE;
  /**
   * Row reverse direction.
   */
  readonly flexrowreverse: FlexDirection_FLEX_ROW_REVERSE;

  /**
   * Column direction.
   */
  readonly FLEX_COLUMN: FlexDirection_FLEX_COLUMN;
  /**
   * Column direction.
   */
  readonly flexColumn: FlexDirection_FLEX_COLUMN;
  /**
   * Column direction.
   */
  readonly flexcolumn: FlexDirection_FLEX_COLUMN;

  /**
   * Column reverse direction.
   */
  readonly FLEX_COLUMN_REVERSE: FlexDirection_FLEX_COLUMN_REVERSE;
  /**
   * Column reverse direction.
   */
  readonly flexColumnReverse: FlexDirection_FLEX_COLUMN_REVERSE;
  /**
   * Column reverse direction.
   */
  readonly flexcolumnreverse: FlexDirection_FLEX_COLUMN_REVERSE;

}
