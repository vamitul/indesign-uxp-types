/**
 * PostScriptLevels.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PostScriptLevels: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PostScriptLevels extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PostScriptLevels>): boolean;

  /**
   * @internal **WARNING:** `__PostScriptLevels` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PostScriptLevels]: never;
}


/**
 * Level 2 PostScript.
 */
interface PostScriptLevels_LEVEL_2 extends PostScriptLevels {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1347636274;
}

/**
 * Level 3 PostScript.
 */
interface PostScriptLevels_LEVEL_3 extends PostScriptLevels {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1347636275;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which PostScript language level the printer is driven at.
 */
export declare namespace PostScriptLevels {
/**
 * Level 2 PostScript.
 */
type LEVEL_2 = PostScriptLevels_LEVEL_2;

/**
 * Level 3 PostScript.
 */
type LEVEL_3 = PostScriptLevels_LEVEL_3;

}
/**
 * Which PostScript language level the printer is driven at.
 */
export declare const PostScriptLevels: typeof Enumeration & {

  /**
   * Level 2 PostScript.
   */
  readonly LEVEL_2: PostScriptLevels_LEVEL_2;
  /**
   * Level 2 PostScript.
   */
  readonly level2: PostScriptLevels_LEVEL_2;

  /**
   * Level 3 PostScript.
   */
  readonly LEVEL_3: PostScriptLevels_LEVEL_3;
  /**
   * Level 3 PostScript.
   */
  readonly level3: PostScriptLevels_LEVEL_3;

}
