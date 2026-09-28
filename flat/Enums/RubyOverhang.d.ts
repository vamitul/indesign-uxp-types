/**
 * RubyOverhang.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __RubyOverhang: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface RubyOverhang extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<RubyOverhang>): boolean;

  /**
   * @internal **WARNING:** `__RubyOverhang` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__RubyOverhang]: never;
}


/**
 * Does not allow ruby overhang.
 */
interface RubyOverhang_NONE extends RubyOverhang {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * Ruby overhang is one ruby.
 */
interface RubyOverhang_RUBY_OVERHANG_ONE_RUBY extends RubyOverhang {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1249013553;
}

/**
 * Ruby overhang is one-half ruby.
 */
interface RubyOverhang_RUBY_OVERHANG_HALF_RUBY extends RubyOverhang {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1249013554;
}

/**
 * Ruby overhang is the size of one character.
 */
interface RubyOverhang_RUBY_OVERHANG_ONE_CHAR extends RubyOverhang {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1249013603;
}

/**
 * Ruby overhang is one-half the size of one character.
 */
interface RubyOverhang_RUBY_OVERHANG_HALF_CHAR extends RubyOverhang {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1249011811;
}

/**
 * There is no ruby overhang size limit.
 */
interface RubyOverhang_RUBY_OVERHANG_NO_LIMIT extends RubyOverhang {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1249013621;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * How far ruby text may extend past the characters it annotates.
 */
export declare namespace RubyOverhang {
/**
 * Does not allow ruby overhang.
 */
type NONE = RubyOverhang_NONE;

/**
 * Ruby overhang is one ruby.
 */
type RUBY_OVERHANG_ONE_RUBY = RubyOverhang_RUBY_OVERHANG_ONE_RUBY;

/**
 * Ruby overhang is one-half ruby.
 */
type RUBY_OVERHANG_HALF_RUBY = RubyOverhang_RUBY_OVERHANG_HALF_RUBY;

/**
 * Ruby overhang is the size of one character.
 */
type RUBY_OVERHANG_ONE_CHAR = RubyOverhang_RUBY_OVERHANG_ONE_CHAR;

/**
 * Ruby overhang is one-half the size of one character.
 */
type RUBY_OVERHANG_HALF_CHAR = RubyOverhang_RUBY_OVERHANG_HALF_CHAR;

/**
 * There is no ruby overhang size limit.
 */
type RUBY_OVERHANG_NO_LIMIT = RubyOverhang_RUBY_OVERHANG_NO_LIMIT;

}
/**
 * How far ruby text may extend past the characters it annotates.
 */
export declare const RubyOverhang: typeof Enumeration & {

  /**
   * Does not allow ruby overhang.
   */
  readonly NONE: RubyOverhang_NONE;
  /**
   * Does not allow ruby overhang.
   */
  readonly none: RubyOverhang_NONE;

  /**
   * Ruby overhang is one ruby.
   */
  readonly RUBY_OVERHANG_ONE_RUBY: RubyOverhang_RUBY_OVERHANG_ONE_RUBY;
  /**
   * Ruby overhang is one ruby.
   */
  readonly rubyOverhangOneRuby: RubyOverhang_RUBY_OVERHANG_ONE_RUBY;
  /**
   * Ruby overhang is one ruby.
   */
  readonly rubyoverhangoneruby: RubyOverhang_RUBY_OVERHANG_ONE_RUBY;

  /**
   * Ruby overhang is one-half ruby.
   */
  readonly RUBY_OVERHANG_HALF_RUBY: RubyOverhang_RUBY_OVERHANG_HALF_RUBY;
  /**
   * Ruby overhang is one-half ruby.
   */
  readonly rubyOverhangHalfRuby: RubyOverhang_RUBY_OVERHANG_HALF_RUBY;
  /**
   * Ruby overhang is one-half ruby.
   */
  readonly rubyoverhanghalfruby: RubyOverhang_RUBY_OVERHANG_HALF_RUBY;

  /**
   * Ruby overhang is the size of one character.
   */
  readonly RUBY_OVERHANG_ONE_CHAR: RubyOverhang_RUBY_OVERHANG_ONE_CHAR;
  /**
   * Ruby overhang is the size of one character.
   */
  readonly rubyOverhangOneChar: RubyOverhang_RUBY_OVERHANG_ONE_CHAR;
  /**
   * Ruby overhang is the size of one character.
   */
  readonly rubyoverhangonechar: RubyOverhang_RUBY_OVERHANG_ONE_CHAR;

  /**
   * Ruby overhang is one-half the size of one character.
   */
  readonly RUBY_OVERHANG_HALF_CHAR: RubyOverhang_RUBY_OVERHANG_HALF_CHAR;
  /**
   * Ruby overhang is one-half the size of one character.
   */
  readonly rubyOverhangHalfChar: RubyOverhang_RUBY_OVERHANG_HALF_CHAR;
  /**
   * Ruby overhang is one-half the size of one character.
   */
  readonly rubyoverhanghalfchar: RubyOverhang_RUBY_OVERHANG_HALF_CHAR;

  /**
   * There is no ruby overhang size limit.
   */
  readonly RUBY_OVERHANG_NO_LIMIT: RubyOverhang_RUBY_OVERHANG_NO_LIMIT;
  /**
   * There is no ruby overhang size limit.
   */
  readonly rubyOverhangNoLimit: RubyOverhang_RUBY_OVERHANG_NO_LIMIT;
  /**
   * There is no ruby overhang size limit.
   */
  readonly rubyoverhangnolimit: RubyOverhang_RUBY_OVERHANG_NO_LIMIT;

}
