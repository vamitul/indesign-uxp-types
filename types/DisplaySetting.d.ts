/**
 * DisplaySetting.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { TagRaster } from './Enums/TagRaster';
import type { TagVector } from './Enums/TagVector';
import type { TagTransparency } from './Enums/TagTransparency';
import type { DisplaySettingOptions } from './Enums/DisplaySettingOptions';

/**
 * One of the application's built-in display-quality presets — high quality,
 * typical, or optimized (see {@link DisplaySettingOptions}).
 *
 * Bundles the {@link raster}, {@link vector}, and {@link transparency}
 * settings applied together wherever the preset is selected.
 */
export interface DisplaySetting<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'DisplaySetting';

  /** Resolves the proxy into the individual {@link DisplaySetting} objects it stands for. */
  getElements(): DisplaySetting<'single'>[];

  /** The display method for raster images. */
  get raster(): Read<M, TagRaster>;
  set raster(value: TagRaster);

  /** The display method for vector graphics. */
  get vector(): Read<M, TagVector>;
  set vector(value: TagVector);

  /** The display setting for transparency effects. */
  get transparency(): Read<M, TagTransparency>;
  set transparency(value: TagTransparency);

  /** If `true`, text and bitmap images are anti-aliased on screen. */
  get antialiasing(): Read<M, boolean>;
  set antialiasing(value: boolean);

  /** The point size below which text is greeked (rendered as gray bars) on screen. */
  get greekBelow(): Read<M, number>;
  set greekBelow(value: number);
}
