/**
 * VersionCueSyncStatus.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __VersionCueSyncStatus: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface VersionCueSyncStatus extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<VersionCueSyncStatus>): boolean;

  /**
   * @internal **WARNING:** `__VersionCueSyncStatus` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__VersionCueSyncStatus]: never;
}


/**
 * The project version of the file was downloaded to the local workspace.
 */
interface VersionCueSyncStatus_FILE_DOWNLOADED extends VersionCueSyncStatus {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1986220868;
}

/**
 * The local version of the file was uploaded to the project.
 */
interface VersionCueSyncStatus_FILE_UPLOADED extends VersionCueSyncStatus {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1986220885;
}

/**
 * The file was unlocked locally.
 */
interface VersionCueSyncStatus_FILE_UNLOCKED extends VersionCueSyncStatus {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1986220876;
}

/**
 * The file was not synchronized.
 */
interface VersionCueSyncStatus_FILE_SKIPPED extends VersionCueSyncStatus {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1986220875;
}

/**
 * The synchronization resulted in no change because the local and project versions were identical.
 */
interface VersionCueSyncStatus_FILE_NO_CHANGE extends VersionCueSyncStatus {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1986220878;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The synchronization status of the file in Version Cue.
 */
export declare namespace VersionCueSyncStatus {
/**
 * The project version of the file was downloaded to the local workspace.
 */
type FILE_DOWNLOADED = VersionCueSyncStatus_FILE_DOWNLOADED;

/**
 * The local version of the file was uploaded to the project.
 */
type FILE_UPLOADED = VersionCueSyncStatus_FILE_UPLOADED;

/**
 * The file was unlocked locally.
 */
type FILE_UNLOCKED = VersionCueSyncStatus_FILE_UNLOCKED;

/**
 * The file was not synchronized.
 */
type FILE_SKIPPED = VersionCueSyncStatus_FILE_SKIPPED;

/**
 * The synchronization resulted in no change because the local and project versions were identical.
 */
type FILE_NO_CHANGE = VersionCueSyncStatus_FILE_NO_CHANGE;

}
/**
 * The synchronization status of the file in Version Cue.
 */
export declare const VersionCueSyncStatus: typeof Enumeration & {

  /**
   * The project version of the file was downloaded to the local workspace.
   */
  readonly FILE_DOWNLOADED: VersionCueSyncStatus_FILE_DOWNLOADED;
  /**
   * The project version of the file was downloaded to the local workspace.
   */
  readonly fileDownloaded: VersionCueSyncStatus_FILE_DOWNLOADED;
  /**
   * The project version of the file was downloaded to the local workspace.
   */
  readonly filedownloaded: VersionCueSyncStatus_FILE_DOWNLOADED;

  /**
   * The local version of the file was uploaded to the project.
   */
  readonly FILE_UPLOADED: VersionCueSyncStatus_FILE_UPLOADED;
  /**
   * The local version of the file was uploaded to the project.
   */
  readonly fileUploaded: VersionCueSyncStatus_FILE_UPLOADED;
  /**
   * The local version of the file was uploaded to the project.
   */
  readonly fileuploaded: VersionCueSyncStatus_FILE_UPLOADED;

  /**
   * The file was unlocked locally.
   */
  readonly FILE_UNLOCKED: VersionCueSyncStatus_FILE_UNLOCKED;
  /**
   * The file was unlocked locally.
   */
  readonly fileUnlocked: VersionCueSyncStatus_FILE_UNLOCKED;
  /**
   * The file was unlocked locally.
   */
  readonly fileunlocked: VersionCueSyncStatus_FILE_UNLOCKED;

  /**
   * The file was not synchronized.
   */
  readonly FILE_SKIPPED: VersionCueSyncStatus_FILE_SKIPPED;
  /**
   * The file was not synchronized.
   */
  readonly fileSkipped: VersionCueSyncStatus_FILE_SKIPPED;
  /**
   * The file was not synchronized.
   */
  readonly fileskipped: VersionCueSyncStatus_FILE_SKIPPED;

  /**
   * The synchronization resulted in no change because the local and project versions were identical.
   */
  readonly FILE_NO_CHANGE: VersionCueSyncStatus_FILE_NO_CHANGE;
  /**
   * The synchronization resulted in no change because the local and project versions were identical.
   */
  readonly fileNoChange: VersionCueSyncStatus_FILE_NO_CHANGE;
  /**
   * The synchronization resulted in no change because the local and project versions were identical.
   */
  readonly filenochange: VersionCueSyncStatus_FILE_NO_CHANGE;

}
