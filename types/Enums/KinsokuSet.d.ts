/**
 * KinsokuSet.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __KinsokuSet: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface KinsokuSet extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<KinsokuSet>): boolean;

  /**
   * @internal **WARNING:** `__KinsokuSet` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__KinsokuSet]: never;
}


/**
 * Does not use a kinsoku set. 
 */
interface KinsokuSet_NOTHING extends KinsokuSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1851876449;
}

/**
 * Uses the hard or maximum kinsoku set, which includes all Japanese characters that should not begin or end a line. 
 */
interface KinsokuSet_HARD_KINSOKU extends KinsokuSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1248357235;
}

/**
 * Uses the soft or weak kinsoku set, which omits from the hard kinsoku set long vowel symbols and small hiragana and katakana characters.
 */
interface KinsokuSet_SOFT_KINSOKU extends KinsokuSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1249078131;
}

/**
 * Uses the Korean kinsoku set.
 */
interface KinsokuSet_KOREAN_KINSOKU extends KinsokuSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1263692659;
}

/**
 * Uses the simplified Chinese kinsoku set.
 */
interface KinsokuSet_SIMPLIFIED_CHINESE_KINSOKU extends KinsokuSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1396927347;
}

/**
 * Uses the traditional Chinese kinsoku set.
 */
interface KinsokuSet_TRADITIONAL_CHINESE_KINSOKU extends KinsokuSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1413704563;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Predefined kinsoku set options.
 */
export declare namespace KinsokuSet {
/**
 * Does not use a kinsoku set. 
 */
type NOTHING = KinsokuSet_NOTHING;

/**
 * Uses the hard or maximum kinsoku set, which includes all Japanese characters that should not begin or end a line. 
 */
type HARD_KINSOKU = KinsokuSet_HARD_KINSOKU;

/**
 * Uses the soft or weak kinsoku set, which omits from the hard kinsoku set long vowel symbols and small hiragana and katakana characters.
 */
type SOFT_KINSOKU = KinsokuSet_SOFT_KINSOKU;

/**
 * Uses the Korean kinsoku set.
 */
type KOREAN_KINSOKU = KinsokuSet_KOREAN_KINSOKU;

/**
 * Uses the simplified Chinese kinsoku set.
 */
type SIMPLIFIED_CHINESE_KINSOKU = KinsokuSet_SIMPLIFIED_CHINESE_KINSOKU;

/**
 * Uses the traditional Chinese kinsoku set.
 */
type TRADITIONAL_CHINESE_KINSOKU = KinsokuSet_TRADITIONAL_CHINESE_KINSOKU;

}
/**
 * Predefined kinsoku set options.
 */
export declare const KinsokuSet: typeof Enumeration & {

  /**
   * Does not use a kinsoku set. 
   */
  readonly NOTHING: KinsokuSet_NOTHING;
  /**
   * Does not use a kinsoku set. 
   */
  readonly nothing: KinsokuSet_NOTHING;

  /**
   * Uses the hard or maximum kinsoku set, which includes all Japanese characters that should not begin or end a line. 
   */
  readonly HARD_KINSOKU: KinsokuSet_HARD_KINSOKU;
  /**
   * Uses the hard or maximum kinsoku set, which includes all Japanese characters that should not begin or end a line. 
   */
  readonly hardKinsoku: KinsokuSet_HARD_KINSOKU;
  /**
   * Uses the hard or maximum kinsoku set, which includes all Japanese characters that should not begin or end a line. 
   */
  readonly hardkinsoku: KinsokuSet_HARD_KINSOKU;

  /**
   * Uses the soft or weak kinsoku set, which omits from the hard kinsoku set long vowel symbols and small hiragana and katakana characters.
   */
  readonly SOFT_KINSOKU: KinsokuSet_SOFT_KINSOKU;
  /**
   * Uses the soft or weak kinsoku set, which omits from the hard kinsoku set long vowel symbols and small hiragana and katakana characters.
   */
  readonly softKinsoku: KinsokuSet_SOFT_KINSOKU;
  /**
   * Uses the soft or weak kinsoku set, which omits from the hard kinsoku set long vowel symbols and small hiragana and katakana characters.
   */
  readonly softkinsoku: KinsokuSet_SOFT_KINSOKU;

  /**
   * Uses the Korean kinsoku set.
   */
  readonly KOREAN_KINSOKU: KinsokuSet_KOREAN_KINSOKU;
  /**
   * Uses the Korean kinsoku set.
   */
  readonly koreanKinsoku: KinsokuSet_KOREAN_KINSOKU;
  /**
   * Uses the Korean kinsoku set.
   */
  readonly koreankinsoku: KinsokuSet_KOREAN_KINSOKU;

  /**
   * Uses the simplified Chinese kinsoku set.
   */
  readonly SIMPLIFIED_CHINESE_KINSOKU: KinsokuSet_SIMPLIFIED_CHINESE_KINSOKU;
  /**
   * Uses the simplified Chinese kinsoku set.
   */
  readonly simplifiedChineseKinsoku: KinsokuSet_SIMPLIFIED_CHINESE_KINSOKU;
  /**
   * Uses the simplified Chinese kinsoku set.
   */
  readonly simplifiedchinesekinsoku: KinsokuSet_SIMPLIFIED_CHINESE_KINSOKU;

  /**
   * Uses the traditional Chinese kinsoku set.
   */
  readonly TRADITIONAL_CHINESE_KINSOKU: KinsokuSet_TRADITIONAL_CHINESE_KINSOKU;
  /**
   * Uses the traditional Chinese kinsoku set.
   */
  readonly traditionalChineseKinsoku: KinsokuSet_TRADITIONAL_CHINESE_KINSOKU;
  /**
   * Uses the traditional Chinese kinsoku set.
   */
  readonly traditionalchinesekinsoku: KinsokuSet_TRADITIONAL_CHINESE_KINSOKU;

}
