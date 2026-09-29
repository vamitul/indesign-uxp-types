/**
 * WarichuAlignment.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __WarichuAlignment: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface WarichuAlignment extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<WarichuAlignment>): boolean;

  /**
   * @internal **WARNING:** `__WarichuAlignment` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__WarichuAlignment]: never;
}


/**
 * Automatically aligns warichu characters.
 */
interface WarichuAlignment_AUTO extends WarichuAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1635019116;
}

/**
 * Aligns warichu on the left side of the text frame.
 */
interface WarichuAlignment_LEFT_ALIGN extends WarichuAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1818584692;
}

/**
 * Aligns warichu in the center of the text frame.
 */
interface WarichuAlignment_CENTER_ALIGN extends WarichuAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1667591796;
}

/**
 * Aligns warichu on the right side of the text frame.
 */
interface WarichuAlignment_RIGHT_ALIGN extends WarichuAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1919379572;
}

/**
 * Justifies warichu lines and makes all lines of equal length. 
 */
interface WarichuAlignment_FULLY_JUSTIFIED extends WarichuAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718971500;
}

/**
 * Justifies warichu lines and left aligns the last line.
 */
interface WarichuAlignment_LEFT_JUSTIFIED extends WarichuAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1818915700;
}

/**
 * Justifies warichu lines and center aligns the last line.
 */
interface WarichuAlignment_CENTER_JUSTIFIED extends WarichuAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1667920756;
}

/**
 * Justifies warichu lines and right aligns the last line.
 */
interface WarichuAlignment_RIGHT_JUSTIFIED extends WarichuAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1919578996;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * How warichu (inline sub-text) is aligned or justified within its text frame — automatically,
 * left/center/right aligned, or fully/left/center/right justified.
 */
export declare namespace WarichuAlignment {
/**
 * Automatically aligns warichu characters.
 */
type AUTO = WarichuAlignment_AUTO;

/**
 * Aligns warichu on the left side of the text frame.
 */
type LEFT_ALIGN = WarichuAlignment_LEFT_ALIGN;

/**
 * Aligns warichu in the center of the text frame.
 */
type CENTER_ALIGN = WarichuAlignment_CENTER_ALIGN;

/**
 * Aligns warichu on the right side of the text frame.
 */
type RIGHT_ALIGN = WarichuAlignment_RIGHT_ALIGN;

/**
 * Justifies warichu lines and makes all lines of equal length. 
 */
type FULLY_JUSTIFIED = WarichuAlignment_FULLY_JUSTIFIED;

/**
 * Justifies warichu lines and left aligns the last line.
 */
type LEFT_JUSTIFIED = WarichuAlignment_LEFT_JUSTIFIED;

/**
 * Justifies warichu lines and center aligns the last line.
 */
type CENTER_JUSTIFIED = WarichuAlignment_CENTER_JUSTIFIED;

/**
 * Justifies warichu lines and right aligns the last line.
 */
type RIGHT_JUSTIFIED = WarichuAlignment_RIGHT_JUSTIFIED;

}
/**
 * How warichu (inline sub-text) is aligned or justified within its text frame — automatically,
 * left/center/right aligned, or fully/left/center/right justified.
 */
export declare const WarichuAlignment: typeof Enumeration & {

  /**
   * Automatically aligns warichu characters.
   */
  readonly AUTO: WarichuAlignment_AUTO;
  /**
   * Automatically aligns warichu characters.
   */
  readonly auto: WarichuAlignment_AUTO;

  /**
   * Aligns warichu on the left side of the text frame.
   */
  readonly LEFT_ALIGN: WarichuAlignment_LEFT_ALIGN;
  /**
   * Aligns warichu on the left side of the text frame.
   */
  readonly leftAlign: WarichuAlignment_LEFT_ALIGN;
  /**
   * Aligns warichu on the left side of the text frame.
   */
  readonly leftalign: WarichuAlignment_LEFT_ALIGN;

  /**
   * Aligns warichu in the center of the text frame.
   */
  readonly CENTER_ALIGN: WarichuAlignment_CENTER_ALIGN;
  /**
   * Aligns warichu in the center of the text frame.
   */
  readonly centerAlign: WarichuAlignment_CENTER_ALIGN;
  /**
   * Aligns warichu in the center of the text frame.
   */
  readonly centeralign: WarichuAlignment_CENTER_ALIGN;

  /**
   * Aligns warichu on the right side of the text frame.
   */
  readonly RIGHT_ALIGN: WarichuAlignment_RIGHT_ALIGN;
  /**
   * Aligns warichu on the right side of the text frame.
   */
  readonly rightAlign: WarichuAlignment_RIGHT_ALIGN;
  /**
   * Aligns warichu on the right side of the text frame.
   */
  readonly rightalign: WarichuAlignment_RIGHT_ALIGN;

  /**
   * Justifies warichu lines and makes all lines of equal length. 
   */
  readonly FULLY_JUSTIFIED: WarichuAlignment_FULLY_JUSTIFIED;
  /**
   * Justifies warichu lines and makes all lines of equal length. 
   */
  readonly fullyJustified: WarichuAlignment_FULLY_JUSTIFIED;
  /**
   * Justifies warichu lines and makes all lines of equal length. 
   */
  readonly fullyjustified: WarichuAlignment_FULLY_JUSTIFIED;

  /**
   * Justifies warichu lines and left aligns the last line.
   */
  readonly LEFT_JUSTIFIED: WarichuAlignment_LEFT_JUSTIFIED;
  /**
   * Justifies warichu lines and left aligns the last line.
   */
  readonly leftJustified: WarichuAlignment_LEFT_JUSTIFIED;
  /**
   * Justifies warichu lines and left aligns the last line.
   */
  readonly leftjustified: WarichuAlignment_LEFT_JUSTIFIED;

  /**
   * Justifies warichu lines and center aligns the last line.
   */
  readonly CENTER_JUSTIFIED: WarichuAlignment_CENTER_JUSTIFIED;
  /**
   * Justifies warichu lines and center aligns the last line.
   */
  readonly centerJustified: WarichuAlignment_CENTER_JUSTIFIED;
  /**
   * Justifies warichu lines and center aligns the last line.
   */
  readonly centerjustified: WarichuAlignment_CENTER_JUSTIFIED;

  /**
   * Justifies warichu lines and right aligns the last line.
   */
  readonly RIGHT_JUSTIFIED: WarichuAlignment_RIGHT_JUSTIFIED;
  /**
   * Justifies warichu lines and right aligns the last line.
   */
  readonly rightJustified: WarichuAlignment_RIGHT_JUSTIFIED;
  /**
   * Justifies warichu lines and right aligns the last line.
   */
  readonly rightjustified: WarichuAlignment_RIGHT_JUSTIFIED;

}
