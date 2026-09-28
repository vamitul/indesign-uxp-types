/**
 * TransformationMatrix.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Application } from './Application';

/**
 * An immutable 2D affine transformation matrix. Every transform-producing
 * method (`scaleMatrix`, `rotateMatrix`, `catenateMatrix`, ...) returns a new
 * {@link TransformationMatrix} rather than mutating the receiver.
 */
export interface TransformationMatrix<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M>, IndexedDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'TransformationMatrix';

  /** Resolves the proxy into the individual {@link TransformationMatrix} objects it stands for. */
  getElements(): TransformationMatrix<'single'>[];

  /** The matrix's name. */
  readonly name: Read<M, string>;

  /** The raw `[a, b, c, d, tx, ty]` component values of the matrix. */
  readonly matrixValues: Read<M, number[]>;

  /** The matrix's horizontal scale factor. */
  readonly horizontalScaleFactor: Read<M, number>;

  /** The matrix's vertical scale factor. */
  readonly verticalScaleFactor: Read<M, number>;

  /** The matrix's clockwise shear angle. */
  readonly clockwiseShearAngle: Read<M, number>;

  /** The matrix's counterclockwise rotation angle. */
  readonly counterclockwiseRotationAngle: Read<M, number>;

  /** The matrix's horizontal translation. */
  readonly horizontalTranslation: Read<M, number>;

  /** The matrix's vertical translation. */
  readonly verticalTranslation: Read<M, number>;

  /** The mapping the matrix performs on the unit triangle, as three `[x, y]` corner points. */
  readonly matrixMapping: Read<M, number[][]>;

  /**
   * Returns a new matrix scaled by the given factors.
   * @param horizontallyBy The horizontal scale factor.
   * @param verticallyBy The vertical scale factor.
   */
  scaleMatrix(horizontallyBy?: number, verticallyBy?: number): Read<M, TransformationMatrix>;

  /**
   * Returns a new matrix sheared by the given angle or slope.
   * @param byAngle The horizontal shear angle.
   * @param bySlope The horizontal shear slope.
   */
  shearMatrix(byAngle?: number, bySlope?: number): Read<M, TransformationMatrix>;

  /**
   * Returns a new matrix rotated by the given angle, or by an explicit cosine/sine pair.
   * @param byAngle The counterclockwise rotation angle.
   * @param byCosine The cosine of the desired rotation.
   * @param bySine The sine of the desired rotation.
   */
  rotateMatrix(byAngle?: number, byCosine?: number, bySine?: number): Read<M, TransformationMatrix>;

  /**
   * Returns a new matrix translated by the given distances.
   * @param horizontallyBy The horizontal translation distance.
   * @param verticallyBy The vertical translation distance.
   */
  translateMatrix(horizontallyBy?: number, verticallyBy?: number): Read<M, TransformationMatrix>;

  /**
   * Returns a new matrix that is this matrix multiplied by another.
   * @param withMatrix The right-hand matrix factor.
   */
  catenateMatrix(withMatrix: TransformationMatrix): Read<M, TransformationMatrix>;

  /** Returns a new matrix that is the inverse of this one. */
  invertMatrix(): Read<M, TransformationMatrix>;

  /**
   * Multiplies a point by this matrix, returning the transformed point.
   * @param point The point to transform, as `[x, y]`.
   */
  changeCoordinates(point: number[]): Read<M, number[]>;
}
