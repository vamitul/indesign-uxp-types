/**
 * FeatherSetting.d.ts — indesign-uxp-types
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
import type { TransparencySetting } from './TransparencySetting';
import type { FeatherCornerType } from './Enums/FeatherCornerType';
import type { FeatherMode } from './Enums/FeatherMode';
import type { FindChangeFeatherSetting } from './FindChangeFeatherSetting';

/**
 * Feather effect settings.
 */
export interface FeatherSetting<M extends Mode = 'single'> extends EventTargetDOMObject<TransparencySetting | StrokeTransparencySetting | FillTransparencySetting | ContentTransparencySetting, M> {
  /** The object's DOM class name — reports the specific kind, such as `'FindChangeFeatherSetting'` when the object is a {@link FindChangeFeatherSetting}. */
  readonly constructorName: 'FeatherSetting' | 'FindChangeFeatherSetting';

  /** Resolves the proxy into the individual {@link FeatherSetting} objects it stands for. */
  getElements(): FeatherSetting<'single'>[];

  /** Whether feathering is applied to the object's edges. See {@link FeatherMode}. */
  get mode(): Read<M, FeatherMode>;
  set mode(value: FeatherMode);

  /** The feather width. (Range depends on the unit type. For points: 0 to 1000; for picas: 0 to 83p4; for inches: 0 to 13.8889; for mm: 0 to 352.778; for cm: 0 to 35.277; for ciceros: 0 to 78c2.389.). */
  get width(): Read<M, number>;
  set width(value: MeasurementValue);

  /** How the feather's corners render: sharp, rounded, or a soft diffusion. See {@link FeatherCornerType}. */
  get cornerType(): Read<M, FeatherCornerType>;
  set cornerType(value: FeatherCornerType);

  /** The amount (as a percentage) of noise applied to the feather. (Range: 0 to 100). */
  get noise(): Read<M, number>;
  set noise(value: number);

  /** The amount to choke the feather (as a percentage of the feather width). (Range: 0 to 100). */
  get chokeAmount(): Read<M, number>;
  set chokeAmount(value: number);
}
