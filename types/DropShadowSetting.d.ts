/**
 * DropShadowSetting.d.ts — indesign-uxp-types
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
import type { ShadowMode } from './Enums/ShadowMode';
import type { FindChangeDropShadowSetting } from './FindChangeDropShadowSetting';

/**
 * Drop shadow settings.
 */
export interface DropShadowSetting<M extends Mode = 'single'> extends EventTargetDOMObject<TransparencySetting | StrokeTransparencySetting | FillTransparencySetting | ContentTransparencySetting, M> {
  /** The object's DOM class name — reports the specific kind, such as `'FindChangeDropShadowSetting'` when the object is a {@link FindChangeDropShadowSetting}. */
  readonly constructorName: 'DropShadowSetting' | 'FindChangeDropShadowSetting';

  /** Resolves the proxy into the individual {@link DropShadowSetting} objects it stands for. */
  getElements(): DropShadowSetting<'single'>[];

  /** The distance between the item and its shadow. */
  get distance(): Read<M, number>;
  set distance(value: MeasurementValue);

  /** The angle at which the shadow is thrown. */
  get angle(): Read<M, number>;
  set angle(value: number);

  /** The shadow mode. */
  get mode(): Read<M, ShadowMode>;
  set mode(value: ShadowMode);

  /** The blending mode for the drop shadow effect. */
  get blendMode(): Read<M, BlendMode>;
  set blendMode(value: BlendMode);

  /** The opacity of the drop shadow (as a percentage). (Range: 0 to 100). */
  get opacity(): Read<M, number>;
  set opacity(value: number);

  /**
   * The horizontal offset of the drop shadow.
   *
   * Range depends on the unit type. For points: -1000 to 1000; for picas: -83p4 to 83p4; for
   * inches: -13.8889 to 13.8889; for mm: -352.778 to 352.778; for cm: -35.277 to 35.277; for
   * ciceros: -78c2.389 to 78c2.389.
   */
  get xOffset(): Read<M, number>;
  set xOffset(value: MeasurementValue);

  /**
   * The vertical offset of the drop shadow.
   *
   * (Range depends on the unit type. For points: -1000 to 1000; for picas: -83p4 to 83p4; for
   * inches: -13.8889 to 13.8889; for mm: -352.778 to 352.778; for cm: -35.277 to 35.277; for
   * ciceros: -78c2.389 to 78c2.389).
   */
  get yOffset(): Read<M, number>;
  set yOffset(value: MeasurementValue);

  /** The radius (in pixels) of the blur applied to the drop shadow. (Range depends on the unit type. For points: 0 to 144; for picas: 0p0 to 12p0; for inches: 0 to 2; for mm: 0 to 50.08; for cm: 0 to 5.08; for ciceros: 0c0 to 11c3.128.). */
  get size(): Read<M, number>;
  set size(value: MeasurementValue);

  /** The {@link Swatch} applied to the drop shadow. */
  get effectColor(): Read<M, Swatch>;
  set effectColor(value: Swatch);

  /** The amount (as a percentage) of noise applied to the shadow. (Range: 0 to 100). */
  get noise(): Read<M, number>;
  set noise(value: number);

  /** The amount (as a percentage of the blur width) to spread the footprint of the drop shadow and reduce the radius of the blur. (Range: 0 to 100). */
  get spread(): Read<M, number>;
  set spread(value: number);

  /** If true, uses the global light angle. */
  get useGlobalLight(): Read<M, boolean>;
  set useGlobalLight(value: boolean);

  /** If true, the layer will knock out the drop shadow. */
  get knockedOut(): Read<M, boolean>;
  set knockedOut(value: boolean);

  /** If true, the drop shadow will take into account other non-shadow effects. */
  get honorOtherEffects(): Read<M, boolean>;
  set honorOtherEffects(value: boolean);
}
