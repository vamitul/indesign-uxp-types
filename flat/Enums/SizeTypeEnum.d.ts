/**
 * SizeTypeEnum.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __SizeTypeEnum: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface SizeTypeEnum extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<SizeTypeEnum>): boolean;

  /**
   * @internal **WARNING:** `__SizeTypeEnum` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__SizeTypeEnum]: never;
}


/**
 * No size specified.
 */
interface SizeTypeEnum_NONE_SIZE extends SizeTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1315925587;
}

/**
 * Default size.
 */
interface SizeTypeEnum_DEFAULT_SIZE extends SizeTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1147491177;
}

/**
 * Fixed size.
 */
interface SizeTypeEnum_FIXED_SIZE extends SizeTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181317203;
}

/**
 * Relative to text flow.
 */
interface SizeTypeEnum_RELATIVE_TO_TEXT_FLOW extends SizeTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1383289940;
}

/**
 * Relative to text size.
 */
interface SizeTypeEnum_RELATIVE_TO_TEXT_SIZE extends SizeTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1383486579;
}

/**
 * Use custom width.
 */
interface SizeTypeEnum_USE_CUSTOM_WIDTH extends SizeTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1430476649;
}

/**
 * Use custom height.
 */
interface SizeTypeEnum_USE_CUSTOM_HEIGHT extends SizeTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1430472805;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for how an exported object's dimensions are determined, such as when
 * exporting to EPUB or HTML.
 */
export declare namespace SizeTypeEnum {
/**
 * No size specified.
 */
type NONE_SIZE = SizeTypeEnum_NONE_SIZE;

/**
 * Default size.
 */
type DEFAULT_SIZE = SizeTypeEnum_DEFAULT_SIZE;

/**
 * Fixed size.
 */
type FIXED_SIZE = SizeTypeEnum_FIXED_SIZE;

/**
 * Relative to text flow.
 */
type RELATIVE_TO_TEXT_FLOW = SizeTypeEnum_RELATIVE_TO_TEXT_FLOW;

/**
 * Relative to text size.
 */
type RELATIVE_TO_TEXT_SIZE = SizeTypeEnum_RELATIVE_TO_TEXT_SIZE;

/**
 * Use custom width.
 */
type USE_CUSTOM_WIDTH = SizeTypeEnum_USE_CUSTOM_WIDTH;

/**
 * Use custom height.
 */
type USE_CUSTOM_HEIGHT = SizeTypeEnum_USE_CUSTOM_HEIGHT;

}
/**
 * Options for how an exported object's dimensions are determined, such as when
 * exporting to EPUB or HTML.
 */
export declare const SizeTypeEnum: typeof Enumeration & {

  /**
   * No size specified.
   */
  readonly NONE_SIZE: SizeTypeEnum_NONE_SIZE;
  /**
   * No size specified.
   */
  readonly noneSize: SizeTypeEnum_NONE_SIZE;
  /**
   * No size specified.
   */
  readonly nonesize: SizeTypeEnum_NONE_SIZE;

  /**
   * Default size.
   */
  readonly DEFAULT_SIZE: SizeTypeEnum_DEFAULT_SIZE;
  /**
   * Default size.
   */
  readonly defaultSize: SizeTypeEnum_DEFAULT_SIZE;
  /**
   * Default size.
   */
  readonly defaultsize: SizeTypeEnum_DEFAULT_SIZE;

  /**
   * Fixed size.
   */
  readonly FIXED_SIZE: SizeTypeEnum_FIXED_SIZE;
  /**
   * Fixed size.
   */
  readonly fixedSize: SizeTypeEnum_FIXED_SIZE;
  /**
   * Fixed size.
   */
  readonly fixedsize: SizeTypeEnum_FIXED_SIZE;

  /**
   * Relative to text flow.
   */
  readonly RELATIVE_TO_TEXT_FLOW: SizeTypeEnum_RELATIVE_TO_TEXT_FLOW;
  /**
   * Relative to text flow.
   */
  readonly relativeToTextFlow: SizeTypeEnum_RELATIVE_TO_TEXT_FLOW;
  /**
   * Relative to text flow.
   */
  readonly relativetotextflow: SizeTypeEnum_RELATIVE_TO_TEXT_FLOW;

  /**
   * Relative to text size.
   */
  readonly RELATIVE_TO_TEXT_SIZE: SizeTypeEnum_RELATIVE_TO_TEXT_SIZE;
  /**
   * Relative to text size.
   */
  readonly relativeToTextSize: SizeTypeEnum_RELATIVE_TO_TEXT_SIZE;
  /**
   * Relative to text size.
   */
  readonly relativetotextsize: SizeTypeEnum_RELATIVE_TO_TEXT_SIZE;

  /**
   * Use custom width.
   */
  readonly USE_CUSTOM_WIDTH: SizeTypeEnum_USE_CUSTOM_WIDTH;
  /**
   * Use custom width.
   */
  readonly useCustomWidth: SizeTypeEnum_USE_CUSTOM_WIDTH;
  /**
   * Use custom width.
   */
  readonly usecustomwidth: SizeTypeEnum_USE_CUSTOM_WIDTH;

  /**
   * Use custom height.
   */
  readonly USE_CUSTOM_HEIGHT: SizeTypeEnum_USE_CUSTOM_HEIGHT;
  /**
   * Use custom height.
   */
  readonly useCustomHeight: SizeTypeEnum_USE_CUSTOM_HEIGHT;
  /**
   * Use custom height.
   */
  readonly usecustomheight: SizeTypeEnum_USE_CUSTOM_HEIGHT;

}
