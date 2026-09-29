/**
 * FindChangeInnerGlowSetting.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { InnerGlowSetting } from './InnerGlowSetting';
import type { FindChangeTransparencySetting } from './FindChangeTransparencySetting';
import type { FindChangeStrokeTransparencySetting } from './FindChangeStrokeTransparencySetting';
import type { FindChangeFillTransparencySetting } from './FindChangeFillTransparencySetting';
import type { FindChangeContentTransparencySetting } from './FindChangeContentTransparencySetting';
import type { GlowTechnique } from './Enums/GlowTechnique';
import type { InnerGlowSource } from './Enums/InnerGlowSource';

/**
 * The same {@link InnerGlowSetting} settings, applied as find/change criteria.
 */
export interface FindChangeInnerGlowSetting<M extends Mode = 'single'> extends InnerGlowSetting<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'FindChangeInnerGlowSetting';

  /** Resolves the proxy into the individual {@link FindChangeInnerGlowSetting} objects it stands for. */
  getElements(): FindChangeInnerGlowSetting<'single'>[];
}
