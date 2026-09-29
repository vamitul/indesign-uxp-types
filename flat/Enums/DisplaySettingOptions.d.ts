/**
 * DisplaySettingOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __DisplaySettingOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface DisplaySettingOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<DisplaySettingOptions>): boolean;

  /**
   * @internal **WARNING:** `__DisplaySettingOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__DisplaySettingOptions]: never;
}


/**
 * Slower performance; displays high-resolution graphics and high-quality transparencies and turns on anti-aliasing.
 */
interface DisplaySettingOptions_HIGH_QUALITY extends DisplaySettingOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1346922866;
}

/**
 * Moderate performance speed; displays proxy graphics and low-quality transparencies and turns on anti-aliasing.
 */
interface DisplaySettingOptions_TYPICAL extends DisplaySettingOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1349810544;
}

/**
 * Best performance; grays out graphics and turns off transparency and anti-aliasing.
 */
interface DisplaySettingOptions_OPTIMIZED extends DisplaySettingOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1349480564;
}

/**
 * Uses the container object's default display performance preferences setting. For information, see default display settings.
 */
interface DisplaySettingOptions_DEFAULT_VALUE extends DisplaySettingOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1147563124;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Display performance options.
 */
export declare namespace DisplaySettingOptions {
/**
 * Slower performance; displays high-resolution graphics and high-quality transparencies and turns on anti-aliasing.
 */
type HIGH_QUALITY = DisplaySettingOptions_HIGH_QUALITY;

/**
 * Moderate performance speed; displays proxy graphics and low-quality transparencies and turns on anti-aliasing.
 */
type TYPICAL = DisplaySettingOptions_TYPICAL;

/**
 * Best performance; grays out graphics and turns off transparency and anti-aliasing.
 */
type OPTIMIZED = DisplaySettingOptions_OPTIMIZED;

/**
 * Uses the container object's default display performance preferences setting. For information, see default display settings.
 */
type DEFAULT_VALUE = DisplaySettingOptions_DEFAULT_VALUE;

}
/**
 * Display performance options.
 */
export declare const DisplaySettingOptions: typeof Enumeration & {

  /**
   * Slower performance; displays high-resolution graphics and high-quality transparencies and turns on anti-aliasing.
   */
  readonly HIGH_QUALITY: DisplaySettingOptions_HIGH_QUALITY;
  /**
   * Slower performance; displays high-resolution graphics and high-quality transparencies and turns on anti-aliasing.
   */
  readonly highQuality: DisplaySettingOptions_HIGH_QUALITY;
  /**
   * Slower performance; displays high-resolution graphics and high-quality transparencies and turns on anti-aliasing.
   */
  readonly highquality: DisplaySettingOptions_HIGH_QUALITY;

  /**
   * Moderate performance speed; displays proxy graphics and low-quality transparencies and turns on anti-aliasing.
   */
  readonly TYPICAL: DisplaySettingOptions_TYPICAL;
  /**
   * Moderate performance speed; displays proxy graphics and low-quality transparencies and turns on anti-aliasing.
   */
  readonly typical: DisplaySettingOptions_TYPICAL;

  /**
   * Best performance; grays out graphics and turns off transparency and anti-aliasing.
   */
  readonly OPTIMIZED: DisplaySettingOptions_OPTIMIZED;
  /**
   * Best performance; grays out graphics and turns off transparency and anti-aliasing.
   */
  readonly optimized: DisplaySettingOptions_OPTIMIZED;

  /**
   * Uses the container object's default display performance preferences setting. For information, see default display settings.
   */
  readonly DEFAULT_VALUE: DisplaySettingOptions_DEFAULT_VALUE;
  /**
   * Uses the container object's default display performance preferences setting. For information, see default display settings.
   */
  readonly defaultValue: DisplaySettingOptions_DEFAULT_VALUE;
  /**
   * Uses the container object's default display performance preferences setting. For information, see default display settings.
   */
  readonly defaultvalue: DisplaySettingOptions_DEFAULT_VALUE;

}
