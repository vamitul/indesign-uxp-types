/**
 * ViewDisplaySettings.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ViewDisplaySettings: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ViewDisplaySettings extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ViewDisplaySettings>): boolean;

  /**
   * @internal **WARNING:** `__ViewDisplaySettings` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ViewDisplaySettings]: never;
}


/**
 * Slower performance; displays high-resolution graphics and high-quality transparencies and turns on anti-aliasing.
 */
interface ViewDisplaySettings_HIGH_QUALITY extends ViewDisplaySettings {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1346922866;
}

/**
 * Moderate performance speed; displays proxy graphics and low-quality transparencies and turns on anti-aliasing.
 */
interface ViewDisplaySettings_TYPICAL extends ViewDisplaySettings {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1349810544;
}

/**
 * Best performance; grays out graphics and turns off transparency and anti-aliasing.
 */
interface ViewDisplaySettings_OPTIMIZED extends ViewDisplaySettings {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1349480564;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for display performance settings, which influence the speed and quality with which an object draws and redraws.
 */
export declare namespace ViewDisplaySettings {
/**
 * Slower performance; displays high-resolution graphics and high-quality transparencies and turns on anti-aliasing.
 */
type HIGH_QUALITY = ViewDisplaySettings_HIGH_QUALITY;

/**
 * Moderate performance speed; displays proxy graphics and low-quality transparencies and turns on anti-aliasing.
 */
type TYPICAL = ViewDisplaySettings_TYPICAL;

/**
 * Best performance; grays out graphics and turns off transparency and anti-aliasing.
 */
type OPTIMIZED = ViewDisplaySettings_OPTIMIZED;

}
/**
 * Options for display performance settings, which influence the speed and quality with which an object draws and redraws.
 */
export declare const ViewDisplaySettings: typeof Enumeration & {

  /**
   * Slower performance; displays high-resolution graphics and high-quality transparencies and turns on anti-aliasing.
   */
  readonly HIGH_QUALITY: ViewDisplaySettings_HIGH_QUALITY;
  /**
   * Slower performance; displays high-resolution graphics and high-quality transparencies and turns on anti-aliasing.
   */
  readonly highQuality: ViewDisplaySettings_HIGH_QUALITY;
  /**
   * Slower performance; displays high-resolution graphics and high-quality transparencies and turns on anti-aliasing.
   */
  readonly highquality: ViewDisplaySettings_HIGH_QUALITY;

  /**
   * Moderate performance speed; displays proxy graphics and low-quality transparencies and turns on anti-aliasing.
   */
  readonly TYPICAL: ViewDisplaySettings_TYPICAL;
  /**
   * Moderate performance speed; displays proxy graphics and low-quality transparencies and turns on anti-aliasing.
   */
  readonly typical: ViewDisplaySettings_TYPICAL;

  /**
   * Best performance; grays out graphics and turns off transparency and anti-aliasing.
   */
  readonly OPTIMIZED: ViewDisplaySettings_OPTIMIZED;
  /**
   * Best performance; grays out graphics and turns off transparency and anti-aliasing.
   */
  readonly optimized: ViewDisplaySettings_OPTIMIZED;

}
