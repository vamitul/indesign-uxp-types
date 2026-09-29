/**
 * TextDirection.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __TextDirection: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface TextDirection extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<TextDirection>): boolean;

  /**
   * @internal **WARNING:** `__TextDirection` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__TextDirection]: never;
}


/**
 * Horizontal text direction.
 */
interface TextDirection_HORIZONTAL_TYPE extends TextDirection {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1702126696;
}

/**
 * Vertical text direction.
 */
interface TextDirection_VERTICAL_TYPE extends TextDirection {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1702126710;
}

/**
 * Mixed text direction.
 */
interface TextDirection_MIXED_TYPE extends TextDirection {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1702126701;
}

/**
 * Unknown text direction.
 */
interface TextDirection_UNKNOWN_TYPE extends TextDirection {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1702126709;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether text runs horizontally or vertically, or the direction is mixed or unknown.
 */
export declare namespace TextDirection {
/**
 * Horizontal text direction.
 */
type HORIZONTAL_TYPE = TextDirection_HORIZONTAL_TYPE;

/**
 * Vertical text direction.
 */
type VERTICAL_TYPE = TextDirection_VERTICAL_TYPE;

/**
 * Mixed text direction.
 */
type MIXED_TYPE = TextDirection_MIXED_TYPE;

/**
 * Unknown text direction.
 */
type UNKNOWN_TYPE = TextDirection_UNKNOWN_TYPE;

}
/**
 * Whether text runs horizontally or vertically, or the direction is mixed or unknown.
 */
export declare const TextDirection: typeof Enumeration & {

  /**
   * Horizontal text direction.
   */
  readonly HORIZONTAL_TYPE: TextDirection_HORIZONTAL_TYPE;
  /**
   * Horizontal text direction.
   */
  readonly horizontalType: TextDirection_HORIZONTAL_TYPE;
  /**
   * Horizontal text direction.
   */
  readonly horizontaltype: TextDirection_HORIZONTAL_TYPE;

  /**
   * Vertical text direction.
   */
  readonly VERTICAL_TYPE: TextDirection_VERTICAL_TYPE;
  /**
   * Vertical text direction.
   */
  readonly verticalType: TextDirection_VERTICAL_TYPE;
  /**
   * Vertical text direction.
   */
  readonly verticaltype: TextDirection_VERTICAL_TYPE;

  /**
   * Mixed text direction.
   */
  readonly MIXED_TYPE: TextDirection_MIXED_TYPE;
  /**
   * Mixed text direction.
   */
  readonly mixedType: TextDirection_MIXED_TYPE;
  /**
   * Mixed text direction.
   */
  readonly mixedtype: TextDirection_MIXED_TYPE;

  /**
   * Unknown text direction.
   */
  readonly UNKNOWN_TYPE: TextDirection_UNKNOWN_TYPE;
  /**
   * Unknown text direction.
   */
  readonly unknownType: TextDirection_UNKNOWN_TYPE;
  /**
   * Unknown text direction.
   */
  readonly unknowntype: TextDirection_UNKNOWN_TYPE;

}
