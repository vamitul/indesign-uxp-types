/**
 * TextWrapSideOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __TextWrapSideOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface TextWrapSideOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<TextWrapSideOptions>): boolean;

  /**
   * @internal **WARNING:** `__TextWrapSideOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__TextWrapSideOptions]: never;
}


/**
 * Both sides text wrap.
 */
interface TextWrapSideOptions_BOTH_SIDES extends TextWrapSideOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1953981043;
}

/**
 * Left side text wrap.
 */
interface TextWrapSideOptions_LEFT_SIDE extends TextWrapSideOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1953983603;
}

/**
 * Right side text wrap.
 */
interface TextWrapSideOptions_RIGHT_SIDE extends TextWrapSideOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1953985139;
}

/**
 * Binding side text wrap.
 */
interface TextWrapSideOptions_SIDE_TOWARDS_SPINE extends TextWrapSideOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1953985651;
}

/**
 * Away from binding side text wrap.
 */
interface TextWrapSideOptions_SIDE_AWAY_FROM_SPINE extends TextWrapSideOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1953980787;
}

/**
 * Largest side text wrap.
 */
interface TextWrapSideOptions_LARGEST_AREA extends TextWrapSideOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1953975411;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which side of an object text is allowed to flow down.
 */
export declare namespace TextWrapSideOptions {
/**
 * Both sides text wrap.
 */
type BOTH_SIDES = TextWrapSideOptions_BOTH_SIDES;

/**
 * Left side text wrap.
 */
type LEFT_SIDE = TextWrapSideOptions_LEFT_SIDE;

/**
 * Right side text wrap.
 */
type RIGHT_SIDE = TextWrapSideOptions_RIGHT_SIDE;

/**
 * Binding side text wrap.
 */
type SIDE_TOWARDS_SPINE = TextWrapSideOptions_SIDE_TOWARDS_SPINE;

/**
 * Away from binding side text wrap.
 */
type SIDE_AWAY_FROM_SPINE = TextWrapSideOptions_SIDE_AWAY_FROM_SPINE;

/**
 * Largest side text wrap.
 */
type LARGEST_AREA = TextWrapSideOptions_LARGEST_AREA;

}
/**
 * Which side of an object text is allowed to flow down.
 */
export declare const TextWrapSideOptions: typeof Enumeration & {

  /**
   * Both sides text wrap.
   */
  readonly BOTH_SIDES: TextWrapSideOptions_BOTH_SIDES;
  /**
   * Both sides text wrap.
   */
  readonly bothSides: TextWrapSideOptions_BOTH_SIDES;
  /**
   * Both sides text wrap.
   */
  readonly bothsides: TextWrapSideOptions_BOTH_SIDES;

  /**
   * Left side text wrap.
   */
  readonly LEFT_SIDE: TextWrapSideOptions_LEFT_SIDE;
  /**
   * Left side text wrap.
   */
  readonly leftSide: TextWrapSideOptions_LEFT_SIDE;
  /**
   * Left side text wrap.
   */
  readonly leftside: TextWrapSideOptions_LEFT_SIDE;

  /**
   * Right side text wrap.
   */
  readonly RIGHT_SIDE: TextWrapSideOptions_RIGHT_SIDE;
  /**
   * Right side text wrap.
   */
  readonly rightSide: TextWrapSideOptions_RIGHT_SIDE;
  /**
   * Right side text wrap.
   */
  readonly rightside: TextWrapSideOptions_RIGHT_SIDE;

  /**
   * Binding side text wrap.
   */
  readonly SIDE_TOWARDS_SPINE: TextWrapSideOptions_SIDE_TOWARDS_SPINE;
  /**
   * Binding side text wrap.
   */
  readonly sideTowardsSpine: TextWrapSideOptions_SIDE_TOWARDS_SPINE;
  /**
   * Binding side text wrap.
   */
  readonly sidetowardsspine: TextWrapSideOptions_SIDE_TOWARDS_SPINE;

  /**
   * Away from binding side text wrap.
   */
  readonly SIDE_AWAY_FROM_SPINE: TextWrapSideOptions_SIDE_AWAY_FROM_SPINE;
  /**
   * Away from binding side text wrap.
   */
  readonly sideAwayFromSpine: TextWrapSideOptions_SIDE_AWAY_FROM_SPINE;
  /**
   * Away from binding side text wrap.
   */
  readonly sideawayfromspine: TextWrapSideOptions_SIDE_AWAY_FROM_SPINE;

  /**
   * Largest side text wrap.
   */
  readonly LARGEST_AREA: TextWrapSideOptions_LARGEST_AREA;
  /**
   * Largest side text wrap.
   */
  readonly largestArea: TextWrapSideOptions_LARGEST_AREA;
  /**
   * Largest side text wrap.
   */
  readonly largestarea: TextWrapSideOptions_LARGEST_AREA;

}
