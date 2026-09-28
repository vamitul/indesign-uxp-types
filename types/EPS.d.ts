/**
 * EPS.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Graphic } from './Graphic';
import type { ClippingPathSettings } from './ClippingPathSettings';
import type { PlacedVectorProfilePolicy } from './Enums/PlacedVectorProfilePolicy';
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
 * A placed EPS (Encapsulated PostScript) graphic. See {@link Graphic} for the
 * shared placed-graphic surface.
 */
export interface EPS<TParent = PageItemParent, M extends Mode = 'single'> extends Graphic<TParent, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'EPS';

  /** Resolves the proxy into the individual {@link EPS} objects it stands for. */
  getElements(): EPS<TParent, 'single'>[];

  /** Clipping-path and alpha-channel settings stored in the EPS. */
  readonly clippingPath: Read<M, ClippingPathSettings>;

  /** The color space of the EPS content (e.g. `"RGB"`, `"CMYK"`, `"Grayscale"`). */
  readonly space: Read<M, string>;

  /** The EPS's native resolution in pixels per inch, as `[horizontal, vertical]`. */
  readonly actualPpi: Read<M, number[]>;

  /** The EPS's effective resolution after scaling, in pixels per inch, as `[horizontal, vertical]`. */
  readonly effectivePpi: Read<M, number[]>;

  /** The color-profile policy applied to grayscale content in the placed vector. */
  get grayVectorPolicy(): Read<M, PlacedVectorProfilePolicy>;
  set grayVectorPolicy(value: PlacedVectorProfilePolicy);

  /** The color-profile policy applied to RGB content in the placed vector. */
  get rgbVectorPolicy(): Read<M, PlacedVectorProfilePolicy>;
  set rgbVectorPolicy(value: PlacedVectorProfilePolicy);

  /** The color-profile policy applied to CMYK content in the placed vector. */
  get cmykVectorPolicy(): Read<M, PlacedVectorProfilePolicy>;
  set cmykVectorPolicy(value: PlacedVectorProfilePolicy);
}
