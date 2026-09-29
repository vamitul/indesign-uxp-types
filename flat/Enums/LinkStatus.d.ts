/**
 * LinkStatus.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __LinkStatus: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface LinkStatus extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<LinkStatus>): boolean;

  /**
   * @internal **WARNING:** `__LinkStatus` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__LinkStatus]: never;
}


/**
 * The link is a normal link.
 */
interface LinkStatus_NORMAL extends LinkStatus {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852797549;
}

/**
 * A more recent version of the file exists on the disk.
 */
interface LinkStatus_LINK_OUT_OF_DATE extends LinkStatus {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1819242340;
}

/**
 * The linked file has been moved, renamed, or deleted.
 */
interface LinkStatus_LINK_MISSING extends LinkStatus {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1819109747;
}

/**
 * The file is embedded in the document.
 */
interface LinkStatus_LINK_EMBEDDED extends LinkStatus {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1282237028;
}

/**
 * The url link is inaccessible.
 */
interface LinkStatus_LINK_INACCESSIBLE extends LinkStatus {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1818848865;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether a placed file is up to date, out of date, missing, embedded, or unreachable.
 */
export declare namespace LinkStatus {
/**
 * The link is a normal link.
 */
type NORMAL = LinkStatus_NORMAL;

/**
 * A more recent version of the file exists on the disk.
 */
type LINK_OUT_OF_DATE = LinkStatus_LINK_OUT_OF_DATE;

/**
 * The linked file has been moved, renamed, or deleted.
 */
type LINK_MISSING = LinkStatus_LINK_MISSING;

/**
 * The file is embedded in the document.
 */
type LINK_EMBEDDED = LinkStatus_LINK_EMBEDDED;

/**
 * The url link is inaccessible.
 */
type LINK_INACCESSIBLE = LinkStatus_LINK_INACCESSIBLE;

}
/**
 * Whether a placed file is up to date, out of date, missing, embedded, or unreachable.
 */
export declare const LinkStatus: typeof Enumeration & {

  /**
   * The link is a normal link.
   */
  readonly NORMAL: LinkStatus_NORMAL;
  /**
   * The link is a normal link.
   */
  readonly normal: LinkStatus_NORMAL;

  /**
   * A more recent version of the file exists on the disk.
   */
  readonly LINK_OUT_OF_DATE: LinkStatus_LINK_OUT_OF_DATE;
  /**
   * A more recent version of the file exists on the disk.
   */
  readonly linkOutOfDate: LinkStatus_LINK_OUT_OF_DATE;
  /**
   * A more recent version of the file exists on the disk.
   */
  readonly linkoutofdate: LinkStatus_LINK_OUT_OF_DATE;

  /**
   * The linked file has been moved, renamed, or deleted.
   */
  readonly LINK_MISSING: LinkStatus_LINK_MISSING;
  /**
   * The linked file has been moved, renamed, or deleted.
   */
  readonly linkMissing: LinkStatus_LINK_MISSING;
  /**
   * The linked file has been moved, renamed, or deleted.
   */
  readonly linkmissing: LinkStatus_LINK_MISSING;

  /**
   * The file is embedded in the document.
   */
  readonly LINK_EMBEDDED: LinkStatus_LINK_EMBEDDED;
  /**
   * The file is embedded in the document.
   */
  readonly linkEmbedded: LinkStatus_LINK_EMBEDDED;
  /**
   * The file is embedded in the document.
   */
  readonly linkembedded: LinkStatus_LINK_EMBEDDED;

  /**
   * The url link is inaccessible.
   */
  readonly LINK_INACCESSIBLE: LinkStatus_LINK_INACCESSIBLE;
  /**
   * The url link is inaccessible.
   */
  readonly linkInaccessible: LinkStatus_LINK_INACCESSIBLE;
  /**
   * The url link is inaccessible.
   */
  readonly linkinaccessible: LinkStatus_LINK_INACCESSIBLE;

}
