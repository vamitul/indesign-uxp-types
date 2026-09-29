/**
 * FeatherCornerType.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __FeatherCornerType: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface FeatherCornerType extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<FeatherCornerType>): boolean;

  /**
   * @internal **WARNING:** `__FeatherCornerType` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__FeatherCornerType]: never;
}


/**
 * The gradient exactly follows the outer edge of the object, including sharp corners.
 */
interface FeatherCornerType_SHARP extends FeatherCornerType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020623201;
}

/**
 * The corners are rounded by the feather radius.
 */
interface FeatherCornerType_ROUNDED extends FeatherCornerType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020623202;
}

/**
 * The edges of the object fade from opaque to transparent.
 */
interface FeatherCornerType_DIFFUSION extends FeatherCornerType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020623203;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Corner type options.
 */
export declare namespace FeatherCornerType {
/**
 * The gradient exactly follows the outer edge of the object, including sharp corners.
 */
type SHARP = FeatherCornerType_SHARP;

/**
 * The corners are rounded by the feather radius.
 */
type ROUNDED = FeatherCornerType_ROUNDED;

/**
 * The edges of the object fade from opaque to transparent.
 */
type DIFFUSION = FeatherCornerType_DIFFUSION;

}
/**
 * Corner type options.
 */
export declare const FeatherCornerType: typeof Enumeration & {

  /**
   * The gradient exactly follows the outer edge of the object, including sharp corners.
   */
  readonly SHARP: FeatherCornerType_SHARP;
  /**
   * The gradient exactly follows the outer edge of the object, including sharp corners.
   */
  readonly sharp: FeatherCornerType_SHARP;

  /**
   * The corners are rounded by the feather radius.
   */
  readonly ROUNDED: FeatherCornerType_ROUNDED;
  /**
   * The corners are rounded by the feather radius.
   */
  readonly rounded: FeatherCornerType_ROUNDED;

  /**
   * The edges of the object fade from opaque to transparent.
   */
  readonly DIFFUSION: FeatherCornerType_DIFFUSION;
  /**
   * The edges of the object fade from opaque to transparent.
   */
  readonly diffusion: FeatherCornerType_DIFFUSION;

}
