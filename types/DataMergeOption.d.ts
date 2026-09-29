/**
 * DataMergeOption.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { Fitting } from './Enums/Fitting';

/**
 * Configuration for a data merge — how placed images fit their frames, whether
 * merged images link or embed, and how the merged records split across output documents.
 */
export interface DataMergeOption<M extends Mode = 'single'> extends EventTargetDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'DataMergeOption';

  /** Resolves the proxy into the individual {@link DataMergeOption} objects it stands for. */
  getElements(): DataMergeOption<'single'>[];

  /** Instructions for fitting content in a frame. */
  get fittingOption(): Read<M, Fitting>;
  set fittingOption(value: Fitting);

  /**
   * If true, centers the image in the frame; preserves the frame size as well as content size
   * and proportions.
   *
   * Note: If the content is larger than the frame, content around the edges is obscured by
   * the bounding box of the frame. This doesn't work with fittingOption CONTENT_AWARE_FIT.
   */
  get centerImage(): Read<M, boolean>;
  set centerImage(value: boolean);

  /** If true, links images to the target document. If false, embeds images in the target document. */
  get linkImages(): Read<M, boolean>;
  set linkImages(value: boolean);

  /** If true, removes blank lines caused by empty fields. */
  get removeBlankLines(): Read<M, boolean>;
  set removeBlankLines(value: boolean);

  /** If true, creates a new document when records are merged. */
  get createNewDocument(): Read<M, boolean>;
  set createNewDocument(value: boolean);

  /** The maximum number of pages per document. */
  get documentSize(): Read<M, number>;
  set documentSize(value: number);
}
