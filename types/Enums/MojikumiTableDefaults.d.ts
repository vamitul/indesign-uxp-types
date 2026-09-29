/**
 * MojikumiTableDefaults.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __MojikumiTableDefaults: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface MojikumiTableDefaults extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<MojikumiTableDefaults>): boolean;

  /**
   * @internal **WARNING:** `__MojikumiTableDefaults` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__MojikumiTableDefaults]: never;
}


/**
 * Turns off mojikumi.
 */
interface MojikumiTableDefaults_NOTHING extends MojikumiTableDefaults {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1851876449;
}

/**
 * Uses half-width spacing for all characters.
 */
interface MojikumiTableDefaults_LINE_END_ALL_ONE_HALF_EM_ENUM extends MojikumiTableDefaults {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1246572593;
}

/**
 * Indents lines one space and uses line end uke one half space.
 */
interface MojikumiTableDefaults_ONE_EM_INDENT_LINE_END_UKE_ONE_HALF_EM_ENUM extends MojikumiTableDefaults {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1246572594;
}

/**
 * Indents lines one full or half space and uses line end uke one half space.
 */
interface MojikumiTableDefaults_ONE_OR_ONE_HALF_EM_INDENT_LINE_END_UKE_ONE_HALF_EM_ENUM extends MojikumiTableDefaults {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1246572595;
}

/**
 * Uses full-width spacing for all characters except the last character in the
 * line, which uses either full- or half-width spacing.
 */
interface MojikumiTableDefaults_ONE_OR_ONE_HALF_EM_INDENT_LINE_END_ALL_ONE_EM_ENUM extends MojikumiTableDefaults {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1246572596;
}

/**
 * Indents lines one full space and uses full-width spacing for all characters.
 */
interface MojikumiTableDefaults_ONE_EM_INDENT_LINE_END_ALL_ONE_EM_ENUM extends MojikumiTableDefaults {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1246572597;
}

/**
 * Indents lines one full space and uses no float for all characters.
 */
interface MojikumiTableDefaults_ONE_EM_INDENT_LINE_END_ALL_NO_FLOAT_ENUM extends MojikumiTableDefaults {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1246572598;
}

/**
 * Indents lines one full space and uses line end uke no float.
 */
interface MojikumiTableDefaults_ONE_EM_INDENT_LINE_END_UKE_NO_FLOAT_ENUM extends MojikumiTableDefaults {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1246572599;
}

/**
 * Indents lines one half space or one full space and uses line end uke no float.
 */
interface MojikumiTableDefaults_ONE_OR_ONE_HALF_EM_INDENT_LINE_END_UKE_NO_FLOAT_ENUM extends MojikumiTableDefaults {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1246572600;
}

/**
 * Indents lines one full space and uses half-width spacing for all characters.
 */
interface MojikumiTableDefaults_ONE_EM_INDENT_LINE_END_ALL_ONE_HALF_EM_ENUM extends MojikumiTableDefaults {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1246572601;
}

/**
 * Uses full-width spacing for all characters.
 */
interface MojikumiTableDefaults_LINE_END_ALL_ONE_EM_ENUM extends MojikumiTableDefaults {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1246572848;
}

/**
 * Uses line end uke no float.
 */
interface MojikumiTableDefaults_LINE_END_UKE_NO_FLOAT_ENUM extends MojikumiTableDefaults {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1246572849;
}

/**
 * Indents lines one or one-half space and uses full-width spacing for punctuation and for the last character in the line.
 */
interface MojikumiTableDefaults_ONE_OR_ONE_HALF_EM_INDENT_LINE_END_PERIOD_ONE_EM_ENUM extends MojikumiTableDefaults {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1246572850;
}

/**
 * Indents lines one full space and uses full-width spacing for punctuation and for the last character in the line.
 */
interface MojikumiTableDefaults_ONE_EM_INDENT_LINE_END_PERIOD_ONE_EM_ENUM extends MojikumiTableDefaults {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1246572851;
}

/**
 * Uses full-width spacing for punctuation.
 */
interface MojikumiTableDefaults_LINE_END_PERIOD_ONE_EM_ENUM extends MojikumiTableDefaults {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1246572852;
}

/**
 * Uses mojikumi tsume and aki optimized for Traditional Chinese centered punctuation glyphs.
 */
interface MojikumiTableDefaults_TRAD_CHINESE_DEFAULT extends MojikumiTableDefaults {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1246572853;
}

/**
 * Uses mojikumi tsume and aki optimized for Simplified Chinese punctuation glyphs.
 */
interface MojikumiTableDefaults_SIMP_CHINESE_DEFAULT extends MojikumiTableDefaults {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1246572854;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which built-in mojikumi spacing table governs Japanese character spacing, or none at all.
 */
export declare namespace MojikumiTableDefaults {
/**
 * Turns off mojikumi.
 */
type NOTHING = MojikumiTableDefaults_NOTHING;

/**
 * Uses half-width spacing for all characters.
 */
type LINE_END_ALL_ONE_HALF_EM_ENUM = MojikumiTableDefaults_LINE_END_ALL_ONE_HALF_EM_ENUM;

/**
 * Indents lines one space and uses line end uke one half space.
 */
type ONE_EM_INDENT_LINE_END_UKE_ONE_HALF_EM_ENUM = MojikumiTableDefaults_ONE_EM_INDENT_LINE_END_UKE_ONE_HALF_EM_ENUM;

/**
 * Indents lines one full or half space and uses line end uke one half space.
 */
type ONE_OR_ONE_HALF_EM_INDENT_LINE_END_UKE_ONE_HALF_EM_ENUM = MojikumiTableDefaults_ONE_OR_ONE_HALF_EM_INDENT_LINE_END_UKE_ONE_HALF_EM_ENUM;

/**
 * Uses full-width spacing for all characters except the last character in the
 * line, which uses either full- or half-width spacing.
 */
type ONE_OR_ONE_HALF_EM_INDENT_LINE_END_ALL_ONE_EM_ENUM = MojikumiTableDefaults_ONE_OR_ONE_HALF_EM_INDENT_LINE_END_ALL_ONE_EM_ENUM;

/**
 * Indents lines one full space and uses full-width spacing for all characters.
 */
type ONE_EM_INDENT_LINE_END_ALL_ONE_EM_ENUM = MojikumiTableDefaults_ONE_EM_INDENT_LINE_END_ALL_ONE_EM_ENUM;

/**
 * Indents lines one full space and uses no float for all characters.
 */
type ONE_EM_INDENT_LINE_END_ALL_NO_FLOAT_ENUM = MojikumiTableDefaults_ONE_EM_INDENT_LINE_END_ALL_NO_FLOAT_ENUM;

/**
 * Indents lines one full space and uses line end uke no float.
 */
type ONE_EM_INDENT_LINE_END_UKE_NO_FLOAT_ENUM = MojikumiTableDefaults_ONE_EM_INDENT_LINE_END_UKE_NO_FLOAT_ENUM;

/**
 * Indents lines one half space or one full space and uses line end uke no float.
 */
type ONE_OR_ONE_HALF_EM_INDENT_LINE_END_UKE_NO_FLOAT_ENUM = MojikumiTableDefaults_ONE_OR_ONE_HALF_EM_INDENT_LINE_END_UKE_NO_FLOAT_ENUM;

/**
 * Indents lines one full space and uses half-width spacing for all characters.
 */
type ONE_EM_INDENT_LINE_END_ALL_ONE_HALF_EM_ENUM = MojikumiTableDefaults_ONE_EM_INDENT_LINE_END_ALL_ONE_HALF_EM_ENUM;

/**
 * Uses full-width spacing for all characters.
 */
type LINE_END_ALL_ONE_EM_ENUM = MojikumiTableDefaults_LINE_END_ALL_ONE_EM_ENUM;

/**
 * Uses line end uke no float.
 */
type LINE_END_UKE_NO_FLOAT_ENUM = MojikumiTableDefaults_LINE_END_UKE_NO_FLOAT_ENUM;

/**
 * Indents lines one or one-half space and uses full-width spacing for punctuation and for the last character in the line.
 */
type ONE_OR_ONE_HALF_EM_INDENT_LINE_END_PERIOD_ONE_EM_ENUM = MojikumiTableDefaults_ONE_OR_ONE_HALF_EM_INDENT_LINE_END_PERIOD_ONE_EM_ENUM;

/**
 * Indents lines one full space and uses full-width spacing for punctuation and for the last character in the line.
 */
type ONE_EM_INDENT_LINE_END_PERIOD_ONE_EM_ENUM = MojikumiTableDefaults_ONE_EM_INDENT_LINE_END_PERIOD_ONE_EM_ENUM;

/**
 * Uses full-width spacing for punctuation.
 */
type LINE_END_PERIOD_ONE_EM_ENUM = MojikumiTableDefaults_LINE_END_PERIOD_ONE_EM_ENUM;

/**
 * Uses mojikumi tsume and aki optimized for Traditional Chinese centered punctuation glyphs.
 */
type TRAD_CHINESE_DEFAULT = MojikumiTableDefaults_TRAD_CHINESE_DEFAULT;

/**
 * Uses mojikumi tsume and aki optimized for Simplified Chinese punctuation glyphs.
 */
type SIMP_CHINESE_DEFAULT = MojikumiTableDefaults_SIMP_CHINESE_DEFAULT;

}
/**
 * Which built-in mojikumi spacing table governs Japanese character spacing, or none at all.
 */
export declare const MojikumiTableDefaults: typeof Enumeration & {

  /**
   * Turns off mojikumi.
   */
  readonly NOTHING: MojikumiTableDefaults_NOTHING;
  /**
   * Turns off mojikumi.
   */
  readonly nothing: MojikumiTableDefaults_NOTHING;

  /**
   * Uses half-width spacing for all characters.
   */
  readonly LINE_END_ALL_ONE_HALF_EM_ENUM: MojikumiTableDefaults_LINE_END_ALL_ONE_HALF_EM_ENUM;
  /**
   * Uses half-width spacing for all characters.
   */
  readonly lineEndAllOneHalfEmEnum: MojikumiTableDefaults_LINE_END_ALL_ONE_HALF_EM_ENUM;
  /**
   * Uses half-width spacing for all characters.
   */
  readonly lineendallonehalfemenum: MojikumiTableDefaults_LINE_END_ALL_ONE_HALF_EM_ENUM;

  /**
   * Indents lines one space and uses line end uke one half space.
   */
  readonly ONE_EM_INDENT_LINE_END_UKE_ONE_HALF_EM_ENUM: MojikumiTableDefaults_ONE_EM_INDENT_LINE_END_UKE_ONE_HALF_EM_ENUM;
  /**
   * Indents lines one space and uses line end uke one half space.
   */
  readonly oneEmIndentLineEndUkeOneHalfEmEnum: MojikumiTableDefaults_ONE_EM_INDENT_LINE_END_UKE_ONE_HALF_EM_ENUM;
  /**
   * Indents lines one space and uses line end uke one half space.
   */
  readonly oneemindentlineendukeonehalfemenum: MojikumiTableDefaults_ONE_EM_INDENT_LINE_END_UKE_ONE_HALF_EM_ENUM;

  /**
   * Indents lines one full or half space and uses line end uke one half space.
   */
  readonly ONE_OR_ONE_HALF_EM_INDENT_LINE_END_UKE_ONE_HALF_EM_ENUM: MojikumiTableDefaults_ONE_OR_ONE_HALF_EM_INDENT_LINE_END_UKE_ONE_HALF_EM_ENUM;
  /**
   * Indents lines one full or half space and uses line end uke one half space.
   */
  readonly oneOrOneHalfEmIndentLineEndUkeOneHalfEmEnum: MojikumiTableDefaults_ONE_OR_ONE_HALF_EM_INDENT_LINE_END_UKE_ONE_HALF_EM_ENUM;
  /**
   * Indents lines one full or half space and uses line end uke one half space.
   */
  readonly oneoronehalfemindentlineendukeonehalfemenum: MojikumiTableDefaults_ONE_OR_ONE_HALF_EM_INDENT_LINE_END_UKE_ONE_HALF_EM_ENUM;

  /**
   * Uses full-width spacing for all characters except the last character in the
   * line, which uses either full- or half-width spacing.
   */
  readonly ONE_OR_ONE_HALF_EM_INDENT_LINE_END_ALL_ONE_EM_ENUM: MojikumiTableDefaults_ONE_OR_ONE_HALF_EM_INDENT_LINE_END_ALL_ONE_EM_ENUM;
  /**
   * Uses full-width spacing for all characters except the last character in the
   * line, which uses either full- or half-width spacing.
   */
  readonly oneOrOneHalfEmIndentLineEndAllOneEmEnum: MojikumiTableDefaults_ONE_OR_ONE_HALF_EM_INDENT_LINE_END_ALL_ONE_EM_ENUM;
  /**
   * Uses full-width spacing for all characters except the last character in the
   * line, which uses either full- or half-width spacing.
   */
  readonly oneoronehalfemindentlineendalloneemenum: MojikumiTableDefaults_ONE_OR_ONE_HALF_EM_INDENT_LINE_END_ALL_ONE_EM_ENUM;

  /**
   * Indents lines one full space and uses full-width spacing for all characters.
   */
  readonly ONE_EM_INDENT_LINE_END_ALL_ONE_EM_ENUM: MojikumiTableDefaults_ONE_EM_INDENT_LINE_END_ALL_ONE_EM_ENUM;
  /**
   * Indents lines one full space and uses full-width spacing for all characters.
   */
  readonly oneEmIndentLineEndAllOneEmEnum: MojikumiTableDefaults_ONE_EM_INDENT_LINE_END_ALL_ONE_EM_ENUM;
  /**
   * Indents lines one full space and uses full-width spacing for all characters.
   */
  readonly oneemindentlineendalloneemenum: MojikumiTableDefaults_ONE_EM_INDENT_LINE_END_ALL_ONE_EM_ENUM;

  /**
   * Indents lines one full space and uses no float for all characters.
   */
  readonly ONE_EM_INDENT_LINE_END_ALL_NO_FLOAT_ENUM: MojikumiTableDefaults_ONE_EM_INDENT_LINE_END_ALL_NO_FLOAT_ENUM;
  /**
   * Indents lines one full space and uses no float for all characters.
   */
  readonly oneEmIndentLineEndAllNoFloatEnum: MojikumiTableDefaults_ONE_EM_INDENT_LINE_END_ALL_NO_FLOAT_ENUM;
  /**
   * Indents lines one full space and uses no float for all characters.
   */
  readonly oneemindentlineendallnofloatenum: MojikumiTableDefaults_ONE_EM_INDENT_LINE_END_ALL_NO_FLOAT_ENUM;

  /**
   * Indents lines one full space and uses line end uke no float.
   */
  readonly ONE_EM_INDENT_LINE_END_UKE_NO_FLOAT_ENUM: MojikumiTableDefaults_ONE_EM_INDENT_LINE_END_UKE_NO_FLOAT_ENUM;
  /**
   * Indents lines one full space and uses line end uke no float.
   */
  readonly oneEmIndentLineEndUkeNoFloatEnum: MojikumiTableDefaults_ONE_EM_INDENT_LINE_END_UKE_NO_FLOAT_ENUM;
  /**
   * Indents lines one full space and uses line end uke no float.
   */
  readonly oneemindentlineendukenofloatenum: MojikumiTableDefaults_ONE_EM_INDENT_LINE_END_UKE_NO_FLOAT_ENUM;

  /**
   * Indents lines one half space or one full space and uses line end uke no float.
   */
  readonly ONE_OR_ONE_HALF_EM_INDENT_LINE_END_UKE_NO_FLOAT_ENUM: MojikumiTableDefaults_ONE_OR_ONE_HALF_EM_INDENT_LINE_END_UKE_NO_FLOAT_ENUM;
  /**
   * Indents lines one half space or one full space and uses line end uke no float.
   */
  readonly oneOrOneHalfEmIndentLineEndUkeNoFloatEnum: MojikumiTableDefaults_ONE_OR_ONE_HALF_EM_INDENT_LINE_END_UKE_NO_FLOAT_ENUM;
  /**
   * Indents lines one half space or one full space and uses line end uke no float.
   */
  readonly oneoronehalfemindentlineendukenofloatenum: MojikumiTableDefaults_ONE_OR_ONE_HALF_EM_INDENT_LINE_END_UKE_NO_FLOAT_ENUM;

  /**
   * Indents lines one full space and uses half-width spacing for all characters.
   */
  readonly ONE_EM_INDENT_LINE_END_ALL_ONE_HALF_EM_ENUM: MojikumiTableDefaults_ONE_EM_INDENT_LINE_END_ALL_ONE_HALF_EM_ENUM;
  /**
   * Indents lines one full space and uses half-width spacing for all characters.
   */
  readonly oneEmIndentLineEndAllOneHalfEmEnum: MojikumiTableDefaults_ONE_EM_INDENT_LINE_END_ALL_ONE_HALF_EM_ENUM;
  /**
   * Indents lines one full space and uses half-width spacing for all characters.
   */
  readonly oneemindentlineendallonehalfemenum: MojikumiTableDefaults_ONE_EM_INDENT_LINE_END_ALL_ONE_HALF_EM_ENUM;

  /**
   * Uses full-width spacing for all characters.
   */
  readonly LINE_END_ALL_ONE_EM_ENUM: MojikumiTableDefaults_LINE_END_ALL_ONE_EM_ENUM;
  /**
   * Uses full-width spacing for all characters.
   */
  readonly lineEndAllOneEmEnum: MojikumiTableDefaults_LINE_END_ALL_ONE_EM_ENUM;
  /**
   * Uses full-width spacing for all characters.
   */
  readonly lineendalloneemenum: MojikumiTableDefaults_LINE_END_ALL_ONE_EM_ENUM;

  /**
   * Uses line end uke no float.
   */
  readonly LINE_END_UKE_NO_FLOAT_ENUM: MojikumiTableDefaults_LINE_END_UKE_NO_FLOAT_ENUM;
  /**
   * Uses line end uke no float.
   */
  readonly lineEndUkeNoFloatEnum: MojikumiTableDefaults_LINE_END_UKE_NO_FLOAT_ENUM;
  /**
   * Uses line end uke no float.
   */
  readonly lineendukenofloatenum: MojikumiTableDefaults_LINE_END_UKE_NO_FLOAT_ENUM;

  /**
   * Indents lines one or one-half space and uses full-width spacing for punctuation and for the last character in the line.
   */
  readonly ONE_OR_ONE_HALF_EM_INDENT_LINE_END_PERIOD_ONE_EM_ENUM: MojikumiTableDefaults_ONE_OR_ONE_HALF_EM_INDENT_LINE_END_PERIOD_ONE_EM_ENUM;
  /**
   * Indents lines one or one-half space and uses full-width spacing for punctuation and for the last character in the line.
   */
  readonly oneOrOneHalfEmIndentLineEndPeriodOneEmEnum: MojikumiTableDefaults_ONE_OR_ONE_HALF_EM_INDENT_LINE_END_PERIOD_ONE_EM_ENUM;
  /**
   * Indents lines one or one-half space and uses full-width spacing for punctuation and for the last character in the line.
   */
  readonly oneoronehalfemindentlineendperiodoneemenum: MojikumiTableDefaults_ONE_OR_ONE_HALF_EM_INDENT_LINE_END_PERIOD_ONE_EM_ENUM;

  /**
   * Indents lines one full space and uses full-width spacing for punctuation and for the last character in the line.
   */
  readonly ONE_EM_INDENT_LINE_END_PERIOD_ONE_EM_ENUM: MojikumiTableDefaults_ONE_EM_INDENT_LINE_END_PERIOD_ONE_EM_ENUM;
  /**
   * Indents lines one full space and uses full-width spacing for punctuation and for the last character in the line.
   */
  readonly oneEmIndentLineEndPeriodOneEmEnum: MojikumiTableDefaults_ONE_EM_INDENT_LINE_END_PERIOD_ONE_EM_ENUM;
  /**
   * Indents lines one full space and uses full-width spacing for punctuation and for the last character in the line.
   */
  readonly oneemindentlineendperiodoneemenum: MojikumiTableDefaults_ONE_EM_INDENT_LINE_END_PERIOD_ONE_EM_ENUM;

  /**
   * Uses full-width spacing for punctuation.
   */
  readonly LINE_END_PERIOD_ONE_EM_ENUM: MojikumiTableDefaults_LINE_END_PERIOD_ONE_EM_ENUM;
  /**
   * Uses full-width spacing for punctuation.
   */
  readonly lineEndPeriodOneEmEnum: MojikumiTableDefaults_LINE_END_PERIOD_ONE_EM_ENUM;
  /**
   * Uses full-width spacing for punctuation.
   */
  readonly lineendperiodoneemenum: MojikumiTableDefaults_LINE_END_PERIOD_ONE_EM_ENUM;

  /**
   * Uses mojikumi tsume and aki optimized for Traditional Chinese centered punctuation glyphs.
   */
  readonly TRAD_CHINESE_DEFAULT: MojikumiTableDefaults_TRAD_CHINESE_DEFAULT;
  /**
   * Uses mojikumi tsume and aki optimized for Traditional Chinese centered punctuation glyphs.
   */
  readonly tradChineseDefault: MojikumiTableDefaults_TRAD_CHINESE_DEFAULT;
  /**
   * Uses mojikumi tsume and aki optimized for Traditional Chinese centered punctuation glyphs.
   */
  readonly tradchinesedefault: MojikumiTableDefaults_TRAD_CHINESE_DEFAULT;

  /**
   * Uses mojikumi tsume and aki optimized for Simplified Chinese punctuation glyphs.
   */
  readonly SIMP_CHINESE_DEFAULT: MojikumiTableDefaults_SIMP_CHINESE_DEFAULT;
  /**
   * Uses mojikumi tsume and aki optimized for Simplified Chinese punctuation glyphs.
   */
  readonly simpChineseDefault: MojikumiTableDefaults_SIMP_CHINESE_DEFAULT;
  /**
   * Uses mojikumi tsume and aki optimized for Simplified Chinese punctuation glyphs.
   */
  readonly simpchinesedefault: MojikumiTableDefaults_SIMP_CHINESE_DEFAULT;

}
