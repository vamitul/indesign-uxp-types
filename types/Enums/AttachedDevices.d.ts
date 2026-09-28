/**
 * AttachedDevices.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __AttachedDevices: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface AttachedDevices extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<AttachedDevices>): boolean;

  /**
   * @internal **WARNING:** `__AttachedDevices` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__AttachedDevices]: never;
}


/**
 * All attached devices, Android listed before iOS.
 */
interface AttachedDevices_ALL extends AttachedDevices {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1634495520;
}

/**
 * Android devices.
 */
interface AttachedDevices_ANDROID extends AttachedDevices {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1685086564;
}

/**
 * iOS devices.
 */
interface AttachedDevices_IOS extends AttachedDevices {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684631411;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The device types that are attached.
 */
export declare namespace AttachedDevices {
/**
 * All attached devices, Android listed before iOS.
 */
type ALL = AttachedDevices_ALL;

/**
 * Android devices.
 */
type ANDROID = AttachedDevices_ANDROID;

/**
 * iOS devices.
 */
type IOS = AttachedDevices_IOS;

}
/**
 * The device types that are attached.
 */
export declare const AttachedDevices: typeof Enumeration & {

  /**
   * All attached devices, Android listed before iOS.
   */
  readonly ALL: AttachedDevices_ALL;
  /**
   * All attached devices, Android listed before iOS.
   */
  readonly all: AttachedDevices_ALL;

  /**
   * Android devices.
   */
  readonly ANDROID: AttachedDevices_ANDROID;
  /**
   * Android devices.
   */
  readonly android: AttachedDevices_ANDROID;

  /**
   * iOS devices.
   */
  readonly IOS: AttachedDevices_IOS;
  /**
   * iOS devices.
   */
  readonly ios: AttachedDevices_IOS;

}
