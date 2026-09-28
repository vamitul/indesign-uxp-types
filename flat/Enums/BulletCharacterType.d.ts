/**
 * BulletCharacterType.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __BulletCharacterType: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface BulletCharacterType extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<BulletCharacterType>): boolean;

  /**
   * @internal **WARNING:** `__BulletCharacterType` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__BulletCharacterType]: never;
}


/**
 * Unicode only.
 */
interface BulletCharacterType_UNICODE_ONLY extends BulletCharacterType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1111717231;
}

/**
 * Unicode with font.
 */
interface BulletCharacterType_UNICODE_WITH_FONT extends BulletCharacterType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1111717222;
}

/**
 * Glyph with font.
 */
interface BulletCharacterType_GLYPH_WITH_FONT extends BulletCharacterType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1111713638;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Where a list bullet comes from: a literal character, a Unicode code point, or a glyph chosen
 * from a specific font.
 */
export declare namespace BulletCharacterType {
/**
 * Unicode only.
 */
type UNICODE_ONLY = BulletCharacterType_UNICODE_ONLY;

/**
 * Unicode with font.
 */
type UNICODE_WITH_FONT = BulletCharacterType_UNICODE_WITH_FONT;

/**
 * Glyph with font.
 */
type GLYPH_WITH_FONT = BulletCharacterType_GLYPH_WITH_FONT;

}
/**
 * Where a list bullet comes from: a literal character, a Unicode code point, or a glyph chosen
 * from a specific font.
 */
export declare const BulletCharacterType: typeof Enumeration & {

  /**
   * Unicode only.
   */
  readonly UNICODE_ONLY: BulletCharacterType_UNICODE_ONLY;
  /**
   * Unicode only.
   */
  readonly unicodeOnly: BulletCharacterType_UNICODE_ONLY;
  /**
   * Unicode only.
   */
  readonly unicodeonly: BulletCharacterType_UNICODE_ONLY;

  /**
   * Unicode with font.
   */
  readonly UNICODE_WITH_FONT: BulletCharacterType_UNICODE_WITH_FONT;
  /**
   * Unicode with font.
   */
  readonly unicodeWithFont: BulletCharacterType_UNICODE_WITH_FONT;
  /**
   * Unicode with font.
   */
  readonly unicodewithfont: BulletCharacterType_UNICODE_WITH_FONT;

  /**
   * Glyph with font.
   */
  readonly GLYPH_WITH_FONT: BulletCharacterType_GLYPH_WITH_FONT;
  /**
   * Glyph with font.
   */
  readonly glyphWithFont: BulletCharacterType_GLYPH_WITH_FONT;
  /**
   * Glyph with font.
   */
  readonly glyphwithfont: BulletCharacterType_GLYPH_WITH_FONT;

}
