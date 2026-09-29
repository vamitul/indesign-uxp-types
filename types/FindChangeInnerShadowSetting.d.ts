/**
 * FindChangeInnerShadowSetting.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { InnerShadowSetting } from './InnerShadowSetting';
import type { FindChangeTransparencySetting } from './FindChangeTransparencySetting';
import type { FindChangeStrokeTransparencySetting } from './FindChangeStrokeTransparencySetting';
import type { FindChangeFillTransparencySetting } from './FindChangeFillTransparencySetting';
import type { FindChangeContentTransparencySetting } from './FindChangeContentTransparencySetting';
import type { Swatch } from './Swatch';

/**
 * The same {@link InnerShadowSetting} settings, applied as find/change criteria.
 */
export interface FindChangeInnerShadowSetting<M extends Mode = 'single'> extends InnerShadowSetting<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'FindChangeInnerShadowSetting';

  /** Resolves the proxy into the individual {@link FindChangeInnerShadowSetting} objects it stands for. */
  getElements(): FindChangeInnerShadowSetting<'single'>[];
}
