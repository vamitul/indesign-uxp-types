/**
 * FindChangeTransparencySetting.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { ChangeObjectPreference } from './ChangeObjectPreference';
import type { FindChangeBevelAndEmbossSetting } from './FindChangeBevelAndEmbossSetting';
import type { FindChangeBlendingSetting } from './FindChangeBlendingSetting';
import type { FindChangeDirectionalFeatherSetting } from './FindChangeDirectionalFeatherSetting';
import type { FindChangeDropShadowSetting } from './FindChangeDropShadowSetting';
import type { FindChangeFeatherSetting } from './FindChangeFeatherSetting';
import type { FindChangeGradientFeatherSetting } from './FindChangeGradientFeatherSetting';
import type { FindChangeInnerGlowSetting } from './FindChangeInnerGlowSetting';
import type { FindChangeInnerShadowSetting } from './FindChangeInnerShadowSetting';
import type { FindChangeOuterGlowSetting } from './FindChangeOuterGlowSetting';
import type { FindChangeSatinSetting } from './FindChangeSatinSetting';
import type { FindObjectPreference } from './FindObjectPreference';
import type { Preferences } from './Preferences';

/**
 * The object-level transparency criteria used in a find/change object operation.
 */
export interface FindChangeTransparencySetting<M extends Mode = 'single'> extends EventTargetDOMObject<FindObjectPreference | ChangeObjectPreference, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'FindChangeTransparencySetting';

  /** Resolves the proxy into the individual {@link FindChangeTransparencySetting} objects it stands for. */
  getElements(): FindChangeTransparencySetting<'single'>[];

  /** Blending mode settings. */
  readonly blendingSettings: Read<M, FindChangeBlendingSetting>;

  /** Settings related to the drop shadow effect. */
  readonly dropShadowSettings: Read<M, FindChangeDropShadowSetting>;

  /** Settings related to the feather effect. */
  readonly featherSettings: Read<M, FindChangeFeatherSetting>;

  /** Settings related to the inner shadow effect. */
  readonly innerShadowSettings: Read<M, FindChangeInnerShadowSetting>;

  /** Settings related to the outer glow effect. */
  readonly outerGlowSettings: Read<M, FindChangeOuterGlowSetting>;

  /** Settings related to the inner glow effect. */
  readonly innerGlowSettings: Read<M, FindChangeInnerGlowSetting>;

  /** Settings related to the bevel and emboss effect. */
  readonly bevelAndEmbossSettings: Read<M, FindChangeBevelAndEmbossSetting>;

  /** Settings related to the satin effect. */
  readonly satinSettings: Read<M, FindChangeSatinSetting>;

  /** Settings related to the directional feather effect. */
  readonly directionalFeatherSettings: Read<M, FindChangeDirectionalFeatherSetting>;

  /** Settings related to the gradient feather effect. */
  readonly gradientFeatherSettings: Read<M, FindChangeGradientFeatherSetting>;

  /** A collection of preferences objects. */
  readonly preferences: Preferences;
}
