/**
 * PDFProfileSelector.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PDFProfileSelector: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PDFProfileSelector extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PDFProfileSelector>): boolean;

  /**
   * @internal **WARNING:** `__PDFProfileSelector` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PDFProfileSelector]: never;
}


/**
 * Uses no profile.
 */
interface PDFProfileSelector_USE_NO_PROFILE extends PDFProfileSelector {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1851868240;
}

/**
 * Uses the monitor's color profile.
 */
interface PDFProfileSelector_USE_MONITOR_PROFILE extends PDFProfileSelector {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1836008528;
}

/**
 * Uses the document's CMYK profile.
 */
interface PDFProfileSelector_USE_DOCUMENT extends PDFProfileSelector {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1967419235;
}

/**
 * Uses the working CMYK profile.
 */
interface PDFProfileSelector_WORKING extends PDFProfileSelector {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1466921579;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which colour profile the exported PDF is built against — none, the monitor's, the document's,
 * or the working profile.
 */
export declare namespace PDFProfileSelector {
/**
 * Uses no profile.
 */
type USE_NO_PROFILE = PDFProfileSelector_USE_NO_PROFILE;

/**
 * Uses the monitor's color profile.
 */
type USE_MONITOR_PROFILE = PDFProfileSelector_USE_MONITOR_PROFILE;

/**
 * Uses the document's CMYK profile.
 */
type USE_DOCUMENT = PDFProfileSelector_USE_DOCUMENT;

/**
 * Uses the working CMYK profile.
 */
type WORKING = PDFProfileSelector_WORKING;

}
/**
 * Which colour profile the exported PDF is built against — none, the monitor's, the document's,
 * or the working profile.
 */
export declare const PDFProfileSelector: typeof Enumeration & {

  /**
   * Uses no profile.
   */
  readonly USE_NO_PROFILE: PDFProfileSelector_USE_NO_PROFILE;
  /**
   * Uses no profile.
   */
  readonly useNoProfile: PDFProfileSelector_USE_NO_PROFILE;
  /**
   * Uses no profile.
   */
  readonly usenoprofile: PDFProfileSelector_USE_NO_PROFILE;

  /**
   * Uses the monitor's color profile.
   */
  readonly USE_MONITOR_PROFILE: PDFProfileSelector_USE_MONITOR_PROFILE;
  /**
   * Uses the monitor's color profile.
   */
  readonly useMonitorProfile: PDFProfileSelector_USE_MONITOR_PROFILE;
  /**
   * Uses the monitor's color profile.
   */
  readonly usemonitorprofile: PDFProfileSelector_USE_MONITOR_PROFILE;

  /**
   * Uses the document's CMYK profile.
   */
  readonly USE_DOCUMENT: PDFProfileSelector_USE_DOCUMENT;
  /**
   * Uses the document's CMYK profile.
   */
  readonly useDocument: PDFProfileSelector_USE_DOCUMENT;
  /**
   * Uses the document's CMYK profile.
   */
  readonly usedocument: PDFProfileSelector_USE_DOCUMENT;

  /**
   * Uses the working CMYK profile.
   */
  readonly WORKING: PDFProfileSelector_WORKING;
  /**
   * Uses the working CMYK profile.
   */
  readonly working: PDFProfileSelector_WORKING;

}
