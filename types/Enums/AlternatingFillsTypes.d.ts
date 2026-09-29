/**
 * AlternatingFillsTypes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __AlternatingFillsTypes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface AlternatingFillsTypes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<AlternatingFillsTypes>): boolean;

  /**
   * @internal **WARNING:** `__AlternatingFillsTypes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__AlternatingFillsTypes]: never;
}


/**
 * No alternating pattern.
 */
interface AlternatingFillsTypes_NO_ALTERNATING_PATTERN extends AlternatingFillsTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1097617007;
}

/**
 * Alternates row fills.
 */
interface AlternatingFillsTypes_ALTERNATING_ROWS extends AlternatingFillsTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1097618039;
}

/**
 * Alternates column fills.
 */
interface AlternatingFillsTypes_ALTERNATING_COLUMNS extends AlternatingFillsTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1097614188;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Pattern options for alternating fills.
 */
export declare namespace AlternatingFillsTypes {
/**
 * No alternating pattern.
 */
type NO_ALTERNATING_PATTERN = AlternatingFillsTypes_NO_ALTERNATING_PATTERN;

/**
 * Alternates row fills.
 */
type ALTERNATING_ROWS = AlternatingFillsTypes_ALTERNATING_ROWS;

/**
 * Alternates column fills.
 */
type ALTERNATING_COLUMNS = AlternatingFillsTypes_ALTERNATING_COLUMNS;

}
/**
 * Pattern options for alternating fills.
 */
export declare const AlternatingFillsTypes: typeof Enumeration & {

  /**
   * No alternating pattern.
   */
  readonly NO_ALTERNATING_PATTERN: AlternatingFillsTypes_NO_ALTERNATING_PATTERN;
  /**
   * No alternating pattern.
   */
  readonly noAlternatingPattern: AlternatingFillsTypes_NO_ALTERNATING_PATTERN;
  /**
   * No alternating pattern.
   */
  readonly noalternatingpattern: AlternatingFillsTypes_NO_ALTERNATING_PATTERN;

  /**
   * Alternates row fills.
   */
  readonly ALTERNATING_ROWS: AlternatingFillsTypes_ALTERNATING_ROWS;
  /**
   * Alternates row fills.
   */
  readonly alternatingRows: AlternatingFillsTypes_ALTERNATING_ROWS;
  /**
   * Alternates row fills.
   */
  readonly alternatingrows: AlternatingFillsTypes_ALTERNATING_ROWS;

  /**
   * Alternates column fills.
   */
  readonly ALTERNATING_COLUMNS: AlternatingFillsTypes_ALTERNATING_COLUMNS;
  /**
   * Alternates column fills.
   */
  readonly alternatingColumns: AlternatingFillsTypes_ALTERNATING_COLUMNS;
  /**
   * Alternates column fills.
   */
  readonly alternatingcolumns: AlternatingFillsTypes_ALTERNATING_COLUMNS;

}
