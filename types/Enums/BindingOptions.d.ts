/**
 * BindingOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __BindingOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface BindingOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<BindingOptions>): boolean;

  /**
   * @internal **WARNING:** `__BindingOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__BindingOptions]: never;
}


/**
 * Moves the page to the right side of the spread's binding spine.
 */
interface BindingOptions_RIGHT_ALIGN extends BindingOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1919379572;
}

/**
 * Moves the page to the left side of the spread's binding spine.
 */
interface BindingOptions_LEFT_ALIGN extends BindingOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1818584692;
}

/**
 * Uses the default binding side.
 */
interface BindingOptions_DEFAULT_VALUE extends BindingOptions {
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
 * The location of the binding spine in a spread.
 */
export declare namespace BindingOptions {
/**
 * Moves the page to the right side of the spread's binding spine.
 */
type RIGHT_ALIGN = BindingOptions_RIGHT_ALIGN;

/**
 * Moves the page to the left side of the spread's binding spine.
 */
type LEFT_ALIGN = BindingOptions_LEFT_ALIGN;

/**
 * Uses the default binding side.
 */
type DEFAULT_VALUE = BindingOptions_DEFAULT_VALUE;

}
/**
 * The location of the binding spine in a spread.
 */
export declare const BindingOptions: typeof Enumeration & {

  /**
   * Moves the page to the right side of the spread's binding spine.
   */
  readonly RIGHT_ALIGN: BindingOptions_RIGHT_ALIGN;
  /**
   * Moves the page to the right side of the spread's binding spine.
   */
  readonly rightAlign: BindingOptions_RIGHT_ALIGN;
  /**
   * Moves the page to the right side of the spread's binding spine.
   */
  readonly rightalign: BindingOptions_RIGHT_ALIGN;

  /**
   * Moves the page to the left side of the spread's binding spine.
   */
  readonly LEFT_ALIGN: BindingOptions_LEFT_ALIGN;
  /**
   * Moves the page to the left side of the spread's binding spine.
   */
  readonly leftAlign: BindingOptions_LEFT_ALIGN;
  /**
   * Moves the page to the left side of the spread's binding spine.
   */
  readonly leftalign: BindingOptions_LEFT_ALIGN;

  /**
   * Uses the default binding side.
   */
  readonly DEFAULT_VALUE: BindingOptions_DEFAULT_VALUE;
  /**
   * Uses the default binding side.
   */
  readonly defaultValue: BindingOptions_DEFAULT_VALUE;
  /**
   * Uses the default binding side.
   */
  readonly defaultvalue: BindingOptions_DEFAULT_VALUE;

}
