/**
 * FitMethodSettings.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __FitMethodSettings: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface FitMethodSettings extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<FitMethodSettings>): boolean;

  /**
   * @internal **WARNING:** `__FitMethodSettings` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__FitMethodSettings]: never;
}


/**
 * Fit to predefined settings.
 */
interface FitMethodSettings_FIT_PREDEFINED_SETTINGS extends FitMethodSettings {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684301427;
}

/**
 * Fit to given width and height.
 */
interface FitMethodSettings_FIT_GIVEN_WIDTH_AND_HEIGHT extends FitMethodSettings {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684305768;
}

/**
 * Fit to given scale percentage.
 */
interface FitMethodSettings_FIT_GIVEN_SCALE_PERCENTAGE extends FitMethodSettings {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684304739;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether content is fitted to its frame proportionally or stretched to fill it.
 */
export declare namespace FitMethodSettings {
/**
 * Fit to predefined settings.
 */
type FIT_PREDEFINED_SETTINGS = FitMethodSettings_FIT_PREDEFINED_SETTINGS;

/**
 * Fit to given width and height.
 */
type FIT_GIVEN_WIDTH_AND_HEIGHT = FitMethodSettings_FIT_GIVEN_WIDTH_AND_HEIGHT;

/**
 * Fit to given scale percentage.
 */
type FIT_GIVEN_SCALE_PERCENTAGE = FitMethodSettings_FIT_GIVEN_SCALE_PERCENTAGE;

}
/**
 * Whether content is fitted to its frame proportionally or stretched to fill it.
 */
export declare const FitMethodSettings: typeof Enumeration & {

  /**
   * Fit to predefined settings.
   */
  readonly FIT_PREDEFINED_SETTINGS: FitMethodSettings_FIT_PREDEFINED_SETTINGS;
  /**
   * Fit to predefined settings.
   */
  readonly fitPredefinedSettings: FitMethodSettings_FIT_PREDEFINED_SETTINGS;
  /**
   * Fit to predefined settings.
   */
  readonly fitpredefinedsettings: FitMethodSettings_FIT_PREDEFINED_SETTINGS;

  /**
   * Fit to given width and height.
   */
  readonly FIT_GIVEN_WIDTH_AND_HEIGHT: FitMethodSettings_FIT_GIVEN_WIDTH_AND_HEIGHT;
  /**
   * Fit to given width and height.
   */
  readonly fitGivenWidthAndHeight: FitMethodSettings_FIT_GIVEN_WIDTH_AND_HEIGHT;
  /**
   * Fit to given width and height.
   */
  readonly fitgivenwidthandheight: FitMethodSettings_FIT_GIVEN_WIDTH_AND_HEIGHT;

  /**
   * Fit to given scale percentage.
   */
  readonly FIT_GIVEN_SCALE_PERCENTAGE: FitMethodSettings_FIT_GIVEN_SCALE_PERCENTAGE;
  /**
   * Fit to given scale percentage.
   */
  readonly fitGivenScalePercentage: FitMethodSettings_FIT_GIVEN_SCALE_PERCENTAGE;
  /**
   * Fit to given scale percentage.
   */
  readonly fitgivenscalepercentage: FitMethodSettings_FIT_GIVEN_SCALE_PERCENTAGE;

}
