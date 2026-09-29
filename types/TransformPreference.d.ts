/**
 * TransformPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { WhenScalingOptions } from './Enums/WhenScalingOptions';

/**
 * Application-wide defaults for how transformations (move, scale, rotate) affect content and strokes.
 */
export interface TransformPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'TransformPreference';

  /** Resolves the proxy into the individual {@link TransformPreference} objects it stands for. */
  getElements(): TransformPreference<'single'>[];

  /** If true, includes the stroke weight when displaying object dimensions. If false, measures objects from the path or frame. */
  get dimensionsIncludeStrokeWeight(): Read<M, boolean>;
  set dimensionsIncludeStrokeWeight(value: boolean);

  /** If true, transformation values are relative to the parent object. If false, the transformation values are absolute values. */
  get transformationsAreTotals(): Read<M, boolean>;
  set transformationsAreTotals(value: boolean);

  /** If true, measures the x and y values of the object relative to the containing frame. If false, measures the x and y values relative to the rulers. */
  get showContentOffset(): Read<M, boolean>;
  set showContentOffset(value: boolean);

  /** If true, transparency effects are scaled when objects are scaled. */
  get adjustEffectsWhenScaling(): Read<M, boolean>;
  set adjustEffectsWhenScaling(value: boolean);

  /** The method used to scale a page item. */
  get whenScaling(): Read<M, WhenScalingOptions>;
  set whenScaling(value: WhenScalingOptions);

  /** If true, strokes are scaled when objects are scaled. */
  get adjustStrokeWeightWhenScaling(): Read<M, boolean>;
  set adjustStrokeWeightWhenScaling(value: boolean);
}
