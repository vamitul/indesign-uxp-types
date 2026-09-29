/**
 * ObjectExportOption.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { EndnoteTextFrame } from './EndnoteTextFrame';
import type { GraphicLine } from './GraphicLine';
import type { Group } from './Group';
import type { ObjectStyle } from './ObjectStyle';
import type { Oval } from './Oval';
import type { Polygon } from './Polygon';
import type { Rectangle } from './Rectangle';
import type { TextFrame } from './TextFrame';
import type { CustomLayoutTypeEnum } from './Enums/CustomLayoutTypeEnum';
import type { EpubAriaLabelSourceType } from './Enums/EpubAriaLabelSourceType';
import type { GIFOptionsPalette } from './Enums/GIFOptionsPalette';
import type { ImageAlignmentType } from './Enums/ImageAlignmentType';
import type { ImageFormat } from './Enums/ImageFormat';
import type { ImagePageBreakType } from './Enums/ImagePageBreakType';
import type { ImageResolution } from './Enums/ImageResolution';
import type { JPEGOptionsFormat } from './Enums/JPEGOptionsFormat';
import type { JPEGOptionsQuality } from './Enums/JPEGOptionsQuality';
import type { PreserveAppearanceFromLayoutEnum } from './Enums/PreserveAppearanceFromLayoutEnum';
import type { SizeTypeEnum } from './Enums/SizeTypeEnum';
import type { SourceType } from './Enums/SourceType';
import type { TagType } from './Enums/TagType';

/**
 * Per-object export settings for reflowable EPUB and HTML output.
 *
 * Controls how the object is tagged and described for accessibility (ARIA
 * role, alt text, actual text), and how it converts to an image (format,
 * resolution, quality) when it can't export as native markup.
 */
export interface ObjectExportOption<M extends Mode = 'single'> extends EventTargetDOMObject<ObjectStyle | Polygon | GraphicLine | Rectangle | Oval | Group | TextFrame | EndnoteTextFrame, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'ObjectExportOption';

  /** Resolves the proxy into the individual {@link ObjectExportOption} objects it stands for. */
  getElements(): ObjectExportOption<'single'>[];

  /** The epub type as recommended by IDPF. */
  get epubType(): Read<M, string>;
  set epubType(value: string);

  /** Whether the exported image uses no explicit size, a default size, or a fixed size; see {@link SizeTypeEnum}. */
  get sizeType(): Read<M, SizeTypeEnum>;
  set sizeType(value: SizeTypeEnum);

  /** Custom size applied to the object. */
  get customSize(): Read<M, string>;
  set customSize(value: string);

  /** Whether export uses the layout's own appearance or an existing image; see {@link PreserveAppearanceFromLayoutEnum}. */
  get preserveAppearanceFromLayout(): Read<M, PreserveAppearanceFromLayoutEnum>;
  set preserveAppearanceFromLayout(value: PreserveAppearanceFromLayoutEnum);

  /** The epub aria role as recommended by IDPF. */
  get epubAriaRole(): Read<M, string>;
  set epubAriaRole(value: string);

  /** The epub aria label as recommended by IDPF. */
  get epubAriaLabel(): Read<M, string>;
  set epubAriaLabel(value: string);

  /** The source to use when generating the aria-label during EPUB export. */
  get epubAriaLabelSourceType(): Read<M, EpubAriaLabelSourceType>;
  set epubAriaLabelSourceType(value: EpubAriaLabelSourceType);

  /** The source type of alternate text. */
  get altTextSourceType(): Read<M, SourceType>;
  set altTextSourceType(value: SourceType);

  /** The source type of actual text. */
  get actualTextSourceType(): Read<M, SourceType>;
  set actualTextSourceType(value: SourceType);

  /** The custom alternate text entered by the user. */
  get customAltText(): Read<M, string>;
  set customAltText(value: string);

  /** The custom actual text entered by the user. */
  get customActualText(): Read<M, string>;
  set customActualText(value: string);

  /** The metadata property to use as source of alternate text. */
  get altMetadataProperty(): Read<M, [namespacePrefix: string, propertyPath: string]>;
  set altMetadataProperty(value: [namespacePrefix: string, propertyPath: string]);

  /** The metadata property to use as source of actual text. */
  get actualMetadataProperty(): Read<M, [namespacePrefix: string, propertyPath: string]>;
  set actualMetadataProperty(value: [namespacePrefix: string, propertyPath: string]);

  /** Whether the tag is taken from the XML structure (falling back to the standard tag) or the object is tagged as an artifact; see {@link TagType}. */
  get applyTagType(): Read<M, TagType>;
  set applyTagType(value: TagType);

  /** The image format used when the object is converted to an image; see {@link ImageFormat}. */
  get imageConversionType(): Read<M, ImageFormat>;
  set imageConversionType(value: ImageFormat);

  /** The pixel density used when converting the object to an image; see {@link ImageResolution}. */
  get imageExportResolution(): Read<M, ImageResolution>;
  set imageExportResolution(value: ImageResolution);

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

  /** Alignment applied to images. */
  get imageAlignment(): Read<M, ImageAlignmentType>;
  set imageAlignment(value: ImageAlignmentType);

  /** The vertical space added before the image. */
  get imageSpaceBefore(): Read<M, number>;
  set imageSpaceBefore(value: number);

  /** The vertical space added after the image. */
  get imageSpaceAfter(): Read<M, number>;
  set imageSpaceAfter(value: number);

  /** If true, image page break settings will be used in objects. */
  get useImagePageBreak(): Read<M, boolean>;
  set useImagePageBreak(value: boolean);

  /** Whether a page break is inserted before or after the image; see {@link ImagePageBreakType}. */
  get imagePageBreak(): Read<M, ImagePageBreakType>;
  set imagePageBreak(value: ImagePageBreakType);

  /** If true, custom layout is enabled for object. */
  get customLayout(): Read<M, boolean>;
  set customLayout(value: boolean);

  /** How the object floats in a custom EPUB/HTML layout; see {@link CustomLayoutTypeEnum}. */
  get customLayoutType(): Read<M, CustomLayoutTypeEnum>;
  set customLayoutType(value: CustomLayoutTypeEnum);

  /** Provides the alternate text for the object. */
  altText(): Read<M, string>;

  /** Provides the actual text for the object. */
  actualText(): Read<M, string>;

  /**
   * The crop rectangle the generated alt text was described from, as a string.
   * Lets InDesign tell whether the image has been re-cropped since.
   */
  get altTextCropSyncRect(): Read<M, string>;
  set altTextCropSyncRect(value: string);

  /** If `true`, generating alt text for this object failed, and InDesign may offer to generate it again. */
  get altTextGenerationError(): Read<M, boolean>;
  set altTextGenerationError(value: boolean);
}
