/**
 * InnerShadowSetting.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { MeasurementValue } from './_base/Types';
import type { ContentTransparencySetting } from './ContentTransparencySetting';
import type { FillTransparencySetting } from './FillTransparencySetting';
import type { StrokeTransparencySetting } from './StrokeTransparencySetting';
import type { Swatch } from './Swatch';
import type { TransparencySetting } from './TransparencySetting';
import type { BlendMode } from './Enums/BlendMode';
import type { FindChangeInnerShadowSetting } from './FindChangeInnerShadowSetting';

/**
 * Inner shadow effect settings.
 */
export interface InnerShadowSetting<M extends Mode = 'single'> extends EventTargetDOMObject<TransparencySetting | StrokeTransparencySetting | FillTransparencySetting | ContentTransparencySetting, M> {
  /** The object's DOM class name — reports the specific kind, such as `'FindChangeInnerShadowSetting'` when the object is a {@link FindChangeInnerShadowSetting}. */
  readonly constructorName: 'InnerShadowSetting' | 'FindChangeInnerShadowSetting';

  /** Resolves the proxy into the individual {@link InnerShadowSetting} objects it stands for. */
  getElements(): InnerShadowSetting<'single'>[];

  /** The horizontal offset of the shadow. */
  get xOffset(): Read<M, number>;
  set xOffset(value: MeasurementValue);

  /** The vertical offset of the shadow. */
  get yOffset(): Read<M, number>;
  set yOffset(value: MeasurementValue);

  /** If true, the inner shadow effect is applied. */
  get applied(): Read<M, boolean>;
  set applied(value: boolean);

  /** The {@link Swatch} applied to the inner shadow. */
  get effectColor(): Read<M, Swatch>;
  set effectColor(value: Swatch);

  /** The blending mode for the inner shadow effect. */
  get blendMode(): Read<M, BlendMode>;
  set blendMode(value: BlendMode);

  /** The opacity (as a percentage) of the inner shadow. (Range: 0 to 100). */
  get opacity(): Read<M, number>;
  set opacity(value: number);

  /** The angle at which the inner shadow is thrown. (Range: -360 to 360). */
  get angle(): Read<M, number>;
  set angle(value: number);

  /** The distance between the InnerShadowSetting and the shadow. */
  get distance(): Read<M, number>;
  set distance(value: MeasurementValue);

  /** If true, the global light angle is used. */
  get useGlobalLight(): Read<M, boolean>;
  set useGlobalLight(value: boolean);

  /** The amount to choke the inner shadow (as a percentage of shadow size). (Range: 0 to 100). */
  get chokeAmount(): Read<M, number>;
  set chokeAmount(value: number);

  /** The size of the inner shadow. */
  get size(): Read<M, number>;
  set size(value: MeasurementValue);

  /** The amount (as a percentage) of noise to add to the shadow. (Range: 0 to 100). */
  get noise(): Read<M, number>;
  set noise(value: number);
}
