/**
 * ImportedPageAttribute.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { ImportedPageCropOptions } from './Enums/ImportedPageCropOptions';

/**
 * Placed InDesign page attribute.
 */
export interface ImportedPageAttribute<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'ImportedPageAttribute';

  /** Resolves the proxy into the individual {@link ImportedPageAttribute} objects it stands for. */
  getElements(): ImportedPageAttribute<'single'>[];

  /** Which page of the InDesign document should be imported. Read only for page items. */
  get pageNumber(): Read<M, number>;
  set pageNumber(value: number);

  /** Specifies the cropping of the imported InDesign page. Read only for page items. */
  get importedPageCrop(): Read<M, ImportedPageCropOptions>;
  set importedPageCrop(value: ImportedPageCropOptions);
}
