/**
 * VersionState.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __VersionState: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface VersionState extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<VersionState>): boolean;

  /**
   * @internal **WARNING:** `__VersionState` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__VersionState]: never;
}


/**
 * The version is not known.
 */
interface VersionState_VERSION_UNKNOWN extends VersionState {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1986221653;
}

/**
 * The project has a newer file.
 */
interface VersionState_PROJECT_FILE_NEWER extends VersionState {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1986221648;
}

/**
 * The version is identical to the project.
 */
interface VersionState_LOCAL_PROJECT_MATCH extends VersionState {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1986221645;
}

/**
 * The version has modifications that make it newer than the project.
 */
interface VersionState_LOCAL_NEWER extends VersionState {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1986221644;
}

/**
 * The version contains local edits but the project file is newer.
 */
interface VersionState_VERSION_CONFLICT extends VersionState {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1986221635;
}

/**
 * No resource and no local file.
 */
interface VersionState_NO_RESOURCE extends VersionState {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1986221646;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * How a file's local copy compares to the Version Cue project version — newer, matching, in
 * conflict, or missing entirely.
 */
export declare namespace VersionState {
/**
 * The version is not known.
 */
type VERSION_UNKNOWN = VersionState_VERSION_UNKNOWN;

/**
 * The project has a newer file.
 */
type PROJECT_FILE_NEWER = VersionState_PROJECT_FILE_NEWER;

/**
 * The version is identical to the project.
 */
type LOCAL_PROJECT_MATCH = VersionState_LOCAL_PROJECT_MATCH;

/**
 * The version has modifications that make it newer than the project.
 */
type LOCAL_NEWER = VersionState_LOCAL_NEWER;

/**
 * The version contains local edits but the project file is newer.
 */
type VERSION_CONFLICT = VersionState_VERSION_CONFLICT;

/**
 * No resource and no local file.
 */
type NO_RESOURCE = VersionState_NO_RESOURCE;

}
/**
 * How a file's local copy compares to the Version Cue project version — newer, matching, in
 * conflict, or missing entirely.
 */
export declare const VersionState: typeof Enumeration & {

  /**
   * The version is not known.
   */
  readonly VERSION_UNKNOWN: VersionState_VERSION_UNKNOWN;
  /**
   * The version is not known.
   */
  readonly versionUnknown: VersionState_VERSION_UNKNOWN;
  /**
   * The version is not known.
   */
  readonly versionunknown: VersionState_VERSION_UNKNOWN;

  /**
   * The project has a newer file.
   */
  readonly PROJECT_FILE_NEWER: VersionState_PROJECT_FILE_NEWER;
  /**
   * The project has a newer file.
   */
  readonly projectFileNewer: VersionState_PROJECT_FILE_NEWER;
  /**
   * The project has a newer file.
   */
  readonly projectfilenewer: VersionState_PROJECT_FILE_NEWER;

  /**
   * The version is identical to the project.
   */
  readonly LOCAL_PROJECT_MATCH: VersionState_LOCAL_PROJECT_MATCH;
  /**
   * The version is identical to the project.
   */
  readonly localProjectMatch: VersionState_LOCAL_PROJECT_MATCH;
  /**
   * The version is identical to the project.
   */
  readonly localprojectmatch: VersionState_LOCAL_PROJECT_MATCH;

  /**
   * The version has modifications that make it newer than the project.
   */
  readonly LOCAL_NEWER: VersionState_LOCAL_NEWER;
  /**
   * The version has modifications that make it newer than the project.
   */
  readonly localNewer: VersionState_LOCAL_NEWER;
  /**
   * The version has modifications that make it newer than the project.
   */
  readonly localnewer: VersionState_LOCAL_NEWER;

  /**
   * The version contains local edits but the project file is newer.
   */
  readonly VERSION_CONFLICT: VersionState_VERSION_CONFLICT;
  /**
   * The version contains local edits but the project file is newer.
   */
  readonly versionConflict: VersionState_VERSION_CONFLICT;
  /**
   * The version contains local edits but the project file is newer.
   */
  readonly versionconflict: VersionState_VERSION_CONFLICT;

  /**
   * No resource and no local file.
   */
  readonly NO_RESOURCE: VersionState_NO_RESOURCE;
  /**
   * No resource and no local file.
   */
  readonly noResource: VersionState_NO_RESOURCE;
  /**
   * No resource and no local file.
   */
  readonly noresource: VersionState_NO_RESOURCE;

}
