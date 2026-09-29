/**
 * ColorSettingsPolicy.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ColorSettingsPolicy: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ColorSettingsPolicy extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ColorSettingsPolicy>): boolean;

  /**
   * @internal **WARNING:** `__ColorSettingsPolicy` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ColorSettingsPolicy]: never;
}


/**
 * Turns off color management for documents whose profiles do not match the working space. For imported colors, numeric values override color appearance.
 */
interface ColorSettingsPolicy_COLOR_POLICY_OFF extends ColorSettingsPolicy {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1129344870;
}

/**
 * Preserves embedded color profiles in newly opened documents.
 */
interface ColorSettingsPolicy_PRESERVE_EMBEDDED_PROFILES extends ColorSettingsPolicy {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1129345136;
}

/**
 * Converts newly opened documents to the current working space. For imported colors, color appearance overrides numeric values.
 */
interface ColorSettingsPolicy_CONVERT_TO_WORKING_SPACE extends ColorSettingsPolicy {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1129346931;
}

/**
 * Preserves raw color numbers and ignores embedded color profiles.
 */
interface ColorSettingsPolicy_COMBINATION_OF_PRESERVE_AND_SAFE_CMYK extends ColorSettingsPolicy {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1129345124;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The policy for handling mismatched CMYK configurations.
 */
export declare namespace ColorSettingsPolicy {
/**
 * Turns off color management for documents whose profiles do not match the working space. For imported colors, numeric values override color appearance.
 */
type COLOR_POLICY_OFF = ColorSettingsPolicy_COLOR_POLICY_OFF;

/**
 * Preserves embedded color profiles in newly opened documents.
 */
type PRESERVE_EMBEDDED_PROFILES = ColorSettingsPolicy_PRESERVE_EMBEDDED_PROFILES;

/**
 * Converts newly opened documents to the current working space. For imported colors, color appearance overrides numeric values.
 */
type CONVERT_TO_WORKING_SPACE = ColorSettingsPolicy_CONVERT_TO_WORKING_SPACE;

/**
 * Preserves raw color numbers and ignores embedded color profiles.
 */
type COMBINATION_OF_PRESERVE_AND_SAFE_CMYK = ColorSettingsPolicy_COMBINATION_OF_PRESERVE_AND_SAFE_CMYK;

}
/**
 * The policy for handling mismatched CMYK configurations.
 */
export declare const ColorSettingsPolicy: typeof Enumeration & {

  /**
   * Turns off color management for documents whose profiles do not match the working space. For imported colors, numeric values override color appearance.
   */
  readonly COLOR_POLICY_OFF: ColorSettingsPolicy_COLOR_POLICY_OFF;
  /**
   * Turns off color management for documents whose profiles do not match the working space. For imported colors, numeric values override color appearance.
   */
  readonly colorPolicyOff: ColorSettingsPolicy_COLOR_POLICY_OFF;
  /**
   * Turns off color management for documents whose profiles do not match the working space. For imported colors, numeric values override color appearance.
   */
  readonly colorpolicyoff: ColorSettingsPolicy_COLOR_POLICY_OFF;

  /**
   * Preserves embedded color profiles in newly opened documents.
   */
  readonly PRESERVE_EMBEDDED_PROFILES: ColorSettingsPolicy_PRESERVE_EMBEDDED_PROFILES;
  /**
   * Preserves embedded color profiles in newly opened documents.
   */
  readonly preserveEmbeddedProfiles: ColorSettingsPolicy_PRESERVE_EMBEDDED_PROFILES;
  /**
   * Preserves embedded color profiles in newly opened documents.
   */
  readonly preserveembeddedprofiles: ColorSettingsPolicy_PRESERVE_EMBEDDED_PROFILES;

  /**
   * Converts newly opened documents to the current working space. For imported colors, color appearance overrides numeric values.
   */
  readonly CONVERT_TO_WORKING_SPACE: ColorSettingsPolicy_CONVERT_TO_WORKING_SPACE;
  /**
   * Converts newly opened documents to the current working space. For imported colors, color appearance overrides numeric values.
   */
  readonly convertToWorkingSpace: ColorSettingsPolicy_CONVERT_TO_WORKING_SPACE;
  /**
   * Converts newly opened documents to the current working space. For imported colors, color appearance overrides numeric values.
   */
  readonly converttoworkingspace: ColorSettingsPolicy_CONVERT_TO_WORKING_SPACE;

  /**
   * Preserves raw color numbers and ignores embedded color profiles.
   */
  readonly COMBINATION_OF_PRESERVE_AND_SAFE_CMYK: ColorSettingsPolicy_COMBINATION_OF_PRESERVE_AND_SAFE_CMYK;
  /**
   * Preserves raw color numbers and ignores embedded color profiles.
   */
  readonly combinationOfPreserveAndSafeCmyk: ColorSettingsPolicy_COMBINATION_OF_PRESERVE_AND_SAFE_CMYK;
  /**
   * Preserves raw color numbers and ignores embedded color profiles.
   */
  readonly combinationofpreserveandsafecmyk: ColorSettingsPolicy_COMBINATION_OF_PRESERVE_AND_SAFE_CMYK;

}
