/**
 * MeasurementUnits.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";
import type { AutoEnum } from "./AutoEnum";



declare const __MeasurementUnits: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface MeasurementUnits extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<MeasurementUnits, AutoEnum>): boolean;

  /**
   * @internal **WARNING:** `__MeasurementUnits` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__MeasurementUnits]: never;
}


/**
 * Points.
 */
interface MeasurementUnits_POINTS extends MeasurementUnits {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2054188905;
}

/**
 * Picas.
 */
interface MeasurementUnits_PICAS extends MeasurementUnits {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2054187363;
}

/**
 * Inches.
 */
interface MeasurementUnits_INCHES extends MeasurementUnits {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2053729891;
}

/**
 * Decimal inches.
 */
interface MeasurementUnits_INCHES_DECIMAL extends MeasurementUnits {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2053729892;
}

/**
 * Millimeters.
 */
interface MeasurementUnits_MILLIMETERS extends MeasurementUnits {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2053991795;
}

/**
 * Centimeters.
 */
interface MeasurementUnits_CENTIMETERS extends MeasurementUnits {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2053336435;
}

/**
 * Ciceros.
 */
interface MeasurementUnits_CICEROS extends MeasurementUnits {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2053335395;
}

/**
 * Uses points as the unit of measurement and specifies the number of points between major tick marks on the specified ruler. For information, see horizontal custom points and vertical custom points.
 */
interface MeasurementUnits_CUSTOM extends MeasurementUnits {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1131639917;
}

/**
 * Agates
 */
interface MeasurementUnits_AGATES extends MeasurementUnits {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2051106676;
}

/**
 * U
 */
interface MeasurementUnits_U extends MeasurementUnits {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2051691808;
}

/**
 * Bai
 */
interface MeasurementUnits_BAI extends MeasurementUnits {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2051170665;
}

/**
 * Mils
 */
interface MeasurementUnits_MILS extends MeasurementUnits {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2051893612;
}

/**
 * Pixels.
 */
interface MeasurementUnits_PIXELS extends MeasurementUnits {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2054187384;
}

/**
 * Q.
 */
interface MeasurementUnits_Q extends MeasurementUnits {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2054255973;
}

/**
 * Ha.
 */
interface MeasurementUnits_HA extends MeasurementUnits {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1516790048;
}

/**
 * American points.
 */
interface MeasurementUnits_AMERICAN_POINTS extends MeasurementUnits {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1514238068;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The unit of measurement.
 */
export declare namespace MeasurementUnits {
/**
 * Points.
 */
type POINTS = MeasurementUnits_POINTS;

/**
 * Picas.
 */
type PICAS = MeasurementUnits_PICAS;

/**
 * Inches.
 */
type INCHES = MeasurementUnits_INCHES;

/**
 * Decimal inches.
 */
type INCHES_DECIMAL = MeasurementUnits_INCHES_DECIMAL;

/**
 * Millimeters.
 */
type MILLIMETERS = MeasurementUnits_MILLIMETERS;

/**
 * Centimeters.
 */
type CENTIMETERS = MeasurementUnits_CENTIMETERS;

/**
 * Ciceros.
 */
type CICEROS = MeasurementUnits_CICEROS;

/**
 * Uses points as the unit of measurement and specifies the number of points between major tick marks on the specified ruler. For information, see horizontal custom points and vertical custom points.
 */
type CUSTOM = MeasurementUnits_CUSTOM;

/**
 * Agates
 */
type AGATES = MeasurementUnits_AGATES;

/**
 * U
 */
type U = MeasurementUnits_U;

/**
 * Bai
 */
type BAI = MeasurementUnits_BAI;

/**
 * Mils
 */
type MILS = MeasurementUnits_MILS;

/**
 * Pixels.
 */
type PIXELS = MeasurementUnits_PIXELS;

/**
 * Q.
 */
type Q = MeasurementUnits_Q;

/**
 * Ha.
 */
type HA = MeasurementUnits_HA;

/**
 * American points.
 */
type AMERICAN_POINTS = MeasurementUnits_AMERICAN_POINTS;

}
/**
 * The unit of measurement.
 */
export declare const MeasurementUnits: typeof Enumeration & {

  /**
   * Points.
   */
  readonly POINTS: MeasurementUnits_POINTS;
  /**
   * Points.
   */
  readonly points: MeasurementUnits_POINTS;

  /**
   * Picas.
   */
  readonly PICAS: MeasurementUnits_PICAS;
  /**
   * Picas.
   */
  readonly picas: MeasurementUnits_PICAS;

  /**
   * Inches.
   */
  readonly INCHES: MeasurementUnits_INCHES;
  /**
   * Inches.
   */
  readonly inches: MeasurementUnits_INCHES;

  /**
   * Decimal inches.
   */
  readonly INCHES_DECIMAL: MeasurementUnits_INCHES_DECIMAL;
  /**
   * Decimal inches.
   */
  readonly inchesDecimal: MeasurementUnits_INCHES_DECIMAL;
  /**
   * Decimal inches.
   */
  readonly inchesdecimal: MeasurementUnits_INCHES_DECIMAL;

  /**
   * Millimeters.
   */
  readonly MILLIMETERS: MeasurementUnits_MILLIMETERS;
  /**
   * Millimeters.
   */
  readonly millimeters: MeasurementUnits_MILLIMETERS;

  /**
   * Centimeters.
   */
  readonly CENTIMETERS: MeasurementUnits_CENTIMETERS;
  /**
   * Centimeters.
   */
  readonly centimeters: MeasurementUnits_CENTIMETERS;

  /**
   * Ciceros.
   */
  readonly CICEROS: MeasurementUnits_CICEROS;
  /**
   * Ciceros.
   */
  readonly ciceros: MeasurementUnits_CICEROS;

  /**
   * Uses points as the unit of measurement and specifies the number of points between major tick marks on the specified ruler. For information, see horizontal custom points and vertical custom points.
   */
  readonly CUSTOM: MeasurementUnits_CUSTOM;
  /**
   * Uses points as the unit of measurement and specifies the number of points between major tick marks on the specified ruler. For information, see horizontal custom points and vertical custom points.
   */
  readonly custom: MeasurementUnits_CUSTOM;

  /**
   * Agates
   */
  readonly AGATES: MeasurementUnits_AGATES;
  /**
   * Agates
   */
  readonly agates: MeasurementUnits_AGATES;

  /**
   * U
   */
  readonly U: MeasurementUnits_U;
  /**
   * U
   */
  readonly u: MeasurementUnits_U;

  /**
   * Bai
   */
  readonly BAI: MeasurementUnits_BAI;
  /**
   * Bai
   */
  readonly bai: MeasurementUnits_BAI;

  /**
   * Mils
   */
  readonly MILS: MeasurementUnits_MILS;
  /**
   * Mils
   */
  readonly mils: MeasurementUnits_MILS;

  /**
   * Pixels.
   */
  readonly PIXELS: MeasurementUnits_PIXELS;
  /**
   * Pixels.
   */
  readonly pixels: MeasurementUnits_PIXELS;

  /**
   * Q.
   */
  readonly Q: MeasurementUnits_Q;
  /**
   * Q.
   */
  readonly q: MeasurementUnits_Q;

  /**
   * Ha.
   */
  readonly HA: MeasurementUnits_HA;
  /**
   * Ha.
   */
  readonly ha: MeasurementUnits_HA;

  /**
   * American points.
   */
  readonly AMERICAN_POINTS: MeasurementUnits_AMERICAN_POINTS;
  /**
   * American points.
   */
  readonly americanPoints: MeasurementUnits_AMERICAN_POINTS;
  /**
   * American points.
   */
  readonly americanpoints: MeasurementUnits_AMERICAN_POINTS;

}
