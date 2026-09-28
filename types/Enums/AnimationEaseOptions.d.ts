/**
 * AnimationEaseOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __AnimationEaseOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface AnimationEaseOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<AnimationEaseOptions>): boolean;

  /**
   * @internal **WARNING:** `__AnimationEaseOptions` is a phantom type for compiler strictness only.
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__AnimationEaseOptions]: never;
}


/**
 * No easing; the animation plays at a constant speed.
 */
interface AnimationEaseOptions_NO_EASE extends AnimationEaseOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only.
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2051960645;
}

/**
 * Eases in: the animation starts slowly and accelerates.
 */
interface AnimationEaseOptions_EASE_IN extends AnimationEaseOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only.
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2051371849;
}

/**
 * Eases out: the animation decelerates toward the end.
 */
interface AnimationEaseOptions_EASE_OUT extends AnimationEaseOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only.
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2051371855;
}

/**
 * Eases in and out: the animation accelerates from the start and decelerates toward the end.
 */
interface AnimationEaseOptions_EASE_IN_OUT extends AnimationEaseOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only.
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2051361103;
}

/**
 * A custom ease curve, read-only — set via the motion path editor in the InDesign UI rather than the DOM.
 */
interface AnimationEaseOptions_CUSTOM_EASE extends AnimationEaseOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only.
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2051363407;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The acceleration curve applied to an object's animation, controlling how its speed
 * changes over the course of the motion (the "Ease" setting in the Timing panel).
 */
export declare namespace AnimationEaseOptions {
/**
 * No easing; the animation plays at a constant speed.
 */
type NO_EASE = AnimationEaseOptions_NO_EASE;

/**
 * Eases in: the animation starts slowly and accelerates.
 */
type EASE_IN = AnimationEaseOptions_EASE_IN;

/**
 * Eases out: the animation decelerates toward the end.
 */
type EASE_OUT = AnimationEaseOptions_EASE_OUT;

/**
 * Eases in and out: the animation accelerates from the start and decelerates toward the end.
 */
type EASE_IN_OUT = AnimationEaseOptions_EASE_IN_OUT;

/**
 * A custom ease curve, read-only — set via the motion path editor in the InDesign UI rather than the DOM.
 */
type CUSTOM_EASE = AnimationEaseOptions_CUSTOM_EASE;

}
/**
 * The acceleration curve applied to an object's animation, controlling how its speed
 * changes over the course of the motion (the "Ease" setting in the Timing panel).
 */
export declare const AnimationEaseOptions: typeof Enumeration & {

  /**
   * No easing; the animation plays at a constant speed.
   */
  readonly NO_EASE: AnimationEaseOptions_NO_EASE;
  /**
   * No easing; the animation plays at a constant speed.
   */
  readonly noEase: AnimationEaseOptions_NO_EASE;
  /**
   * No easing; the animation plays at a constant speed.
   */
  readonly noease: AnimationEaseOptions_NO_EASE;

  /**
   * Eases in: the animation starts slowly and accelerates.
   */
  readonly EASE_IN: AnimationEaseOptions_EASE_IN;
  /**
   * Eases in: the animation starts slowly and accelerates.
   */
  readonly easeIn: AnimationEaseOptions_EASE_IN;
  /**
   * Eases in: the animation starts slowly and accelerates.
   */
  readonly easein: AnimationEaseOptions_EASE_IN;

  /**
   * Eases out: the animation decelerates toward the end.
   */
  readonly EASE_OUT: AnimationEaseOptions_EASE_OUT;
  /**
   * Eases out: the animation decelerates toward the end.
   */
  readonly easeOut: AnimationEaseOptions_EASE_OUT;
  /**
   * Eases out: the animation decelerates toward the end.
   */
  readonly easeout: AnimationEaseOptions_EASE_OUT;

  /**
   * Eases in and out: the animation accelerates from the start and decelerates toward the end.
   */
  readonly EASE_IN_OUT: AnimationEaseOptions_EASE_IN_OUT;
  /**
   * Eases in and out: the animation accelerates from the start and decelerates toward the end.
   */
  readonly easeInOut: AnimationEaseOptions_EASE_IN_OUT;
  /**
   * Eases in and out: the animation accelerates from the start and decelerates toward the end.
   */
  readonly easeinout: AnimationEaseOptions_EASE_IN_OUT;

  /**
   * A custom ease curve, read-only — set via the motion path editor in the InDesign UI rather than the DOM.
   */
  readonly CUSTOM_EASE: AnimationEaseOptions_CUSTOM_EASE;
  /**
   * A custom ease curve, read-only — set via the motion path editor in the InDesign UI rather than the DOM.
   */
  readonly customEase: AnimationEaseOptions_CUSTOM_EASE;
  /**
   * A custom ease curve, read-only — set via the motion path editor in the InDesign UI rather than the DOM.
   */
  readonly customease: AnimationEaseOptions_CUSTOM_EASE;

}
