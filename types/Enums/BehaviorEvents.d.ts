/**
 * BehaviorEvents.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __BehaviorEvents: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface BehaviorEvents extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<BehaviorEvents>): boolean;

  /**
   * @internal **WARNING:** `__BehaviorEvents` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__BehaviorEvents]: never;
}


/**
 * Triggers the behavior when the mouse is released after a click.
 */
interface BehaviorEvents_MOUSE_UP extends BehaviorEvents {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1836410230;
}

/**
 * Triggers the behavior when the mouse button is clicked (without being released). 
 */
interface BehaviorEvents_MOUSE_DOWN extends BehaviorEvents {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1835296118;
}

/**
 * Triggers the behavior when the mouse pointer enters the area defined by the bounding box of the object.
 */
interface BehaviorEvents_MOUSE_ENTER extends BehaviorEvents {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1835361654;
}

/**
 * Triggers the behavior when the mouse pointer exits the area defined by the bounding box of the object.
 */
interface BehaviorEvents_MOUSE_EXIT extends BehaviorEvents {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1836606838;
}

/**
 * Triggers the behavior when the object receives focus, either through a mouse action or by pressing the Tab key.
 */
interface BehaviorEvents_ON_FOCUS extends BehaviorEvents {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1868981622;
}

/**
 * Triggers the behavior when the focus moves to a different interactive object.
 */
interface BehaviorEvents_ON_BLUR extends BehaviorEvents {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1868719478;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Behavior trigger event options.
 */
export declare namespace BehaviorEvents {
/**
 * Triggers the behavior when the mouse is released after a click.
 */
type MOUSE_UP = BehaviorEvents_MOUSE_UP;

/**
 * Triggers the behavior when the mouse button is clicked (without being released). 
 */
type MOUSE_DOWN = BehaviorEvents_MOUSE_DOWN;

/**
 * Triggers the behavior when the mouse pointer enters the area defined by the bounding box of the object.
 */
type MOUSE_ENTER = BehaviorEvents_MOUSE_ENTER;

/**
 * Triggers the behavior when the mouse pointer exits the area defined by the bounding box of the object.
 */
type MOUSE_EXIT = BehaviorEvents_MOUSE_EXIT;

/**
 * Triggers the behavior when the object receives focus, either through a mouse action or by pressing the Tab key.
 */
type ON_FOCUS = BehaviorEvents_ON_FOCUS;

/**
 * Triggers the behavior when the focus moves to a different interactive object.
 */
type ON_BLUR = BehaviorEvents_ON_BLUR;

}
/**
 * Behavior trigger event options.
 */
export declare const BehaviorEvents: typeof Enumeration & {

  /**
   * Triggers the behavior when the mouse is released after a click.
   */
  readonly MOUSE_UP: BehaviorEvents_MOUSE_UP;
  /**
   * Triggers the behavior when the mouse is released after a click.
   */
  readonly mouseUp: BehaviorEvents_MOUSE_UP;
  /**
   * Triggers the behavior when the mouse is released after a click.
   */
  readonly mouseup: BehaviorEvents_MOUSE_UP;

  /**
   * Triggers the behavior when the mouse button is clicked (without being released). 
   */
  readonly MOUSE_DOWN: BehaviorEvents_MOUSE_DOWN;
  /**
   * Triggers the behavior when the mouse button is clicked (without being released). 
   */
  readonly mouseDown: BehaviorEvents_MOUSE_DOWN;
  /**
   * Triggers the behavior when the mouse button is clicked (without being released). 
   */
  readonly mousedown: BehaviorEvents_MOUSE_DOWN;

  /**
   * Triggers the behavior when the mouse pointer enters the area defined by the bounding box of the object.
   */
  readonly MOUSE_ENTER: BehaviorEvents_MOUSE_ENTER;
  /**
   * Triggers the behavior when the mouse pointer enters the area defined by the bounding box of the object.
   */
  readonly mouseEnter: BehaviorEvents_MOUSE_ENTER;
  /**
   * Triggers the behavior when the mouse pointer enters the area defined by the bounding box of the object.
   */
  readonly mouseenter: BehaviorEvents_MOUSE_ENTER;

  /**
   * Triggers the behavior when the mouse pointer exits the area defined by the bounding box of the object.
   */
  readonly MOUSE_EXIT: BehaviorEvents_MOUSE_EXIT;
  /**
   * Triggers the behavior when the mouse pointer exits the area defined by the bounding box of the object.
   */
  readonly mouseExit: BehaviorEvents_MOUSE_EXIT;
  /**
   * Triggers the behavior when the mouse pointer exits the area defined by the bounding box of the object.
   */
  readonly mouseexit: BehaviorEvents_MOUSE_EXIT;

  /**
   * Triggers the behavior when the object receives focus, either through a mouse action or by pressing the Tab key.
   */
  readonly ON_FOCUS: BehaviorEvents_ON_FOCUS;
  /**
   * Triggers the behavior when the object receives focus, either through a mouse action or by pressing the Tab key.
   */
  readonly onFocus: BehaviorEvents_ON_FOCUS;
  /**
   * Triggers the behavior when the object receives focus, either through a mouse action or by pressing the Tab key.
   */
  readonly onfocus: BehaviorEvents_ON_FOCUS;

  /**
   * Triggers the behavior when the focus moves to a different interactive object.
   */
  readonly ON_BLUR: BehaviorEvents_ON_BLUR;
  /**
   * Triggers the behavior when the focus moves to a different interactive object.
   */
  readonly onBlur: BehaviorEvents_ON_BLUR;
  /**
   * Triggers the behavior when the focus moves to a different interactive object.
   */
  readonly onblur: BehaviorEvents_ON_BLUR;

}
