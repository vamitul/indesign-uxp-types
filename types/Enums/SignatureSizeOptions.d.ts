/**
 * SignatureSizeOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __SignatureSizeOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface SignatureSizeOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<SignatureSizeOptions>): boolean;

  /**
   * @internal **WARNING:** `__SignatureSizeOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__SignatureSizeOptions]: never;
}


/**
 * Signature size 4.
 */
interface SignatureSizeOptions_SIGNATURE_SIZE_4 extends SignatureSizeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1112748084;
}

/**
 * Signature size 8.
 */
interface SignatureSizeOptions_SIGNATURE_SIZE_8 extends SignatureSizeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1112748088;
}

/**
 * Signature size 12.
 */
interface SignatureSizeOptions_SIGNATURE_SIZE_12 extends SignatureSizeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1112748338;
}

/**
 * Signature size 16.
 */
interface SignatureSizeOptions_SIGNATURE_SIZE_16 extends SignatureSizeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1112748342;
}

/**
 * Signature size 32.
 */
interface SignatureSizeOptions_SIGNATURE_SIZE_32 extends SignatureSizeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1112748850;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * How many pages make up one printed signature.
 */
export declare namespace SignatureSizeOptions {
/**
 * Signature size 4.
 */
type SIGNATURE_SIZE_4 = SignatureSizeOptions_SIGNATURE_SIZE_4;

/**
 * Signature size 8.
 */
type SIGNATURE_SIZE_8 = SignatureSizeOptions_SIGNATURE_SIZE_8;

/**
 * Signature size 12.
 */
type SIGNATURE_SIZE_12 = SignatureSizeOptions_SIGNATURE_SIZE_12;

/**
 * Signature size 16.
 */
type SIGNATURE_SIZE_16 = SignatureSizeOptions_SIGNATURE_SIZE_16;

/**
 * Signature size 32.
 */
type SIGNATURE_SIZE_32 = SignatureSizeOptions_SIGNATURE_SIZE_32;

}
/**
 * How many pages make up one printed signature.
 */
export declare const SignatureSizeOptions: typeof Enumeration & {

  /**
   * Signature size 4.
   */
  readonly SIGNATURE_SIZE_4: SignatureSizeOptions_SIGNATURE_SIZE_4;
  /**
   * Signature size 4.
   */
  readonly signatureSize4: SignatureSizeOptions_SIGNATURE_SIZE_4;
  /**
   * Signature size 4.
   */
  readonly signaturesize4: SignatureSizeOptions_SIGNATURE_SIZE_4;

  /**
   * Signature size 8.
   */
  readonly SIGNATURE_SIZE_8: SignatureSizeOptions_SIGNATURE_SIZE_8;
  /**
   * Signature size 8.
   */
  readonly signatureSize8: SignatureSizeOptions_SIGNATURE_SIZE_8;
  /**
   * Signature size 8.
   */
  readonly signaturesize8: SignatureSizeOptions_SIGNATURE_SIZE_8;

  /**
   * Signature size 12.
   */
  readonly SIGNATURE_SIZE_12: SignatureSizeOptions_SIGNATURE_SIZE_12;
  /**
   * Signature size 12.
   */
  readonly signatureSize12: SignatureSizeOptions_SIGNATURE_SIZE_12;
  /**
   * Signature size 12.
   */
  readonly signaturesize12: SignatureSizeOptions_SIGNATURE_SIZE_12;

  /**
   * Signature size 16.
   */
  readonly SIGNATURE_SIZE_16: SignatureSizeOptions_SIGNATURE_SIZE_16;
  /**
   * Signature size 16.
   */
  readonly signatureSize16: SignatureSizeOptions_SIGNATURE_SIZE_16;
  /**
   * Signature size 16.
   */
  readonly signaturesize16: SignatureSizeOptions_SIGNATURE_SIZE_16;

  /**
   * Signature size 32.
   */
  readonly SIGNATURE_SIZE_32: SignatureSizeOptions_SIGNATURE_SIZE_32;
  /**
   * Signature size 32.
   */
  readonly signatureSize32: SignatureSizeOptions_SIGNATURE_SIZE_32;
  /**
   * Signature size 32.
   */
  readonly signaturesize32: SignatureSizeOptions_SIGNATURE_SIZE_32;

}
