/**
 * KentenCharacter.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __KentenCharacter: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface KentenCharacter extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<KentenCharacter>): boolean;

  /**
   * @internal **WARNING:** `__KentenCharacter` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__KentenCharacter]: never;
}


/**
 * Does not use kenten.
 */
interface KentenCharacter_NONE extends KentenCharacter {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * Uses the kenten sesame dot.
 */
interface KentenCharacter_KENTEN_SESAME_DOT extends KentenCharacter {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1248551795;
}

/**
 * Uses the kenten white sesame dot.
 */
interface KentenCharacter_KENTEN_WHITE_SESAME_DOT extends KentenCharacter {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1248551799;
}

/**
 * Uses the kenten black circle.
 */
interface KentenCharacter_KENTEN_BLACK_CIRCLE extends KentenCharacter {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1248551523;
}

/**
 * Uses the kenten white circle.
 */
interface KentenCharacter_KENTEN_WHITE_CIRCLE extends KentenCharacter {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1248556899;
}

/**
 * Uses the kenten black triangle.
 */
interface KentenCharacter_KENTEN_BLACK_TRIANGLE extends KentenCharacter {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1248551540;
}

/**
 * Uses the kenten white triangle.
 */
interface KentenCharacter_KENTEN_WHITE_TRIANGLE extends KentenCharacter {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1248556916;
}

/**
 * Uses the kenten bullseye.
 */
interface KentenCharacter_KENTEN_BULLSEYE extends KentenCharacter {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1248551525;
}

/**
 * Uses the kenten fisheye.
 */
interface KentenCharacter_KENTEN_FISHEYE extends KentenCharacter {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1248552549;
}

/**
 * Uses the kenten small black circle.
 */
interface KentenCharacter_KENTEN_SMALL_BLACK_CIRCLE extends KentenCharacter {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1248555875;
}

/**
 * Uses the kenten small white circle.
 */
interface KentenCharacter_KENTEN_SMALL_WHITE_CIRCLE extends KentenCharacter {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1248555895;
}

/**
 * Uses a custom kenten style.
 */
interface KentenCharacter_CUSTOM extends KentenCharacter {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1131639917;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Style options for kenten characters.
 */
export declare namespace KentenCharacter {
/**
 * Does not use kenten.
 */
type NONE = KentenCharacter_NONE;

/**
 * Uses the kenten sesame dot.
 */
type KENTEN_SESAME_DOT = KentenCharacter_KENTEN_SESAME_DOT;

/**
 * Uses the kenten white sesame dot.
 */
type KENTEN_WHITE_SESAME_DOT = KentenCharacter_KENTEN_WHITE_SESAME_DOT;

/**
 * Uses the kenten black circle.
 */
type KENTEN_BLACK_CIRCLE = KentenCharacter_KENTEN_BLACK_CIRCLE;

/**
 * Uses the kenten white circle.
 */
type KENTEN_WHITE_CIRCLE = KentenCharacter_KENTEN_WHITE_CIRCLE;

/**
 * Uses the kenten black triangle.
 */
type KENTEN_BLACK_TRIANGLE = KentenCharacter_KENTEN_BLACK_TRIANGLE;

/**
 * Uses the kenten white triangle.
 */
type KENTEN_WHITE_TRIANGLE = KentenCharacter_KENTEN_WHITE_TRIANGLE;

/**
 * Uses the kenten bullseye.
 */
type KENTEN_BULLSEYE = KentenCharacter_KENTEN_BULLSEYE;

/**
 * Uses the kenten fisheye.
 */
type KENTEN_FISHEYE = KentenCharacter_KENTEN_FISHEYE;

/**
 * Uses the kenten small black circle.
 */
type KENTEN_SMALL_BLACK_CIRCLE = KentenCharacter_KENTEN_SMALL_BLACK_CIRCLE;

/**
 * Uses the kenten small white circle.
 */
type KENTEN_SMALL_WHITE_CIRCLE = KentenCharacter_KENTEN_SMALL_WHITE_CIRCLE;

/**
 * Uses a custom kenten style.
 */
type CUSTOM = KentenCharacter_CUSTOM;

}
/**
 * Style options for kenten characters.
 */
export declare const KentenCharacter: typeof Enumeration & {

  /**
   * Does not use kenten.
   */
  readonly NONE: KentenCharacter_NONE;
  /**
   * Does not use kenten.
   */
  readonly none: KentenCharacter_NONE;

  /**
   * Uses the kenten sesame dot.
   */
  readonly KENTEN_SESAME_DOT: KentenCharacter_KENTEN_SESAME_DOT;
  /**
   * Uses the kenten sesame dot.
   */
  readonly kentenSesameDot: KentenCharacter_KENTEN_SESAME_DOT;
  /**
   * Uses the kenten sesame dot.
   */
  readonly kentensesamedot: KentenCharacter_KENTEN_SESAME_DOT;

  /**
   * Uses the kenten white sesame dot.
   */
  readonly KENTEN_WHITE_SESAME_DOT: KentenCharacter_KENTEN_WHITE_SESAME_DOT;
  /**
   * Uses the kenten white sesame dot.
   */
  readonly kentenWhiteSesameDot: KentenCharacter_KENTEN_WHITE_SESAME_DOT;
  /**
   * Uses the kenten white sesame dot.
   */
  readonly kentenwhitesesamedot: KentenCharacter_KENTEN_WHITE_SESAME_DOT;

  /**
   * Uses the kenten black circle.
   */
  readonly KENTEN_BLACK_CIRCLE: KentenCharacter_KENTEN_BLACK_CIRCLE;
  /**
   * Uses the kenten black circle.
   */
  readonly kentenBlackCircle: KentenCharacter_KENTEN_BLACK_CIRCLE;
  /**
   * Uses the kenten black circle.
   */
  readonly kentenblackcircle: KentenCharacter_KENTEN_BLACK_CIRCLE;

  /**
   * Uses the kenten white circle.
   */
  readonly KENTEN_WHITE_CIRCLE: KentenCharacter_KENTEN_WHITE_CIRCLE;
  /**
   * Uses the kenten white circle.
   */
  readonly kentenWhiteCircle: KentenCharacter_KENTEN_WHITE_CIRCLE;
  /**
   * Uses the kenten white circle.
   */
  readonly kentenwhitecircle: KentenCharacter_KENTEN_WHITE_CIRCLE;

  /**
   * Uses the kenten black triangle.
   */
  readonly KENTEN_BLACK_TRIANGLE: KentenCharacter_KENTEN_BLACK_TRIANGLE;
  /**
   * Uses the kenten black triangle.
   */
  readonly kentenBlackTriangle: KentenCharacter_KENTEN_BLACK_TRIANGLE;
  /**
   * Uses the kenten black triangle.
   */
  readonly kentenblacktriangle: KentenCharacter_KENTEN_BLACK_TRIANGLE;

  /**
   * Uses the kenten white triangle.
   */
  readonly KENTEN_WHITE_TRIANGLE: KentenCharacter_KENTEN_WHITE_TRIANGLE;
  /**
   * Uses the kenten white triangle.
   */
  readonly kentenWhiteTriangle: KentenCharacter_KENTEN_WHITE_TRIANGLE;
  /**
   * Uses the kenten white triangle.
   */
  readonly kentenwhitetriangle: KentenCharacter_KENTEN_WHITE_TRIANGLE;

  /**
   * Uses the kenten bullseye.
   */
  readonly KENTEN_BULLSEYE: KentenCharacter_KENTEN_BULLSEYE;
  /**
   * Uses the kenten bullseye.
   */
  readonly kentenBullseye: KentenCharacter_KENTEN_BULLSEYE;
  /**
   * Uses the kenten bullseye.
   */
  readonly kentenbullseye: KentenCharacter_KENTEN_BULLSEYE;

  /**
   * Uses the kenten fisheye.
   */
  readonly KENTEN_FISHEYE: KentenCharacter_KENTEN_FISHEYE;
  /**
   * Uses the kenten fisheye.
   */
  readonly kentenFisheye: KentenCharacter_KENTEN_FISHEYE;
  /**
   * Uses the kenten fisheye.
   */
  readonly kentenfisheye: KentenCharacter_KENTEN_FISHEYE;

  /**
   * Uses the kenten small black circle.
   */
  readonly KENTEN_SMALL_BLACK_CIRCLE: KentenCharacter_KENTEN_SMALL_BLACK_CIRCLE;
  /**
   * Uses the kenten small black circle.
   */
  readonly kentenSmallBlackCircle: KentenCharacter_KENTEN_SMALL_BLACK_CIRCLE;
  /**
   * Uses the kenten small black circle.
   */
  readonly kentensmallblackcircle: KentenCharacter_KENTEN_SMALL_BLACK_CIRCLE;

  /**
   * Uses the kenten small white circle.
   */
  readonly KENTEN_SMALL_WHITE_CIRCLE: KentenCharacter_KENTEN_SMALL_WHITE_CIRCLE;
  /**
   * Uses the kenten small white circle.
   */
  readonly kentenSmallWhiteCircle: KentenCharacter_KENTEN_SMALL_WHITE_CIRCLE;
  /**
   * Uses the kenten small white circle.
   */
  readonly kentensmallwhitecircle: KentenCharacter_KENTEN_SMALL_WHITE_CIRCLE;

  /**
   * Uses a custom kenten style.
   */
  readonly CUSTOM: KentenCharacter_CUSTOM;
  /**
   * Uses a custom kenten style.
   */
  readonly custom: KentenCharacter_CUSTOM;

}
