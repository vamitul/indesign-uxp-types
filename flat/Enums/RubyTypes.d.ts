/**
 * RubyTypes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __RubyTypes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface RubyTypes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<RubyTypes>): boolean;

  /**
   * @internal **WARNING:** `__RubyTypes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__RubyTypes]: never;
}


/**
 * Provides ruby for a group of characters.
 */
interface RubyTypes_GROUP_RUBY extends RubyTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1249011570;
}

/**
 * Provides ruby for each individual character in the group.
 */
interface RubyTypes_PER_CHARACTER_RUBY extends RubyTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1249013859;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether ruby annotates a group of characters as a whole or each character separately.
 */
export declare namespace RubyTypes {
/**
 * Provides ruby for a group of characters.
 */
type GROUP_RUBY = RubyTypes_GROUP_RUBY;

/**
 * Provides ruby for each individual character in the group.
 */
type PER_CHARACTER_RUBY = RubyTypes_PER_CHARACTER_RUBY;

}
/**
 * Whether ruby annotates a group of characters as a whole or each character separately.
 */
export declare const RubyTypes: typeof Enumeration & {

  /**
   * Provides ruby for a group of characters.
   */
  readonly GROUP_RUBY: RubyTypes_GROUP_RUBY;
  /**
   * Provides ruby for a group of characters.
   */
  readonly groupRuby: RubyTypes_GROUP_RUBY;
  /**
   * Provides ruby for a group of characters.
   */
  readonly groupruby: RubyTypes_GROUP_RUBY;

  /**
   * Provides ruby for each individual character in the group.
   */
  readonly PER_CHARACTER_RUBY: RubyTypes_PER_CHARACTER_RUBY;
  /**
   * Provides ruby for each individual character in the group.
   */
  readonly perCharacterRuby: RubyTypes_PER_CHARACTER_RUBY;
  /**
   * Provides ruby for each individual character in the group.
   */
  readonly percharacterruby: RubyTypes_PER_CHARACTER_RUBY;

}
