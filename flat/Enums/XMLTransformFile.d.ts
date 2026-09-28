/**
 * XMLTransformFile.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __XMLTransformFile: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface XMLTransformFile extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<XMLTransformFile>): boolean;

  /**
   * @internal **WARNING:** `__XMLTransformFile` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__XMLTransformFile]: never;
}


/**
 * Uses the stylesheet specified in the XML.
 */
interface XMLTransformFile_STYLESHEET_IN_XML extends XMLTransformFile {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1483961208;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * A single value meaning the XML transformation uses the stylesheet declared inside the XML
 * itself, rather than an external file.
 */
export declare namespace XMLTransformFile {
/**
 * Uses the stylesheet specified in the XML.
 */
type STYLESHEET_IN_XML = XMLTransformFile_STYLESHEET_IN_XML;

}
/**
 * A single value meaning the XML transformation uses the stylesheet declared inside the XML
 * itself, rather than an external file.
 */
export declare const XMLTransformFile: typeof Enumeration & {

  /**
   * Uses the stylesheet specified in the XML.
   */
  readonly STYLESHEET_IN_XML: XMLTransformFile_STYLESHEET_IN_XML;
  /**
   * Uses the stylesheet specified in the XML.
   */
  readonly stylesheetInXml: XMLTransformFile_STYLESHEET_IN_XML;
  /**
   * Uses the stylesheet specified in the XML.
   */
  readonly stylesheetinxml: XMLTransformFile_STYLESHEET_IN_XML;

}
