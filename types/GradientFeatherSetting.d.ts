/**
 * GradientFeatherSetting.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { MeasurementValue } from './_base/Types';
import type { ContentTransparencySetting } from './ContentTransparencySetting';
import type { FillTransparencySetting } from './FillTransparencySetting';
import type { OpacityGradientStops } from './OpacityGradientStops';
import type { StrokeTransparencySetting } from './StrokeTransparencySetting';
import type { TransparencySetting } from './TransparencySetting';
import type { GradientType } from './Enums/GradientType';

/**
 * A soft fade to transparent along a gradient, defined by
 * {@link opacityGradientStops} and this object's angle, length, and type.
 */
export interface GradientFeatherSetting<M extends Mode = 'single'> extends EventTargetDOMObject<TransparencySetting | StrokeTransparencySetting | FillTransparencySetting | ContentTransparencySetting, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'GradientFeatherSetting';

  /** Resolves the proxy into the individual {@link GradientFeatherSetting} objects it stands for. */
  getElements(): GradientFeatherSetting<'single'>[];

  /** A collection of opacity gradient stops. */
  readonly opacityGradientStops: OpacityGradientStops;

  /** If true, the gradient feather effect is applied. */
  get applied(): Read<M, boolean>;
  set applied(value: boolean);

  /** Whether the fade follows a straight line ({@link GradientType.LINEAR}) or radiates from a point ({@link GradientType.RADIAL}). */
  get type(): Read<M, GradientType>;
  set type(value: GradientType);

  /** The angle of the gradient feather. */
  get angle(): Read<M, number>;
  set angle(value: number);

  /** The length of the axial gradient, or radius of the radial gradient. */
  get length(): Read<M, number>;
  set length(value: MeasurementValue);

  /** The center point (for a radial gradient) or starting point (for a linear gradient) applied to the fill, as page coordinates in the format [x, y]. */
  get gradientStart(): Read<M, number[]>;
  set gradientStart(value: MeasurementValue[]);

  /** The hilite angle of the radial gradient feather. */
  get hiliteAngle(): Read<M, number>;
  set hiliteAngle(value: number);

  /** The hilite length of the radial gradient feather. */
  get hiliteLength(): Read<M, number>;
  set hiliteLength(value: MeasurementValue);
}
