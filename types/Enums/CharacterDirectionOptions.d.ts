/**
 * CharacterDirectionOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __CharacterDirectionOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface CharacterDirectionOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<CharacterDirectionOptions>): boolean;

  /**
   * @internal **WARNING:** `__CharacterDirectionOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__CharacterDirectionOptions]: never;
}


/**
 * Uses the default character direction.
 */
interface CharacterDirectionOptions_DEFAULT_DIRECTION extends CharacterDirectionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1147496036;
}

/**
 * Left-to-right character direction.
 */
interface CharacterDirectionOptions_LEFT_TO_RIGHT_DIRECTION extends CharacterDirectionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1278366308;
}

/**
 * Right-to-left character direction.
 */
interface CharacterDirectionOptions_RIGHT_TO_LEFT_DIRECTION extends CharacterDirectionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1379028068;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The reading direction of characters in text.
 */
export declare namespace CharacterDirectionOptions {
/**
 * Uses the default character direction.
 */
type DEFAULT_DIRECTION = CharacterDirectionOptions_DEFAULT_DIRECTION;

/**
 * Left-to-right character direction.
 */
type LEFT_TO_RIGHT_DIRECTION = CharacterDirectionOptions_LEFT_TO_RIGHT_DIRECTION;

/**
 * Right-to-left character direction.
 */
type RIGHT_TO_LEFT_DIRECTION = CharacterDirectionOptions_RIGHT_TO_LEFT_DIRECTION;

}
/**
 * The reading direction of characters in text.
 */
export declare const CharacterDirectionOptions: typeof Enumeration & {

  /**
   * Uses the default character direction.
   */
  readonly DEFAULT_DIRECTION: CharacterDirectionOptions_DEFAULT_DIRECTION;
  /**
   * Uses the default character direction.
   */
  readonly defaultDirection: CharacterDirectionOptions_DEFAULT_DIRECTION;
  /**
   * Uses the default character direction.
   */
  readonly defaultdirection: CharacterDirectionOptions_DEFAULT_DIRECTION;

  /**
   * Left-to-right character direction.
   */
  readonly LEFT_TO_RIGHT_DIRECTION: CharacterDirectionOptions_LEFT_TO_RIGHT_DIRECTION;
  /**
   * Left-to-right character direction.
   */
  readonly leftToRightDirection: CharacterDirectionOptions_LEFT_TO_RIGHT_DIRECTION;
  /**
   * Left-to-right character direction.
   */
  readonly lefttorightdirection: CharacterDirectionOptions_LEFT_TO_RIGHT_DIRECTION;

  /**
   * Right-to-left character direction.
   */
  readonly RIGHT_TO_LEFT_DIRECTION: CharacterDirectionOptions_RIGHT_TO_LEFT_DIRECTION;
  /**
   * Right-to-left character direction.
   */
  readonly rightToLeftDirection: CharacterDirectionOptions_RIGHT_TO_LEFT_DIRECTION;
  /**
   * Right-to-left character direction.
   */
  readonly righttoleftdirection: CharacterDirectionOptions_RIGHT_TO_LEFT_DIRECTION;

}
