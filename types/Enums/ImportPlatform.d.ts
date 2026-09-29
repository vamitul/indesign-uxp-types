/**
 * ImportPlatform.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ImportPlatform: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ImportPlatform extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ImportPlatform>): boolean;

  /**
   * @internal **WARNING:** `__ImportPlatform` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ImportPlatform]: never;
}


/**
 * Macintosh.
 */
interface ImportPlatform_MACINTOSH extends ImportPlatform {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296130931;
}

/**
 * Windows.
 */
interface ImportPlatform_PC extends ImportPlatform {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1466852474;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Import platform options.
 */
export declare namespace ImportPlatform {
/**
 * Macintosh.
 */
type MACINTOSH = ImportPlatform_MACINTOSH;

/**
 * Windows.
 */
type PC = ImportPlatform_PC;

}
/**
 * Import platform options.
 */
export declare const ImportPlatform: typeof Enumeration & {

  /**
   * Macintosh.
   */
  readonly MACINTOSH: ImportPlatform_MACINTOSH;
  /**
   * Macintosh.
   */
  readonly macintosh: ImportPlatform_MACINTOSH;

  /**
   * Windows.
   */
  readonly PC: ImportPlatform_PC;
  /**
   * Windows.
   */
  readonly pc: ImportPlatform_PC;

}
