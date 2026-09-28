/**
 * Characters.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { BaseCollection } from './_base/Collections';
import type { Character } from './Character';
import type { Text } from './Text';
import type { TextParent } from './_base/Parents';
import type { InsertionPoint } from './InsertionPoint';
import type { Paragraph } from './Paragraph';
import type { Word } from './Word';
import type { CharacterPlural } from './Character';
import type { TextPlural } from './Text';
/**
 * A collection of characters. In InDesign, a {@link Character} is a single glyph
 * or atomic text unit within a story or text range.
 *
 * @collection Character
 */
export interface Characters<TParent = TextParent> {
  /** The number of objects in the collection. */
  readonly length: number;
  /** Displays the number of elements in the Collection. */
  count(): number;
  /**
   * Returns the object with the specified index or name.
   *
   * * You can use negative numbers to count backwards from the end of the collection
   * (e.g., `item(-1)` returns the last item, `item(-2)` returns the penultimate item).
   * * If the item does not exist, this method does not throw an error or return `undefined`.
   * It returns an unresolved object proxy. You must check the `.isValid` property to
   * confirm the item exists before interacting with it.
   * @param index The index, negative offset, or exact string name of the item.
   * @returns The requested object (check `.isValid` to ensure it exists).
   */
  item(index: number | string): Character<TParent>;
  /**
   * Returns the first object in the collection.
   * * This method tends to be slower than accessing the first item directly via `.item(0)`.
   * * If the collection is empty, it returns an unresolved proxy (check `.isValid`).
   */
  firstItem(): Character<TParent>;
  /**
   * Returns the last object in the collection.
   * * This method tends to be slower than accessing the last item directly via `.item(-1)`.
   * * If the collection is empty, it returns an unresolved proxy (check `.isValid`).
   */
  lastItem(): Character<TParent>;
  /**
   * Returns the middle object in the collection.
   * * If the collection is empty, it returns an unresolved proxy (check `.isValid`).
   */
  middleItem(): Character<TParent>;
  /** * Returns any random object in the collection.
   * * If the collection is empty, it returns an unresolved proxy (check `.isValid`).
   */
  anyItem(): Character<TParent>;
  /**
   * Returns the object prior to the specified object.
   *
   * * Using this method tends to incur massive performance penalties within the C++ engine. Consider alternatives, such as retrieving the collection as an array via `.everyItem().getElements()` and determining adjacent items in JavaScript.
   * * If the specified object is the first item, or if the collection is empty, it returns an unresolved proxy (check `.isValid`).
   * @param obj The reference object.
   */
  previousItem(obj: Text): Character<TParent>;
  /**
   * Returns the object following the specified object.
   *
   * * Using this method tends to incur massive performance penalties within the C++ engine. Consider alternatives, such as retrieving the collection as an array via `.everyItem().getElements()` and determining adjacent items in JavaScript.
   * * If the specified object is the last item, or if the collection is empty, it returns an unresolved proxy (check `.isValid`).
   * @param obj The reference object.
   */
  nextItem(obj: Text): Character<TParent>;
  /**
   * Returns a vectorized plural proxy containing every object in the collection.
   *
   * * A plural proxy allows you to read or write properties, or invoke methods, on all items in the collection simultaneously.
   * * Because this broadcasts the operation directly within the native C++ engine, using `everyItem().propertyName = value` is massively faster than iterating through the collection with a standard JavaScript loop.
   * * To convert this proxy into a standard JavaScript array of individual objects, call `.getElements()` on the result.
   * * @returns A plural proxy representing all items in the collection.
   */
  everyItem(): CharacterPlural<TParent>;
  /** Generates a string which, if executed, will return the Collection. */
  toSource(): string;
  /** The collection's specifier string — the same value as `toSpecifier()`, not a human-readable description. */
  toString(): string;
  /** The object's DOM class name. */
  readonly constructorName: 'Characters';
  /**
   * Returns the contiguous {@link Text} range between two bounds (inclusive).
   *
   * * Unlike {@link everyItem}, this resolves to a **single** `Text` range covering the
   * span — not one object per item. `getElements()` on the result yields a one-element
   * array, so reach the range itself with `.getElements()[0]`.
   * * Either bound may be any text range object, whatever its class: an {@link InsertionPoint}
   * may bound a range of {@link Paragraph}s, a {@link Character} a range of {@link Word}s.
   * @param from The object or index at the beginning of the range.
   * @param to The object or index at the end of the range.
   */
  itemByRange(from: number | Text, to: number | Text): TextPlural<TParent>;
}

