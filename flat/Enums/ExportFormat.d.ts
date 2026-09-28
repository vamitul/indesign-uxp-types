/**
 * ExportFormat.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ExportFormat: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ExportFormat extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ExportFormat>): boolean;

  /**
   * @internal **WARNING:** `__ExportFormat` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ExportFormat]: never;
}


/**
 * Exports to a tagged text file with a TXT extension. 
 */
interface ExportFormat_TAGGED_TEXT extends ExportFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1416066168;
}

/**
 * Exports to PDF format.
 */
interface ExportFormat_PDF_TYPE extends ExportFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952403524;
}

/**
 * Exports to EPS format.
 */
interface ExportFormat_EPS_TYPE extends ExportFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952400720;
}

/**
 * Exports to rich text format (RTF). 
 */
interface ExportFormat_RTF extends ExportFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1381254688;
}

/**
 * Exports to text (TXT) format.
 */
interface ExportFormat_TEXT_TYPE extends ExportFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952412773;
}

/**
 * Exports the document's tagged content to XML.
 */
interface ExportFormat_XML extends ExportFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1481460768;
}

/**
 * Exports to JPEG format.
 */
interface ExportFormat_JPG extends ExportFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1246775072;
}

/**
 * Exports to Interactive PDF format.
 */
interface ExportFormat_INTERACTIVE_PDF extends ExportFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952409936;
}

/**
 * Exports to fixed layout EPub format.
 */
interface ExportFormat_FIXED_LAYOUT_EPUB extends ExportFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701865080;
}

/**
 * Exports to XHTML FXL format.
 */
interface ExportFormat_HTMLFXL extends ExportFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1213490808;
}

/**
 * Exports to HTML5 format.
 */
interface ExportFormat_HTML5 extends ExportFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1752460646;
}

/**
 * Exports to InDesign snippet (IDMS) format.
 */
interface ExportFormat_INDESIGN_SNIPPET extends ExportFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936617588;
}

/**
 * Exports to InDesign markup (IDML) format.
 */
interface ExportFormat_INDESIGN_MARKUP extends ExportFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1768189292;
}

/**
 * Exports to InCopy markup (ICML) format.
 */
interface ExportFormat_INCOPY_MARKUP extends ExportFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1768123756;
}

/**
 * Exports to PNG format.
 */
interface ExportFormat_PNG_FORMAT extends ExportFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1699761735;
}

/**
 * Exports to XHTML format.
 */
interface ExportFormat_HTML extends ExportFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1213484364;
}

/**
 * Exports to EPub format.
 */
interface ExportFormat_EPUB extends ExportFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701868898;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Export format options.
 */
export declare namespace ExportFormat {
/**
 * Exports to a tagged text file with a TXT extension. 
 */
type TAGGED_TEXT = ExportFormat_TAGGED_TEXT;

/**
 * Exports to PDF format.
 */
type PDF_TYPE = ExportFormat_PDF_TYPE;

/**
 * Exports to EPS format.
 */
type EPS_TYPE = ExportFormat_EPS_TYPE;

/**
 * Exports to rich text format (RTF). 
 */
type RTF = ExportFormat_RTF;

/**
 * Exports to text (TXT) format.
 */
type TEXT_TYPE = ExportFormat_TEXT_TYPE;

/**
 * Exports the document's tagged content to XML.
 */
type XML = ExportFormat_XML;

/**
 * Exports to JPEG format.
 */
type JPG = ExportFormat_JPG;

/**
 * Exports to Interactive PDF format.
 */
type INTERACTIVE_PDF = ExportFormat_INTERACTIVE_PDF;

/**
 * Exports to fixed layout EPub format.
 */
type FIXED_LAYOUT_EPUB = ExportFormat_FIXED_LAYOUT_EPUB;

/**
 * Exports to XHTML FXL format.
 */
type HTMLFXL = ExportFormat_HTMLFXL;

/**
 * Exports to HTML5 format.
 */
type HTML5 = ExportFormat_HTML5;

/**
 * Exports to InDesign snippet (IDMS) format.
 */
type INDESIGN_SNIPPET = ExportFormat_INDESIGN_SNIPPET;

/**
 * Exports to InDesign markup (IDML) format.
 */
type INDESIGN_MARKUP = ExportFormat_INDESIGN_MARKUP;

/**
 * Exports to InCopy markup (ICML) format.
 */
type INCOPY_MARKUP = ExportFormat_INCOPY_MARKUP;

/**
 * Exports to PNG format.
 */
type PNG_FORMAT = ExportFormat_PNG_FORMAT;

/**
 * Exports to XHTML format.
 */
type HTML = ExportFormat_HTML;

/**
 * Exports to EPub format.
 */
type EPUB = ExportFormat_EPUB;

}
/**
 * Export format options.
 */
export declare const ExportFormat: typeof Enumeration & {

  /**
   * Exports to a tagged text file with a TXT extension. 
   */
  readonly TAGGED_TEXT: ExportFormat_TAGGED_TEXT;
  /**
   * Exports to a tagged text file with a TXT extension. 
   */
  readonly taggedText: ExportFormat_TAGGED_TEXT;
  /**
   * Exports to a tagged text file with a TXT extension. 
   */
  readonly taggedtext: ExportFormat_TAGGED_TEXT;

  /**
   * Exports to PDF format.
   */
  readonly PDF_TYPE: ExportFormat_PDF_TYPE;
  /**
   * Exports to PDF format.
   */
  readonly pdfType: ExportFormat_PDF_TYPE;
  /**
   * Exports to PDF format.
   */
  readonly pdftype: ExportFormat_PDF_TYPE;

  /**
   * Exports to EPS format.
   */
  readonly EPS_TYPE: ExportFormat_EPS_TYPE;
  /**
   * Exports to EPS format.
   */
  readonly epsType: ExportFormat_EPS_TYPE;
  /**
   * Exports to EPS format.
   */
  readonly epstype: ExportFormat_EPS_TYPE;

  /**
   * Exports to rich text format (RTF). 
   */
  readonly RTF: ExportFormat_RTF;
  /**
   * Exports to rich text format (RTF). 
   */
  readonly rtf: ExportFormat_RTF;

  /**
   * Exports to text (TXT) format.
   */
  readonly TEXT_TYPE: ExportFormat_TEXT_TYPE;
  /**
   * Exports to text (TXT) format.
   */
  readonly textType: ExportFormat_TEXT_TYPE;
  /**
   * Exports to text (TXT) format.
   */
  readonly texttype: ExportFormat_TEXT_TYPE;

  /**
   * Exports the document's tagged content to XML.
   */
  readonly XML: ExportFormat_XML;
  /**
   * Exports the document's tagged content to XML.
   */
  readonly xml: ExportFormat_XML;

  /**
   * Exports to JPEG format.
   */
  readonly JPG: ExportFormat_JPG;
  /**
   * Exports to JPEG format.
   */
  readonly jpg: ExportFormat_JPG;

  /**
   * Exports to Interactive PDF format.
   */
  readonly INTERACTIVE_PDF: ExportFormat_INTERACTIVE_PDF;
  /**
   * Exports to Interactive PDF format.
   */
  readonly interactivePdf: ExportFormat_INTERACTIVE_PDF;
  /**
   * Exports to Interactive PDF format.
   */
  readonly interactivepdf: ExportFormat_INTERACTIVE_PDF;

  /**
   * Exports to fixed layout EPub format.
   */
  readonly FIXED_LAYOUT_EPUB: ExportFormat_FIXED_LAYOUT_EPUB;
  /**
   * Exports to fixed layout EPub format.
   */
  readonly fixedLayoutEpub: ExportFormat_FIXED_LAYOUT_EPUB;
  /**
   * Exports to fixed layout EPub format.
   */
  readonly fixedlayoutepub: ExportFormat_FIXED_LAYOUT_EPUB;

  /**
   * Exports to XHTML FXL format.
   */
  readonly HTMLFXL: ExportFormat_HTMLFXL;
  /**
   * Exports to XHTML FXL format.
   */
  readonly htmlfxl: ExportFormat_HTMLFXL;

  /**
   * Exports to HTML5 format.
   */
  readonly HTML5: ExportFormat_HTML5;
  /**
   * Exports to HTML5 format.
   */
  readonly html5: ExportFormat_HTML5;

  /**
   * Exports to InDesign snippet (IDMS) format.
   */
  readonly INDESIGN_SNIPPET: ExportFormat_INDESIGN_SNIPPET;
  /**
   * Exports to InDesign snippet (IDMS) format.
   */
  readonly indesignSnippet: ExportFormat_INDESIGN_SNIPPET;
  /**
   * Exports to InDesign snippet (IDMS) format.
   */
  readonly indesignsnippet: ExportFormat_INDESIGN_SNIPPET;

  /**
   * Exports to InDesign markup (IDML) format.
   */
  readonly INDESIGN_MARKUP: ExportFormat_INDESIGN_MARKUP;
  /**
   * Exports to InDesign markup (IDML) format.
   */
  readonly indesignMarkup: ExportFormat_INDESIGN_MARKUP;
  /**
   * Exports to InDesign markup (IDML) format.
   */
  readonly indesignmarkup: ExportFormat_INDESIGN_MARKUP;

  /**
   * Exports to InCopy markup (ICML) format.
   */
  readonly INCOPY_MARKUP: ExportFormat_INCOPY_MARKUP;
  /**
   * Exports to InCopy markup (ICML) format.
   */
  readonly incopyMarkup: ExportFormat_INCOPY_MARKUP;
  /**
   * Exports to InCopy markup (ICML) format.
   */
  readonly incopymarkup: ExportFormat_INCOPY_MARKUP;

  /**
   * Exports to PNG format.
   */
  readonly PNG_FORMAT: ExportFormat_PNG_FORMAT;
  /**
   * Exports to PNG format.
   */
  readonly pngFormat: ExportFormat_PNG_FORMAT;
  /**
   * Exports to PNG format.
   */
  readonly pngformat: ExportFormat_PNG_FORMAT;

  /**
   * Exports to XHTML format.
   */
  readonly HTML: ExportFormat_HTML;
  /**
   * Exports to XHTML format.
   */
  readonly html: ExportFormat_HTML;

  /**
   * Exports to EPub format.
   */
  readonly EPUB: ExportFormat_EPUB;
  /**
   * Exports to EPub format.
   */
  readonly epub: ExportFormat_EPUB;

}
