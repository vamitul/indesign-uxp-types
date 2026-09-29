/**
 * Graphic.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { PageItem } from './PageItem';
import type { FilePath } from './_base/Types';
import type { Link } from './Link';
import type { PageItemParent } from './_base/Parents';
import type { AnimationSetting } from './AnimationSetting';
import type { Article } from './Article';
import type { BackgroundTask } from './BackgroundTask';
import type { ContentTransparencySetting } from './ContentTransparencySetting';
import type { FitOptions } from './Enums/FitOptions';
import type { FillTransparencySetting } from './FillTransparencySetting';
import type { FlexObjects } from './FlexObjects';
import type { Graphics } from './Graphics';
import type { Layer } from './Layer';
import type { Library } from './Library';
import type { LinkedPageItemOption } from './LinkedPageItemOption';
import type { ObjectStyle } from './ObjectStyle';
import type { PDF } from './PDF';
import type { Page } from './Page';
import type { PageItems } from './PageItems';
import type { Preferences } from './Preferences';
import type { SVGs } from './SVGs';
import type { StrokeTransparencySetting } from './StrokeTransparencySetting';
import type { TextWrapPreference } from './TextWrapPreference';
import type { TimingSetting } from './TimingSetting';
import type { TransparencySetting } from './TransparencySetting';
import type { XMLElement } from './XMLElement';
import type { NamableDOMObject } from './_base/DomObjects';
import type { GraphicAttributes } from './_base/GraphicAttributes';

/**
 * An imported graphic in any graphic file format (including vector, metafile,
 * and bitmap formats).
 */
export interface Graphic<TParent = PageItemParent, M extends Mode = 'single'> extends PageItem<TParent, PageItemParent, M> {
  /** The object's DOM class name — reports the specific format, such as `'PDF'` when this is a placed {@link PDF}. */
  readonly constructorName: 'Graphic' | 'EPS' | 'Image' | 'ImportedPage' | 'PDF' | 'PICT' | 'SVG' | 'WMF';

  /** Resolves the proxy into the individual {@link Graphic} objects it stands for. */
  getElements(): Graphic<TParent, 'single'>[];

  /** The {@link Link} to the source file this graphic was placed from. */
  readonly itemLink: Read<M, Link>;

  /** The graphic file format name (e.g. `"JPEG"`, `"Photoshop"`, `"Illustrator"`). */
  readonly imageTypeName: Read<M, string>;

  /**
   * Exports the graphic as a web-optimized raster image.
   * @param to Destination file path.
   */
  exportForWeb(to: FilePath): Read<M, string[]>;
}

/**
 * A placed graphic InDesign reports as a plain {@link Graphic} rather than as an image, EPS,
 * PDF, SVG or imported page.
 *
 * Handle it in the `'Graphic'` case of a `constructorName` check. Only the members every placed
 * graphic has — its link, its image type name, and export-for-web — are available on it.
 */
export interface PlainGraphic<
  TParent = PageItemParent,
  M extends Mode = 'single',
> extends Graphic<TParent, M> {
  /** Always `'Graphic'` — this is the generic case, by construction. */
  readonly constructorName: 'Graphic';
}

