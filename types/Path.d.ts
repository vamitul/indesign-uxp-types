/**
 * Path.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { PathOwner } from './_base/Unions';
import type { PathPoints } from './PathPoints';
import type { PathType } from './Enums/PathType';
import type { MeasurementValue } from './_base/Types';
import type { PathPoint } from './PathPoint';

/**
 * The geometric outline of a spline item, text frame, or other path-bearing
 * object — an ordered sequence of {@link PathPoint}s.
 */
export interface Path<M extends Mode = 'single'> extends EventTargetDOMObject<PathOwner, M>, IndexedDOMObject<PathOwner, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Path';

  /** Resolves the proxy into the individual {@link Path} objects it stands for. */
  getElements(): Path<'single'>[];

  /** A collection of the path's individual anchor points. */
  readonly pathPoints: PathPoints;

  /** Whether the path is open or closed. */
  get pathType(): Read<M, PathType>;
  set pathType(value: PathType);

  /**
   * All point coordinates on the path, as `[x, y]` pairs.
   *
   * Assign a flat list of anchor points (`[[x1,y1], [x2,y2], ...]`) for straight segments, or
   * a list of anchor/left-direction/right-direction triples (`[[[x1,y1],[x2,y2],[x3,y3]],
   * ...]`) to specify curved segments.
   */
  get entirePath(): Read<M, number[][][]>;
  set entirePath(value: (MeasurementValue[] | MeasurementValue[][])[]);

  /** Deletes the path. */
  remove(): Read<M, void>;

  /** Reverses the direction of the path. */
  reverse(): Read<M, void>;
}
