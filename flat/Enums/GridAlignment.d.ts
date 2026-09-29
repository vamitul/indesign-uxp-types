/**
 * GridAlignment.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __GridAlignment: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface GridAlignment extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<GridAlignment>): boolean;

  /**
   * @internal **WARNING:** `__GridAlignment` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__GridAlignment]: never;
}


/**
 * Lines are not aligned to the grid. 
 */
interface GridAlignment_NONE extends GridAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * Aligns the text baseline to the grid.
 */
interface GridAlignment_ALIGN_BASELINE extends GridAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1247896172;
}

/**
 * Aligns the top of the em box to the grid. 
 */
interface GridAlignment_ALIGN_EM_TOP extends GridAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1247900784;
}

/**
 * Aligns the center of the em box to the grid.
 */
interface GridAlignment_ALIGN_EM_CENTER extends GridAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1247896436;
}

/**
 * Aligns the bottom of the em box to the grid.
 */
interface GridAlignment_ALIGN_EM_BOTTOM extends GridAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1247896173;
}

/**
 * Aligns the top of the ICF box to the grid. 
 */
interface GridAlignment_ALIGN_ICF_TOP extends GridAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1248425072;
}

/**
 * Aligns the bottom of the ICF box to the grid.
 */
interface GridAlignment_ALIGN_ICF_BOTTOM extends GridAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1248420461;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Alignment options for frame grids or baseline grids.
 */
export declare namespace GridAlignment {
/**
 * Lines are not aligned to the grid. 
 */
type NONE = GridAlignment_NONE;

/**
 * Aligns the text baseline to the grid.
 */
type ALIGN_BASELINE = GridAlignment_ALIGN_BASELINE;

/**
 * Aligns the top of the em box to the grid. 
 */
type ALIGN_EM_TOP = GridAlignment_ALIGN_EM_TOP;

/**
 * Aligns the center of the em box to the grid.
 */
type ALIGN_EM_CENTER = GridAlignment_ALIGN_EM_CENTER;

/**
 * Aligns the bottom of the em box to the grid.
 */
type ALIGN_EM_BOTTOM = GridAlignment_ALIGN_EM_BOTTOM;

/**
 * Aligns the top of the ICF box to the grid. 
 */
type ALIGN_ICF_TOP = GridAlignment_ALIGN_ICF_TOP;

/**
 * Aligns the bottom of the ICF box to the grid.
 */
type ALIGN_ICF_BOTTOM = GridAlignment_ALIGN_ICF_BOTTOM;

}
/**
 * Alignment options for frame grids or baseline grids.
 */
export declare const GridAlignment: typeof Enumeration & {

  /**
   * Lines are not aligned to the grid. 
   */
  readonly NONE: GridAlignment_NONE;
  /**
   * Lines are not aligned to the grid. 
   */
  readonly none: GridAlignment_NONE;

  /**
   * Aligns the text baseline to the grid.
   */
  readonly ALIGN_BASELINE: GridAlignment_ALIGN_BASELINE;
  /**
   * Aligns the text baseline to the grid.
   */
  readonly alignBaseline: GridAlignment_ALIGN_BASELINE;
  /**
   * Aligns the text baseline to the grid.
   */
  readonly alignbaseline: GridAlignment_ALIGN_BASELINE;

  /**
   * Aligns the top of the em box to the grid. 
   */
  readonly ALIGN_EM_TOP: GridAlignment_ALIGN_EM_TOP;
  /**
   * Aligns the top of the em box to the grid. 
   */
  readonly alignEmTop: GridAlignment_ALIGN_EM_TOP;
  /**
   * Aligns the top of the em box to the grid. 
   */
  readonly alignemtop: GridAlignment_ALIGN_EM_TOP;

  /**
   * Aligns the center of the em box to the grid.
   */
  readonly ALIGN_EM_CENTER: GridAlignment_ALIGN_EM_CENTER;
  /**
   * Aligns the center of the em box to the grid.
   */
  readonly alignEmCenter: GridAlignment_ALIGN_EM_CENTER;
  /**
   * Aligns the center of the em box to the grid.
   */
  readonly alignemcenter: GridAlignment_ALIGN_EM_CENTER;

  /**
   * Aligns the bottom of the em box to the grid.
   */
  readonly ALIGN_EM_BOTTOM: GridAlignment_ALIGN_EM_BOTTOM;
  /**
   * Aligns the bottom of the em box to the grid.
   */
  readonly alignEmBottom: GridAlignment_ALIGN_EM_BOTTOM;
  /**
   * Aligns the bottom of the em box to the grid.
   */
  readonly alignembottom: GridAlignment_ALIGN_EM_BOTTOM;

  /**
   * Aligns the top of the ICF box to the grid. 
   */
  readonly ALIGN_ICF_TOP: GridAlignment_ALIGN_ICF_TOP;
  /**
   * Aligns the top of the ICF box to the grid. 
   */
  readonly alignIcfTop: GridAlignment_ALIGN_ICF_TOP;
  /**
   * Aligns the top of the ICF box to the grid. 
   */
  readonly alignicftop: GridAlignment_ALIGN_ICF_TOP;

  /**
   * Aligns the bottom of the ICF box to the grid.
   */
  readonly ALIGN_ICF_BOTTOM: GridAlignment_ALIGN_ICF_BOTTOM;
  /**
   * Aligns the bottom of the ICF box to the grid.
   */
  readonly alignIcfBottom: GridAlignment_ALIGN_ICF_BOTTOM;
  /**
   * Aligns the bottom of the ICF box to the grid.
   */
  readonly alignicfbottom: GridAlignment_ALIGN_ICF_BOTTOM;

}
