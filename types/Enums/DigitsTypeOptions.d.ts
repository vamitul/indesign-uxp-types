/**
 * DigitsTypeOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __DigitsTypeOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface DigitsTypeOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<DigitsTypeOptions>): boolean;

  /**
   * @internal **WARNING:** `__DigitsTypeOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__DigitsTypeOptions]: never;
}


/**
 * Uses the default digit style.
 */
interface DigitsTypeOptions_DEFAULT_DIGITS extends DigitsTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684628581;
}

/**
 * Arabic digits.
 */
interface DigitsTypeOptions_ARABIC_DIGITS extends DigitsTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684627826;
}

/**
 * Hindi digits.
 */
interface DigitsTypeOptions_HINDI_DIGITS extends DigitsTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684629609;
}

/**
 * Farsi digits.
 */
interface DigitsTypeOptions_FARSI_DIGITS extends DigitsTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684629089;
}

/**
 * Native digits.
 */
interface DigitsTypeOptions_NATIVE_DIGITS extends DigitsTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684631137;
}

/**
 * Full Farsi digits.
 */
interface DigitsTypeOptions_FULL_FARSI_DIGITS extends DigitsTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684629094;
}

/**
 * Thai digits.
 */
interface DigitsTypeOptions_THAI_DIGITS extends DigitsTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684632680;
}

/**
 * Lao digits.
 */
interface DigitsTypeOptions_LAO_DIGITS extends DigitsTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684630625;
}

/**
 * Devanagari digits.
 */
interface DigitsTypeOptions_DEVANAGARI_DIGITS extends DigitsTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684628598;
}

/**
 * Bengali digits.
 */
interface DigitsTypeOptions_BENGALI_DIGITS extends DigitsTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684628069;
}

/**
 * Gurmukhi digits.
 */
interface DigitsTypeOptions_GURMUKHI_DIGITS extends DigitsTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684629357;
}

/**
 * Gujarati digits.
 */
interface DigitsTypeOptions_GUJARATI_DIGITS extends DigitsTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684629354;
}

/**
 * Oriya digits.
 */
interface DigitsTypeOptions_ORIYA_DIGITS extends DigitsTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684631410;
}

/**
 * Tamil digits.
 */
interface DigitsTypeOptions_TAMIL_DIGITS extends DigitsTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684632673;
}

/**
 * Telugu digits.
 */
interface DigitsTypeOptions_TELUGU_DIGITS extends DigitsTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684632677;
}

/**
 * Kannada digits.
 */
interface DigitsTypeOptions_KANNADA_DIGITS extends DigitsTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684630369;
}

/**
 * Malayalam digits.
 */
interface DigitsTypeOptions_MALAYALAM_DIGITS extends DigitsTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684630881;
}

/**
 * Tibetan digits.
 */
interface DigitsTypeOptions_TIBETAN_DIGITS extends DigitsTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684632681;
}

/**
 * Khmer digits.
 */
interface DigitsTypeOptions_KHMER_DIGITS extends DigitsTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684630376;
}

/**
 * Burmese digits.
 */
interface DigitsTypeOptions_BURMESE_DIGITS extends DigitsTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684628085;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The digit glyphs (Arabic numerals, Hindi, Farsi, or other script-specific
 * digits) used to display numbers in text.
 */
export declare namespace DigitsTypeOptions {
/**
 * Uses the default digit style.
 */
type DEFAULT_DIGITS = DigitsTypeOptions_DEFAULT_DIGITS;

/**
 * Arabic digits.
 */
type ARABIC_DIGITS = DigitsTypeOptions_ARABIC_DIGITS;

/**
 * Hindi digits.
 */
type HINDI_DIGITS = DigitsTypeOptions_HINDI_DIGITS;

/**
 * Farsi digits.
 */
type FARSI_DIGITS = DigitsTypeOptions_FARSI_DIGITS;

/**
 * Native digits.
 */
type NATIVE_DIGITS = DigitsTypeOptions_NATIVE_DIGITS;

/**
 * Full Farsi digits.
 */
type FULL_FARSI_DIGITS = DigitsTypeOptions_FULL_FARSI_DIGITS;

/**
 * Thai digits.
 */
type THAI_DIGITS = DigitsTypeOptions_THAI_DIGITS;

/**
 * Lao digits.
 */
type LAO_DIGITS = DigitsTypeOptions_LAO_DIGITS;

/**
 * Devanagari digits.
 */
type DEVANAGARI_DIGITS = DigitsTypeOptions_DEVANAGARI_DIGITS;

/**
 * Bengali digits.
 */
type BENGALI_DIGITS = DigitsTypeOptions_BENGALI_DIGITS;

/**
 * Gurmukhi digits.
 */
type GURMUKHI_DIGITS = DigitsTypeOptions_GURMUKHI_DIGITS;

/**
 * Gujarati digits.
 */
type GUJARATI_DIGITS = DigitsTypeOptions_GUJARATI_DIGITS;

/**
 * Oriya digits.
 */
type ORIYA_DIGITS = DigitsTypeOptions_ORIYA_DIGITS;

/**
 * Tamil digits.
 */
type TAMIL_DIGITS = DigitsTypeOptions_TAMIL_DIGITS;

/**
 * Telugu digits.
 */
type TELUGU_DIGITS = DigitsTypeOptions_TELUGU_DIGITS;

/**
 * Kannada digits.
 */
type KANNADA_DIGITS = DigitsTypeOptions_KANNADA_DIGITS;

/**
 * Malayalam digits.
 */
type MALAYALAM_DIGITS = DigitsTypeOptions_MALAYALAM_DIGITS;

/**
 * Tibetan digits.
 */
type TIBETAN_DIGITS = DigitsTypeOptions_TIBETAN_DIGITS;

/**
 * Khmer digits.
 */
type KHMER_DIGITS = DigitsTypeOptions_KHMER_DIGITS;

/**
 * Burmese digits.
 */
type BURMESE_DIGITS = DigitsTypeOptions_BURMESE_DIGITS;

}
/**
 * The digit glyphs (Arabic numerals, Hindi, Farsi, or other script-specific
 * digits) used to display numbers in text.
 */
export declare const DigitsTypeOptions: typeof Enumeration & {

  /**
   * Uses the default digit style.
   */
  readonly DEFAULT_DIGITS: DigitsTypeOptions_DEFAULT_DIGITS;
  /**
   * Uses the default digit style.
   */
  readonly defaultDigits: DigitsTypeOptions_DEFAULT_DIGITS;
  /**
   * Uses the default digit style.
   */
  readonly defaultdigits: DigitsTypeOptions_DEFAULT_DIGITS;

  /**
   * Arabic digits.
   */
  readonly ARABIC_DIGITS: DigitsTypeOptions_ARABIC_DIGITS;
  /**
   * Arabic digits.
   */
  readonly arabicDigits: DigitsTypeOptions_ARABIC_DIGITS;
  /**
   * Arabic digits.
   */
  readonly arabicdigits: DigitsTypeOptions_ARABIC_DIGITS;

  /**
   * Hindi digits.
   */
  readonly HINDI_DIGITS: DigitsTypeOptions_HINDI_DIGITS;
  /**
   * Hindi digits.
   */
  readonly hindiDigits: DigitsTypeOptions_HINDI_DIGITS;
  /**
   * Hindi digits.
   */
  readonly hindidigits: DigitsTypeOptions_HINDI_DIGITS;

  /**
   * Farsi digits.
   */
  readonly FARSI_DIGITS: DigitsTypeOptions_FARSI_DIGITS;
  /**
   * Farsi digits.
   */
  readonly farsiDigits: DigitsTypeOptions_FARSI_DIGITS;
  /**
   * Farsi digits.
   */
  readonly farsidigits: DigitsTypeOptions_FARSI_DIGITS;

  /**
   * Native digits.
   */
  readonly NATIVE_DIGITS: DigitsTypeOptions_NATIVE_DIGITS;
  /**
   * Native digits.
   */
  readonly nativeDigits: DigitsTypeOptions_NATIVE_DIGITS;
  /**
   * Native digits.
   */
  readonly nativedigits: DigitsTypeOptions_NATIVE_DIGITS;

  /**
   * Full Farsi digits.
   */
  readonly FULL_FARSI_DIGITS: DigitsTypeOptions_FULL_FARSI_DIGITS;
  /**
   * Full Farsi digits.
   */
  readonly fullFarsiDigits: DigitsTypeOptions_FULL_FARSI_DIGITS;
  /**
   * Full Farsi digits.
   */
  readonly fullfarsidigits: DigitsTypeOptions_FULL_FARSI_DIGITS;

  /**
   * Thai digits.
   */
  readonly THAI_DIGITS: DigitsTypeOptions_THAI_DIGITS;
  /**
   * Thai digits.
   */
  readonly thaiDigits: DigitsTypeOptions_THAI_DIGITS;
  /**
   * Thai digits.
   */
  readonly thaidigits: DigitsTypeOptions_THAI_DIGITS;

  /**
   * Lao digits.
   */
  readonly LAO_DIGITS: DigitsTypeOptions_LAO_DIGITS;
  /**
   * Lao digits.
   */
  readonly laoDigits: DigitsTypeOptions_LAO_DIGITS;
  /**
   * Lao digits.
   */
  readonly laodigits: DigitsTypeOptions_LAO_DIGITS;

  /**
   * Devanagari digits.
   */
  readonly DEVANAGARI_DIGITS: DigitsTypeOptions_DEVANAGARI_DIGITS;
  /**
   * Devanagari digits.
   */
  readonly devanagariDigits: DigitsTypeOptions_DEVANAGARI_DIGITS;
  /**
   * Devanagari digits.
   */
  readonly devanagaridigits: DigitsTypeOptions_DEVANAGARI_DIGITS;

  /**
   * Bengali digits.
   */
  readonly BENGALI_DIGITS: DigitsTypeOptions_BENGALI_DIGITS;
  /**
   * Bengali digits.
   */
  readonly bengaliDigits: DigitsTypeOptions_BENGALI_DIGITS;
  /**
   * Bengali digits.
   */
  readonly bengalidigits: DigitsTypeOptions_BENGALI_DIGITS;

  /**
   * Gurmukhi digits.
   */
  readonly GURMUKHI_DIGITS: DigitsTypeOptions_GURMUKHI_DIGITS;
  /**
   * Gurmukhi digits.
   */
  readonly gurmukhiDigits: DigitsTypeOptions_GURMUKHI_DIGITS;
  /**
   * Gurmukhi digits.
   */
  readonly gurmukhidigits: DigitsTypeOptions_GURMUKHI_DIGITS;

  /**
   * Gujarati digits.
   */
  readonly GUJARATI_DIGITS: DigitsTypeOptions_GUJARATI_DIGITS;
  /**
   * Gujarati digits.
   */
  readonly gujaratiDigits: DigitsTypeOptions_GUJARATI_DIGITS;
  /**
   * Gujarati digits.
   */
  readonly gujaratidigits: DigitsTypeOptions_GUJARATI_DIGITS;

  /**
   * Oriya digits.
   */
  readonly ORIYA_DIGITS: DigitsTypeOptions_ORIYA_DIGITS;
  /**
   * Oriya digits.
   */
  readonly oriyaDigits: DigitsTypeOptions_ORIYA_DIGITS;
  /**
   * Oriya digits.
   */
  readonly oriyadigits: DigitsTypeOptions_ORIYA_DIGITS;

  /**
   * Tamil digits.
   */
  readonly TAMIL_DIGITS: DigitsTypeOptions_TAMIL_DIGITS;
  /**
   * Tamil digits.
   */
  readonly tamilDigits: DigitsTypeOptions_TAMIL_DIGITS;
  /**
   * Tamil digits.
   */
  readonly tamildigits: DigitsTypeOptions_TAMIL_DIGITS;

  /**
   * Telugu digits.
   */
  readonly TELUGU_DIGITS: DigitsTypeOptions_TELUGU_DIGITS;
  /**
   * Telugu digits.
   */
  readonly teluguDigits: DigitsTypeOptions_TELUGU_DIGITS;
  /**
   * Telugu digits.
   */
  readonly telugudigits: DigitsTypeOptions_TELUGU_DIGITS;

  /**
   * Kannada digits.
   */
  readonly KANNADA_DIGITS: DigitsTypeOptions_KANNADA_DIGITS;
  /**
   * Kannada digits.
   */
  readonly kannadaDigits: DigitsTypeOptions_KANNADA_DIGITS;
  /**
   * Kannada digits.
   */
  readonly kannadadigits: DigitsTypeOptions_KANNADA_DIGITS;

  /**
   * Malayalam digits.
   */
  readonly MALAYALAM_DIGITS: DigitsTypeOptions_MALAYALAM_DIGITS;
  /**
   * Malayalam digits.
   */
  readonly malayalamDigits: DigitsTypeOptions_MALAYALAM_DIGITS;
  /**
   * Malayalam digits.
   */
  readonly malayalamdigits: DigitsTypeOptions_MALAYALAM_DIGITS;

  /**
   * Tibetan digits.
   */
  readonly TIBETAN_DIGITS: DigitsTypeOptions_TIBETAN_DIGITS;
  /**
   * Tibetan digits.
   */
  readonly tibetanDigits: DigitsTypeOptions_TIBETAN_DIGITS;
  /**
   * Tibetan digits.
   */
  readonly tibetandigits: DigitsTypeOptions_TIBETAN_DIGITS;

  /**
   * Khmer digits.
   */
  readonly KHMER_DIGITS: DigitsTypeOptions_KHMER_DIGITS;
  /**
   * Khmer digits.
   */
  readonly khmerDigits: DigitsTypeOptions_KHMER_DIGITS;
  /**
   * Khmer digits.
   */
  readonly khmerdigits: DigitsTypeOptions_KHMER_DIGITS;

  /**
   * Burmese digits.
   */
  readonly BURMESE_DIGITS: DigitsTypeOptions_BURMESE_DIGITS;
  /**
   * Burmese digits.
   */
  readonly burmeseDigits: DigitsTypeOptions_BURMESE_DIGITS;
  /**
   * Burmese digits.
   */
  readonly burmesedigits: DigitsTypeOptions_BURMESE_DIGITS;

}
