/**
 * GlobalClashResolutionStrategyForMasterPage.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __GlobalClashResolutionStrategyForMasterPage: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface GlobalClashResolutionStrategyForMasterPage extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<GlobalClashResolutionStrategyForMasterPage>): boolean;

  /**
   * @internal **WARNING:** `__GlobalClashResolutionStrategyForMasterPage` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__GlobalClashResolutionStrategyForMasterPage]: never;
}


/**
 * Overwrites the existing master page.
 */
interface GlobalClashResolutionStrategyForMasterPage_LOAD_ALL_WITH_OVERWRITE extends GlobalClashResolutionStrategyForMasterPage {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1279350607;
}

/**
 * Renames the new master page.
 */
interface GlobalClashResolutionStrategyForMasterPage_LOAD_ALL_WITH_RENAME extends GlobalClashResolutionStrategyForMasterPage {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1279350610;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Resolution options when loaded master pages have the same name as existing masterpages.
 */
export declare namespace GlobalClashResolutionStrategyForMasterPage {
/**
 * Overwrites the existing master page.
 */
type LOAD_ALL_WITH_OVERWRITE = GlobalClashResolutionStrategyForMasterPage_LOAD_ALL_WITH_OVERWRITE;

/**
 * Renames the new master page.
 */
type LOAD_ALL_WITH_RENAME = GlobalClashResolutionStrategyForMasterPage_LOAD_ALL_WITH_RENAME;

}
/**
 * Resolution options when loaded master pages have the same name as existing masterpages.
 */
export declare const GlobalClashResolutionStrategyForMasterPage: typeof Enumeration & {

  /**
   * Overwrites the existing master page.
   */
  readonly LOAD_ALL_WITH_OVERWRITE: GlobalClashResolutionStrategyForMasterPage_LOAD_ALL_WITH_OVERWRITE;
  /**
   * Overwrites the existing master page.
   */
  readonly loadAllWithOverwrite: GlobalClashResolutionStrategyForMasterPage_LOAD_ALL_WITH_OVERWRITE;
  /**
   * Overwrites the existing master page.
   */
  readonly loadallwithoverwrite: GlobalClashResolutionStrategyForMasterPage_LOAD_ALL_WITH_OVERWRITE;

  /**
   * Renames the new master page.
   */
  readonly LOAD_ALL_WITH_RENAME: GlobalClashResolutionStrategyForMasterPage_LOAD_ALL_WITH_RENAME;
  /**
   * Renames the new master page.
   */
  readonly loadAllWithRename: GlobalClashResolutionStrategyForMasterPage_LOAD_ALL_WITH_RENAME;
  /**
   * Renames the new master page.
   */
  readonly loadallwithrename: GlobalClashResolutionStrategyForMasterPage_LOAD_ALL_WITH_RENAME;

}
