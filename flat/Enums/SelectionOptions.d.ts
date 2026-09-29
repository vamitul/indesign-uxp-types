/**
 * SelectionOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __SelectionOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface SelectionOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<SelectionOptions>): boolean;

  /**
   * @internal **WARNING:** `__SelectionOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__SelectionOptions]: never;
}


/**
 * Adds the object to the existing selection; if no object was previously selected, makes the object the only selected object.
 */
interface SelectionOptions_ADD_TO extends SelectionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1633969202;
}

/**
 * Deselects the object.
 */
interface SelectionOptions_REMOVE_FROM extends SelectionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1919249734;
}

/**
 * Selects the object and deselects any previously selected objects.
 */
interface SelectionOptions_REPLACE_WITH extends SelectionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1919250519;
}

/**
 * Sets the key object. At least 2 objects must be selected, and the key object specified must be one of them.
 */
interface SelectionOptions_SET_KEY extends SelectionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936028779;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for selection status in relation to previously selected objects.
 */
export declare namespace SelectionOptions {
/**
 * Adds the object to the existing selection; if no object was previously selected, makes the object the only selected object.
 */
type ADD_TO = SelectionOptions_ADD_TO;

/**
 * Deselects the object.
 */
type REMOVE_FROM = SelectionOptions_REMOVE_FROM;

/**
 * Selects the object and deselects any previously selected objects.
 */
type REPLACE_WITH = SelectionOptions_REPLACE_WITH;

/**
 * Sets the key object. At least 2 objects must be selected, and the key object specified must be one of them.
 */
type SET_KEY = SelectionOptions_SET_KEY;

}
/**
 * Options for selection status in relation to previously selected objects.
 */
export declare const SelectionOptions: typeof Enumeration & {

  /**
   * Adds the object to the existing selection; if no object was previously selected, makes the object the only selected object.
   */
  readonly ADD_TO: SelectionOptions_ADD_TO;
  /**
   * Adds the object to the existing selection; if no object was previously selected, makes the object the only selected object.
   */
  readonly addTo: SelectionOptions_ADD_TO;
  /**
   * Adds the object to the existing selection; if no object was previously selected, makes the object the only selected object.
   */
  readonly addto: SelectionOptions_ADD_TO;

  /**
   * Deselects the object.
   */
  readonly REMOVE_FROM: SelectionOptions_REMOVE_FROM;
  /**
   * Deselects the object.
   */
  readonly removeFrom: SelectionOptions_REMOVE_FROM;
  /**
   * Deselects the object.
   */
  readonly removefrom: SelectionOptions_REMOVE_FROM;

  /**
   * Selects the object and deselects any previously selected objects.
   */
  readonly REPLACE_WITH: SelectionOptions_REPLACE_WITH;
  /**
   * Selects the object and deselects any previously selected objects.
   */
  readonly replaceWith: SelectionOptions_REPLACE_WITH;
  /**
   * Selects the object and deselects any previously selected objects.
   */
  readonly replacewith: SelectionOptions_REPLACE_WITH;

  /**
   * Sets the key object. At least 2 objects must be selected, and the key object specified must be one of them.
   */
  readonly SET_KEY: SelectionOptions_SET_KEY;
  /**
   * Sets the key object. At least 2 objects must be selected, and the key object specified must be one of them.
   */
  readonly setKey: SelectionOptions_SET_KEY;
  /**
   * Sets the key object. At least 2 objects must be selected, and the key object specified must be one of them.
   */
  readonly setkey: SelectionOptions_SET_KEY;

}
