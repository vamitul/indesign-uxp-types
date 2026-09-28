/**
 * AntiAliasType.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __AntiAliasType: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface AntiAliasType extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<AntiAliasType>): boolean;

  /**
   * @internal **WARNING:** `__AntiAliasType` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__AntiAliasType]: never;
}


/**
 * Gray anti-aliasing.
 */
interface AntiAliasType_GRAY_ANTIALIASING extends AntiAliasType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1732527186;
}

/**
 * Color anti-aliasing.
 */
interface AntiAliasType_COLOR_ANTIALIASING extends AntiAliasType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1665418322;
}

/**
 * Thicker anti-aliasing.
 */
interface AntiAliasType_THICKER_ANTIALIASING extends AntiAliasType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1950444659;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The anti-aliasing type.
 */
export declare namespace AntiAliasType {
/**
 * Gray anti-aliasing.
 */
type GRAY_ANTIALIASING = AntiAliasType_GRAY_ANTIALIASING;

/**
 * Color anti-aliasing.
 */
type COLOR_ANTIALIASING = AntiAliasType_COLOR_ANTIALIASING;

/**
 * Thicker anti-aliasing.
 */
type THICKER_ANTIALIASING = AntiAliasType_THICKER_ANTIALIASING;

}
/**
 * The anti-aliasing type.
 */
export declare const AntiAliasType: typeof Enumeration & {

  /**
   * Gray anti-aliasing.
   */
  readonly GRAY_ANTIALIASING: AntiAliasType_GRAY_ANTIALIASING;
  /**
   * Gray anti-aliasing.
   */
  readonly grayAntialiasing: AntiAliasType_GRAY_ANTIALIASING;
  /**
   * Gray anti-aliasing.
   */
  readonly grayantialiasing: AntiAliasType_GRAY_ANTIALIASING;

  /**
   * Color anti-aliasing.
   */
  readonly COLOR_ANTIALIASING: AntiAliasType_COLOR_ANTIALIASING;
  /**
   * Color anti-aliasing.
   */
  readonly colorAntialiasing: AntiAliasType_COLOR_ANTIALIASING;
  /**
   * Color anti-aliasing.
   */
  readonly colorantialiasing: AntiAliasType_COLOR_ANTIALIASING;

  /**
   * Thicker anti-aliasing.
   */
  readonly THICKER_ANTIALIASING: AntiAliasType_THICKER_ANTIALIASING;
  /**
   * Thicker anti-aliasing.
   */
  readonly thickerAntialiasing: AntiAliasType_THICKER_ANTIALIASING;
  /**
   * Thicker anti-aliasing.
   */
  readonly thickerantialiasing: AntiAliasType_THICKER_ANTIALIASING;

}
