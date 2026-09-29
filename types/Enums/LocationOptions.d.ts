/**
 * LocationOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __LocationOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface LocationOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<LocationOptions>): boolean;

  /**
   * @internal **WARNING:** `__LocationOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__LocationOptions]: never;
}


/**
 * Places the object before the reference object.
 */
interface LocationOptions_BEFORE extends LocationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1650812527;
}

/**
 * Places the object after the reference object.
 */
interface LocationOptions_AFTER extends LocationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1634104421;
}

/**
 * Places the object at the end of the containing object.
 */
interface LocationOptions_AT_END extends LocationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701733408;
}

/**
 * Places the object at the beginning of the containing object.
 */
interface LocationOptions_AT_BEGINNING extends LocationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1650945639;
}

/**
 * No location specified.
 */
interface LocationOptions_UNKNOWN extends LocationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1433299822;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for specifying location relative to the reference object or within the containing object.
 */
export declare namespace LocationOptions {
/**
 * Places the object before the reference object.
 */
type BEFORE = LocationOptions_BEFORE;

/**
 * Places the object after the reference object.
 */
type AFTER = LocationOptions_AFTER;

/**
 * Places the object at the end of the containing object.
 */
type AT_END = LocationOptions_AT_END;

/**
 * Places the object at the beginning of the containing object.
 */
type AT_BEGINNING = LocationOptions_AT_BEGINNING;

/**
 * No location specified.
 */
type UNKNOWN = LocationOptions_UNKNOWN;

}
/**
 * Options for specifying location relative to the reference object or within the containing object.
 */
export declare const LocationOptions: typeof Enumeration & {

  /**
   * Places the object before the reference object.
   */
  readonly BEFORE: LocationOptions_BEFORE;
  /**
   * Places the object before the reference object.
   */
  readonly before: LocationOptions_BEFORE;

  /**
   * Places the object after the reference object.
   */
  readonly AFTER: LocationOptions_AFTER;
  /**
   * Places the object after the reference object.
   */
  readonly after: LocationOptions_AFTER;

  /**
   * Places the object at the end of the containing object.
   */
  readonly AT_END: LocationOptions_AT_END;
  /**
   * Places the object at the end of the containing object.
   */
  readonly atEnd: LocationOptions_AT_END;
  /**
   * Places the object at the end of the containing object.
   */
  readonly atend: LocationOptions_AT_END;

  /**
   * Places the object at the beginning of the containing object.
   */
  readonly AT_BEGINNING: LocationOptions_AT_BEGINNING;
  /**
   * Places the object at the beginning of the containing object.
   */
  readonly atBeginning: LocationOptions_AT_BEGINNING;
  /**
   * Places the object at the beginning of the containing object.
   */
  readonly atbeginning: LocationOptions_AT_BEGINNING;

  /**
   * No location specified.
   */
  readonly UNKNOWN: LocationOptions_UNKNOWN;
  /**
   * No location specified.
   */
  readonly unknown: LocationOptions_UNKNOWN;

}
