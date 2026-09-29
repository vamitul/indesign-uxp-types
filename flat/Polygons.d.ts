/**
 * Polygons.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { LocationOptions } from './Enums/LocationOptions';
import type { Layer } from './Layer';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
  PageItemAddReference,
} from './_base/Collections';
import type { Polygon } from './Polygon';
import type { PageItemParent } from './_base/Parents';
import type { PolygonPlural } from './Polygon';
/**
 * A collection of {@link Polygon} page items.
 *
 * Polygons are regular or star-shaped geometric frames that can be placed on a page, layer,
 * or other container object. The number of sides and optional star-inset percentage are
 * specified at creation time.
 * @collection Polygon
 */
export interface Polygons<TParent = PageItemParent> {
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
  item(index: number | string): Polygon<TParent>;
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
  itemByRange(from: number | Polygon, to: number | Polygon): PolygonPlural<TParent>;
  /**
   * Returns the first object in the collection.
   * * This method tends to be slower than accessing the first item directly via `.item(0)`.
   * * If the collection is empty, it returns an unresolved proxy (check `.isValid`).
   */
  firstItem(): Polygon<TParent>;
  /**
   * Returns the last object in the collection.
   * * This method tends to be slower than accessing the last item directly via `.item(-1)`.
   * * If the collection is empty, it returns an unresolved proxy (check `.isValid`).
   */
  lastItem(): Polygon<TParent>;
  /**
   * Returns the middle object in the collection.
   * * If the collection is empty, it returns an unresolved proxy (check `.isValid`).
   */
  middleItem(): Polygon<TParent>;
  /** * Returns any random object in the collection.
   * * If the collection is empty, it returns an unresolved proxy (check `.isValid`).
   */
  anyItem(): Polygon<TParent>;
  /**
   * Returns the object prior to the specified object.
   *
   * * Using this method tends to incur massive performance penalties within the C++ engine. Consider alternatives, such as retrieving the collection as an array via `.everyItem().getElements()` and determining adjacent items in JavaScript.
   * * If the specified object is the first item, or if the collection is empty, it returns an unresolved proxy (check `.isValid`).
   * @param obj The reference object.
   */
  previousItem(obj: Polygon): Polygon<TParent>;
  /**
   * Returns the object following the specified object.
   *
   * * Using this method tends to incur massive performance penalties within the C++ engine. Consider alternatives, such as retrieving the collection as an array via `.everyItem().getElements()` and determining adjacent items in JavaScript.
   * * If the specified object is the last item, or if the collection is empty, it returns an unresolved proxy (check `.isValid`).
   * @param obj The reference object.
   */
  nextItem(obj: Polygon): Polygon<TParent>;
  /**
   * Returns a vectorized plural proxy containing every object in the collection.
   *
   * * A plural proxy allows you to read or write properties, or invoke methods, on all items in the collection simultaneously.
   * * Because this broadcasts the operation directly within the native C++ engine, using `everyItem().propertyName = value` is massively faster than iterating through the collection with a standard JavaScript loop.
   * * To convert this proxy into a standard JavaScript array of individual objects, call `.getElements()` on the result.
   * * @returns A plural proxy representing all items in the collection.
   */
  everyItem(): PolygonPlural<TParent>;
  /** Generates a string which, if executed, will return the Collection. */
  toSource(): string;
  /** The collection's specifier string — the same value as `toSpecifier()`, not a human-readable description. */
  toString(): string;
  /** * Returns the object with the specified ID.
   * * If the item does not exist, it returns an unresolved proxy (check `.isValid`).
   * @param id The unique ID.
   */
  itemByID(id: number): Polygon<TParent>;
  /** * Returns the object with the specified name.
   * * If the item does not exist, it returns an unresolved proxy (check `.isValid`).
   * @param name The name of the item.
   */
  itemByName(name: string): Polygon<TParent>;
  /** The object's DOM class name. */
  readonly constructorName: 'Polygons';
  /**
   * Creates a new {@link Polygon} relative to a specific reference object.
   *
   * When `at` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}, the
   * `reference` parameter is required and specifies the existing object relative to which the
   * new polygon is inserted.
   * @param layer The {@link Layer} on which to create the polygon. If omitted, defaults to the active layer.
   * @param numberOfSides The number of sides for the polygon. Valid range: `3` to `100`; defaults to `6`.
   * @param insetPercentage The star inset percentage for the polygon. Valid range: `0` to `100`; defaults to `0`.
   * @param at The location relative to the `reference` object. Required if `at` is `BEFORE` or `AFTER`.
   * @param reference The existing {@link PageItemAddReference} to position against.
   * @param withProperties Initial values for properties of the new Polygon.
   */
  add(
    layer: Layer | undefined,
    numberOfSides: number | undefined,
    insetPercentage: number | undefined,
    at: LocationOptions.BEFORE | LocationOptions.AFTER,
    reference: PageItemAddReference,
    withProperties?: PropertiesSetter<Polygon>,
  ): Polygon<TParent>;
  /**
   * Creates a new item from a properties bag alone.
   * @param withProperties Initial values for properties of the new item.
   */
  add(withProperties: PropertiesSetter<Polygon>): Polygon<TParent>;
  add(
    layer?: Layer,
    numberOfSides?: number,
    insetPercentage?: number,
    at?:
      | LocationOptions.AT_BEGINNING
      | LocationOptions.AT_END
      | LocationOptions.UNKNOWN,
    reference?: PageItemAddReference,
    withProperties?: PropertiesSetter<Polygon>,
  ): Polygon<TParent>;
}

