/**
 * ParagraphJustificationOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ParagraphJustificationOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ParagraphJustificationOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ParagraphJustificationOptions>): boolean;

  /**
   * @internal **WARNING:** `__ParagraphJustificationOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ParagraphJustificationOptions]: never;
}


/**
 * Default justification.
 */
interface ParagraphJustificationOptions_DEFAULT_JUSTIFICATION extends ParagraphJustificationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886020709;
}

/**
 * Arabic justification.
 */
interface ParagraphJustificationOptions_ARABIC_JUSTIFICATION extends ParagraphJustificationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886019954;
}

/**
 * Naskh justification.
 */
interface ParagraphJustificationOptions_NASKH_JUSTIFICATION extends ParagraphJustificationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886023265;
}

/**
 * Kashidas without Stretched Connections.
 */
interface ParagraphJustificationOptions_NASKH_TATWEEL_JUSTIFICATION extends ParagraphJustificationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886023284;
}

/**
 * Kashidas. Use Naskh justification if you want to also use Justification
 * Alternates.
 */
interface ParagraphJustificationOptions_NASKH_KASHIDA_JUSTIFICATION extends ParagraphJustificationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886023275;
}

/**
 * Fractional Kashidas without Stretched Connections.
 */
interface ParagraphJustificationOptions_NASKH_TATWEEL_JUSTIFICATION_FRAC extends ParagraphJustificationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886021236;
}

/**
 * Fractional Kashidas. Use Naskh justification if you want to also use
 * Justification Alternates.
 */
interface ParagraphJustificationOptions_NASKH_KASHIDA_JUSTIFICATION_FRAC extends ParagraphJustificationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886021227;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The justification engine used for Arabic and Naskh text, and how kashidas are applied.
 */
export declare namespace ParagraphJustificationOptions {
/**
 * Default justification.
 */
type DEFAULT_JUSTIFICATION = ParagraphJustificationOptions_DEFAULT_JUSTIFICATION;

/**
 * Arabic justification.
 */
type ARABIC_JUSTIFICATION = ParagraphJustificationOptions_ARABIC_JUSTIFICATION;

/**
 * Naskh justification.
 */
type NASKH_JUSTIFICATION = ParagraphJustificationOptions_NASKH_JUSTIFICATION;

/**
 * Kashidas without Stretched Connections.
 */
type NASKH_TATWEEL_JUSTIFICATION = ParagraphJustificationOptions_NASKH_TATWEEL_JUSTIFICATION;

/**
 * Kashidas. Use Naskh justification if you want to also use Justification
 * Alternates.
 */
type NASKH_KASHIDA_JUSTIFICATION = ParagraphJustificationOptions_NASKH_KASHIDA_JUSTIFICATION;

/**
 * Fractional Kashidas without Stretched Connections.
 */
type NASKH_TATWEEL_JUSTIFICATION_FRAC = ParagraphJustificationOptions_NASKH_TATWEEL_JUSTIFICATION_FRAC;

/**
 * Fractional Kashidas. Use Naskh justification if you want to also use
 * Justification Alternates.
 */
type NASKH_KASHIDA_JUSTIFICATION_FRAC = ParagraphJustificationOptions_NASKH_KASHIDA_JUSTIFICATION_FRAC;

}
/**
 * The justification engine used for Arabic and Naskh text, and how kashidas are applied.
 */
export declare const ParagraphJustificationOptions: typeof Enumeration & {

  /**
   * Default justification.
   */
  readonly DEFAULT_JUSTIFICATION: ParagraphJustificationOptions_DEFAULT_JUSTIFICATION;
  /**
   * Default justification.
   */
  readonly defaultJustification: ParagraphJustificationOptions_DEFAULT_JUSTIFICATION;
  /**
   * Default justification.
   */
  readonly defaultjustification: ParagraphJustificationOptions_DEFAULT_JUSTIFICATION;

  /**
   * Arabic justification.
   */
  readonly ARABIC_JUSTIFICATION: ParagraphJustificationOptions_ARABIC_JUSTIFICATION;
  /**
   * Arabic justification.
   */
  readonly arabicJustification: ParagraphJustificationOptions_ARABIC_JUSTIFICATION;
  /**
   * Arabic justification.
   */
  readonly arabicjustification: ParagraphJustificationOptions_ARABIC_JUSTIFICATION;

  /**
   * Naskh justification.
   */
  readonly NASKH_JUSTIFICATION: ParagraphJustificationOptions_NASKH_JUSTIFICATION;
  /**
   * Naskh justification.
   */
  readonly naskhJustification: ParagraphJustificationOptions_NASKH_JUSTIFICATION;
  /**
   * Naskh justification.
   */
  readonly naskhjustification: ParagraphJustificationOptions_NASKH_JUSTIFICATION;

  /**
   * Kashidas without Stretched Connections.
   */
  readonly NASKH_TATWEEL_JUSTIFICATION: ParagraphJustificationOptions_NASKH_TATWEEL_JUSTIFICATION;
  /**
   * Kashidas without Stretched Connections.
   */
  readonly naskhTatweelJustification: ParagraphJustificationOptions_NASKH_TATWEEL_JUSTIFICATION;
  /**
   * Kashidas without Stretched Connections.
   */
  readonly naskhtatweeljustification: ParagraphJustificationOptions_NASKH_TATWEEL_JUSTIFICATION;

  /**
   * Kashidas. Use Naskh justification if you want to also use Justification
   * Alternates.
   */
  readonly NASKH_KASHIDA_JUSTIFICATION: ParagraphJustificationOptions_NASKH_KASHIDA_JUSTIFICATION;
  /**
   * Kashidas. Use Naskh justification if you want to also use Justification
   * Alternates.
   */
  readonly naskhKashidaJustification: ParagraphJustificationOptions_NASKH_KASHIDA_JUSTIFICATION;
  /**
   * Kashidas. Use Naskh justification if you want to also use Justification
   * Alternates.
   */
  readonly naskhkashidajustification: ParagraphJustificationOptions_NASKH_KASHIDA_JUSTIFICATION;

  /**
   * Fractional Kashidas without Stretched Connections.
   */
  readonly NASKH_TATWEEL_JUSTIFICATION_FRAC: ParagraphJustificationOptions_NASKH_TATWEEL_JUSTIFICATION_FRAC;
  /**
   * Fractional Kashidas without Stretched Connections.
   */
  readonly naskhTatweelJustificationFrac: ParagraphJustificationOptions_NASKH_TATWEEL_JUSTIFICATION_FRAC;
  /**
   * Fractional Kashidas without Stretched Connections.
   */
  readonly naskhtatweeljustificationfrac: ParagraphJustificationOptions_NASKH_TATWEEL_JUSTIFICATION_FRAC;

  /**
   * Fractional Kashidas. Use Naskh justification if you want to also use
   * Justification Alternates.
   */
  readonly NASKH_KASHIDA_JUSTIFICATION_FRAC: ParagraphJustificationOptions_NASKH_KASHIDA_JUSTIFICATION_FRAC;
  /**
   * Fractional Kashidas. Use Naskh justification if you want to also use
   * Justification Alternates.
   */
  readonly naskhKashidaJustificationFrac: ParagraphJustificationOptions_NASKH_KASHIDA_JUSTIFICATION_FRAC;
  /**
   * Fractional Kashidas. Use Naskh justification if you want to also use
   * Justification Alternates.
   */
  readonly naskhkashidajustificationfrac: ParagraphJustificationOptions_NASKH_KASHIDA_JUSTIFICATION_FRAC;

}
