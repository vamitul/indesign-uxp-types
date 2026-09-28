/**
 * FlattenerLevel.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __FlattenerLevel: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface FlattenerLevel extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<FlattenerLevel>): boolean;

  /**
   * @internal **WARNING:** `__FlattenerLevel` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__FlattenerLevel]: never;
}


/**
 * Rasterizes all artwork.
 */
interface FlattenerLevel_LOW extends FlattenerLevel {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701727351;
}

/**
 * Rasterizes almost all artwork.
 */
interface FlattenerLevel_MEDIUM_LOW extends FlattenerLevel {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718373708;
}

/**
 * Rasterizes a medium amount of artwork.
 */
interface FlattenerLevel_MEDIUM extends FlattenerLevel {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701727588;
}

/**
 * Rasterizes more than a medium amount of artwork.
 */
interface FlattenerLevel_MEDIUM_HIGH extends FlattenerLevel {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718373704;
}

/**
 * Keeps as much artwork as possible as vector data.
 */
interface FlattenerLevel_HIGH extends FlattenerLevel {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701726313;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Rasterization options.
 */
export declare namespace FlattenerLevel {
/**
 * Rasterizes all artwork.
 */
type LOW = FlattenerLevel_LOW;

/**
 * Rasterizes almost all artwork.
 */
type MEDIUM_LOW = FlattenerLevel_MEDIUM_LOW;

/**
 * Rasterizes a medium amount of artwork.
 */
type MEDIUM = FlattenerLevel_MEDIUM;

/**
 * Rasterizes more than a medium amount of artwork.
 */
type MEDIUM_HIGH = FlattenerLevel_MEDIUM_HIGH;

/**
 * Keeps as much artwork as possible vector data.
 */
type HIGH = FlattenerLevel_HIGH;

}
/**
 * Rasterization options.
 */
export declare const FlattenerLevel: typeof Enumeration & {

  /**
   * Rasterizes all artwork.
   */
  readonly LOW: FlattenerLevel_LOW;
  /**
   * Rasterizes all artwork.
   */
  readonly low: FlattenerLevel_LOW;

  /**
   * Rasterizes almost all artwork.
   */
  readonly MEDIUM_LOW: FlattenerLevel_MEDIUM_LOW;
  /**
   * Rasterizes almost all artwork.
   */
  readonly mediumLow: FlattenerLevel_MEDIUM_LOW;
  /**
   * Rasterizes almost all artwork.
   */
  readonly mediumlow: FlattenerLevel_MEDIUM_LOW;

  /**
   * Rasterizes a medium amount of artwork.
   */
  readonly MEDIUM: FlattenerLevel_MEDIUM;
  /**
   * Rasterizes a medium amount of artwork.
   */
  readonly medium: FlattenerLevel_MEDIUM;

  /**
   * Rasterizes more than a medium amount of artwork.
   */
  readonly MEDIUM_HIGH: FlattenerLevel_MEDIUM_HIGH;
  /**
   * Rasterizes more than a medium amount of artwork.
   */
  readonly mediumHigh: FlattenerLevel_MEDIUM_HIGH;
  /**
   * Rasterizes more than a medium amount of artwork.
   */
  readonly mediumhigh: FlattenerLevel_MEDIUM_HIGH;

  /**
   * Keeps as much artwork as possible as vector data.
   */
  readonly HIGH: FlattenerLevel_HIGH;
  /**
   * Keeps as much artwork as possible as vector data.
   */
  readonly high: FlattenerLevel_HIGH;

}
