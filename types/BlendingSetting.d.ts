/**
 * BlendingSetting.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { ContentTransparencySetting } from './ContentTransparencySetting';
import type { FillTransparencySetting } from './FillTransparencySetting';
import type { StrokeTransparencySetting } from './StrokeTransparencySetting';
import type { TransparencySetting } from './TransparencySetting';
import type { BlendMode } from './Enums/BlendMode';

/**
 * Basic object blending settings.
 */
export interface BlendingSetting<M extends Mode = 'single'> extends EventTargetDOMObject<TransparencySetting | StrokeTransparencySetting | FillTransparencySetting | ContentTransparencySetting, M> {
  /** The object's DOM class name — reports `'FindChangeBlendingSetting'` when this is a find/change preference's blending setting. */
  readonly constructorName: 'BlendingSetting' | 'FindChangeBlendingSetting';

  /** Resolves the proxy into the individual {@link BlendingSetting} objects it stands for. */
  getElements(): BlendingSetting<'single'>[];

  /** The blending mode for controlling how the base color interacts with the color of the BlendingSetting. */
  get blendMode(): Read<M, BlendMode>;
  set blendMode(value: BlendMode);

  /** The fill opacity of the BlendingSetting (as a percentage). (Range: 0 to 100). */
  get opacity(): Read<M, number>;
  set opacity(value: number);

  /** If true, the BlendingSetting is a knockout group. */
  get knockoutGroup(): Read<M, boolean>;
  set knockoutGroup(value: boolean);

  /** If true, blending is applied only to the group. If false, blending includes all objects beneath the group. */
  get isolateBlending(): Read<M, boolean>;
  set isolateBlending(value: boolean);
}
