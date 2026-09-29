/**
 * TransformationMatrices.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { NamedCollection, BaseCollection } from './_base/Collections';
import type { TransformationMatrix } from './TransformationMatrix';
import type { TransformationMatrixPlural } from './TransformationMatrix';
/**
 * A collection of {@link TransformationMatrix} objects.
 * Transformation matrices define affine transformations—including scaling, shearing,
 * rotation, and translation—that can be applied to page items and other layout objects.
 *
 * @collection TransformationMatrix
 */
export interface TransformationMatrices {
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
  item(index: number | string): TransformationMatrix;
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
  itemByRange(from: number | TransformationMatrix, to: number | TransformationMatrix): TransformationMatrixPlural;
  /**
   * Returns the first object in the collection.
   * * This method tends to be slower than accessing the first item directly via `.item(0)`.
   * * If the collection is empty, it returns an unresolved proxy (check `.isValid`).
   */
  firstItem(): TransformationMatrix;
  /**
   * Returns the last object in the collection.
   * * This method tends to be slower than accessing the last item directly via `.item(-1)`.
   * * If the collection is empty, it returns an unresolved proxy (check `.isValid`).
   */
  lastItem(): TransformationMatrix;
  /**
   * Returns the middle object in the collection.
   * * If the collection is empty, it returns an unresolved proxy (check `.isValid`).
   */
  middleItem(): TransformationMatrix;
  /** * Returns any random object in the collection.
   * * If the collection is empty, it returns an unresolved proxy (check `.isValid`).
   */
  anyItem(): TransformationMatrix;
  /**
   * Returns the object prior to the specified object.
   *
   * * Using this method tends to incur massive performance penalties within the C++ engine. Consider alternatives, such as retrieving the collection as an array via `.everyItem().getElements()` and determining adjacent items in JavaScript.
   * * If the specified object is the first item, or if the collection is empty, it returns an unresolved proxy (check `.isValid`).
   * @param obj The reference object.
   */
  previousItem(obj: TransformationMatrix): TransformationMatrix;
  /**
   * Returns the object following the specified object.
   *
   * * Using this method tends to incur massive performance penalties within the C++ engine. Consider alternatives, such as retrieving the collection as an array via `.everyItem().getElements()` and determining adjacent items in JavaScript.
   * * If the specified object is the last item, or if the collection is empty, it returns an unresolved proxy (check `.isValid`).
   * @param obj The reference object.
   */
  nextItem(obj: TransformationMatrix): TransformationMatrix;
  /**
   * Returns a vectorized plural proxy containing every object in the collection.
   *
   * * A plural proxy allows you to read or write properties, or invoke methods, on all items in the collection simultaneously.
   * * Because this broadcasts the operation directly within the native C++ engine, using `everyItem().propertyName = value` is massively faster than iterating through the collection with a standard JavaScript loop.
   * * To convert this proxy into a standard JavaScript array of individual objects, call `.getElements()` on the result.
   * * @returns A plural proxy representing all items in the collection.
   */
  everyItem(): TransformationMatrixPlural;
  /** Generates a string which, if executed, will return the Collection. */
  toSource(): string;
  /** The collection's specifier string — the same value as `toSpecifier()`, not a human-readable description. */
  toString(): string;
  /** * Returns the object with the specified name.
   * * If the item does not exist, it returns an unresolved proxy (check `.isValid`).
   * @param name The name of the item.
   */
  itemByName(name: string): TransformationMatrix;
  /** The object's DOM class name. */
  readonly constructorName: 'TransformationMatrices';
  /**
   * Creates a new {@link TransformationMatrix} from a properties bag alone.
   * @param withProperties Initial values for properties of the new {@link TransformationMatrix}.
   */
  add(withProperties: PropertiesSetter<TransformationMatrix>): TransformationMatrix;
  /**
   * Creates a new {@link TransformationMatrix}.
   *
   * * **Mathematical Note:** InDesign uses affine transformations. You can define the matrix using
   * geometric helpers (scale, shear, rotation, translation) OR by providing the raw matrix values.
   * * **Order of Operations:** When providing multiple geometric factors, InDesign calculates
   * the matrix by applying transformations in this order: Scale, then Shear, then Rotate, then Translate.
   *
   * @param horizontalScaleFactor The horizontal scale factor (1.0 = 100%). Defaults to `1.0`.
   * @param verticalScaleFactor The vertical scale factor (1.0 = 100%). Defaults to `1.0`.
   * @param clockwiseShearAngle The clockwise shear angle in degrees. Defaults to `0`.
   * @param counterclockwiseRotationAngle The counterclockwise rotation angle in degrees. Defaults to `0`.
   * @param horizontalTranslation The horizontal translation (move) amount in points. Defaults to `0`.
   * @param verticalTranslation The vertical translation (move) amount in points. Defaults to `0`.
   * @param matrixValues An array of 6 numbers representing the raw matrix: [a, b, c, d, tx, ty].
   * Corresponds to:
   * | a  b  0 |
   * | c  d  0 |
   * | tx ty 1 |
   * @param matrixMapping The mapping the transformation matrix performs on the unit triangle.
   * Represented as a nested array mapping three points: [[x1, y1], [x2, y2], [x3, y3]].
   * @param withProperties Initial values for properties of the new TransformationMatrix.
   */
  add(
    horizontalScaleFactor?: number,
    verticalScaleFactor?: number,
    clockwiseShearAngle?: number,
    counterclockwiseRotationAngle?: number,
    horizontalTranslation?: number,
    verticalTranslation?: number,
    matrixValues?: [
      a: number,
      b: number,
      c: number,
      d: number,
      tx: number,
      ty: number,
    ],
    matrixMapping?: [
      point1: [x: number, y: number],
      point2: [x: number, y: number],
      point3: [x: number, y: number],
    ],
    withProperties?: PropertiesSetter<TransformationMatrix>,
  ): TransformationMatrix;
}

