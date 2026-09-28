/**
 * ExportForWebPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { GIFOptionsPalette } from './Enums/GIFOptionsPalette';
import type { ImageConversion } from './Enums/ImageConversion';
import type { JPEGOptionsFormat } from './Enums/JPEGOptionsFormat';
import type { JPEGOptionsQuality } from './Enums/JPEGOptionsQuality';

/**
 * Image-handling settings for exporting to HTML — which of the original,
 * optimized, and formatted images to copy alongside the export, and how images
 * convert to GIF or JPEG.
 */
export interface ExportForWebPreference<M extends Mode = 'single'> extends EventTargetDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'ExportForWebPreference';

  /** Resolves the proxy into the individual {@link ExportForWebPreference} objects it stands for. */
  getElements(): ExportForWebPreference<'single'>[];

  /** If true, copies formatted images to the images subfolder. */
  get copyFormattedImages(): Read<M, boolean>;
  set copyFormattedImages(value: boolean);

  /** If true, copies optimized images to the images subfolder. */
  get copyOptimizedImages(): Read<M, boolean>;
  set copyOptimizedImages(value: boolean);

  /** If true, copies original images to the images subfolder. */
  get copyOriginalImages(): Read<M, boolean>;
  set copyOriginalImages(value: boolean);

  /** The file format to use for converted images. Note: Valid only when copy optimized images and/or copy formatted images is true. */
  get imageConversion(): Read<M, ImageConversion>;
  set imageConversion(value: ImageConversion);

  /** The color palette for GIF conversion. Note: Not valid when image conversion is JPEG. */
  get gifOptionsPalette(): Read<M, GIFOptionsPalette>;
  set gifOptionsPalette(value: GIFOptionsPalette);

  /** If true, generates interlaced GIFs. Note: Not valid when image conversion is JPEG. */
  get gifOptionsInterlaced(): Read<M, boolean>;
  set gifOptionsInterlaced(value: boolean);

  /** The quality of converted JPEG images. Note: Not valid when image conversion is GIF. */
  get jpegOptionsQuality(): Read<M, JPEGOptionsQuality>;
  set jpegOptionsQuality(value: JPEGOptionsQuality);

  /** The formatting method for converted JPEG images. Note: Not valid when image conversion is GIF. */
  get jpegOptionsFormat(): Read<M, JPEGOptionsFormat>;
  set jpegOptionsFormat(value: JPEGOptionsFormat);
}
