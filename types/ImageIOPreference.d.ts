/**
 * ImageIOPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { Image } from './Image';

/**
 * Image I/O preferences.
 */
export interface ImageIOPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application | Image, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'ImageIOPreference';

  /** Resolves the proxy into the individual {@link ImageIOPreference} objects it stands for. */
  getElements(): ImageIOPreference<'single'>[];

  /** The image resolution in ppi, set when the graphic is imported. */
  readonly previewResolution: Read<M, number>;

  /** If true, applies clipping paths defined in Photoshop to placed images. */
  get applyPhotoshopClippingPath(): Read<M, boolean>;
  set applyPhotoshopClippingPath(value: boolean);

  /** If true, allows auto embedding. */
  get allowAutoEmbedding(): Read<M, boolean>;
  set allowAutoEmbedding(value: boolean);

  /** The name of the alpha channel. */
  get alphaChannelName(): Read<M, string>;
  set alphaChannelName(value: string);
}
