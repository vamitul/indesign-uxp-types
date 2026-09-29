/**
 * LeadingModel.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __LeadingModel: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface LeadingModel extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<LeadingModel>): boolean;

  /**
   * @internal **WARNING:** `__LeadingModel` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__LeadingModel]: never;
}


/**
 * Measures the space between type baselines.
 */
interface LeadingModel_LEADING_MODEL_ROMAN extends LeadingModel {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1248619858;
}

/**
 * Measures the space between lines from the aki below. 
 */
interface LeadingModel_LEADING_MODEL_AKI_BELOW extends LeadingModel {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1248616802;
}

/**
 * Measures the space between lines from the aki above. 
 */
interface LeadingModel_LEADING_MODEL_AKI_ABOVE extends LeadingModel {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1248616801;
}

/**
 * Measures the space between the character center points.
 */
interface LeadingModel_LEADING_MODEL_CENTER extends LeadingModel {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1248619875;
}

/**
 * Center down leading model.
 */
interface LeadingModel_LEADING_MODEL_CENTER_DOWN extends LeadingModel {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1248617316;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Leading model options.
 */
export declare namespace LeadingModel {
/**
 * Measures the space between type baselines.
 */
type LEADING_MODEL_ROMAN = LeadingModel_LEADING_MODEL_ROMAN;

/**
 * Measures the space between lines from the aki below. 
 */
type LEADING_MODEL_AKI_BELOW = LeadingModel_LEADING_MODEL_AKI_BELOW;

/**
 * Measures the space between lines from the aki above. 
 */
type LEADING_MODEL_AKI_ABOVE = LeadingModel_LEADING_MODEL_AKI_ABOVE;

/**
 * Measures the space between the character center points.
 */
type LEADING_MODEL_CENTER = LeadingModel_LEADING_MODEL_CENTER;

/**
 * Center down leading model.
 */
type LEADING_MODEL_CENTER_DOWN = LeadingModel_LEADING_MODEL_CENTER_DOWN;

}
/**
 * Leading model options.
 */
export declare const LeadingModel: typeof Enumeration & {

  /**
   * Measures the space between type baselines.
   */
  readonly LEADING_MODEL_ROMAN: LeadingModel_LEADING_MODEL_ROMAN;
  /**
   * Measures the space between type baselines.
   */
  readonly leadingModelRoman: LeadingModel_LEADING_MODEL_ROMAN;
  /**
   * Measures the space between type baselines.
   */
  readonly leadingmodelroman: LeadingModel_LEADING_MODEL_ROMAN;

  /**
   * Measures the space between lines from the aki below. 
   */
  readonly LEADING_MODEL_AKI_BELOW: LeadingModel_LEADING_MODEL_AKI_BELOW;
  /**
   * Measures the space between lines from the aki below. 
   */
  readonly leadingModelAkiBelow: LeadingModel_LEADING_MODEL_AKI_BELOW;
  /**
   * Measures the space between lines from the aki below. 
   */
  readonly leadingmodelakibelow: LeadingModel_LEADING_MODEL_AKI_BELOW;

  /**
   * Measures the space between lines from the aki above. 
   */
  readonly LEADING_MODEL_AKI_ABOVE: LeadingModel_LEADING_MODEL_AKI_ABOVE;
  /**
   * Measures the space between lines from the aki above. 
   */
  readonly leadingModelAkiAbove: LeadingModel_LEADING_MODEL_AKI_ABOVE;
  /**
   * Measures the space between lines from the aki above. 
   */
  readonly leadingmodelakiabove: LeadingModel_LEADING_MODEL_AKI_ABOVE;

  /**
   * Measures the space between the character center points.
   */
  readonly LEADING_MODEL_CENTER: LeadingModel_LEADING_MODEL_CENTER;
  /**
   * Measures the space between the character center points.
   */
  readonly leadingModelCenter: LeadingModel_LEADING_MODEL_CENTER;
  /**
   * Measures the space between the character center points.
   */
  readonly leadingmodelcenter: LeadingModel_LEADING_MODEL_CENTER;

  /**
   * Center down leading model.
   */
  readonly LEADING_MODEL_CENTER_DOWN: LeadingModel_LEADING_MODEL_CENTER_DOWN;
  /**
   * Center down leading model.
   */
  readonly leadingModelCenterDown: LeadingModel_LEADING_MODEL_CENTER_DOWN;
  /**
   * Center down leading model.
   */
  readonly leadingmodelcenterdown: LeadingModel_LEADING_MODEL_CENTER_DOWN;

}
