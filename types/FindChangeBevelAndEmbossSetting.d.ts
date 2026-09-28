/**
 * FindChangeBevelAndEmbossSetting.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { BevelAndEmbossSetting } from './BevelAndEmbossSetting';
import type { FindChangeTransparencySetting } from './FindChangeTransparencySetting';
import type { FindChangeStrokeTransparencySetting } from './FindChangeStrokeTransparencySetting';
import type { FindChangeFillTransparencySetting } from './FindChangeFillTransparencySetting';
import type { FindChangeContentTransparencySetting } from './FindChangeContentTransparencySetting';
import type { Swatch } from './Swatch';

/**
 * The same {@link BevelAndEmbossSetting} settings, applied as find/change criteria.
 */
export interface FindChangeBevelAndEmbossSetting<M extends Mode = 'single'> extends BevelAndEmbossSetting<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'FindChangeBevelAndEmbossSetting';

  /** Resolves the proxy into the individual {@link FindChangeBevelAndEmbossSetting} objects it stands for. */
  getElements(): FindChangeBevelAndEmbossSetting<'single'>[];
}
