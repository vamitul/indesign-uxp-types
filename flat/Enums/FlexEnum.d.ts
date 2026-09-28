/**
 * FlexEnum.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";
import type { FlexPosition } from "./FlexPosition";
import type { FlexWidthHeightMode } from "./FlexWidthHeightMode";



declare const __FlexEnum: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface FlexEnum extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<FlexEnum, FlexWidthHeightMode | FlexPosition>): boolean;

  /**
   * @internal **WARNING:** `__FlexEnum` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__FlexEnum]: never;
}


/**
 * Flex auto.
 */
interface FlexEnum_FLEX_AUTO extends FlexEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1716994420;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Auto Enum attribute to be used for properties accepting Auto.
 */
export declare namespace FlexEnum {
/**
 * Flex auto.
 */
type FLEX_AUTO = FlexEnum_FLEX_AUTO;

}
/**
 * Auto Enum attribute to be used for properties accepting Auto.
 */
export declare const FlexEnum: typeof Enumeration & {

  /**
   * Flex auto.
   */
  readonly FLEX_AUTO: FlexEnum_FLEX_AUTO;
  /**
   * Flex auto.
   */
  readonly flexAuto: FlexEnum_FLEX_AUTO;
  /**
   * Flex auto.
   */
  readonly flexauto: FlexEnum_FLEX_AUTO;

}
