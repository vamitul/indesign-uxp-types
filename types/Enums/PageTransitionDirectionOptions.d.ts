/**
 * PageTransitionDirectionOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PageTransitionDirectionOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PageTransitionDirectionOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PageTransitionDirectionOptions>): boolean;

  /**
   * @internal **WARNING:** `__PageTransitionDirectionOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PageTransitionDirectionOptions]: never;
}


/**
 * Direction does not apply. 
 */
interface PageTransitionDirectionOptions_NOT_APPLICABLE extends PageTransitionDirectionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886670401;
}

/**
 * The top to bottom direction. 
 */
interface PageTransitionDirectionOptions_DOWN extends PageTransitionDirectionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181971556;
}

/**
 * The right to left direction.
 */
interface PageTransitionDirectionOptions_RIGHT_TO_LEFT extends PageTransitionDirectionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1920232546;
}

/**
 * The down and left direction.
 */
interface PageTransitionDirectionOptions_LEFT_DOWN extends PageTransitionDirectionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886669892;
}

/**
 * The up and left direction. 
 */
interface PageTransitionDirectionOptions_LEFT_UP extends PageTransitionDirectionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886669909;
}

/**
 * The left to right direction. 
 */
interface PageTransitionDirectionOptions_LEFT_TO_RIGHT extends PageTransitionDirectionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1819570786;
}

/**
 * The down and right direction. 
 */
interface PageTransitionDirectionOptions_RIGHT_DOWN extends PageTransitionDirectionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886671428;
}

/**
 * The up and right direction. 
 */
interface PageTransitionDirectionOptions_RIGHT_UP extends PageTransitionDirectionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886671445;
}

/**
 * The bottom to top direction. 
 */
interface PageTransitionDirectionOptions_UP extends PageTransitionDirectionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181971566;
}

/**
 * The inward direction. 
 */
interface PageTransitionDirectionOptions_IN extends PageTransitionDirectionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1768824864;
}

/**
 * The outward direction. 
 */
interface PageTransitionDirectionOptions_OUT extends PageTransitionDirectionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886670708;
}

/**
 * The horizontal direction. 
 */
interface PageTransitionDirectionOptions_HORIZONTAL extends PageTransitionDirectionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1752134266;
}

/**
 * The vertical direction. 
 */
interface PageTransitionDirectionOptions_VERTICAL extends PageTransitionDirectionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1986359924;
}

/**
 * The horizontal inward direction. 
 */
interface PageTransitionDirectionOptions_HORIZONTAL_IN extends PageTransitionDirectionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886668873;
}

/**
 * The horizontal outward direction. 
 */
interface PageTransitionDirectionOptions_HORIZONTAL_OUT extends PageTransitionDirectionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886668879;
}

/**
 * The vertical inward direction. 
 */
interface PageTransitionDirectionOptions_VERTICAL_IN extends PageTransitionDirectionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886672457;
}

/**
 * The vertical outward direction. 
 */
interface PageTransitionDirectionOptions_VERTICAL_OUT extends PageTransitionDirectionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886672463;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which way a page transition moves.
 */
export declare namespace PageTransitionDirectionOptions {
/**
 * Direction does not apply. 
 */
type NOT_APPLICABLE = PageTransitionDirectionOptions_NOT_APPLICABLE;

/**
 * The top to bottom direction. 
 */
type DOWN = PageTransitionDirectionOptions_DOWN;

/**
 * The right to left direction.
 */
type RIGHT_TO_LEFT = PageTransitionDirectionOptions_RIGHT_TO_LEFT;

/**
 * The down and left direction.
 */
type LEFT_DOWN = PageTransitionDirectionOptions_LEFT_DOWN;

/**
 * The up and left direction. 
 */
type LEFT_UP = PageTransitionDirectionOptions_LEFT_UP;

/**
 * The left to right direction. 
 */
type LEFT_TO_RIGHT = PageTransitionDirectionOptions_LEFT_TO_RIGHT;

/**
 * The down and right direction. 
 */
type RIGHT_DOWN = PageTransitionDirectionOptions_RIGHT_DOWN;

/**
 * The up and right direction. 
 */
type RIGHT_UP = PageTransitionDirectionOptions_RIGHT_UP;

/**
 * The bottom to top direction. 
 */
type UP = PageTransitionDirectionOptions_UP;

/**
 * The inward direction. 
 */
type IN = PageTransitionDirectionOptions_IN;

/**
 * The outward direction. 
 */
type OUT = PageTransitionDirectionOptions_OUT;

/**
 * The horizontal direction. 
 */
type HORIZONTAL = PageTransitionDirectionOptions_HORIZONTAL;

/**
 * The vertical direction. 
 */
type VERTICAL = PageTransitionDirectionOptions_VERTICAL;

/**
 * The horizontal inward direction. 
 */
type HORIZONTAL_IN = PageTransitionDirectionOptions_HORIZONTAL_IN;

/**
 * The horizontal outward direction. 
 */
type HORIZONTAL_OUT = PageTransitionDirectionOptions_HORIZONTAL_OUT;

/**
 * The vertical inward direction. 
 */
type VERTICAL_IN = PageTransitionDirectionOptions_VERTICAL_IN;

/**
 * The vertical outward direction. 
 */
type VERTICAL_OUT = PageTransitionDirectionOptions_VERTICAL_OUT;

}
/**
 * Which way a page transition moves.
 */
export declare const PageTransitionDirectionOptions: typeof Enumeration & {

  /**
   * Direction does not apply. 
   */
  readonly NOT_APPLICABLE: PageTransitionDirectionOptions_NOT_APPLICABLE;
  /**
   * Direction does not apply. 
   */
  readonly notApplicable: PageTransitionDirectionOptions_NOT_APPLICABLE;
  /**
   * Direction does not apply. 
   */
  readonly notapplicable: PageTransitionDirectionOptions_NOT_APPLICABLE;

  /**
   * The top to bottom direction. 
   */
  readonly DOWN: PageTransitionDirectionOptions_DOWN;
  /**
   * The top to bottom direction. 
   */
  readonly down: PageTransitionDirectionOptions_DOWN;

  /**
   * The right to left direction.
   */
  readonly RIGHT_TO_LEFT: PageTransitionDirectionOptions_RIGHT_TO_LEFT;
  /**
   * The right to left direction.
   */
  readonly rightToLeft: PageTransitionDirectionOptions_RIGHT_TO_LEFT;
  /**
   * The right to left direction.
   */
  readonly righttoleft: PageTransitionDirectionOptions_RIGHT_TO_LEFT;

  /**
   * The down and left direction.
   */
  readonly LEFT_DOWN: PageTransitionDirectionOptions_LEFT_DOWN;
  /**
   * The down and left direction.
   */
  readonly leftDown: PageTransitionDirectionOptions_LEFT_DOWN;
  /**
   * The down and left direction.
   */
  readonly leftdown: PageTransitionDirectionOptions_LEFT_DOWN;

  /**
   * The up and left direction. 
   */
  readonly LEFT_UP: PageTransitionDirectionOptions_LEFT_UP;
  /**
   * The up and left direction. 
   */
  readonly leftUp: PageTransitionDirectionOptions_LEFT_UP;
  /**
   * The up and left direction. 
   */
  readonly leftup: PageTransitionDirectionOptions_LEFT_UP;

  /**
   * The left to right direction. 
   */
  readonly LEFT_TO_RIGHT: PageTransitionDirectionOptions_LEFT_TO_RIGHT;
  /**
   * The left to right direction. 
   */
  readonly leftToRight: PageTransitionDirectionOptions_LEFT_TO_RIGHT;
  /**
   * The left to right direction. 
   */
  readonly lefttoright: PageTransitionDirectionOptions_LEFT_TO_RIGHT;

  /**
   * The down and right direction. 
   */
  readonly RIGHT_DOWN: PageTransitionDirectionOptions_RIGHT_DOWN;
  /**
   * The down and right direction. 
   */
  readonly rightDown: PageTransitionDirectionOptions_RIGHT_DOWN;
  /**
   * The down and right direction. 
   */
  readonly rightdown: PageTransitionDirectionOptions_RIGHT_DOWN;

  /**
   * The up and right direction. 
   */
  readonly RIGHT_UP: PageTransitionDirectionOptions_RIGHT_UP;
  /**
   * The up and right direction. 
   */
  readonly rightUp: PageTransitionDirectionOptions_RIGHT_UP;
  /**
   * The up and right direction. 
   */
  readonly rightup: PageTransitionDirectionOptions_RIGHT_UP;

  /**
   * The bottom to top direction. 
   */
  readonly UP: PageTransitionDirectionOptions_UP;
  /**
   * The bottom to top direction. 
   */
  readonly up: PageTransitionDirectionOptions_UP;

  /**
   * The inward direction. 
   */
  readonly IN: PageTransitionDirectionOptions_IN;
  /**
   * The inward direction. 
   */
  readonly in: PageTransitionDirectionOptions_IN;

  /**
   * The outward direction. 
   */
  readonly OUT: PageTransitionDirectionOptions_OUT;
  /**
   * The outward direction. 
   */
  readonly out: PageTransitionDirectionOptions_OUT;

  /**
   * The horizontal direction. 
   */
  readonly HORIZONTAL: PageTransitionDirectionOptions_HORIZONTAL;
  /**
   * The horizontal direction. 
   */
  readonly horizontal: PageTransitionDirectionOptions_HORIZONTAL;

  /**
   * The vertical direction. 
   */
  readonly VERTICAL: PageTransitionDirectionOptions_VERTICAL;
  /**
   * The vertical direction. 
   */
  readonly vertical: PageTransitionDirectionOptions_VERTICAL;

  /**
   * The horizontal inward direction. 
   */
  readonly HORIZONTAL_IN: PageTransitionDirectionOptions_HORIZONTAL_IN;
  /**
   * The horizontal inward direction. 
   */
  readonly horizontalIn: PageTransitionDirectionOptions_HORIZONTAL_IN;
  /**
   * The horizontal inward direction. 
   */
  readonly horizontalin: PageTransitionDirectionOptions_HORIZONTAL_IN;

  /**
   * The horizontal outward direction. 
   */
  readonly HORIZONTAL_OUT: PageTransitionDirectionOptions_HORIZONTAL_OUT;
  /**
   * The horizontal outward direction. 
   */
  readonly horizontalOut: PageTransitionDirectionOptions_HORIZONTAL_OUT;
  /**
   * The horizontal outward direction. 
   */
  readonly horizontalout: PageTransitionDirectionOptions_HORIZONTAL_OUT;

  /**
   * The vertical inward direction. 
   */
  readonly VERTICAL_IN: PageTransitionDirectionOptions_VERTICAL_IN;
  /**
   * The vertical inward direction. 
   */
  readonly verticalIn: PageTransitionDirectionOptions_VERTICAL_IN;
  /**
   * The vertical inward direction. 
   */
  readonly verticalin: PageTransitionDirectionOptions_VERTICAL_IN;

  /**
   * The vertical outward direction. 
   */
  readonly VERTICAL_OUT: PageTransitionDirectionOptions_VERTICAL_OUT;
  /**
   * The vertical outward direction. 
   */
  readonly verticalOut: PageTransitionDirectionOptions_VERTICAL_OUT;
  /**
   * The vertical outward direction. 
   */
  readonly verticalout: PageTransitionDirectionOptions_VERTICAL_OUT;

}
