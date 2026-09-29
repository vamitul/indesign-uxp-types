/**
 * Image.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Graphic } from './Graphic';
import type { ClippingPathSettings } from './ClippingPathSettings';
import type { ImageIOPreference } from './ImageIOPreference';
import type { GraphicLayerOption } from './GraphicLayerOption';
import type { Profile } from './Enums/Profile';
import type { RenderingIntent } from './Enums/RenderingIntent';
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
 * A bitmap image in any raster file format (including TIFF, JPEG, GIF, or
 * Photoshop). See {@link Graphic} for the shared placed-graphic surface.
 */
export interface Image<TParent = PageItemParent, M extends Mode = 'single'> extends Graphic<TParent, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Image';

  /** Resolves the proxy into the individual {@link Image} objects it stands for. */
  getElements(): Image<TParent, 'single'>[];

  /** Clipping-path and alpha-channel settings stored in the image. */
  readonly clippingPath: Read<M, ClippingPathSettings>;

  /** Import preferences (color management, resolution) applied to the image. */
  readonly imageIOPreferences: Read<M, ImageIOPreference>;

  /** Photoshop/PDF layer visibility settings for the placed image. */
  readonly graphicLayerOptions: Read<M, GraphicLayerOption>;

  /** The color space of the image (e.g. `"RGB"`, `"CMYK"`, `"Grayscale"`). */
  readonly space: Read<M, string>;

  /** The image's native resolution in pixels per inch, as `[horizontal, vertical]`. */
  readonly actualPpi: Read<M, number[]>;

  /** The image's effective resolution after scaling, in pixels per inch, as `[horizontal, vertical]`. */
  readonly effectivePpi: Read<M, number[]>;

  /** Every valid embedded or assignable ICC profile name for this image. */
  readonly profileList: Read<M, string[]>;

  /** The color profile applied to the image. Assign a {@link Profile} or its name. */
  get profile(): Read<M, Profile>;
  set profile(value: Profile | string);

  /** The color-rendering-intent override applied to the image. */
  get imageRenderingIntent(): Read<M, RenderingIntent>;
  set imageRenderingIntent(value: RenderingIntent);
}
