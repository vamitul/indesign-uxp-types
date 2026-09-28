/**
 * StrokeTransparencySetting.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { PageItemUnion } from './_base/Unions';
import type { BevelAndEmbossSetting } from './BevelAndEmbossSetting';
import type { BlendingSetting } from './BlendingSetting';
import type { DirectionalFeatherSetting } from './DirectionalFeatherSetting';
import type { DropShadowSetting } from './DropShadowSetting';
import type { FeatherSetting } from './FeatherSetting';
import type { FormField } from './FormField';
import type { GradientFeatherSetting } from './GradientFeatherSetting';
import type { InnerGlowSetting } from './InnerGlowSetting';
import type { InnerShadowSetting } from './InnerShadowSetting';
import type { ObjectStyle } from './ObjectStyle';
import type { OuterGlowSetting } from './OuterGlowSetting';
import type { PageItemDefault } from './PageItemDefault';
import type { Preferences } from './Preferences';
import type { SatinSetting } from './SatinSetting';

/**
 * Transparency settings for the stroke of the parent object.
 */
export interface StrokeTransparencySetting<M extends Mode = 'single'> extends EventTargetDOMObject<PageItemUnion | FormField | PageItemDefault | ObjectStyle, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'StrokeTransparencySetting';

  /** Resolves the proxy into the individual {@link StrokeTransparencySetting} objects it stands for. */
  getElements(): StrokeTransparencySetting<'single'>[];

  /** Blending mode settings. */
  readonly blendingSettings: Read<M, BlendingSetting>;

  /** Settings related to the drop shadow effect. */
  readonly dropShadowSettings: Read<M, DropShadowSetting>;

  /** Settings related to the feather effect. */
  readonly featherSettings: Read<M, FeatherSetting>;

  /** Settings related to the inner shadow effect. */
  readonly innerShadowSettings: Read<M, InnerShadowSetting>;

  /** Settings related to the outer glow effect. */
  readonly outerGlowSettings: Read<M, OuterGlowSetting>;

  /** Settings related to the inner glow effect. */
  readonly innerGlowSettings: Read<M, InnerGlowSetting>;

  /** Settings related to the bevel and emboss effect. */
  readonly bevelAndEmbossSettings: Read<M, BevelAndEmbossSetting>;

  /** Settings related to the satin effect. */
  readonly satinSettings: Read<M, SatinSetting>;

  /** Settings related to the directional feather effect. */
  readonly directionalFeatherSettings: Read<M, DirectionalFeatherSetting>;

  /** Settings related to the gradient feather effect. */
  readonly gradientFeatherSettings: Read<M, GradientFeatherSetting>;

  /** A collection of preferences objects. */
  readonly preferences: Preferences;
}
