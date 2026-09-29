/**
 * PDFXStandards.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PDFXStandards: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PDFXStandards extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PDFXStandards>): boolean;

  /**
   * @internal **WARNING:** `__PDFXStandards` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PDFXStandards]: never;
}


/**
 * Does not check for compliance with a PDF/X standard.
 */
interface PDFXStandards_NONE extends PDFXStandards {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * Checks for compliance with the PDF/X-1a:2001 standard.
 */
interface PDFXStandards_PDFX1A2001_STANDARD extends PDFXStandards {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1396912481;
}

/**
 * Checks for compliance with the PDF/X-3:2002 standard.
 */
interface PDFXStandards_PDFX32002_STANDARD extends PDFXStandards {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1396922419;
}

/**
 * Checks for compliance with the PDF/X-1a:2003 standard.
 */
interface PDFXStandards_PDFX1A2003_STANDARD extends PDFXStandards {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1395745075;
}

/**
 * Checks for compliance with the PDF/X-3:2003 standard.
 */
interface PDFXStandards_PDFX32003_STANDARD extends PDFXStandards {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1398289203;
}

/**
 * PDFX42010 standard is used.
 */
interface PDFXStandards_PDFX42010_STANDARD extends PDFXStandards {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1398289496;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for specifying the PDF/X compliance standard.
 */
export declare namespace PDFXStandards {
/**
 * Does not check for compliance with a PDF/X standard.
 */
type NONE = PDFXStandards_NONE;

/**
 * Checks for compliance with the PDF/X-1a:2001 standard.
 */
type PDFX1A2001_STANDARD = PDFXStandards_PDFX1A2001_STANDARD;

/**
 * Checks for compliance with the PDF/X-3:2002 standard.
 */
type PDFX32002_STANDARD = PDFXStandards_PDFX32002_STANDARD;

/**
 * Checks for compliance with the PDF/X-1a:2003 standard.
 */
type PDFX1A2003_STANDARD = PDFXStandards_PDFX1A2003_STANDARD;

/**
 * Checks for compliance with the PDF/X-3:2003 standard.
 */
type PDFX32003_STANDARD = PDFXStandards_PDFX32003_STANDARD;

/**
 * PDFX42010 standard is used.
 */
type PDFX42010_STANDARD = PDFXStandards_PDFX42010_STANDARD;

}
/**
 * Options for specifying the PDF/X compliance standard.
 */
export declare const PDFXStandards: typeof Enumeration & {

  /**
   * Does not check for compliance with a PDF/X standard.
   */
  readonly NONE: PDFXStandards_NONE;
  /**
   * Does not check for compliance with a PDF/X standard.
   */
  readonly none: PDFXStandards_NONE;

  /**
   * Checks for compliance with the PDF/X-1a:2001 standard.
   */
  readonly PDFX1A2001_STANDARD: PDFXStandards_PDFX1A2001_STANDARD;
  /**
   * Checks for compliance with the PDF/X-1a:2001 standard.
   */
  readonly pdfx1a2001Standard: PDFXStandards_PDFX1A2001_STANDARD;
  /**
   * Checks for compliance with the PDF/X-1a:2001 standard.
   */
  readonly pdfx1a2001standard: PDFXStandards_PDFX1A2001_STANDARD;

  /**
   * Checks for compliance with the PDF/X-3:2002 standard.
   */
  readonly PDFX32002_STANDARD: PDFXStandards_PDFX32002_STANDARD;
  /**
   * Checks for compliance with the PDF/X-3:2002 standard.
   */
  readonly pdfx32002Standard: PDFXStandards_PDFX32002_STANDARD;
  /**
   * Checks for compliance with the PDF/X-3:2002 standard.
   */
  readonly pdfx32002standard: PDFXStandards_PDFX32002_STANDARD;

  /**
   * Checks for compliance with the PDF/X-1a:2003 standard.
   */
  readonly PDFX1A2003_STANDARD: PDFXStandards_PDFX1A2003_STANDARD;
  /**
   * Checks for compliance with the PDF/X-1a:2003 standard.
   */
  readonly pdfx1a2003Standard: PDFXStandards_PDFX1A2003_STANDARD;
  /**
   * Checks for compliance with the PDF/X-1a:2003 standard.
   */
  readonly pdfx1a2003standard: PDFXStandards_PDFX1A2003_STANDARD;

  /**
   * Checks for compliance with the PDF/X-3:2003 standard.
   */
  readonly PDFX32003_STANDARD: PDFXStandards_PDFX32003_STANDARD;
  /**
   * Checks for compliance with the PDF/X-3:2003 standard.
   */
  readonly pdfx32003Standard: PDFXStandards_PDFX32003_STANDARD;
  /**
   * Checks for compliance with the PDF/X-3:2003 standard.
   */
  readonly pdfx32003standard: PDFXStandards_PDFX32003_STANDARD;

  /**
   * PDFX42010 standard is used.
   */
  readonly PDFX42010_STANDARD: PDFXStandards_PDFX42010_STANDARD;
  /**
   * PDFX42010 standard is used.
   */
  readonly pdfx42010Standard: PDFXStandards_PDFX42010_STANDARD;
  /**
   * PDFX42010 standard is used.
   */
  readonly pdfx42010standard: PDFXStandards_PDFX42010_STANDARD;

}
