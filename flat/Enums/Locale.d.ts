/**
 * Locale.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __Locale: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface Locale extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<Locale>): boolean;

  /**
   * @internal **WARNING:** `__Locale` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__Locale]: never;
}


/**
 * Danish.
 */
interface Locale_DANISH_LOCALE extends Locale {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1279476846;
}

/**
 * English.
 */
interface Locale_ENGLISH_LOCALE extends Locale {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1279477102;
}

/**
 * International English.
 */
interface Locale_INTERNATIONAL_ENGLISH_LOCALE extends Locale {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1279477097;
}

/**
 * Finnish.
 */
interface Locale_FINNISH_LOCALE extends Locale {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1279477358;
}

/**
 * French.
 */
interface Locale_FRENCH_LOCALE extends Locale {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1279477362;
}

/**
 * German.
 */
interface Locale_GERMAN_LOCALE extends Locale {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1279477613;
}

/**
 * Italian.
 */
interface Locale_ITALIAN_LOCALE extends Locale {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1279478132;
}

/**
 * Portuguese.
 */
interface Locale_PORTUGUESE_LOCALE extends Locale {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1279479911;
}

/**
 * Spanish.
 */
interface Locale_SPANISH_LOCALE extends Locale {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1279480688;
}

/**
 * Swedish.
 */
interface Locale_SWEDISH_LOCALE extends Locale {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1279480695;
}

/**
 * Japanese.
 */
interface Locale_JAPANESE_LOCALE extends Locale {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1279478384;
}

/**
 * Arabic
 */
interface Locale_ARABIC_LOCALE extends Locale {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1279476082;
}

/**
 * Czech
 */
interface Locale_CZECH_LOCALE extends Locale {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1279476602;
}

/**
 * Greek
 */
interface Locale_GREEK_LOCALE extends Locale {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1279477618;
}

/**
 * Hebrew
 */
interface Locale_HEBREW_LOCALE extends Locale {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1279477858;
}

/**
 * Hungarian
 */
interface Locale_HUNGARIAN_LOCALE extends Locale {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1279477877;
}

/**
 * Polish
 */
interface Locale_POLISH_LOCALE extends Locale {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1279479916;
}

/**
 * Romanian
 */
interface Locale_ROMANIAN_LOCALE extends Locale {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1279480431;
}

/**
 * Russian
 */
interface Locale_RUSSIAN_LOCALE extends Locale {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1279480437;
}

/**
 * Turkish
 */
interface Locale_TURKISH_LOCALE extends Locale {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1279480946;
}

/**
 * Ukrainian
 */
interface Locale_UKRAINIAN_LOCALE extends Locale {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1279481195;
}

/**
 * Korean.
 */
interface Locale_KOREAN_LOCALE extends Locale {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1279478639;
}

/**
 * Simplified Chinese.
 */
interface Locale_SIMPLIFIED_CHINESE_LOCALE extends Locale {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1279476590;
}

/**
 * Traditional Chinese.
 */
interface Locale_TRADITIONAL_CHINESE_LOCALE extends Locale {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1279480951;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The language and region InDesign's user interface and defaults are set to.
 */
export declare namespace Locale {
/**
 * Danish.
 */
type DANISH_LOCALE = Locale_DANISH_LOCALE;

/**
 * English.
 */
type ENGLISH_LOCALE = Locale_ENGLISH_LOCALE;

/**
 * International English.
 */
type INTERNATIONAL_ENGLISH_LOCALE = Locale_INTERNATIONAL_ENGLISH_LOCALE;

/**
 * Finnish.
 */
type FINNISH_LOCALE = Locale_FINNISH_LOCALE;

/**
 * French.
 */
type FRENCH_LOCALE = Locale_FRENCH_LOCALE;

/**
 * German.
 */
type GERMAN_LOCALE = Locale_GERMAN_LOCALE;

/**
 * Italian.
 */
type ITALIAN_LOCALE = Locale_ITALIAN_LOCALE;

/**
 * Portuguese.
 */
type PORTUGUESE_LOCALE = Locale_PORTUGUESE_LOCALE;

/**
 * Spanish.
 */
type SPANISH_LOCALE = Locale_SPANISH_LOCALE;

/**
 * Swedish.
 */
type SWEDISH_LOCALE = Locale_SWEDISH_LOCALE;

/**
 * Japanese.
 */
type JAPANESE_LOCALE = Locale_JAPANESE_LOCALE;

/**
 * Arabic
 */
type ARABIC_LOCALE = Locale_ARABIC_LOCALE;

/**
 * Czech
 */
type CZECH_LOCALE = Locale_CZECH_LOCALE;

/**
 * Greek
 */
type GREEK_LOCALE = Locale_GREEK_LOCALE;

/**
 * Hebrew
 */
type HEBREW_LOCALE = Locale_HEBREW_LOCALE;

/**
 * Hungarian
 */
type HUNGARIAN_LOCALE = Locale_HUNGARIAN_LOCALE;

/**
 * Polish
 */
type POLISH_LOCALE = Locale_POLISH_LOCALE;

/**
 * Romanian
 */
type ROMANIAN_LOCALE = Locale_ROMANIAN_LOCALE;

/**
 * Russian
 */
type RUSSIAN_LOCALE = Locale_RUSSIAN_LOCALE;

/**
 * Turkish
 */
type TURKISH_LOCALE = Locale_TURKISH_LOCALE;

/**
 * Ukrainian
 */
type UKRAINIAN_LOCALE = Locale_UKRAINIAN_LOCALE;

/**
 * Korean.
 */
type KOREAN_LOCALE = Locale_KOREAN_LOCALE;

/**
 * Simplified Chinese.
 */
type SIMPLIFIED_CHINESE_LOCALE = Locale_SIMPLIFIED_CHINESE_LOCALE;

/**
 * Traditional Chinese.
 */
type TRADITIONAL_CHINESE_LOCALE = Locale_TRADITIONAL_CHINESE_LOCALE;

}
/**
 * The language and region InDesign's user interface and defaults are set to.
 */
export declare const Locale: typeof Enumeration & {

  /**
   * Danish.
   */
  readonly DANISH_LOCALE: Locale_DANISH_LOCALE;
  /**
   * Danish.
   */
  readonly danishLocale: Locale_DANISH_LOCALE;
  /**
   * Danish.
   */
  readonly danishlocale: Locale_DANISH_LOCALE;

  /**
   * English.
   */
  readonly ENGLISH_LOCALE: Locale_ENGLISH_LOCALE;
  /**
   * English.
   */
  readonly englishLocale: Locale_ENGLISH_LOCALE;
  /**
   * English.
   */
  readonly englishlocale: Locale_ENGLISH_LOCALE;

  /**
   * International English.
   */
  readonly INTERNATIONAL_ENGLISH_LOCALE: Locale_INTERNATIONAL_ENGLISH_LOCALE;
  /**
   * International English.
   */
  readonly internationalEnglishLocale: Locale_INTERNATIONAL_ENGLISH_LOCALE;
  /**
   * International English.
   */
  readonly internationalenglishlocale: Locale_INTERNATIONAL_ENGLISH_LOCALE;

  /**
   * Finnish.
   */
  readonly FINNISH_LOCALE: Locale_FINNISH_LOCALE;
  /**
   * Finnish.
   */
  readonly finnishLocale: Locale_FINNISH_LOCALE;
  /**
   * Finnish.
   */
  readonly finnishlocale: Locale_FINNISH_LOCALE;

  /**
   * French.
   */
  readonly FRENCH_LOCALE: Locale_FRENCH_LOCALE;
  /**
   * French.
   */
  readonly frenchLocale: Locale_FRENCH_LOCALE;
  /**
   * French.
   */
  readonly frenchlocale: Locale_FRENCH_LOCALE;

  /**
   * German.
   */
  readonly GERMAN_LOCALE: Locale_GERMAN_LOCALE;
  /**
   * German.
   */
  readonly germanLocale: Locale_GERMAN_LOCALE;
  /**
   * German.
   */
  readonly germanlocale: Locale_GERMAN_LOCALE;

  /**
   * Italian.
   */
  readonly ITALIAN_LOCALE: Locale_ITALIAN_LOCALE;
  /**
   * Italian.
   */
  readonly italianLocale: Locale_ITALIAN_LOCALE;
  /**
   * Italian.
   */
  readonly italianlocale: Locale_ITALIAN_LOCALE;

  /**
   * Portuguese.
   */
  readonly PORTUGUESE_LOCALE: Locale_PORTUGUESE_LOCALE;
  /**
   * Portuguese.
   */
  readonly portugueseLocale: Locale_PORTUGUESE_LOCALE;
  /**
   * Portuguese.
   */
  readonly portugueselocale: Locale_PORTUGUESE_LOCALE;

  /**
   * Spanish.
   */
  readonly SPANISH_LOCALE: Locale_SPANISH_LOCALE;
  /**
   * Spanish.
   */
  readonly spanishLocale: Locale_SPANISH_LOCALE;
  /**
   * Spanish.
   */
  readonly spanishlocale: Locale_SPANISH_LOCALE;

  /**
   * Swedish.
   */
  readonly SWEDISH_LOCALE: Locale_SWEDISH_LOCALE;
  /**
   * Swedish.
   */
  readonly swedishLocale: Locale_SWEDISH_LOCALE;
  /**
   * Swedish.
   */
  readonly swedishlocale: Locale_SWEDISH_LOCALE;

  /**
   * Japanese.
   */
  readonly JAPANESE_LOCALE: Locale_JAPANESE_LOCALE;
  /**
   * Japanese.
   */
  readonly japaneseLocale: Locale_JAPANESE_LOCALE;
  /**
   * Japanese.
   */
  readonly japaneselocale: Locale_JAPANESE_LOCALE;

  /**
   * Arabic
   */
  readonly ARABIC_LOCALE: Locale_ARABIC_LOCALE;
  /**
   * Arabic
   */
  readonly arabicLocale: Locale_ARABIC_LOCALE;
  /**
   * Arabic
   */
  readonly arabiclocale: Locale_ARABIC_LOCALE;

  /**
   * Czech
   */
  readonly CZECH_LOCALE: Locale_CZECH_LOCALE;
  /**
   * Czech
   */
  readonly czechLocale: Locale_CZECH_LOCALE;
  /**
   * Czech
   */
  readonly czechlocale: Locale_CZECH_LOCALE;

  /**
   * Greek
   */
  readonly GREEK_LOCALE: Locale_GREEK_LOCALE;
  /**
   * Greek
   */
  readonly greekLocale: Locale_GREEK_LOCALE;
  /**
   * Greek
   */
  readonly greeklocale: Locale_GREEK_LOCALE;

  /**
   * Hebrew
   */
  readonly HEBREW_LOCALE: Locale_HEBREW_LOCALE;
  /**
   * Hebrew
   */
  readonly hebrewLocale: Locale_HEBREW_LOCALE;
  /**
   * Hebrew
   */
  readonly hebrewlocale: Locale_HEBREW_LOCALE;

  /**
   * Hungarian
   */
  readonly HUNGARIAN_LOCALE: Locale_HUNGARIAN_LOCALE;
  /**
   * Hungarian
   */
  readonly hungarianLocale: Locale_HUNGARIAN_LOCALE;
  /**
   * Hungarian
   */
  readonly hungarianlocale: Locale_HUNGARIAN_LOCALE;

  /**
   * Polish
   */
  readonly POLISH_LOCALE: Locale_POLISH_LOCALE;
  /**
   * Polish
   */
  readonly polishLocale: Locale_POLISH_LOCALE;
  /**
   * Polish
   */
  readonly polishlocale: Locale_POLISH_LOCALE;

  /**
   * Romanian
   */
  readonly ROMANIAN_LOCALE: Locale_ROMANIAN_LOCALE;
  /**
   * Romanian
   */
  readonly romanianLocale: Locale_ROMANIAN_LOCALE;
  /**
   * Romanian
   */
  readonly romanianlocale: Locale_ROMANIAN_LOCALE;

  /**
   * Russian
   */
  readonly RUSSIAN_LOCALE: Locale_RUSSIAN_LOCALE;
  /**
   * Russian
   */
  readonly russianLocale: Locale_RUSSIAN_LOCALE;
  /**
   * Russian
   */
  readonly russianlocale: Locale_RUSSIAN_LOCALE;

  /**
   * Turkish
   */
  readonly TURKISH_LOCALE: Locale_TURKISH_LOCALE;
  /**
   * Turkish
   */
  readonly turkishLocale: Locale_TURKISH_LOCALE;
  /**
   * Turkish
   */
  readonly turkishlocale: Locale_TURKISH_LOCALE;

  /**
   * Ukrainian
   */
  readonly UKRAINIAN_LOCALE: Locale_UKRAINIAN_LOCALE;
  /**
   * Ukrainian
   */
  readonly ukrainianLocale: Locale_UKRAINIAN_LOCALE;
  /**
   * Ukrainian
   */
  readonly ukrainianlocale: Locale_UKRAINIAN_LOCALE;

  /**
   * Korean.
   */
  readonly KOREAN_LOCALE: Locale_KOREAN_LOCALE;
  /**
   * Korean.
   */
  readonly koreanLocale: Locale_KOREAN_LOCALE;
  /**
   * Korean.
   */
  readonly koreanlocale: Locale_KOREAN_LOCALE;

  /**
   * Simplified Chinese.
   */
  readonly SIMPLIFIED_CHINESE_LOCALE: Locale_SIMPLIFIED_CHINESE_LOCALE;
  /**
   * Simplified Chinese.
   */
  readonly simplifiedChineseLocale: Locale_SIMPLIFIED_CHINESE_LOCALE;
  /**
   * Simplified Chinese.
   */
  readonly simplifiedchineselocale: Locale_SIMPLIFIED_CHINESE_LOCALE;

  /**
   * Traditional Chinese.
   */
  readonly TRADITIONAL_CHINESE_LOCALE: Locale_TRADITIONAL_CHINESE_LOCALE;
  /**
   * Traditional Chinese.
   */
  readonly traditionalChineseLocale: Locale_TRADITIONAL_CHINESE_LOCALE;
  /**
   * Traditional Chinese.
   */
  readonly traditionalchineselocale: Locale_TRADITIONAL_CHINESE_LOCALE;

}
