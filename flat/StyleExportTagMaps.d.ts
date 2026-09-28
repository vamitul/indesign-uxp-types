/**
 * StyleExportTagMaps.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { BaseCollection } from './_base/Collections';
import type { StyleExportTagMap } from './StyleExportTagMap';
import type { CharacterStyle } from './CharacterStyle';
import type { ParagraphStyle } from './ParagraphStyle';
import type { StyleExportTagMapPlural } from './StyleExportTagMap';
/**
 * A collection of {@link StyleExportTagMap} objects belonging to a {@link ParagraphStyle} or {@link CharacterStyle}.
 * Style export tag maps define how InDesign styles are translated to HTML or EPUB
 * tags and CSS classes during export.
 *
 * @collection StyleExportTagMap
 */
export interface StyleExportTagMaps {
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
  item(index: number | string): StyleExportTagMap;
  /**
   * Returns a vectorized plural proxy containing all objects between two specified bounds (inclusive).
   *
   * * The two bounds are resolved independently, so they can be of different kinds — an index
   * for one end and an object for the other, as in `itemByRange(0, lastRect)`.
   * * **Names are not accepted**, unlike {@link item}. A string bound throws, even though the
   * dictionary lists one.
   * * Like `everyItem()`, this returns a plural proxy. Operations applied to this proxy are broadcast directly within the native C++ engine for maximum performance.
   * * To convert this proxy into a standard JavaScript array of individual objects, call `.getElements()` on the result.
   * @param from The object or index at the beginning of the range.
   * @param to The object or index at the end of the range.
   * @returns A plural proxy representing the items in the resolved range.
   */
  itemByRange(from: number | StyleExportTagMap, to: number | StyleExportTagMap): StyleExportTagMapPlural;
  /**
   * Returns the first object in the collection.
   * * This method tends to be slower than accessing the first item directly via `.item(0)`.
   * * If the collection is empty, it returns an unresolved proxy (check `.isValid`).
   */
  firstItem(): StyleExportTagMap;
  /**
   * Returns the last object in the collection.
   * * This method tends to be slower than accessing the last item directly via `.item(-1)`.
   * * If the collection is empty, it returns an unresolved proxy (check `.isValid`).
   */
  lastItem(): StyleExportTagMap;
  /**
   * Returns the middle object in the collection.
   * * If the collection is empty, it returns an unresolved proxy (check `.isValid`).
   */
  middleItem(): StyleExportTagMap;
  /** * Returns any random object in the collection.
   * * If the collection is empty, it returns an unresolved proxy (check `.isValid`).
   */
  anyItem(): StyleExportTagMap;
  /**
   * Returns the object prior to the specified object.
   *
   * * Using this method tends to incur massive performance penalties within the C++ engine. Consider alternatives, such as retrieving the collection as an array via `.everyItem().getElements()` and determining adjacent items in JavaScript.
   * * If the specified object is the first item, or if the collection is empty, it returns an unresolved proxy (check `.isValid`).
   * @param obj The reference object.
   */
  previousItem(obj: StyleExportTagMap): StyleExportTagMap;
  /**
   * Returns the object following the specified object.
   *
   * * Using this method tends to incur massive performance penalties within the C++ engine. Consider alternatives, such as retrieving the collection as an array via `.everyItem().getElements()` and determining adjacent items in JavaScript.
   * * If the specified object is the last item, or if the collection is empty, it returns an unresolved proxy (check `.isValid`).
   * @param obj The reference object.
   */
  nextItem(obj: StyleExportTagMap): StyleExportTagMap;
  /**
   * Returns a vectorized plural proxy containing every object in the collection.
   *
   * * A plural proxy allows you to read or write properties, or invoke methods, on all items in the collection simultaneously.
   * * Because this broadcasts the operation directly within the native C++ engine, using `everyItem().propertyName = value` is massively faster than iterating through the collection with a standard JavaScript loop.
   * * To convert this proxy into a standard JavaScript array of individual objects, call `.getElements()` on the result.
   * * @returns A plural proxy representing all items in the collection.
   */
  everyItem(): StyleExportTagMapPlural;
  /** Generates a string which, if executed, will return the Collection. */
  toSource(): string;
  /** The collection's specifier string — the same value as `toSpecifier()`, not a human-readable description. */
  toString(): string;
  /** The object's DOM class name. */
  readonly constructorName: 'StyleExportTagMaps';
  /**
   * Creates a new style export tag mapping.
   *
   * @param exportType The type of export, such as "EPUB" or "HTML".
   * @param exportTag The specific HTML/EPUB tag to use for this style (e.g., "h1", "p", "span").
   * @param exportClass The CSS class name to assign to the exported tag.
   * @param exportAttributes Any additional HTML attributes to include in the tag.
   * @param withProperties Initial values for other properties of the new {@link StyleExportTagMap}.
   */
  add(
    exportType: string,
    exportTag: string,
    exportClass: string,
    exportAttributes: string,
    withProperties?: PropertiesSetter<StyleExportTagMap>,
  ): StyleExportTagMap;
}

