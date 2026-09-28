/**
 * RuleDataType.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __RuleDataType: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface RuleDataType extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<RuleDataType>): boolean;

  /**
   * @internal **WARNING:** `__RuleDataType` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__RuleDataType]: never;
}


/**
 * The data type is an int32.
 */
interface RuleDataType_INTEGER_DATA_TYPE extends RuleDataType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1920223598;
}

/**
 * The data type is an int16.
 */
interface RuleDataType_SHORT_INTEGER_DATA_TYPE extends RuleDataType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1920226153;
}

/**
 * The data type is a real.
 */
interface RuleDataType_REAL_DATA_TYPE extends RuleDataType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1920225900;
}

/**
 * The data type is a string.
 */
interface RuleDataType_STRING_DATA_TYPE extends RuleDataType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1920226162;
}

/**
 * The data type is a boolean.
 */
interface RuleDataType_BOOLEAN_DATA_TYPE extends RuleDataType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1920221804;
}

/**
 * The data type is an object.
 */
interface RuleDataType_OBJECT_DATA_TYPE extends RuleDataType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1920225122;
}

/**
 * The data type is a list.
 */
interface RuleDataType_LIST_DATA_TYPE extends RuleDataType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1920224372;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The kind of value a preflight rule's data object holds.
 */
export declare namespace RuleDataType {
/**
 * The data type is an int32.
 */
type INTEGER_DATA_TYPE = RuleDataType_INTEGER_DATA_TYPE;

/**
 * The data type is an int16.
 */
type SHORT_INTEGER_DATA_TYPE = RuleDataType_SHORT_INTEGER_DATA_TYPE;

/**
 * The data type is a real.
 */
type REAL_DATA_TYPE = RuleDataType_REAL_DATA_TYPE;

/**
 * The data type is a string.
 */
type STRING_DATA_TYPE = RuleDataType_STRING_DATA_TYPE;

/**
 * The data type is a boolean.
 */
type BOOLEAN_DATA_TYPE = RuleDataType_BOOLEAN_DATA_TYPE;

/**
 * The data type is an object.
 */
type OBJECT_DATA_TYPE = RuleDataType_OBJECT_DATA_TYPE;

/**
 * The data type is a list.
 */
type LIST_DATA_TYPE = RuleDataType_LIST_DATA_TYPE;

}
/**
 * The kind of value a preflight rule's data object holds.
 */
export declare const RuleDataType: typeof Enumeration & {

  /**
   * The data type is an int32.
   */
  readonly INTEGER_DATA_TYPE: RuleDataType_INTEGER_DATA_TYPE;
  /**
   * The data type is an int32.
   */
  readonly integerDataType: RuleDataType_INTEGER_DATA_TYPE;
  /**
   * The data type is an int32.
   */
  readonly integerdatatype: RuleDataType_INTEGER_DATA_TYPE;

  /**
   * The data type is an int16.
   */
  readonly SHORT_INTEGER_DATA_TYPE: RuleDataType_SHORT_INTEGER_DATA_TYPE;
  /**
   * The data type is an int16.
   */
  readonly shortIntegerDataType: RuleDataType_SHORT_INTEGER_DATA_TYPE;
  /**
   * The data type is an int16.
   */
  readonly shortintegerdatatype: RuleDataType_SHORT_INTEGER_DATA_TYPE;

  /**
   * The data type is a real.
   */
  readonly REAL_DATA_TYPE: RuleDataType_REAL_DATA_TYPE;
  /**
   * The data type is a real.
   */
  readonly realDataType: RuleDataType_REAL_DATA_TYPE;
  /**
   * The data type is a real.
   */
  readonly realdatatype: RuleDataType_REAL_DATA_TYPE;

  /**
   * The data type is a string.
   */
  readonly STRING_DATA_TYPE: RuleDataType_STRING_DATA_TYPE;
  /**
   * The data type is a string.
   */
  readonly stringDataType: RuleDataType_STRING_DATA_TYPE;
  /**
   * The data type is a string.
   */
  readonly stringdatatype: RuleDataType_STRING_DATA_TYPE;

  /**
   * The data type is a boolean.
   */
  readonly BOOLEAN_DATA_TYPE: RuleDataType_BOOLEAN_DATA_TYPE;
  /**
   * The data type is a boolean.
   */
  readonly booleanDataType: RuleDataType_BOOLEAN_DATA_TYPE;
  /**
   * The data type is a boolean.
   */
  readonly booleandatatype: RuleDataType_BOOLEAN_DATA_TYPE;

  /**
   * The data type is an object.
   */
  readonly OBJECT_DATA_TYPE: RuleDataType_OBJECT_DATA_TYPE;
  /**
   * The data type is an object.
   */
  readonly objectDataType: RuleDataType_OBJECT_DATA_TYPE;
  /**
   * The data type is an object.
   */
  readonly objectdatatype: RuleDataType_OBJECT_DATA_TYPE;

  /**
   * The data type is a list.
   */
  readonly LIST_DATA_TYPE: RuleDataType_LIST_DATA_TYPE;
  /**
   * The data type is a list.
   */
  readonly listDataType: RuleDataType_LIST_DATA_TYPE;
  /**
   * The data type is a list.
   */
  readonly listdatatype: RuleDataType_LIST_DATA_TYPE;

}
