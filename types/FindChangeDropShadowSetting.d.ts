/**
 * FindChangeDropShadowSetting.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { DropShadowSetting } from './DropShadowSetting';
import type { FindChangeTransparencySetting } from './FindChangeTransparencySetting';
import type { FindChangeStrokeTransparencySetting } from './FindChangeStrokeTransparencySetting';
import type { FindChangeFillTransparencySetting } from './FindChangeFillTransparencySetting';
import type { FindChangeContentTransparencySetting } from './FindChangeContentTransparencySetting';
import type { Swatch } from './Swatch';

/**
 * The same {@link DropShadowSetting} settings, applied as find/change criteria.
 */
export interface FindChangeDropShadowSetting<M extends Mode = 'single'> extends DropShadowSetting<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'FindChangeDropShadowSetting';

  /** Resolves the proxy into the individual {@link FindChangeDropShadowSetting} objects it stands for. */
  getElements(): FindChangeDropShadowSetting<'single'>[];
}
