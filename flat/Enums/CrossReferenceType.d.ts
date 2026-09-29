/**
 * CrossReferenceType.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __CrossReferenceType: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface CrossReferenceType extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<CrossReferenceType>): boolean;

  /**
   * @internal **WARNING:** `__CrossReferenceType` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__CrossReferenceType]: never;
}


/**
 * Inserts 'See also' in front of the referenced topic if the topic has an associated page reference; inserts 'See' if the topic does not have a page reference.
 */
interface CrossReferenceType_SEE_OR_ALSO_BRACKET extends CrossReferenceType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1399800172;
}

/**
 * Inserts 'See' in front of the referenced topic.
 */
interface CrossReferenceType_SEE extends CrossReferenceType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701729125;
}

/**
 * Inserts 'See also' in front of the referenced topic.
 */
interface CrossReferenceType_SEE_ALSO extends CrossReferenceType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1399144812;
}

/**
 * Inserts 'See herein' in front of the referenced topic.
 */
interface CrossReferenceType_SEE_HEREIN extends CrossReferenceType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397256814;
}

/**
 * Inserts 'See also herein' in front of the referenced topic.
 */
interface CrossReferenceType_SEE_ALSO_HEREIN extends CrossReferenceType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1398884466;
}

/**
 * Inserts the specified string in front of the referenced topic.
 */
interface CrossReferenceType_CUSTOM_CROSS_REFERENCE extends CrossReferenceType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1131639875;
}

/**
 * Inserts the specified string and the specified before cross reference separator in front of the referenced topic. If no before cross reference separator is specified, inserts a space.
 */
interface CrossReferenceType_CUSTOM_CROSS_REFERENCE_BEFORE extends CrossReferenceType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1131639906;
}

/**
 * Inserts the specified following topic separator and the specified string after the referenced topic. If no following topic separator is specified, inserts a space.
 */
interface CrossReferenceType_CUSTOM_CROSS_REFERENCE_AFTER extends CrossReferenceType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1131639905;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Instructional text options for cross reference.
 */
export declare namespace CrossReferenceType {
/**
 * Inserts 'See also' in front of the referenced topic if the topic has an associated page reference; inserts 'See' if the topic does not have a page reference.
 */
type SEE_OR_ALSO_BRACKET = CrossReferenceType_SEE_OR_ALSO_BRACKET;

/**
 * Inserts 'See' in front of the referenced topic.
 */
type SEE = CrossReferenceType_SEE;

/**
 * Inserts 'See also' in front of the referenced topic.
 */
type SEE_ALSO = CrossReferenceType_SEE_ALSO;

/**
 * Inserts 'See herein' in front of the referenced topic.
 */
type SEE_HEREIN = CrossReferenceType_SEE_HEREIN;

/**
 * Inserts 'See also herein' in front of the referenced topic.
 */
type SEE_ALSO_HEREIN = CrossReferenceType_SEE_ALSO_HEREIN;

/**
 * Inserts the specified string in front of the referenced topic.
 */
type CUSTOM_CROSS_REFERENCE = CrossReferenceType_CUSTOM_CROSS_REFERENCE;

/**
 * Inserts the specified string and the specified before cross reference separator in front of the referenced topic. If no before cross reference separator is specified, inserts a space.
 */
type CUSTOM_CROSS_REFERENCE_BEFORE = CrossReferenceType_CUSTOM_CROSS_REFERENCE_BEFORE;

/**
 * Inserts the specified following topic separator and the specified string after the referenced topic. If no following topic separator is specified, inserts a space.
 */
type CUSTOM_CROSS_REFERENCE_AFTER = CrossReferenceType_CUSTOM_CROSS_REFERENCE_AFTER;

}
/**
 * Instructional text options for cross reference.
 */
export declare const CrossReferenceType: typeof Enumeration & {

  /**
   * Inserts 'See also' in front of the referenced topic if the topic has an associated page reference; inserts 'See' if the topic does not have a page reference.
   */
  readonly SEE_OR_ALSO_BRACKET: CrossReferenceType_SEE_OR_ALSO_BRACKET;
  /**
   * Inserts 'See also' in front of the referenced topic if the topic has an associated page reference; inserts 'See' if the topic does not have a page reference.
   */
  readonly seeOrAlsoBracket: CrossReferenceType_SEE_OR_ALSO_BRACKET;
  /**
   * Inserts 'See also' in front of the referenced topic if the topic has an associated page reference; inserts 'See' if the topic does not have a page reference.
   */
  readonly seeoralsobracket: CrossReferenceType_SEE_OR_ALSO_BRACKET;

  /**
   * Inserts 'See' in front of the referenced topic.
   */
  readonly SEE: CrossReferenceType_SEE;
  /**
   * Inserts 'See' in front of the referenced topic.
   */
  readonly see: CrossReferenceType_SEE;

  /**
   * Inserts 'See also' in front of the referenced topic.
   */
  readonly SEE_ALSO: CrossReferenceType_SEE_ALSO;
  /**
   * Inserts 'See also' in front of the referenced topic.
   */
  readonly seeAlso: CrossReferenceType_SEE_ALSO;
  /**
   * Inserts 'See also' in front of the referenced topic.
   */
  readonly seealso: CrossReferenceType_SEE_ALSO;

  /**
   * Inserts 'See herein' in front of the referenced topic.
   */
  readonly SEE_HEREIN: CrossReferenceType_SEE_HEREIN;
  /**
   * Inserts 'See herein' in front of the referenced topic.
   */
  readonly seeHerein: CrossReferenceType_SEE_HEREIN;
  /**
   * Inserts 'See herein' in front of the referenced topic.
   */
  readonly seeherein: CrossReferenceType_SEE_HEREIN;

  /**
   * Inserts 'See also herein' in front of the referenced topic.
   */
  readonly SEE_ALSO_HEREIN: CrossReferenceType_SEE_ALSO_HEREIN;
  /**
   * Inserts 'See also herein' in front of the referenced topic.
   */
  readonly seeAlsoHerein: CrossReferenceType_SEE_ALSO_HEREIN;
  /**
   * Inserts 'See also herein' in front of the referenced topic.
   */
  readonly seealsoherein: CrossReferenceType_SEE_ALSO_HEREIN;

  /**
   * Inserts the specified string in front of the referenced topic.
   */
  readonly CUSTOM_CROSS_REFERENCE: CrossReferenceType_CUSTOM_CROSS_REFERENCE;
  /**
   * Inserts the specified string in front of the referenced topic.
   */
  readonly customCrossReference: CrossReferenceType_CUSTOM_CROSS_REFERENCE;
  /**
   * Inserts the specified string in front of the referenced topic.
   */
  readonly customcrossreference: CrossReferenceType_CUSTOM_CROSS_REFERENCE;

  /**
   * Inserts the specified string and the specified before cross reference separator in front of the referenced topic. If no before cross reference separator is specified, inserts a space.
   */
  readonly CUSTOM_CROSS_REFERENCE_BEFORE: CrossReferenceType_CUSTOM_CROSS_REFERENCE_BEFORE;
  /**
   * Inserts the specified string and the specified before cross reference separator in front of the referenced topic. If no before cross reference separator is specified, inserts a space.
   */
  readonly customCrossReferenceBefore: CrossReferenceType_CUSTOM_CROSS_REFERENCE_BEFORE;
  /**
   * Inserts the specified string and the specified before cross reference separator in front of the referenced topic. If no before cross reference separator is specified, inserts a space.
   */
  readonly customcrossreferencebefore: CrossReferenceType_CUSTOM_CROSS_REFERENCE_BEFORE;

  /**
   * Inserts the specified following topic separator and the specified string after the referenced topic. If no following topic separator is specified, inserts a space.
   */
  readonly CUSTOM_CROSS_REFERENCE_AFTER: CrossReferenceType_CUSTOM_CROSS_REFERENCE_AFTER;
  /**
   * Inserts the specified following topic separator and the specified string after the referenced topic. If no following topic separator is specified, inserts a space.
   */
  readonly customCrossReferenceAfter: CrossReferenceType_CUSTOM_CROSS_REFERENCE_AFTER;
  /**
   * Inserts the specified following topic separator and the specified string after the referenced topic. If no following topic separator is specified, inserts a space.
   */
  readonly customcrossreferenceafter: CrossReferenceType_CUSTOM_CROSS_REFERENCE_AFTER;

}
