/**
 * FontStatus.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __FontStatus: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface FontStatus extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<FontStatus>): boolean;

  /**
   * @internal **WARNING:** `__FontStatus` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__FontStatus]: never;
}


/**
 * The font is installed.
 */
interface FontStatus_INSTALLED extends FontStatus {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718831470;
}

/**
 * The font is not available.
 */
interface FontStatus_NOT_AVAILABLE extends FontStatus {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718832705;
}

/**
 * The font has been fauxed.
 */
interface FontStatus_FAUXED extends FontStatus {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718830689;
}

/**
 * The font is a substitute.
 */
interface FontStatus_SUBSTITUTED extends FontStatus {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718834037;
}

/**
 * The font's status is unknown.
 */
interface FontStatus_UNKNOWN extends FontStatus {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1433299822;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Font status options.
 */
export declare namespace FontStatus {
/**
 * The font is installed.
 */
type INSTALLED = FontStatus_INSTALLED;

/**
 * The font is not available.
 */
type NOT_AVAILABLE = FontStatus_NOT_AVAILABLE;

/**
 * The font has been fauxed.
 */
type FAUXED = FontStatus_FAUXED;

/**
 * The font is a substitute.
 */
type SUBSTITUTED = FontStatus_SUBSTITUTED;

/**
 * The font's status is unknown.
 */
type UNKNOWN = FontStatus_UNKNOWN;

}
/**
 * Font status options.
 */
export declare const FontStatus: typeof Enumeration & {

  /**
   * The font is installed.
   */
  readonly INSTALLED: FontStatus_INSTALLED;
  /**
   * The font is installed.
   */
  readonly installed: FontStatus_INSTALLED;

  /**
   * The font is not available.
   */
  readonly NOT_AVAILABLE: FontStatus_NOT_AVAILABLE;
  /**
   * The font is not available.
   */
  readonly notAvailable: FontStatus_NOT_AVAILABLE;
  /**
   * The font is not available.
   */
  readonly notavailable: FontStatus_NOT_AVAILABLE;

  /**
   * The font has been fauxed.
   */
  readonly FAUXED: FontStatus_FAUXED;
  /**
   * The font has been fauxed.
   */
  readonly fauxed: FontStatus_FAUXED;

  /**
   * The font is a substitute.
   */
  readonly SUBSTITUTED: FontStatus_SUBSTITUTED;
  /**
   * The font is a substitute.
   */
  readonly substituted: FontStatus_SUBSTITUTED;

  /**
   * The font's status is unknown.
   */
  readonly UNKNOWN: FontStatus_UNKNOWN;
  /**
   * The font's status is unknown.
   */
  readonly unknown: FontStatus_UNKNOWN;

}
