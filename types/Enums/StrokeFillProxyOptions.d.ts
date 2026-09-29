/**
 * StrokeFillProxyOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __StrokeFillProxyOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface StrokeFillProxyOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<StrokeFillProxyOptions>): boolean;

  /**
   * @internal **WARNING:** `__StrokeFillProxyOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__StrokeFillProxyOptions]: never;
}


/**
 * Stroke proxy is active.
 */
interface StrokeFillProxyOptions_STROKE extends StrokeFillProxyOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1400140395;
}

/**
 * Fill proxy is active.
 */
interface StrokeFillProxyOptions_FILL extends StrokeFillProxyOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181314156;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether the stroke or the fill swatch is the active target in the tools panel proxy.
 */
export declare namespace StrokeFillProxyOptions {
/**
 * Stroke proxy is active.
 */
type STROKE = StrokeFillProxyOptions_STROKE;

/**
 * Fill proxy is active.
 */
type FILL = StrokeFillProxyOptions_FILL;

}
/**
 * Whether the stroke or the fill swatch is the active target in the tools panel proxy.
 */
export declare const StrokeFillProxyOptions: typeof Enumeration & {

  /**
   * Stroke proxy is active.
   */
  readonly STROKE: StrokeFillProxyOptions_STROKE;
  /**
   * Stroke proxy is active.
   */
  readonly stroke: StrokeFillProxyOptions_STROKE;

  /**
   * Fill proxy is active.
   */
  readonly FILL: StrokeFillProxyOptions_FILL;
  /**
   * Fill proxy is active.
   */
  readonly fill: StrokeFillProxyOptions_FILL;

}
