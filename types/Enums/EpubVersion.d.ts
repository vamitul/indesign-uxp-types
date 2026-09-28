/**
 * EpubVersion.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __EpubVersion: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface EpubVersion extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<EpubVersion>): boolean;

  /**
   * @internal **WARNING:** `__EpubVersion` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__EpubVersion]: never;
}


/**
 * EPUB 2.0.1.
 */
interface EpubVersion_EPUB2 extends EpubVersion {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1702257970;
}

/**
 * EPUB 3.0.
 */
interface EpubVersion_EPUB3 extends EpubVersion {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1702257971;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * EPub export option for epub version.
 */
export declare namespace EpubVersion {
/**
 * EPUB 2.0.1.
 */
type EPUB2 = EpubVersion_EPUB2;

/**
 * EPUB 3.0.
 */
type EPUB3 = EpubVersion_EPUB3;

}
/**
 * EPub export option for epub version.
 */
export declare const EpubVersion: typeof Enumeration & {

  /**
   * EPUB 2.0.1.
   */
  readonly EPUB2: EpubVersion_EPUB2;
  /**
   * EPUB 2.0.1.
   */
  readonly epub2: EpubVersion_EPUB2;

  /**
   * EPUB 3.0.
   */
  readonly EPUB3: EpubVersion_EPUB3;
  /**
   * EPUB 3.0.
   */
  readonly epub3: EpubVersion_EPUB3;

}
