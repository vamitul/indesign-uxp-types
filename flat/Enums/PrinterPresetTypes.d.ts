/**
 * PrinterPresetTypes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PrinterPresetTypes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PrinterPresetTypes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PrinterPresetTypes>): boolean;

  /**
   * @internal **WARNING:** `__PrinterPresetTypes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PrinterPresetTypes]: never;
}


/**
 * The default printer preset.
 */
interface PrinterPresetTypes_DEFAULT_VALUE extends PrinterPresetTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1147563124;
}

/**
 * A custom printer preset.
 */
interface PrinterPresetTypes_CUSTOM extends PrinterPresetTypes {
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
 * Whether printing uses the default printer preset or a custom one.
 */
export declare namespace PrinterPresetTypes {
/**
 * The default printer preset.
 */
type DEFAULT_VALUE = PrinterPresetTypes_DEFAULT_VALUE;

/**
 * A custom printer preset.
 */
type CUSTOM = PrinterPresetTypes_CUSTOM;

}
/**
 * Whether printing uses the default printer preset or a custom one.
 */
export declare const PrinterPresetTypes: typeof Enumeration & {

  /**
   * The default printer preset.
   */
  readonly DEFAULT_VALUE: PrinterPresetTypes_DEFAULT_VALUE;
  /**
   * The default printer preset.
   */
  readonly defaultValue: PrinterPresetTypes_DEFAULT_VALUE;
  /**
   * The default printer preset.
   */
  readonly defaultvalue: PrinterPresetTypes_DEFAULT_VALUE;

  /**
   * A custom printer preset.
   */
  readonly CUSTOM: PrinterPresetTypes_CUSTOM;
  /**
   * A custom printer preset.
   */
  readonly custom: PrinterPresetTypes_CUSTOM;

}
