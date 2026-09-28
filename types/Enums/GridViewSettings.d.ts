/**
 * GridViewSettings.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __GridViewSettings: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface GridViewSettings extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<GridViewSettings>): boolean;

  /**
   * @internal **WARNING:** `__GridViewSettings` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__GridViewSettings]: never;
}


/**
 * Grid view.
 */
interface GridViewSettings_GRID_VIEW_ENUM extends GridViewSettings {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1783064438;
}

/**
 * ZN view.
 */
interface GridViewSettings_ZN_VIEW_ENUM extends GridViewSettings {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1783069302;
}

/**
 * Align view.
 */
interface GridViewSettings_ALIGN_VIEW_ENUM extends GridViewSettings {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1783062902;
}

/**
 * Grid and ZN view.
 */
interface GridViewSettings_GRID_AND_ZN_VIEW_ENUM extends GridViewSettings {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1783064442;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Grid view options.
 */
export declare namespace GridViewSettings {
/**
 * Grid view.
 */
type GRID_VIEW_ENUM = GridViewSettings_GRID_VIEW_ENUM;

/**
 * ZN view.
 */
type ZN_VIEW_ENUM = GridViewSettings_ZN_VIEW_ENUM;

/**
 * Align view.
 */
type ALIGN_VIEW_ENUM = GridViewSettings_ALIGN_VIEW_ENUM;

/**
 * Grid and ZN view.
 */
type GRID_AND_ZN_VIEW_ENUM = GridViewSettings_GRID_AND_ZN_VIEW_ENUM;

}
/**
 * Grid view options.
 */
export declare const GridViewSettings: typeof Enumeration & {

  /**
   * Grid view.
   */
  readonly GRID_VIEW_ENUM: GridViewSettings_GRID_VIEW_ENUM;
  /**
   * Grid view.
   */
  readonly gridViewEnum: GridViewSettings_GRID_VIEW_ENUM;
  /**
   * Grid view.
   */
  readonly gridviewenum: GridViewSettings_GRID_VIEW_ENUM;

  /**
   * ZN view.
   */
  readonly ZN_VIEW_ENUM: GridViewSettings_ZN_VIEW_ENUM;
  /**
   * ZN view.
   */
  readonly znViewEnum: GridViewSettings_ZN_VIEW_ENUM;
  /**
   * ZN view.
   */
  readonly znviewenum: GridViewSettings_ZN_VIEW_ENUM;

  /**
   * Align view.
   */
  readonly ALIGN_VIEW_ENUM: GridViewSettings_ALIGN_VIEW_ENUM;
  /**
   * Align view.
   */
  readonly alignViewEnum: GridViewSettings_ALIGN_VIEW_ENUM;
  /**
   * Align view.
   */
  readonly alignviewenum: GridViewSettings_ALIGN_VIEW_ENUM;

  /**
   * Grid and ZN view.
   */
  readonly GRID_AND_ZN_VIEW_ENUM: GridViewSettings_GRID_AND_ZN_VIEW_ENUM;
  /**
   * Grid and ZN view.
   */
  readonly gridAndZnViewEnum: GridViewSettings_GRID_AND_ZN_VIEW_ENUM;
  /**
   * Grid and ZN view.
   */
  readonly gridandznviewenum: GridViewSettings_GRID_AND_ZN_VIEW_ENUM;

}
