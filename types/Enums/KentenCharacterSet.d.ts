/**
 * KentenCharacterSet.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __KentenCharacterSet: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface KentenCharacterSet extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<KentenCharacterSet>): boolean;

  /**
   * @internal **WARNING:** `__KentenCharacterSet` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__KentenCharacterSet]: never;
}


/**
 * Character input.
 */
interface KentenCharacterSet_CHARACTER_INPUT extends KentenCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1248028777;
}

/**
 * Shift JIS.
 */
interface KentenCharacterSet_SHIFT_JIS extends KentenCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1249077875;
}

/**
 * JIS.
 */
interface KentenCharacterSet_JIS extends KentenCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1246382419;
}

/**
 * Kuten.
 */
interface KentenCharacterSet_KUTEN extends KentenCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1248556404;
}

/**
 * Unicode.
 */
interface KentenCharacterSet_UNICODE extends KentenCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1249209961;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Kenten character set options.
 */
export declare namespace KentenCharacterSet {
/**
 * Character input.
 */
type CHARACTER_INPUT = KentenCharacterSet_CHARACTER_INPUT;

/**
 * Shift JIS.
 */
type SHIFT_JIS = KentenCharacterSet_SHIFT_JIS;

/**
 * JIS.
 */
type JIS = KentenCharacterSet_JIS;

/**
 * Kuten.
 */
type KUTEN = KentenCharacterSet_KUTEN;

/**
 * Unicode.
 */
type UNICODE = KentenCharacterSet_UNICODE;

}
/**
 * Kenten character set options.
 */
export declare const KentenCharacterSet: typeof Enumeration & {

  /**
   * Character input.
   */
  readonly CHARACTER_INPUT: KentenCharacterSet_CHARACTER_INPUT;
  /**
   * Character input.
   */
  readonly characterInput: KentenCharacterSet_CHARACTER_INPUT;
  /**
   * Character input.
   */
  readonly characterinput: KentenCharacterSet_CHARACTER_INPUT;

  /**
   * Shift JIS.
   */
  readonly SHIFT_JIS: KentenCharacterSet_SHIFT_JIS;
  /**
   * Shift JIS.
   */
  readonly shiftJis: KentenCharacterSet_SHIFT_JIS;
  /**
   * Shift JIS.
   */
  readonly shiftjis: KentenCharacterSet_SHIFT_JIS;

  /**
   * JIS.
   */
  readonly JIS: KentenCharacterSet_JIS;
  /**
   * JIS.
   */
  readonly jis: KentenCharacterSet_JIS;

  /**
   * Kuten.
   */
  readonly KUTEN: KentenCharacterSet_KUTEN;
  /**
   * Kuten.
   */
  readonly kuten: KentenCharacterSet_KUTEN;

  /**
   * Unicode.
   */
  readonly UNICODE: KentenCharacterSet_UNICODE;
  /**
   * Unicode.
   */
  readonly unicode: KentenCharacterSet_UNICODE;

}
