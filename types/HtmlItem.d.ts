/**
 * HtmlItem.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { PageItem } from './PageItem';
import type { PageItemParent } from './_base/Parents';
import type { AnimationSetting } from './AnimationSetting';
import type { Article } from './Article';
import type { BackgroundTask } from './BackgroundTask';
import type { ContentTransparencySetting } from './ContentTransparencySetting';
import type { FitOptions } from './Enums/FitOptions';
import type { FillTransparencySetting } from './FillTransparencySetting';
import type { FlexObjects } from './FlexObjects';
import type { Graphic } from './Graphic';
import type { Graphics } from './Graphics';
import type { Layer } from './Layer';
import type { Library } from './Library';
import type { LinkedPageItemOption } from './LinkedPageItemOption';
import type { ObjectStyle } from './ObjectStyle';
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
 * A page item that embeds raw HTML content (used in fixed-layout EPUB and
 * publish-online output). See {@link PageItem} for the shared page-item surface.
 */
export interface HtmlItem<TParent = PageItemParent, M extends Mode = 'single'> extends PageItem<TParent, PageItemParent, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'HtmlItem';

  /** Resolves the proxy into the individual {@link HtmlItem} objects it stands for. */
  getElements(): HtmlItem<TParent, 'single'>[];

  /** The embedded HTML markup. */
  get htmlContent(): Read<M, string>;
  set htmlContent(value: string);

  /** Whether the item adapts its width and height to its parent container, rather than using fixed dimensions. */
  get fixedDimensions(): Read<M, boolean>;
  set fixedDimensions(value: boolean);
}
