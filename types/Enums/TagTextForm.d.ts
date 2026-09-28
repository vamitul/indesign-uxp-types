/**
 * TagTextForm.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __TagTextForm: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface TagTextForm extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<TagTextForm>): boolean;

  /**
   * @internal **WARNING:** `__TagTextForm` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__TagTextForm]: never;
}


/**
 * Displays tags in long form; creates larger text files.
 */
interface TagTextForm_VERBOSE extends TagTextForm {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1414821474;
}

/**
 * Abbreviates tags; creates smaller text files.
 */
interface TagTextForm_ABBREVIATED extends TagTextForm {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1414816098;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether exported tag text uses full tag names or abbreviated ones.
 */
export declare namespace TagTextForm {
/**
 * Displays tags in long form; creates larger text files.
 */
type VERBOSE = TagTextForm_VERBOSE;

/**
 * Abbreviates tags; creates smaller text files.
 */
type ABBREVIATED = TagTextForm_ABBREVIATED;

}
/**
 * Whether exported tag text uses full tag names or abbreviated ones.
 */
export declare const TagTextForm: typeof Enumeration & {

  /**
   * Displays tags in long form; creates larger text files.
   */
  readonly VERBOSE: TagTextForm_VERBOSE;
  /**
   * Displays tags in long form; creates larger text files.
   */
  readonly verbose: TagTextForm_VERBOSE;

  /**
   * Abbreviates tags; creates smaller text files.
   */
  readonly ABBREVIATED: TagTextForm_ABBREVIATED;
  /**
   * Abbreviates tags; creates smaller text files.
   */
  readonly abbreviated: TagTextForm_ABBREVIATED;

}
