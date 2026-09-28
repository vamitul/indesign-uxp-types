/**
 * XMLImportStyles.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __XMLImportStyles: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface XMLImportStyles extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<XMLImportStyles>): boolean;

  /**
   * @internal **WARNING:** `__XMLImportStyles` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__XMLImportStyles]: never;
}


/**
 * Appends the imported content.
 */
interface XMLImportStyles_APPEND_IMPORT extends XMLImportStyles {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1481466217;
}

/**
 * Merges the imported content.
 */
interface XMLImportStyles_MERGE_IMPORT extends XMLImportStyles {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1481469289;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether imported XML content is appended to the existing structure or merged into it.
 */
export declare namespace XMLImportStyles {
/**
 * Appends the imported content.
 */
type APPEND_IMPORT = XMLImportStyles_APPEND_IMPORT;

/**
 * Merges the imported content.
 */
type MERGE_IMPORT = XMLImportStyles_MERGE_IMPORT;

}
/**
 * Whether imported XML content is appended to the existing structure or merged into it.
 */
export declare const XMLImportStyles: typeof Enumeration & {

  /**
   * Appends the imported content.
   */
  readonly APPEND_IMPORT: XMLImportStyles_APPEND_IMPORT;
  /**
   * Appends the imported content.
   */
  readonly appendImport: XMLImportStyles_APPEND_IMPORT;
  /**
   * Appends the imported content.
   */
  readonly appendimport: XMLImportStyles_APPEND_IMPORT;

  /**
   * Merges the imported content.
   */
  readonly MERGE_IMPORT: XMLImportStyles_MERGE_IMPORT;
  /**
   * Merges the imported content.
   */
  readonly mergeImport: XMLImportStyles_MERGE_IMPORT;
  /**
   * Merges the imported content.
   */
  readonly mergeimport: XMLImportStyles_MERGE_IMPORT;

}
