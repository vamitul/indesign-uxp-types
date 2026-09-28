/**
 * DocumentIntentOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __DocumentIntentOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface DocumentIntentOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<DocumentIntentOptions>): boolean;

  /**
   * @internal **WARNING:** `__DocumentIntentOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__DocumentIntentOptions]: never;
}


/**
 * Intended purpose of document is for print output.
 */
interface DocumentIntentOptions_PRINT_INTENT extends DocumentIntentOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1768846448;
}

/**
 * Intended purpose of document is for web output.
 */
interface DocumentIntentOptions_WEB_INTENT extends DocumentIntentOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1768846455;
}

/**
 * Intended purpose of document is for publishing to mobiles.
 */
interface DocumentIntentOptions_MOBILE_INTENT extends DocumentIntentOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1768846445;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for document intent.
 */
export declare namespace DocumentIntentOptions {
/**
 * Intended purpose of document is for print output.
 */
type PRINT_INTENT = DocumentIntentOptions_PRINT_INTENT;

/**
 * Intended purpose of document is for web output.
 */
type WEB_INTENT = DocumentIntentOptions_WEB_INTENT;

/**
 * Intended purpose of document is for publishing to mobiles.
 */
type MOBILE_INTENT = DocumentIntentOptions_MOBILE_INTENT;

}
/**
 * Options for document intent.
 */
export declare const DocumentIntentOptions: typeof Enumeration & {

  /**
   * Intended purpose of document is for print output.
   */
  readonly PRINT_INTENT: DocumentIntentOptions_PRINT_INTENT;
  /**
   * Intended purpose of document is for print output.
   */
  readonly printIntent: DocumentIntentOptions_PRINT_INTENT;
  /**
   * Intended purpose of document is for print output.
   */
  readonly printintent: DocumentIntentOptions_PRINT_INTENT;

  /**
   * Intended purpose of document is for web output.
   */
  readonly WEB_INTENT: DocumentIntentOptions_WEB_INTENT;
  /**
   * Intended purpose of document is for web output.
   */
  readonly webIntent: DocumentIntentOptions_WEB_INTENT;
  /**
   * Intended purpose of document is for web output.
   */
  readonly webintent: DocumentIntentOptions_WEB_INTENT;

  /**
   * Intended purpose of document is for publishing to mobiles.
   */
  readonly MOBILE_INTENT: DocumentIntentOptions_MOBILE_INTENT;
  /**
   * Intended purpose of document is for publishing to mobiles.
   */
  readonly mobileIntent: DocumentIntentOptions_MOBILE_INTENT;
  /**
   * Intended purpose of document is for publishing to mobiles.
   */
  readonly mobileintent: DocumentIntentOptions_MOBILE_INTENT;

}
