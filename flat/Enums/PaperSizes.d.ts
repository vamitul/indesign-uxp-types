/**
 * PaperSizes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PaperSizes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PaperSizes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PaperSizes>): boolean;

  /**
   * @internal **WARNING:** `__PaperSizes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PaperSizes]: never;
}


/**
 * Allows the printer driver to define the paper size.
 */
interface PaperSizes_DEFINED_BY_DRIVER extends PaperSizes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1347634290;
}

/**
 * Allows definition of a custom paper size. Note: Not all printers allow custom paper sizes.
 */
interface PaperSizes_CUSTOM extends PaperSizes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1131639917;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether the paper size comes from the printer driver or is defined explicitly.
 */
export declare namespace PaperSizes {
/**
 * Allows the printer driver to define the paper size.
 */
type DEFINED_BY_DRIVER = PaperSizes_DEFINED_BY_DRIVER;

/**
 * Allows definition of a custom paper size. Note: Not all printers allow custom paper sizes.
 */
type CUSTOM = PaperSizes_CUSTOM;

}
/**
 * Whether the paper size comes from the printer driver or is defined explicitly.
 */
export declare const PaperSizes: typeof Enumeration & {

  /**
   * Allows the printer driver to define the paper size.
   */
  readonly DEFINED_BY_DRIVER: PaperSizes_DEFINED_BY_DRIVER;
  /**
   * Allows the printer driver to define the paper size.
   */
  readonly definedByDriver: PaperSizes_DEFINED_BY_DRIVER;
  /**
   * Allows the printer driver to define the paper size.
   */
  readonly definedbydriver: PaperSizes_DEFINED_BY_DRIVER;

  /**
   * Allows definition of a custom paper size. Note: Not all printers allow custom paper sizes.
   */
  readonly CUSTOM: PaperSizes_CUSTOM;
  /**
   * Allows definition of a custom paper size. Note: Not all printers allow custom paper sizes.
   */
  readonly custom: PaperSizes_CUSTOM;

}
