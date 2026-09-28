/**
 * RubyKentenPosition.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __RubyKentenPosition: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface RubyKentenPosition extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<RubyKentenPosition>): boolean;

  /**
   * @internal **WARNING:** `__RubyKentenPosition` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__RubyKentenPosition]: never;
}


/**
 * Places kenten or ruby to the right and above the parent character. 
 */
interface RubyKentenPosition_ABOVE_RIGHT extends RubyKentenPosition {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1248551282;
}

/**
 * Places kenten or ruby to the left and below the parent character. 
 */
interface RubyKentenPosition_BELOW_LEFT extends RubyKentenPosition {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1248551532;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for specifying the kenten or ruby position relative to the parent character.
 */
export declare namespace RubyKentenPosition {
/**
 * Places kenten or ruby to the right and above the parent character. 
 */
type ABOVE_RIGHT = RubyKentenPosition_ABOVE_RIGHT;

/**
 * Places kenten or ruby to the left and below the parent character. 
 */
type BELOW_LEFT = RubyKentenPosition_BELOW_LEFT;

}
/**
 * Options for specifying the kenten or ruby position relative to the parent character.
 */
export declare const RubyKentenPosition: typeof Enumeration & {

  /**
   * Places kenten or ruby to the right and above the parent character. 
   */
  readonly ABOVE_RIGHT: RubyKentenPosition_ABOVE_RIGHT;
  /**
   * Places kenten or ruby to the right and above the parent character. 
   */
  readonly aboveRight: RubyKentenPosition_ABOVE_RIGHT;
  /**
   * Places kenten or ruby to the right and above the parent character. 
   */
  readonly aboveright: RubyKentenPosition_ABOVE_RIGHT;

  /**
   * Places kenten or ruby to the left and below the parent character. 
   */
  readonly BELOW_LEFT: RubyKentenPosition_BELOW_LEFT;
  /**
   * Places kenten or ruby to the left and below the parent character. 
   */
  readonly belowLeft: RubyKentenPosition_BELOW_LEFT;
  /**
   * Places kenten or ruby to the left and below the parent character. 
   */
  readonly belowleft: RubyKentenPosition_BELOW_LEFT;

}
