/**
 * SVG.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Graphic } from './Graphic';
import type { UseSVGAsEnum } from './Enums/UseSVGAsEnum';
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
import type { Link } from './Link';
import type { LinkedPageItemOption } from './LinkedPageItemOption';
import type { ObjectStyle } from './ObjectStyle';
import type { Page } from './Page';
import type { PageItem } from './PageItem';
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
 * A placed SVG (Scalable Vector Graphics) graphic. See {@link Graphic} for the
 * shared placed-graphic surface.
 */
export interface SVG<TParent = PageItemParent, M extends Mode = 'single'> extends Graphic<TParent, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'SVG';

  /** Resolves the proxy into the individual {@link SVG} objects it stands for. */
  getElements(): SVG<TParent, 'single'>[];

  /** Whether this SVG's content is a MathML equation rather than ordinary vector art. */
  readonly isMathMLObject: Read<M, boolean>;

  /** How the SVG content is rendered: as a native vector object or a rasterized image. */
  get useSVGAs(): Read<M, UseSVGAsEnum>;
  set useSVGAs(value: UseSVGAsEnum);

  /**
   * @internal Internal use only.
   * @param resyncData Internal use only.
   */
  resync(resyncData: string): Read<M, void>;
}
