/**
 * PDFCompressionType.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PDFCompressionType: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PDFCompressionType extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PDFCompressionType>): boolean;

  /**
   * @internal **WARNING:** `__PDFCompressionType` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PDFCompressionType]: never;
}


/**
 * Uses no compression.
 */
interface PDFCompressionType_COMPRESS_NONE extends PDFCompressionType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1131368047;
}

/**
 * Compresses only objects related to PDF structure.
 */
interface PDFCompressionType_COMPRESS_STRUCTURE extends PDFCompressionType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1131369332;
}

/**
 * Compress all objects.
 */
interface PDFCompressionType_COMPRESS_OBJECTS extends PDFCompressionType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1131368290;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The objects to compress in the PDF document.
 */
export declare namespace PDFCompressionType {
/**
 * Uses no compression.
 */
type COMPRESS_NONE = PDFCompressionType_COMPRESS_NONE;

/**
 * Compresses only objects related to PDF structure.
 */
type COMPRESS_STRUCTURE = PDFCompressionType_COMPRESS_STRUCTURE;

/**
 * Compress all objects.
 */
type COMPRESS_OBJECTS = PDFCompressionType_COMPRESS_OBJECTS;

}
/**
 * The objects to compress in the PDF document.
 */
export declare const PDFCompressionType: typeof Enumeration & {

  /**
   * Uses no compression.
   */
  readonly COMPRESS_NONE: PDFCompressionType_COMPRESS_NONE;
  /**
   * Uses no compression.
   */
  readonly compressNone: PDFCompressionType_COMPRESS_NONE;
  /**
   * Uses no compression.
   */
  readonly compressnone: PDFCompressionType_COMPRESS_NONE;

  /**
   * Compresses only objects related to PDF structure.
   */
  readonly COMPRESS_STRUCTURE: PDFCompressionType_COMPRESS_STRUCTURE;
  /**
   * Compresses only objects related to PDF structure.
   */
  readonly compressStructure: PDFCompressionType_COMPRESS_STRUCTURE;
  /**
   * Compresses only objects related to PDF structure.
   */
  readonly compressstructure: PDFCompressionType_COMPRESS_STRUCTURE;

  /**
   * Compress all objects.
   */
  readonly COMPRESS_OBJECTS: PDFCompressionType_COMPRESS_OBJECTS;
  /**
   * Compress all objects.
   */
  readonly compressObjects: PDFCompressionType_COMPRESS_OBJECTS;
  /**
   * Compress all objects.
   */
  readonly compressobjects: PDFCompressionType_COMPRESS_OBJECTS;

}
