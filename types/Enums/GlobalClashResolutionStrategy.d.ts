/**
 * GlobalClashResolutionStrategy.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __GlobalClashResolutionStrategy: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface GlobalClashResolutionStrategy extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<GlobalClashResolutionStrategy>): boolean;

  /**
   * @internal **WARNING:** `__GlobalClashResolutionStrategy` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__GlobalClashResolutionStrategy]: never;
}


/**
 * Overwrites existing styles whose names clash with imported items.
 */
interface GlobalClashResolutionStrategy_LOAD_ALL_WITH_OVERWRITE extends GlobalClashResolutionStrategy {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1279350607;
}

/**
 * Renames imported styles whose names clash with existing items to preserve existing items.
 */
interface GlobalClashResolutionStrategy_LOAD_ALL_WITH_RENAME extends GlobalClashResolutionStrategy {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1279350610;
}

/**
 * Does not import styles whose names clash with existing items.
 */
interface GlobalClashResolutionStrategy_DO_NOT_LOAD_THE_STYLE extends GlobalClashResolutionStrategy {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1147495276;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The resolution strategy to employ for imported styles that have the same names as existing styles.
 */
export declare namespace GlobalClashResolutionStrategy {
/**
 * Overwrites existing styles whose names clash with imported items.
 */
type LOAD_ALL_WITH_OVERWRITE = GlobalClashResolutionStrategy_LOAD_ALL_WITH_OVERWRITE;

/**
 * Renames imported styles whose names clash with existing items to preserve existing items.
 */
type LOAD_ALL_WITH_RENAME = GlobalClashResolutionStrategy_LOAD_ALL_WITH_RENAME;

/**
 * Does not import styles whose names clash with existing items.
 */
type DO_NOT_LOAD_THE_STYLE = GlobalClashResolutionStrategy_DO_NOT_LOAD_THE_STYLE;

}
/**
 * The resolution strategy to employ for imported styles that have the same names as existing styles.
 */
export declare const GlobalClashResolutionStrategy: typeof Enumeration & {

  /**
   * Overwrites existing styles whose names clash with imported items.
   */
  readonly LOAD_ALL_WITH_OVERWRITE: GlobalClashResolutionStrategy_LOAD_ALL_WITH_OVERWRITE;
  /**
   * Overwrites existing styles whose names clash with imported items.
   */
  readonly loadAllWithOverwrite: GlobalClashResolutionStrategy_LOAD_ALL_WITH_OVERWRITE;
  /**
   * Overwrites existing styles whose names clash with imported items.
   */
  readonly loadallwithoverwrite: GlobalClashResolutionStrategy_LOAD_ALL_WITH_OVERWRITE;

  /**
   * Renames imported styles whose names clash with existing items to preserve existing items.
   */
  readonly LOAD_ALL_WITH_RENAME: GlobalClashResolutionStrategy_LOAD_ALL_WITH_RENAME;
  /**
   * Renames imported styles whose names clash with existing items to preserve existing items.
   */
  readonly loadAllWithRename: GlobalClashResolutionStrategy_LOAD_ALL_WITH_RENAME;
  /**
   * Renames imported styles whose names clash with existing items to preserve existing items.
   */
  readonly loadallwithrename: GlobalClashResolutionStrategy_LOAD_ALL_WITH_RENAME;

  /**
   * Does not import styles whose names clash with existing items.
   */
  readonly DO_NOT_LOAD_THE_STYLE: GlobalClashResolutionStrategy_DO_NOT_LOAD_THE_STYLE;
  /**
   * Does not import styles whose names clash with existing items.
   */
  readonly doNotLoadTheStyle: GlobalClashResolutionStrategy_DO_NOT_LOAD_THE_STYLE;
  /**
   * Does not import styles whose names clash with existing items.
   */
  readonly donotloadthestyle: GlobalClashResolutionStrategy_DO_NOT_LOAD_THE_STYLE;

}
