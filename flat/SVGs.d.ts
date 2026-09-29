/**
 * SVGs.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { SVG } from './SVG';
import type { Layer } from './Layer';
import type { LocationOptions } from './Enums/LocationOptions';
import type { PageItemParent } from './_base/Parents';
import type { SVGPlural } from './SVG';
/**
 * A collection of {@link SVG} page items.
 *
 * SVGs are vector graphic frames that can be placed on a page, spread, or within other
 * containers. Adding to this collection creates an empty SVG container; use `place()` on
 * the resulting object to load an SVG file.
 * @collection SVG
 */
export interface SVGs<TParent = PageItemParent> {
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
  item(index: number | string): SVG<TParent>;
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
  itemByRange(from: number | SVG, to: number | SVG): SVGPlural<TParent>;
  /**
   * Returns the first object in the collection.
   * * This method tends to be slower than accessing the first item directly via `.item(0)`.
   * * If the collection is empty, it returns an unresolved proxy (check `.isValid`).
   */
  firstItem(): SVG<TParent>;
  /**
   * Returns the last object in the collection.
   * * This method tends to be slower than accessing the last item directly via `.item(-1)`.
   * * If the collection is empty, it returns an unresolved proxy (check `.isValid`).
   */
  lastItem(): SVG<TParent>;
  /**
   * Returns the middle object in the collection.
   * * If the collection is empty, it returns an unresolved proxy (check `.isValid`).
   */
  middleItem(): SVG<TParent>;
  /** * Returns any random object in the collection.
   * * If the collection is empty, it returns an unresolved proxy (check `.isValid`).
   */
  anyItem(): SVG<TParent>;
  /**
   * Returns the object prior to the specified object.
   *
   * * Using this method tends to incur massive performance penalties within the C++ engine. Consider alternatives, such as retrieving the collection as an array via `.everyItem().getElements()` and determining adjacent items in JavaScript.
   * * If the specified object is the first item, or if the collection is empty, it returns an unresolved proxy (check `.isValid`).
   * @param obj The reference object.
   */
  previousItem(obj: SVG): SVG<TParent>;
  /**
   * Returns the object following the specified object.
   *
   * * Using this method tends to incur massive performance penalties within the C++ engine. Consider alternatives, such as retrieving the collection as an array via `.everyItem().getElements()` and determining adjacent items in JavaScript.
   * * If the specified object is the last item, or if the collection is empty, it returns an unresolved proxy (check `.isValid`).
   * @param obj The reference object.
   */
  nextItem(obj: SVG): SVG<TParent>;
  /**
   * Returns a vectorized plural proxy containing every object in the collection.
   *
   * * A plural proxy allows you to read or write properties, or invoke methods, on all items in the collection simultaneously.
   * * Because this broadcasts the operation directly within the native C++ engine, using `everyItem().propertyName = value` is massively faster than iterating through the collection with a standard JavaScript loop.
   * * To convert this proxy into a standard JavaScript array of individual objects, call `.getElements()` on the result.
   * * @returns A plural proxy representing all items in the collection.
   */
  everyItem(): SVGPlural<TParent>;
  /** Generates a string which, if executed, will return the Collection. */
  toSource(): string;
  /** The collection's specifier string — the same value as `toSpecifier()`, not a human-readable description. */
  toString(): string;
  /** * Returns the object with the specified ID.
   * * If the item does not exist, it returns an unresolved proxy (check `.isValid`).
   * @param id The unique ID.
   */
  itemByID(id: number): SVG<TParent>;
  /** * Returns the object with the specified name.
   * * If the item does not exist, it returns an unresolved proxy (check `.isValid`).
   * @param name The name of the item.
   */
  itemByName(name: string): SVG<TParent>;
  /** The object's DOM class name. */
  readonly constructorName: 'SVGs';
  /**
   * Creates a new SVG container from a properties bag alone.
   * @param withProperties Initial values for properties of the new {@link SVG}.
   */
  add(withProperties: PropertiesSetter<SVG>): SVG<TParent>;
  /**
   * Creates a new SVG container.
   *
   * When `at` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER},
   * the `reference` parameter is required and specifies the existing SVG
   * relative to which the new container is inserted.
   *
   * @param layer The layer on which the new SVG will be created. If omitted, uses the active layer.
   * @param at The stacking order position relative to the reference object or within the container. Defaults to {@link LocationOptions.UNKNOWN}.
   * @param reference The existing {@link SVG} to place the new container relative to. Required when `at` is `BEFORE` or `AFTER`.
   * @param withProperties Initial values for properties of the new {@link SVG}.
   */
  add(
    layer?: Layer,
    at?: LocationOptions.BEFORE | LocationOptions.AFTER,
    reference?: SVG,
    withProperties?: PropertiesSetter<SVG>,
  ): SVG<TParent>;
  /**
   * Creates a new SVG container.
   * @param layer The layer on which the new SVG will be created. If omitted, uses the active layer.
   * @param at The stacking order position within the container. Defaults to {@link LocationOptions.UNKNOWN}.
   * @param reference Ignored for absolute location options.
   * @param withProperties Initial values for properties of the new {@link SVG}.
   */
  add(
    layer?: Layer,
    at?:
      | LocationOptions.AT_BEGINNING
      | LocationOptions.AT_END
      | LocationOptions.UNKNOWN,
    reference?: SVG,
    withProperties?: PropertiesSetter<SVG>,
  ): SVG<TParent>;
}

