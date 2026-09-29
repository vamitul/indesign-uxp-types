/**
 * MarkLineWeight.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __MarkLineWeight: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface MarkLineWeight extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<MarkLineWeight>): boolean;

  /**
   * @internal **WARNING:** `__MarkLineWeight` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__MarkLineWeight]: never;
}


/**
 * 0.125 pt.
 */
interface MarkLineWeight_P125PT extends MarkLineWeight {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 825374064;
}

/**
 * 0.25 pt.
 */
interface MarkLineWeight_P25PT extends MarkLineWeight {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 842346608;
}

/**
 * 0.50 pt.
 */
interface MarkLineWeight_P50PT extends MarkLineWeight {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 892350576;
}

/**
 * 0.05 mm.
 */
interface MarkLineWeight_P05MM extends MarkLineWeight {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 808807789;
}

/**
 * 0.07 mm.
 */
interface MarkLineWeight_P07MM extends MarkLineWeight {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 808938861;
}

/**
 * 0.10 mm.
 */
interface MarkLineWeight_P10MM extends MarkLineWeight {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 825257325;
}

/**
 * 0.15 mm.
 */
interface MarkLineWeight_P15MM extends MarkLineWeight {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 825585005;
}

/**
 * 0.20 mm.
 */
interface MarkLineWeight_P20MM extends MarkLineWeight {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 842034541;
}

/**
 * 0.30 mm.
 */
interface MarkLineWeight_P30MM extends MarkLineWeight {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 858811757;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Stroke weight options for printer marks.
 *
 * The `P` in each member name is the decimal point, so {@link P05MM} is 0.05 mm and
 * {@link P125PT} is 0.125 pt.
 */
export declare namespace MarkLineWeight {
/**
 * 0.125 pt.
 */
type P125PT = MarkLineWeight_P125PT;

/**
 * 0.25 pt.
 */
type P25PT = MarkLineWeight_P25PT;

/**
 * 0.50 pt.
 */
type P50PT = MarkLineWeight_P50PT;

/**
 * 0.05 mm.
 */
type P05MM = MarkLineWeight_P05MM;

/**
 * 0.07 mm.
 */
type P07MM = MarkLineWeight_P07MM;

/**
 * 0.10 mm.
 */
type P10MM = MarkLineWeight_P10MM;

/**
 * 0.15 mm.
 */
type P15MM = MarkLineWeight_P15MM;

/**
 * 0.20 mm.
 */
type P20MM = MarkLineWeight_P20MM;

/**
 * 0.30 mm.
 */
type P30MM = MarkLineWeight_P30MM;

}
export declare const MarkLineWeight: typeof Enumeration & {

  /**
   * 0.125 pt.
   */
  readonly P125PT: MarkLineWeight_P125PT;
  /**
   * 0.125 pt.
   */
  readonly p125pt: MarkLineWeight_P125PT;

  /**
   * 0.25 pt.
   */
  readonly P25PT: MarkLineWeight_P25PT;
  /**
   * 0.25 pt.
   */
  readonly p25pt: MarkLineWeight_P25PT;

  /**
   * 0.50 pt.
   */
  readonly P50PT: MarkLineWeight_P50PT;
  /**
   * 0.50 pt.
   */
  readonly p50pt: MarkLineWeight_P50PT;

  /**
   * 05 mm.
   */
  readonly P05MM: MarkLineWeight_P05MM;
  /**
   * 05 mm.
   */
  readonly p05mm: MarkLineWeight_P05MM;

  /**
   * 07 mm.
   */
  readonly P07MM: MarkLineWeight_P07MM;
  /**
   * 07 mm.
   */
  readonly p07mm: MarkLineWeight_P07MM;

  /**
   * 10 mm.
   */
  readonly P10MM: MarkLineWeight_P10MM;
  /**
   * 10 mm.
   */
  readonly p10mm: MarkLineWeight_P10MM;

  /**
   * 15 mm.
   */
  readonly P15MM: MarkLineWeight_P15MM;
  /**
   * 15 mm.
   */
  readonly p15mm: MarkLineWeight_P15MM;

  /**
   * 20 mm.
   */
  readonly P20MM: MarkLineWeight_P20MM;
  /**
   * 20 mm.
   */
  readonly p20mm: MarkLineWeight_P20MM;

  /**
   * 30 mm.
   */
  readonly P30MM: MarkLineWeight_P30MM;
  /**
   * 30 mm.
   */
  readonly p30mm: MarkLineWeight_P30MM;

}
