/**
 * Columns.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Table } from './Table';
import type { Cell } from './Cell';
import type { Row } from './Row';
import type {
  AddableTableElementCollection,
  NamedCollection,
  BaseCollection,
} from './_base/Collections';
import type { Column } from './Column';
import type { LocationOptions } from './Enums/LocationOptions';
import type { ColumnPlural } from './Column';
import type { PropertiesSetter } from './_base/Properties';
/**
 * A collection of table {@link Column} objects. Columns are managed by the table model
 * and provide structural organization for table cells.
 *
 * @collection Column
 */
export interface Columns {
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
  item(index: number | string): Column;
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
  itemByRange(from: number | Column, to: number | Column): ColumnPlural;
  /**
   * Returns the first object in the collection.
   * * This method tends to be slower than accessing the first item directly via `.item(0)`.
   * * If the collection is empty, it returns an unresolved proxy (check `.isValid`).
   */
  firstItem(): Column;
  /**
   * Returns the last object in the collection.
   * * This method tends to be slower than accessing the last item directly via `.item(-1)`.
   * * If the collection is empty, it returns an unresolved proxy (check `.isValid`).
   */
  lastItem(): Column;
  /**
   * Returns the middle object in the collection.
   * * If the collection is empty, it returns an unresolved proxy (check `.isValid`).
   */
  middleItem(): Column;
  /** * Returns any random object in the collection.
   * * If the collection is empty, it returns an unresolved proxy (check `.isValid`).
   */
  anyItem(): Column;
  /**
   * Returns the object prior to the specified object.
   *
   * * Using this method tends to incur massive performance penalties within the C++ engine. Consider alternatives, such as retrieving the collection as an array via `.everyItem().getElements()` and determining adjacent items in JavaScript.
   * * If the specified object is the first item, or if the collection is empty, it returns an unresolved proxy (check `.isValid`).
   * @param obj The reference object.
   */
  previousItem(obj: Column): Column;
  /**
   * Returns the object following the specified object.
   *
   * * Using this method tends to incur massive performance penalties within the C++ engine. Consider alternatives, such as retrieving the collection as an array via `.everyItem().getElements()` and determining adjacent items in JavaScript.
   * * If the specified object is the last item, or if the collection is empty, it returns an unresolved proxy (check `.isValid`).
   * @param obj The reference object.
   */
  nextItem(obj: Column): Column;
  /**
   * Returns a vectorized plural proxy containing every object in the collection.
   *
   * * A plural proxy allows you to read or write properties, or invoke methods, on all items in the collection simultaneously.
   * * Because this broadcasts the operation directly within the native C++ engine, using `everyItem().propertyName = value` is massively faster than iterating through the collection with a standard JavaScript loop.
   * * To convert this proxy into a standard JavaScript array of individual objects, call `.getElements()` on the result.
   * * @returns A plural proxy representing all items in the collection.
   */
  everyItem(): ColumnPlural;
  /** Generates a string which, if executed, will return the Collection. */
  toSource(): string;
  /** The collection's specifier string — the same value as `toSpecifier()`, not a human-readable description. */
  toString(): string;
  /** * Returns the object with the specified name.
   * * If the item does not exist, it returns an unresolved proxy (check `.isValid`).
   * @param name The name of the item.
   */
  itemByName(name: string): Column;
  /**
   * Creates a new table element at the end of its container.
   * @param withProperties Initial values for properties of the new element.
   */
  add(withProperties: PropertiesSetter<Column>): Column;
  /**
   * Creates a new table element at a location within its container.
   * @param at The location within the container. Defaults to {@link LocationOptions.AT_END}.
   * @param withProperties Initial values for properties of the new element.
   */
  add(
    at: LocationOptions.AT_BEGINNING | LocationOptions.AT_END | LocationOptions.UNKNOWN,
    withProperties?: PropertiesSetter<Column>,
  ): Column;
  /**
   * Creates a new table element relative to a specific reference object.
   *
   * When `at` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}, the
   * `reference` parameter is required and specifies the existing element relative to which
   * the new element is inserted.
   * @param at The location relative to the `reference` object. Required if `at` is `BEFORE` or `AFTER`.
   * @param reference The existing {@link Row | Column | Cell | Table} element to position against.
   * @param withProperties Initial values for properties of the new element.
   */
  add(
    at: LocationOptions.BEFORE | LocationOptions.AFTER,
    reference: Row | Column | Cell | Table,
    withProperties?: PropertiesSetter<Column>,
  ): Column;
  /**
   * Creates a new table element within a container or at a default location.
   *
   * @param at The location to insert the element. Defaults to {@link LocationOptions.AT_END}.
   * @param reference Ignored for these `at` values.
   * @param withProperties Initial values for properties of the new element.
   */
  add(
    at?:
      | LocationOptions.AT_BEGINNING
      | LocationOptions.AT_END
      | LocationOptions.UNKNOWN,
    reference?: Row | Column | Cell | Table,
    withProperties?: PropertiesSetter<Column>,
  ): Column;
  /** The object's DOM class name. */
  readonly constructorName: 'Columns';
}

