/**
 * Printer.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __Printer: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface Printer extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<Printer>): boolean;

  /**
   * @internal **WARNING:** `__Printer` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__Printer]: never;
}


/**
 * Prints to a PostScript file.
 */
interface Printer_POSTSCRIPT_FILE extends Printer {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886611052;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * A stand-in for a physical printer, used to send output to a PostScript file instead.
 */
export declare namespace Printer {
/**
 * Prints to a PostScript file.
 */
type POSTSCRIPT_FILE = Printer_POSTSCRIPT_FILE;

}
/**
 * A stand-in for a physical printer, used to send output to a PostScript file instead.
 */
export declare const Printer: typeof Enumeration & {

  /**
   * Prints to a PostScript file.
   */
  readonly POSTSCRIPT_FILE: Printer_POSTSCRIPT_FILE;
  /**
   * Prints to a PostScript file.
   */
  readonly postscriptFile: Printer_POSTSCRIPT_FILE;
  /**
   * Prints to a PostScript file.
   */
  readonly postscriptfile: Printer_POSTSCRIPT_FILE;

}
