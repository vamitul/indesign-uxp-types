/**
 * PDFMarkWeight.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PDFMarkWeight: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PDFMarkWeight extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PDFMarkWeight>): boolean;

  /**
   * @internal **WARNING:** `__PDFMarkWeight` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PDFMarkWeight]: never;
}


/**
 * Printer mark line weight of 0.125 points.
 */
interface PDFMarkWeight_P125PT extends PDFMarkWeight {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 825374064;
}

/**
 * Printer mark line weight of 0.25 points.
 */
interface PDFMarkWeight_P25PT extends PDFMarkWeight {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 842346608;
}

/**
 * Printer mark line weight of 0.50 points.
 */
interface PDFMarkWeight_P50PT extends PDFMarkWeight {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 892350576;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The stroke weight used to draw printer marks on the exported PDF.
 */
export declare namespace PDFMarkWeight {
/**
 * Printer mark line weight of 0.125 points.
 */
type P125PT = PDFMarkWeight_P125PT;

/**
 * Printer mark line weight of 0.25 points.
 */
type P25PT = PDFMarkWeight_P25PT;

/**
 * Printer mark line weight of 0.50 points.
 */
type P50PT = PDFMarkWeight_P50PT;

}
/**
 * The stroke weight used to draw printer marks on the exported PDF.
 */
export declare const PDFMarkWeight: typeof Enumeration & {

  /**
   * Printer mark line weight of 0.125 points.
   */
  readonly P125PT: PDFMarkWeight_P125PT;
  /**
   * Printer mark line weight of 0.125 points.
   */
  readonly p125pt: PDFMarkWeight_P125PT;

  /**
   * Printer mark line weight of 0.25 points.
   */
  readonly P25PT: PDFMarkWeight_P25PT;
  /**
   * Printer mark line weight of 0.25 points.
   */
  readonly p25pt: PDFMarkWeight_P25PT;

  /**
   * Printer mark line weight of 0.50 points.
   */
  readonly P50PT: PDFMarkWeight_P50PT;
  /**
   * Printer mark line weight of 0.50 points.
   */
  readonly p50pt: PDFMarkWeight_P50PT;

}
