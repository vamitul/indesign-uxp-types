/**
 * TransformationMatrices.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { NamedCollection, BaseCollection } from './_base/Collections';
import type { TransformationMatrix } from './TransformationMatrix';

/**
 * A collection of {@link TransformationMatrix} objects.
 * Transformation matrices define affine transformations—including scaling, shearing,
 * rotation, and translation—that can be applied to page items and other layout objects.
 *
 * @collection TransformationMatrix
 */
export interface TransformationMatrices
  extends
    BaseCollection<TransformationMatrix, TransformationMatrix, TransformationMatrix<'plural'>>,
    NamedCollection<TransformationMatrix> {
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
