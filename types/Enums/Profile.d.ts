/**
 * Profile.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __Profile: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface Profile extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<Profile>): boolean;

  /**
   * @internal **WARNING:** `__Profile` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__Profile]: never;
}


/**
 * Uses the PostScript CMS profile. 
 */
interface Profile_POSTSCRIPT_CMS extends Profile {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1970303843;
}

/**
 * Uses the document profile.
 */
interface Profile_USE_DOCUMENT extends Profile {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1967419235;
}

/**
 * Uses the working profile.
 */
interface Profile_WORKING extends Profile {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1466921579;
}

/**
 * No CMS profile is used.
 */
interface Profile_NO_CMS extends Profile {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1970499183;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which colour profile drives conversion — the document's, the working profile, the PostScript
 * CMS, or none.
 */
export declare namespace Profile {
/**
 * Uses the PostScript CMS profile. 
 */
type POSTSCRIPT_CMS = Profile_POSTSCRIPT_CMS;

/**
 * Uses the document profile.
 */
type USE_DOCUMENT = Profile_USE_DOCUMENT;

/**
 * Uses the working profile.
 */
type WORKING = Profile_WORKING;

/**
 * No CMS profile is used.
 */
type NO_CMS = Profile_NO_CMS;

}
/**
 * Which colour profile drives conversion — the document's, the working profile, the PostScript
 * CMS, or none.
 */
export declare const Profile: typeof Enumeration & {

  /**
   * Uses the PostScript CMS profile. 
   */
  readonly POSTSCRIPT_CMS: Profile_POSTSCRIPT_CMS;
  /**
   * Uses the PostScript CMS profile. 
   */
  readonly postscriptCms: Profile_POSTSCRIPT_CMS;
  /**
   * Uses the PostScript CMS profile. 
   */
  readonly postscriptcms: Profile_POSTSCRIPT_CMS;

  /**
   * Uses the document profile.
   */
  readonly USE_DOCUMENT: Profile_USE_DOCUMENT;
  /**
   * Uses the document profile.
   */
  readonly useDocument: Profile_USE_DOCUMENT;
  /**
   * Uses the document profile.
   */
  readonly usedocument: Profile_USE_DOCUMENT;

  /**
   * Uses the working profile.
   */
  readonly WORKING: Profile_WORKING;
  /**
   * Uses the working profile.
   */
  readonly working: Profile_WORKING;

  /**
   * No CMS profile is used.
   */
  readonly NO_CMS: Profile_NO_CMS;
  /**
   * No CMS profile is used.
   */
  readonly noCms: Profile_NO_CMS;
  /**
   * No CMS profile is used.
   */
  readonly nocms: Profile_NO_CMS;

}
