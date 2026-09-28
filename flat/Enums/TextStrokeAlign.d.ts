/**
 * TextStrokeAlign.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __TextStrokeAlign: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface TextStrokeAlign extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<TextStrokeAlign>): boolean;

  /**
   * @internal **WARNING:** `__TextStrokeAlign` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__TextStrokeAlign]: never;
}


/**
 * The stroke straddles the path.
 */
interface TextStrokeAlign_CENTER_ALIGNMENT extends TextStrokeAlign {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936998723;
}

/**
 * The stroke is outside the path, like a picture frame.
 */
interface TextStrokeAlign_OUTSIDE_ALIGNMENT extends TextStrokeAlign {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936998735;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether a character's stroke straddles its outline or sits entirely outside it.
 */
export declare namespace TextStrokeAlign {
/**
 * The stroke straddles the path.
 */
type CENTER_ALIGNMENT = TextStrokeAlign_CENTER_ALIGNMENT;

/**
 * The stroke is outside the path, like a picture frame.
 */
type OUTSIDE_ALIGNMENT = TextStrokeAlign_OUTSIDE_ALIGNMENT;

}
/**
 * Whether a character's stroke straddles its outline or sits entirely outside it.
 */
export declare const TextStrokeAlign: typeof Enumeration & {

  /**
   * The stroke straddles the path.
   */
  readonly CENTER_ALIGNMENT: TextStrokeAlign_CENTER_ALIGNMENT;
  /**
   * The stroke straddles the path.
   */
  readonly centerAlignment: TextStrokeAlign_CENTER_ALIGNMENT;
  /**
   * The stroke straddles the path.
   */
  readonly centeralignment: TextStrokeAlign_CENTER_ALIGNMENT;

  /**
   * The stroke is outside the path, like a picture frame.
   */
  readonly OUTSIDE_ALIGNMENT: TextStrokeAlign_OUTSIDE_ALIGNMENT;
  /**
   * The stroke is outside the path, like a picture frame.
   */
  readonly outsideAlignment: TextStrokeAlign_OUTSIDE_ALIGNMENT;
  /**
   * The stroke is outside the path, like a picture frame.
   */
  readonly outsidealignment: TextStrokeAlign_OUTSIDE_ALIGNMENT;

}
