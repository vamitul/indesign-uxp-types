/**
 * ProofingType.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ProofingType: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ProofingType extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ProofingType>): boolean;

  /**
   * @internal **WARNING:** `__ProofingType` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ProofingType]: never;
}


/**
 * Turns off soft proof display. 
 */
interface ProofingType_PROOF_OFF extends ProofingType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1347710822;
}

/**
 * Creates a soft proof of colors using the document's CMYK profile.
 */
interface ProofingType_DOCUMENT_CMYK extends ProofingType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1347708003;
}

/**
 * Creates a soft proof of colors using the current CMYK working space. 
 */
interface ProofingType_WORKING_CMYK extends ProofingType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1347712867;
}

/**
 * Allows creation of a custom proofing setup for a specific output condition. 
 */
interface ProofingType_CUSTOM extends ProofingType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1131639917;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for proofing colors.
 */
export declare namespace ProofingType {
/**
 * Turns off soft proof display. 
 */
type PROOF_OFF = ProofingType_PROOF_OFF;

/**
 * Creates a soft proof of colors using the document's CMYK profile.
 */
type DOCUMENT_CMYK = ProofingType_DOCUMENT_CMYK;

/**
 * Creates a soft proof of colors using the current CMYK working space. 
 */
type WORKING_CMYK = ProofingType_WORKING_CMYK;

/**
 * Allows creation of a custom proofing setup for a specific output condition. 
 */
type CUSTOM = ProofingType_CUSTOM;

}
/**
 * Options for proofing colors.
 */
export declare const ProofingType: typeof Enumeration & {

  /**
   * Turns off soft proof display. 
   */
  readonly PROOF_OFF: ProofingType_PROOF_OFF;
  /**
   * Turns off soft proof display. 
   */
  readonly proofOff: ProofingType_PROOF_OFF;
  /**
   * Turns off soft proof display. 
   */
  readonly proofoff: ProofingType_PROOF_OFF;

  /**
   * Creates a soft proof of colors using the document's CMYK profile.
   */
  readonly DOCUMENT_CMYK: ProofingType_DOCUMENT_CMYK;
  /**
   * Creates a soft proof of colors using the document's CMYK profile.
   */
  readonly documentCmyk: ProofingType_DOCUMENT_CMYK;
  /**
   * Creates a soft proof of colors using the document's CMYK profile.
   */
  readonly documentcmyk: ProofingType_DOCUMENT_CMYK;

  /**
   * Creates a soft proof of colors using the current CMYK working space. 
   */
  readonly WORKING_CMYK: ProofingType_WORKING_CMYK;
  /**
   * Creates a soft proof of colors using the current CMYK working space. 
   */
  readonly workingCmyk: ProofingType_WORKING_CMYK;
  /**
   * Creates a soft proof of colors using the current CMYK working space. 
   */
  readonly workingcmyk: ProofingType_WORKING_CMYK;

  /**
   * Allows creation of a custom proofing setup for a specific output condition. 
   */
  readonly CUSTOM: ProofingType_CUSTOM;
  /**
   * Allows creation of a custom proofing setup for a specific output condition. 
   */
  readonly custom: ProofingType_CUSTOM;

}
