/**
 * DirectionalFeatherSetting.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { MeasurementValue } from './_base/Types';
import type { ContentTransparencySetting } from './ContentTransparencySetting';
import type { FillTransparencySetting } from './FillTransparencySetting';
import type { StrokeTransparencySetting } from './StrokeTransparencySetting';
import type { TransparencySetting } from './TransparencySetting';
import type { FollowShapeModeOptions } from './Enums/FollowShapeModeOptions';
import type { FindChangeDirectionalFeatherSetting } from './FindChangeDirectionalFeatherSetting';

/**
 * Settings for the directional feather effect, which fades an object's edges
 * outward by a different width on each of its four sides.
 */
export interface DirectionalFeatherSetting<M extends Mode = 'single'> extends EventTargetDOMObject<TransparencySetting | StrokeTransparencySetting | FillTransparencySetting | ContentTransparencySetting, M> {
  /** The object's DOM class name — reports the specific kind, such as `'FindChangeDirectionalFeatherSetting'` when the object is a {@link FindChangeDirectionalFeatherSetting}. */
  readonly constructorName: 'DirectionalFeatherSetting' | 'FindChangeDirectionalFeatherSetting';

  /** Resolves the proxy into the individual {@link DirectionalFeatherSetting} objects it stands for. */
  getElements(): DirectionalFeatherSetting<'single'>[];

  /** If true, the directional feather effect is applied. */
  get applied(): Read<M, boolean>;
  set applied(value: boolean);

  /** The feather width (in pixels) on the left side of the object. */
  get leftWidth(): Read<M, number>;
  set leftWidth(value: MeasurementValue);

  /** The feather width (in pixels) on the right side of the object. (Range: .2 to 250). */
  get rightWidth(): Read<M, number>;
  set rightWidth(value: MeasurementValue);

  /** The feather width (in pixels) on the top side of the object. (Range: .2 to 250). */
  get topWidth(): Read<M, number>;
  set topWidth(value: MeasurementValue);

  /** The feather width (in pixels) on the bottom side of the object. (Range: .2 to 250). */
  get bottomWidth(): Read<M, number>;
  set bottomWidth(value: MeasurementValue);

  /** The amount to choke the directional feather (as a percentage of the feather width). (Range: 0 to 100). */
  get chokeAmount(): Read<M, number>;
  set chokeAmount(value: number);

  /** The angle of the feather. (Range: 180 to -180). */
  get angle(): Read<M, number>;
  set angle(value: number);

  /** The shape-following algorithm applied to the feather. */
  get followShapeMode(): Read<M, FollowShapeModeOptions>;
  set followShapeMode(value: FollowShapeModeOptions);

  /** The amount of noise (as a percentage) applied to the feather region. (Range: 0 to 100). */
  get noise(): Read<M, number>;
  set noise(value: number);
}
