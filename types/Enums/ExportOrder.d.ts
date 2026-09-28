/**
 * ExportOrder.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ExportOrder: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ExportOrder extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ExportOrder>): boolean;

  /**
   * @internal **WARNING:** `__ExportOrder` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ExportOrder]: never;
}


/**
 * Based on the document layout.
 */
interface ExportOrder_LAYOUT_ORDER extends ExportOrder {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700949113;
}

/**
 * Based on the article order defined in the Articles panel.
 */
interface ExportOrder_ARTICLE_PANEL_ORDER extends ExportOrder {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700946288;
}

/**
 * Based on the XML structure.
 */
interface ExportOrder_XML_STRUCTURE_ORDER extends ExportOrder {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700952179;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Choices for export order of epub and html.
 */
export declare namespace ExportOrder {
/**
 * Based on the document layout.
 */
type LAYOUT_ORDER = ExportOrder_LAYOUT_ORDER;

/**
 * Based on the article order defined in the Articles panel.
 */
type ARTICLE_PANEL_ORDER = ExportOrder_ARTICLE_PANEL_ORDER;

/**
 * Based on the XML structure.
 */
type XML_STRUCTURE_ORDER = ExportOrder_XML_STRUCTURE_ORDER;

}
/**
 * Choices for export order of epub and html.
 */
export declare const ExportOrder: typeof Enumeration & {

  /**
   * Based on the document layout.
   */
  readonly LAYOUT_ORDER: ExportOrder_LAYOUT_ORDER;
  /**
   * Based on the document layout.
   */
  readonly layoutOrder: ExportOrder_LAYOUT_ORDER;
  /**
   * Based on the document layout.
   */
  readonly layoutorder: ExportOrder_LAYOUT_ORDER;

  /**
   * Based on the article order defined in the Articles panel.
   */
  readonly ARTICLE_PANEL_ORDER: ExportOrder_ARTICLE_PANEL_ORDER;
  /**
   * Based on the article order defined in the Articles panel.
   */
  readonly articlePanelOrder: ExportOrder_ARTICLE_PANEL_ORDER;
  /**
   * Based on the article order defined in the Articles panel.
   */
  readonly articlepanelorder: ExportOrder_ARTICLE_PANEL_ORDER;

  /**
   * Based on the XML structure.
   */
  readonly XML_STRUCTURE_ORDER: ExportOrder_XML_STRUCTURE_ORDER;
  /**
   * Based on the XML structure.
   */
  readonly xmlStructureOrder: ExportOrder_XML_STRUCTURE_ORDER;
  /**
   * Based on the XML structure.
   */
  readonly xmlstructureorder: ExportOrder_XML_STRUCTURE_ORDER;

}
