/**
 * TransformationMatrix.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { Event } from './Event';
import type { EventHandler } from './_base/Events';
import type { EventListener } from './EventListener';
import type { EventListeners } from './EventListeners';
import type { EventString } from './_base/Events';
import type { Events } from './Events';
import type { FilePath } from './_base/Types';
import type { InDesignEventMap } from './_base/Events';
import type { PropertiesGetter } from './_base/Properties';
import type { PropertiesSetter } from './_base/Properties';
/**
 * An immutable 2D affine transformation matrix. Every transform-producing
 * method (`scaleMatrix`, `rotateMatrix`, `catenateMatrix`, ...) returns a new
 * {@link TransformationMatrix} rather than mutating the receiver.
 */
export interface TransformationMatrix {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Application;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<TransformationMatrix, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<TransformationMatrix, 'single'>);
  /**
   * Compares this object with another object to determine if they refer to the
   * exact same underlying InDesign DOM element.
   *
   * Use this instead of `==` or `===`: every property read mints a fresh
   * object, so two references to the same element still compare unequal by
   * reference.
   */
  equals(otherObject: any): boolean;
  /**
   * Generates a string which, if executed, will return the InDesign object referenced.
   */
  toSource(): string;
  /**
   * Generates the specifier string stringently mapping the path
   * to this object within the InDesign DOM hierarchy (e.g., `/document[@id=1]/rectangle[@id=242]`).
   */
  toSpecifier(): string;
  /**
   * The object's specifier string — the same value as {@link toSpecifier}, not a
   * human-readable description.
   */
  toString(): string;
  /**
   * A collection of events
   */
  readonly events: Events;
  /**
   * A collection of event listeners
   */
  readonly eventListeners: EventListeners;
  /**
   * Adds an event listener.
   * @param eventType The event to listen for, such as `beforeSave` or `afterOpen`.
   * @param handler Invoked when the event fires. Either a JavaScript function or a {@link FilePath} referencing an external script.
   * @param captures Obsolete and ignored. Defaults to `false`.
   */
  addEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): EventListener;
  addEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): EventListener;
  /**
   * Removes a previously registered event listener. The `eventType`, `handler`,
   * and `captures` must match those passed to {@link addEventListener}.
   * @param captures Obsolete and ignored. Defaults to `false`.
   * @returns `true` if a matching listener was found and removed.
   */
  removeEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): boolean;
  removeEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): boolean;
  /**
   * The index of the object within its containing parent.
   */
  readonly index: number;
  /** The object's DOM class name. */
  readonly constructorName: 'TransformationMatrix';
  /** Resolves the proxy into the individual {@link TransformationMatrix} objects it stands for. */
  getElements(): TransformationMatrix[];
  /** The matrix's name. */
  readonly name: string;
  /** The raw `[a, b, c, d, tx, ty]` component values of the matrix. */
  readonly matrixValues: number[];
  /** The matrix's horizontal scale factor. */
  readonly horizontalScaleFactor: number;
  /** The matrix's vertical scale factor. */
  readonly verticalScaleFactor: number;
  /** The matrix's clockwise shear angle. */
  readonly clockwiseShearAngle: number;
  /** The matrix's counterclockwise rotation angle. */
  readonly counterclockwiseRotationAngle: number;
  /** The matrix's horizontal translation. */
  readonly horizontalTranslation: number;
  /** The matrix's vertical translation. */
  readonly verticalTranslation: number;
  /** The mapping the matrix performs on the unit triangle, as three `[x, y]` corner points. */
  readonly matrixMapping: number[][];
  /**
   * Returns a new matrix scaled by the given factors.
   * @param horizontallyBy The horizontal scale factor.
   * @param verticallyBy The vertical scale factor.
   */
  scaleMatrix(horizontallyBy?: number, verticallyBy?: number): TransformationMatrix;
  /**
   * Returns a new matrix sheared by the given angle or slope.
   * @param byAngle The horizontal shear angle.
   * @param bySlope The horizontal shear slope.
   */
  shearMatrix(byAngle?: number, bySlope?: number): TransformationMatrix;
  /**
   * Returns a new matrix rotated by the given angle, or by an explicit cosine/sine pair.
   * @param byAngle The counterclockwise rotation angle.
   * @param byCosine The cosine of the desired rotation.
   * @param bySine The sine of the desired rotation.
   */
  rotateMatrix(byAngle?: number, byCosine?: number, bySine?: number): TransformationMatrix;
  /**
   * Returns a new matrix translated by the given distances.
   * @param horizontallyBy The horizontal translation distance.
   * @param verticallyBy The vertical translation distance.
   */
  translateMatrix(horizontallyBy?: number, verticallyBy?: number): TransformationMatrix;
  /**
   * Returns a new matrix that is this matrix multiplied by another.
   * @param withMatrix The right-hand matrix factor.
   */
  catenateMatrix(withMatrix: TransformationMatrix): TransformationMatrix;
  /** Returns a new matrix that is the inverse of this one. */
  invertMatrix(): TransformationMatrix;
  /**
   * Multiplies a point by this matrix, returning the transformed point.
   * @param point The point to transform, as `[x, y]`.
   */
  changeCoordinates(point: number[]): number[];
}


/**
 * The broadcast proxy for {@link TransformationMatrix} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link TransformationMatrix} there.
 */
export interface TransformationMatrixPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Application)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<TransformationMatrixPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<TransformationMatrixPlural, 'plural'>);
  /**
   * Compares this object with another object to determine if they refer to the
   * exact same underlying InDesign DOM element.
   *
   * Use this instead of `==` or `===`: every property read mints a fresh
   * object, so two references to the same element still compare unequal by
   * reference.
   */
  equals(otherObject: any): boolean;
  /**
   * Generates a string which, if executed, will return the InDesign object referenced.
   */
  toSource(): string;
  /**
   * Generates the specifier string stringently mapping the path
   * to this object within the InDesign DOM hierarchy (e.g., `/document[@id=1]/rectangle[@id=242]`).
   */
  toSpecifier(): string;
  /**
   * The object's specifier string — the same value as {@link toSpecifier}, not a
   * human-readable description.
   */
  toString(): string;
  /**
   * A collection of events
   */
  readonly events: Events;
  /**
   * A collection of event listeners
   */
  readonly eventListeners: EventListeners;
  /**
   * Adds an event listener.
   * @param eventType The event to listen for, such as `beforeSave` or `afterOpen`.
   * @param handler Invoked when the event fires. Either a JavaScript function or a {@link FilePath} referencing an external script.
   * @param captures Obsolete and ignored. Defaults to `false`.
   */
  addEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): EventListener;
  addEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): EventListener;
  /**
   * Removes a previously registered event listener. The `eventType`, `handler`,
   * and `captures` must match those passed to {@link addEventListener}.
   * @param captures Obsolete and ignored. Defaults to `false`.
   * @returns `true` if a matching listener was found and removed.
   */
  removeEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): boolean;
  removeEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): boolean;
  /**
   * The index of the object within its containing parent.
   */
  readonly index: (number)[];
  /** The object's DOM class name. */
  readonly constructorName: 'TransformationMatrix';
  /** Resolves the proxy into the individual {@link TransformationMatrix} objects it stands for. */
  getElements(): TransformationMatrix[];
  /** The matrix's name. */
  readonly name: (string)[];
  /** The raw `[a, b, c, d, tx, ty]` component values of the matrix. */
  readonly matrixValues: (number[])[];
  /** The matrix's horizontal scale factor. */
  readonly horizontalScaleFactor: (number)[];
  /** The matrix's vertical scale factor. */
  readonly verticalScaleFactor: (number)[];
  /** The matrix's clockwise shear angle. */
  readonly clockwiseShearAngle: (number)[];
  /** The matrix's counterclockwise rotation angle. */
  readonly counterclockwiseRotationAngle: (number)[];
  /** The matrix's horizontal translation. */
  readonly horizontalTranslation: (number)[];
  /** The matrix's vertical translation. */
  readonly verticalTranslation: (number)[];
  /** The mapping the matrix performs on the unit triangle, as three `[x, y]` corner points. */
  readonly matrixMapping: (number[][])[];
  /**
   * Returns a new matrix scaled by the given factors.
   * @param horizontallyBy The horizontal scale factor.
   * @param verticallyBy The vertical scale factor.
   */
  scaleMatrix(horizontallyBy?: number, verticallyBy?: number): (TransformationMatrix)[];
  /**
   * Returns a new matrix sheared by the given angle or slope.
   * @param byAngle The horizontal shear angle.
   * @param bySlope The horizontal shear slope.
   */
  shearMatrix(byAngle?: number, bySlope?: number): (TransformationMatrix)[];
  /**
   * Returns a new matrix rotated by the given angle, or by an explicit cosine/sine pair.
   * @param byAngle The counterclockwise rotation angle.
   * @param byCosine The cosine of the desired rotation.
   * @param bySine The sine of the desired rotation.
   */
  rotateMatrix(byAngle?: number, byCosine?: number, bySine?: number): (TransformationMatrix)[];
  /**
   * Returns a new matrix translated by the given distances.
   * @param horizontallyBy The horizontal translation distance.
   * @param verticallyBy The vertical translation distance.
   */
  translateMatrix(horizontallyBy?: number, verticallyBy?: number): (TransformationMatrix)[];
  /**
   * Returns a new matrix that is this matrix multiplied by another.
   * @param withMatrix The right-hand matrix factor.
   */
  catenateMatrix(withMatrix: TransformationMatrix): (TransformationMatrix)[];
  /** Returns a new matrix that is the inverse of this one. */
  invertMatrix(): (TransformationMatrix)[];
  /**
   * Multiplies a point by this matrix, returning the transformed point.
   * @param point The point to transform, as `[x, y]`.
   */
  changeCoordinates(point: number[]): (number[])[];
}
