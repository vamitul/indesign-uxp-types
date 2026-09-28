/**
 * VariableScopes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __VariableScopes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface VariableScopes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<VariableScopes>): boolean;

  /**
   * @internal **WARNING:** `__VariableScopes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__VariableScopes]: never;
}


/**
 * The scope is limited to the current document.
 */
interface VariableScopes_DOCUMENT_SCOPE extends VariableScopes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1129538671;
}

/**
 * The scope is limited to the current section.
 */
interface VariableScopes_SECTION_SCOPE extends VariableScopes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1129542501;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether a page number variable's scope is the whole document or just the current section.
 */
export declare namespace VariableScopes {
/**
 * The scope is limited to the current document.
 */
type DOCUMENT_SCOPE = VariableScopes_DOCUMENT_SCOPE;

/**
 * The scope is limited to the current section.
 */
type SECTION_SCOPE = VariableScopes_SECTION_SCOPE;

}
/**
 * Whether a page number variable's scope is the whole document or just the current section.
 */
export declare const VariableScopes: typeof Enumeration & {

  /**
   * The scope is limited to the current document.
   */
  readonly DOCUMENT_SCOPE: VariableScopes_DOCUMENT_SCOPE;
  /**
   * The scope is limited to the current document.
   */
  readonly documentScope: VariableScopes_DOCUMENT_SCOPE;
  /**
   * The scope is limited to the current document.
   */
  readonly documentscope: VariableScopes_DOCUMENT_SCOPE;

  /**
   * The scope is limited to the current section.
   */
  readonly SECTION_SCOPE: VariableScopes_SECTION_SCOPE;
  /**
   * The scope is limited to the current section.
   */
  readonly sectionScope: VariableScopes_SECTION_SCOPE;
  /**
   * The scope is limited to the current section.
   */
  readonly sectionscope: VariableScopes_SECTION_SCOPE;

}
