/**
 * DigpubVersion.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __DigpubVersion: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface DigpubVersion extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<DigpubVersion>): boolean;

  /**
   * @internal **WARNING:** `__DigpubVersion` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__DigpubVersion]: never;
}


/**
 * Returns the plugin, folio, and plist versions, in that order.
 */
interface DigpubVersion_ALL extends DigpubVersion {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1634495520;
}

/**
 * Returns the plugin version.
 */
interface DigpubVersion_PLUGIN extends DigpubVersion {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1685090412;
}

/**
 * Returns the folio version.
 */
interface DigpubVersion_FOLIO extends DigpubVersion {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1685087862;
}

/**
 * Returns the plist version.
 */
interface DigpubVersion_PLIST extends DigpubVersion {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1685090422;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which version information to retrieve for a digital publishing plugin, folio,
 * and plist.
 */
export declare namespace DigpubVersion {
/**
 * Returns the plugin, folio, and plist versions, in that order.
 */
type ALL = DigpubVersion_ALL;

/**
 * Returns the plugin version.
 */
type PLUGIN = DigpubVersion_PLUGIN;

/**
 * Returns the folio version.
 */
type FOLIO = DigpubVersion_FOLIO;

/**
 * Returns the plist version.
 */
type PLIST = DigpubVersion_PLIST;

}
/**
 * Which version information to retrieve for a digital publishing plugin, folio,
 * and plist.
 */
export declare const DigpubVersion: typeof Enumeration & {

  /**
   * Returns the plugin, folio, and plist versions, in that order.
   */
  readonly ALL: DigpubVersion_ALL;
  /**
   * Returns the plugin, folio, and plist versions, in that order.
   */
  readonly all: DigpubVersion_ALL;

  /**
   * Returns the plugin version.
   */
  readonly PLUGIN: DigpubVersion_PLUGIN;
  /**
   * Returns the plugin version.
   */
  readonly plugin: DigpubVersion_PLUGIN;

  /**
   * Returns the folio version.
   */
  readonly FOLIO: DigpubVersion_FOLIO;
  /**
   * Returns the folio version.
   */
  readonly folio: DigpubVersion_FOLIO;

  /**
   * Returns the plist version.
   */
  readonly PLIST: DigpubVersion_PLIST;
  /**
   * Returns the plist version.
   */
  readonly plist: DigpubVersion_PLIST;

}
