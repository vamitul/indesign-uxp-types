/**
 * HTMLExportPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { BulletListExportOption } from './Enums/BulletListExportOption';
import type { ExportOrder } from './Enums/ExportOrder';
import type { GIFOptionsPalette } from './Enums/GIFOptionsPalette';
import type { ImageAlignmentType } from './Enums/ImageAlignmentType';
import type { ImageConversion } from './Enums/ImageConversion';
import type { ImageExportOption } from './Enums/ImageExportOption';
import type { ImageResolution } from './Enums/ImageResolution';
import type { ImageSizeOption } from './Enums/ImageSizeOption';
import type { JPEGOptionsFormat } from './Enums/JPEGOptionsFormat';
import type { JPEGOptionsQuality } from './Enums/JPEGOptionsQuality';
import type { NumberedListExportOption } from './Enums/NumberedListExportOption';
import type { UseSVGAsEnum } from './Enums/UseSVGAsEnum';

/**
 * Export settings for InDesign's HTML output: element class attributes, content
 * order, image conversion, and the external CSS/JavaScript to reference.
 */
export interface HTMLExportPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'HTMLExportPreference';

  /** Resolves the proxy into the individual {@link HTMLExportPreference} objects it stands for. */
  getElements(): HTMLExportPreference<'single'>[];

  /** If true, InDesign will generate class attributes for elements in HTML, else will generate plain html without class attributes. */
  get includeClassesInHTML(): Read<M, boolean>;
  set includeClassesInHTML(value: boolean);

  /** How placed SVG files are represented in the exported markup: rasterized to an image or embedded as {@link UseSVGAsEnum} specifies. */
  get useSVGAs(): Read<M, UseSVGAsEnum>;
  set useSVGAs(value: UseSVGAsEnum);

  /** If true and have selection, export selected content to HTML. */
  get exportSelection(): Read<M, boolean>;
  set exportSelection(value: boolean);

  /** Whether content exports in document layout order or the order set in the Articles panel; see {@link ExportOrder}. */
  get exportOrder(): Read<M, ExportOrder>;
  set exportOrder(value: ExportOrder);

  /** Whether bulleted lists export as an HTML list or as plain text; see {@link BulletListExportOption}. */
  get bulletExportOption(): Read<M, BulletListExportOption>;
  set bulletExportOption(value: BulletListExportOption);

  /** Whether numbered lists export as an HTML ordered list or as plain text; see {@link NumberedListExportOption}. */
  get numberedListExportOption(): Read<M, NumberedListExportOption>;
  set numberedListExportOption(value: NumberedListExportOption);

  /** If true, open docuemnt in viewer after export. */
  get viewDocumentAfterExport(): Read<M, boolean>;
  set viewDocumentAfterExport(value: boolean);

  /** Whether images export as the original file or as an optimized copy; see {@link ImageExportOption}. */
  get imageExportOption(): Read<M, ImageExportOption>;
  set imageExportOption(value: ImageExportOption);

  /** The pixel density used when converting images; see {@link ImageResolution}. */
  get imageExportResolution(): Read<M, ImageResolution>;
  set imageExportResolution(value: ImageResolution);

  /** Whether the exported image uses no explicit CSS size or a fixed size; see {@link ImageSizeOption}. */
  get customImageSizeOption(): Read<M, ImageSizeOption>;
  set customImageSizeOption(value: ImageSizeOption);

  /** If true, format image based on layout appearence. */
  get preserveLayoutAppearence(): Read<M, boolean>;
  set preserveLayoutAppearence(value: boolean);

  /** Alignment applied to images. */
  get imageAlignment(): Read<M, ImageAlignmentType>;
  set imageAlignment(value: ImageAlignmentType);

  /** The vertical space added before the image. */
  get imageSpaceBefore(): Read<M, number>;
  set imageSpaceBefore(value: number);

  /** The vertical space added after the image. */
  get imageSpaceAfter(): Read<M, number>;
  set imageSpaceAfter(value: number);

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

  /** The PNG compression level. */
  get level(): Read<M, number>;
  set level(value: number);

  /** Ignore object level image conversion settings. */
  get ignoreObjectConversionSettings(): Read<M, boolean>;
  set ignoreObjectConversionSettings(value: boolean);

  /** The server path for image. */
  get serverPath(): Read<M, string>;
  set serverPath(value: string);

  /** The image extension on server. */
  get imageExtension(): Read<M, string>;
  set imageExtension(value: string);

  /** If true, output local style override. */
  get preserveLocalOverride(): Read<M, boolean>;
  set preserveLocalOverride(value: boolean);

  /** The file path of external cascading style sheets. */
  get externalStyleSheets(): Read<M, string[]>;
  set externalStyleSheets(value: string[]);

  /** The file path of external javascripts. */
  get javascripts(): Read<M, string[]>;
  set javascripts(value: string[]);

  /** If true, InDesign will generate cascade style sheet. */
  get generateCascadeStyleSheet(): Read<M, boolean>;
  set generateCascadeStyleSheet(value: boolean);
}
