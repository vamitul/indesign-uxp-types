/**
 * PaperSize.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PaperSize: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PaperSize extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PaperSize>): boolean;

  /**
   * @internal **WARNING:** `__PaperSize` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PaperSize]: never;
}


/**
 * Chooses the paper size automatically.
 */
interface PaperSize_AUTO extends PaperSize {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1635019116;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Paper size options.
 */
export declare namespace PaperSize {
/**
 * Automatic
 */
type AUTO = PaperSize_AUTO;

}
/**
 * Paper size options.
 */
export declare const PaperSize: typeof Enumeration & {

  /**
   * Chooses the paper size automatically.
   */
  readonly AUTO: PaperSize_AUTO;
  /**
   * Chooses the paper size automatically.
   */
  readonly auto: PaperSize_AUTO;

}
