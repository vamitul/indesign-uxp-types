/**
 * PathPoint.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Path } from './Path';
import type { PointType } from './Enums/PointType';
import type { MeasurementValue } from './_base/Types';
import type { JoinOptions } from './Enums/JoinOptions';

/**
 * A single anchor point on a {@link Path}, with its incoming and outgoing
 * Bézier direction handles.
 */
export interface PathPoint<M extends Mode = 'single'> extends EventTargetDOMObject<Path, M>, IndexedDOMObject<Path, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'PathPoint';

  /** Resolves the proxy into the individual {@link PathPoint} objects it stands for. */
  getElements(): PathPoint<'single'>[];

  /** How the path's curvature is constrained at this point (corner, smooth, or symmetrical). */
  get pointType(): Read<M, PointType>;
  set pointType(value: PointType);

  /** The point's location on the page, as `[x, y]`. */
  get anchor(): Read<M, number[]>;
  set anchor(value: MeasurementValue[]);

  /** The incoming direction handle, controlling the curve of the segment preceding this point, as `[x, y]`. */
  get leftDirection(): Read<M, number[]>;
  set leftDirection(value: MeasurementValue[]);

  /** The outgoing direction handle, controlling the curve of the segment following this point, as `[x, y]`. */
  get rightDirection(): Read<M, number[]>;
  set rightDirection(value: MeasurementValue[]);

  /** Deletes the path point. */
  remove(): Read<M, void>;

  /**
   * Joins this path point to another end point, combining their paths into a
   * single path on a single page item.
   * @param reference The path point to join to.
   * @param given How the two segments are joined.
   */
  join(reference: PathPoint, given?: JoinOptions): Read<M, void>;
}
