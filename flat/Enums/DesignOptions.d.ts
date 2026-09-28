/**
 * DesignOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __DesignOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface DesignOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<DesignOptions>): boolean;

  /**
   * @internal **WARNING:** `__DesignOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__DesignOptions]: never;
}


/**
 * Uses the current object's properties as the starting appearance of the animation at runtime.
 */
interface DesignOptions_FROM_CURRENT_APPEARANCE extends DesignOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1634551405;
}

/**
 * Uses the current object's properties as the end appearance of the animation at runtime.
 */
interface DesignOptions_TO_CURRENT_APPEARANCE extends DesignOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1634554991;
}

/**
 * Uses the current object's properties as the starting appearance, and current position as the end location of the animation at runtime.
 */
interface DesignOptions_TO_CURRENT_LOCATION extends DesignOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1634553702;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The animation design options.
 */
export declare namespace DesignOptions {
/**
 * Uses the current object's properties as the starting appearance of the animation at runtime.
 */
type FROM_CURRENT_APPEARANCE = DesignOptions_FROM_CURRENT_APPEARANCE;

/**
 * Uses the current object's properties as the end appearance of the animation at runtime.
 */
type TO_CURRENT_APPEARANCE = DesignOptions_TO_CURRENT_APPEARANCE;

/**
 * Uses the current object's properties as the starting appearance, and current position as the end location of the animation at runtime.
 */
type TO_CURRENT_LOCATION = DesignOptions_TO_CURRENT_LOCATION;

}
/**
 * The animation design options.
 */
export declare const DesignOptions: typeof Enumeration & {

  /**
   * Uses the current object's properties as the starting appearance of the animation at runtime.
   */
  readonly FROM_CURRENT_APPEARANCE: DesignOptions_FROM_CURRENT_APPEARANCE;
  /**
   * Uses the current object's properties as the starting appearance of the animation at runtime.
   */
  readonly fromCurrentAppearance: DesignOptions_FROM_CURRENT_APPEARANCE;
  /**
   * Uses the current object's properties as the starting appearance of the animation at runtime.
   */
  readonly fromcurrentappearance: DesignOptions_FROM_CURRENT_APPEARANCE;

  /**
   * Uses the current object's properties as the end appearance of the animation at runtime.
   */
  readonly TO_CURRENT_APPEARANCE: DesignOptions_TO_CURRENT_APPEARANCE;
  /**
   * Uses the current object's properties as the end appearance of the animation at runtime.
   */
  readonly toCurrentAppearance: DesignOptions_TO_CURRENT_APPEARANCE;
  /**
   * Uses the current object's properties as the end appearance of the animation at runtime.
   */
  readonly tocurrentappearance: DesignOptions_TO_CURRENT_APPEARANCE;

  /**
   * Uses the current object's properties as the starting appearance, and current position as the end location of the animation at runtime.
   */
  readonly TO_CURRENT_LOCATION: DesignOptions_TO_CURRENT_LOCATION;
  /**
   * Uses the current object's properties as the starting appearance, and current position as the end location of the animation at runtime.
   */
  readonly toCurrentLocation: DesignOptions_TO_CURRENT_LOCATION;
  /**
   * Uses the current object's properties as the starting appearance, and current position as the end location of the animation at runtime.
   */
  readonly tocurrentlocation: DesignOptions_TO_CURRENT_LOCATION;

}
