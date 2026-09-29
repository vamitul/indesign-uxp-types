/**
 * XMLExportPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { FilePath, File } from './_base/Types';
import type { GIFOptionsPalette } from './Enums/GIFOptionsPalette';
import type { ImageConversion } from './Enums/ImageConversion';
import type { JPEGOptionsFormat } from './Enums/JPEGOptionsFormat';
import type { JPEGOptionsQuality } from './Enums/JPEGOptionsQuality';
import type { NothingEnum } from './Enums/NothingEnum';
import type { XMLExportUntaggedTablesFormat } from './Enums/XMLExportUntaggedTablesFormat';
import type { XMLFileEncoding } from './Enums/XMLFileEncoding';
import type { XMLTransformFile } from './Enums/XMLTransformFile';

/**
 * XML export preferences.
 */
export interface XMLExportPreference<M extends Mode = 'single'> extends EventTargetDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'XMLExportPreference';

  /** Resolves the proxy into the individual {@link XMLExportPreference} objects it stands for. */
  getElements(): XMLExportPreference<'single'>[];

  /** If true, displays exported XML content in a specified viewer. */
  get viewAfterExport(): Read<M, boolean>;
  set viewAfterExport(value: boolean);

  /** The preferred browser for viewing XML. */
  get preferredBrowser(): Read<M, Promise<File> | NothingEnum.NOTHING>;
  set preferredBrowser(value: FilePath | NothingEnum.NOTHING);

  /** If true, exports XML content from the selected XML element. If false, exports the entire document. */
  get exportFromSelected(): Read<M, boolean>;
  set exportFromSelected(value: boolean);

  /** The file encoding type for exporting XML content. */
  get fileEncoding(): Read<M, XMLFileEncoding>;
  set fileEncoding(value: XMLFileEncoding);

  /** If true, includes Ruby text in the exported XML content. */
  get ruby(): Read<M, boolean>;
  set ruby(value: boolean);

  /** If true, excludes the DTD from the exported XML content. */
  get excludeDtd(): Read<M, boolean>;
  set excludeDtd(value: boolean);

  /** If true, copies original images to the images subfolder. */
  get copyOriginalImages(): Read<M, boolean>;
  set copyOriginalImages(value: boolean);

  /** If true, copies optimized images to the images subfolder. */
  get copyOptimizedImages(): Read<M, boolean>;
  set copyOptimizedImages(value: boolean);

  /** If true, copies formatted images to the images subfolder. */
  get copyFormattedImages(): Read<M, boolean>;
  set copyFormattedImages(value: boolean);

  /** The file format to use for converted images. Applies only when {@link copyOptimizedImages} and/or {@link copyFormattedImages} is `true`. */
  get imageConversion(): Read<M, ImageConversion>;
  set imageConversion(value: ImageConversion);

  /** The color palette for GIF conversion. Has no effect when {@link imageConversion} is JPEG. */
  get gifOptionsPalette(): Read<M, GIFOptionsPalette>;
  set gifOptionsPalette(value: GIFOptionsPalette);

  /** If true, generates interlaced GIFs. Has no effect when {@link imageConversion} is JPEG. */
  get gifOptionsInterlaced(): Read<M, boolean>;
  set gifOptionsInterlaced(value: boolean);

  /** The quality of converted JPEG images. Has no effect when {@link imageConversion} is GIF. */
  get jpegOptionsQuality(): Read<M, JPEGOptionsQuality>;
  set jpegOptionsQuality(value: JPEGOptionsQuality);

  /** The formatting method for converted JPEG images. Has no effect when {@link imageConversion} is GIF. */
  get jpegOptionsFormat(): Read<M, JPEGOptionsFormat>;
  set jpegOptionsFormat(value: JPEGOptionsFormat);

  /** If true, transforms the XML using an XSLT file. */
  get allowTransform(): Read<M, boolean>;
  set allowTransform(value: boolean);

  /** The name of the XSLT file. Applies only when {@link allowTransform} is `true`. */
  get transformFilename(): Read<M, Promise<File> | XMLTransformFile>;
  set transformFilename(value: FilePath | XMLTransformFile);

  /** If true, replaces special characters with character references. */
  get characterReferences(): Read<M, boolean>;
  set characterReferences(value: boolean);

  /** The export format for untagged tables in tagged stories. */
  get exportUntaggedTablesFormat(): Read<M, XMLExportUntaggedTablesFormat>;
  set exportUntaggedTablesFormat(value: XMLExportUntaggedTablesFormat);
}
