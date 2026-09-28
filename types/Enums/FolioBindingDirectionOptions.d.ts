/**
 * FolioBindingDirectionOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __FolioBindingDirectionOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface FolioBindingDirectionOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<FolioBindingDirectionOptions>): boolean;

  /**
   * @internal **WARNING:** `__FolioBindingDirectionOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__FolioBindingDirectionOptions]: never;
}


/**
 * Left-edge binding.
 */
interface FolioBindingDirectionOptions_LEFT extends FolioBindingDirectionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1835102828;
}

/**
 * Right-edge binding.
 */
interface FolioBindingDirectionOptions_RIGHT extends FolioBindingDirectionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1835102834;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which edge of the folio the binding is on.
 */
export declare namespace FolioBindingDirectionOptions {
/**
 * Left-edge binding.
 */
type LEFT = FolioBindingDirectionOptions_LEFT;

/**
 * Right-edge binding.
 */
type RIGHT = FolioBindingDirectionOptions_RIGHT;

}
/**
 * Which edge of the folio the binding is on.
 */
export declare const FolioBindingDirectionOptions: typeof Enumeration & {

  /**
   * Left-edge binding.
   */
  readonly LEFT: FolioBindingDirectionOptions_LEFT;
  /**
   * Left-edge binding.
   */
  readonly left: FolioBindingDirectionOptions_LEFT;

  /**
   * Right-edge binding.
   */
  readonly RIGHT: FolioBindingDirectionOptions_RIGHT;
  /**
   * Right-edge binding.
   */
  readonly right: FolioBindingDirectionOptions_RIGHT;

}
