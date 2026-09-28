/**
 * ColorModel.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ColorModel: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ColorModel extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ColorModel>): boolean;

  /**
   * @internal **WARNING:** `__ColorModel` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ColorModel]: never;
}


/**
 * Spot color.
 */
interface ColorModel_SPOT extends ColorModel {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936748404;
}

/**
 * Process color.
 */
interface ColorModel_PROCESS extends ColorModel {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886548851;
}

/**
 * Registration color.
 */
interface ColorModel_REGISTRATION extends ColorModel {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1919248243;
}

/**
 * Mixed ink color.
 */
interface ColorModel_MIXEDINKMODEL extends ColorModel {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1768844664;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Color model options.
 */
export declare namespace ColorModel {
/**
 * Spot color.
 */
type SPOT = ColorModel_SPOT;

/**
 * Process color.
 */
type PROCESS = ColorModel_PROCESS;

/**
 * Registration color.
 */
type REGISTRATION = ColorModel_REGISTRATION;

/**
 * Mixed ink color.
 */
type MIXEDINKMODEL = ColorModel_MIXEDINKMODEL;

}
/**
 * Color model options.
 */
export declare const ColorModel: typeof Enumeration & {

  /**
   * Spot color.
   */
  readonly SPOT: ColorModel_SPOT;
  /**
   * Spot color.
   */
  readonly spot: ColorModel_SPOT;

  /**
   * Process color.
   */
  readonly PROCESS: ColorModel_PROCESS;
  /**
   * Process color.
   */
  readonly process: ColorModel_PROCESS;

  /**
   * Registration color.
   */
  readonly REGISTRATION: ColorModel_REGISTRATION;
  /**
   * Registration color.
   */
  readonly registration: ColorModel_REGISTRATION;

  /**
   * Mixed ink color.
   */
  readonly MIXEDINKMODEL: ColorModel_MIXEDINKMODEL;
  /**
   * Mixed ink color.
   */
  readonly mixedinkmodel: ColorModel_MIXEDINKMODEL;

}
