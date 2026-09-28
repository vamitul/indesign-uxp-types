/**
 * Images.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { Image } from './Image';
import type { PageItemParent } from './_base/Parents';

/**
 * A collection of imported {@link Image} objects (raster/bitmap graphics)
 * in any supported bitmap file format (including TIFF, JPEG, PNG, or GIF).
 *
 * @collection Image
 */
export interface Images<TParent = PageItemParent>
  extends BaseCollection<Image<TParent>, Image, Image<TParent, 'plural'>>, IdCollection<Image<TParent>>, NamedCollection<Image<TParent>> {
  /** The object's DOM class name. */
  readonly constructorName: 'Images';
}
