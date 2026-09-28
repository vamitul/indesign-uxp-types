/**
 * FindChangeGradientFeatherSetting.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { MeasurementValue } from './_base/Types';
import type { FindChangeContentTransparencySetting } from './FindChangeContentTransparencySetting';
import type { FindChangeFillTransparencySetting } from './FindChangeFillTransparencySetting';
import type { FindChangeStrokeTransparencySetting } from './FindChangeStrokeTransparencySetting';
import type { FindChangeTransparencySetting } from './FindChangeTransparencySetting';
import type { OpacityGradientStops } from './OpacityGradientStops';
import type { GradientType } from './Enums/GradientType';
import type { NothingEnum } from './Enums/NothingEnum';
import type { GradientFeatherSetting } from './GradientFeatherSetting';

/**
 * Gradient feather search/replace criteria — the same soft fade to transparent as
 * {@link GradientFeatherSetting}, matched or applied by find/change.
 */
export interface FindChangeGradientFeatherSetting<M extends Mode = 'single'> extends EventTargetDOMObject<FindChangeTransparencySetting | FindChangeStrokeTransparencySetting | FindChangeFillTransparencySetting | FindChangeContentTransparencySetting, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'FindChangeGradientFeatherSetting';

  /** Resolves the proxy into the individual {@link FindChangeGradientFeatherSetting} objects it stands for. */
  getElements(): FindChangeGradientFeatherSetting<'single'>[];

  /** A collection of opacity gradient stops. */
  readonly opacityGradientStops: OpacityGradientStops;

  /** If true, the gradient feather effect is applied. */
  get applied(): Read<M, boolean | NothingEnum.NOTHING>;
  set applied(value: boolean | NothingEnum.NOTHING);

  /** Whether the fade follows a straight line ({@link GradientType.LINEAR}) or radiates from a point ({@link GradientType.RADIAL}). */
  get type(): Read<M, GradientType | NothingEnum.NOTHING>;
  set type(value: GradientType | NothingEnum.NOTHING);

  /** The angle of the gradient feather. */
  get angle(): Read<M, number | NothingEnum.NOTHING>;
  set angle(value: number | NothingEnum.NOTHING);

  /** The length of the axial gradient, or radius of the radial gradient. */
  get length(): Read<M, number | NothingEnum.NOTHING>;
  set length(value: MeasurementValue | NothingEnum.NOTHING);

  /** The center point (for a radial gradient) or starting point (for a linear gradient) applied to the fill, as page coordinates in the format [x, y]. */
  get gradientStart(): Read<M, number[] | NothingEnum.NOTHING>;
  set gradientStart(value: number[] | NothingEnum.NOTHING);

  /** The hilite angle of the radial gradient feather. */
  get hiliteAngle(): Read<M, number | NothingEnum.NOTHING>;
  set hiliteAngle(value: number | NothingEnum.NOTHING);

  /** The hilite length of the radial gradient feather. */
  get hiliteLength(): Read<M, number | NothingEnum.NOTHING>;
  set hiliteLength(value: MeasurementValue | NothingEnum.NOTHING);
}
