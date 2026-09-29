/**
 * Enums.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { NothingEnum } from '../Enums/NothingEnum';
/**
 * What an enumerator's `equals()` accepts. Only another enumerator matches, and only the same
 * member — a number never does, so `Leading.AUTO.equals(1635019116)` is `false`.
 *
 * Pass whatever a mixed getter returns: `ParagraphStyle.leading` reads back `number | Leading`,
 * and `Leading.AUTO.equals(style.leading)` is the intended test. Pass
 * {@link NothingEnum.NOTHING} to test whether a sparse style sets the attribute at all. `Also`
 * covers the getters that return two enums.
 */
export type EnumComparand<E, Also = never> =
  | E
  | Also
  | NothingEnum
  | number
  | string
  | boolean
  | null
  | undefined
  | readonly unknown[];

/**
 * The base of every InDesign enumeration value.
 *
 * Enumerators are objects, not numbers or strings, so `===` between two of them is always
 * false. Compare with `.equals()` instead.
 */
export declare class Enumerator {
  equals(otherObject: any): boolean;
  toString(): string;
}

/**
 * The base Enumeration class
 */
export declare class Enumeration {
  static readonly constructorName: 'Enumeration';
  static equals(other:any): boolean;
}

/**
 * Unique value of each enumeration.
 */
export declare const __val: unique symbol;
