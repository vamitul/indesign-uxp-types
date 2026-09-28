/**
 * XMLExportUntaggedTablesFormat.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __XMLExportUntaggedTablesFormat: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface XMLExportUntaggedTablesFormat extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<XMLExportUntaggedTablesFormat>): boolean;

  /**
   * @internal **WARNING:** `__XMLExportUntaggedTablesFormat` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__XMLExportUntaggedTablesFormat]: never;
}


/**
 * Does not export untagged tables.
 */
interface XMLExportUntaggedTablesFormat_NONE extends XMLExportUntaggedTablesFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * Exports untagged tables as CALS XML.
 */
interface XMLExportUntaggedTablesFormat_CALS extends XMLExportUntaggedTablesFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1484022643;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether an untagged table in a tagged story is skipped or exported as CALS XML.
 */
export declare namespace XMLExportUntaggedTablesFormat {
/**
 * Does not export untagged tables.
 */
type NONE = XMLExportUntaggedTablesFormat_NONE;

/**
 * Exports untagged tables as CALS XML.
 */
type CALS = XMLExportUntaggedTablesFormat_CALS;

}
/**
 * Whether an untagged table in a tagged story is skipped or exported as CALS XML.
 */
export declare const XMLExportUntaggedTablesFormat: typeof Enumeration & {

  /**
   * Does not export untagged tables.
   */
  readonly NONE: XMLExportUntaggedTablesFormat_NONE;
  /**
   * Does not export untagged tables.
   */
  readonly none: XMLExportUntaggedTablesFormat_NONE;

  /**
   * Exports untagged tables as CALS XML.
   */
  readonly CALS: XMLExportUntaggedTablesFormat_CALS;
  /**
   * Exports untagged tables as CALS XML.
   */
  readonly cals: XMLExportUntaggedTablesFormat_CALS;

}
