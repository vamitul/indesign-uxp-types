/**
 * InCopyExportOption.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { Oval } from './Oval';
import type { Polygon } from './Polygon';
import type { Rectangle } from './Rectangle';
import type { Story } from './Story';
import type { XmlStory } from './XmlStory';

/**
 * Export options for InCopy INCX document format.
 */
export interface InCopyExportOption<M extends Mode = 'single'> extends EventTargetDOMObject<Application | Story | XmlStory | Oval | Rectangle | Polygon, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'InCopyExportOption';

  /** Resolves the proxy into the individual {@link InCopyExportOption} objects it stands for. */
  getElements(): InCopyExportOption<'single'>[];

  /** If true, include graphic proxy data. */
  get includeGraphicProxies(): Read<M, boolean>;
  set includeGraphicProxies(value: boolean);

  /** If true, export all resources (styles etc), otherwise export resources used by the story. */
  get includeAllResources(): Read<M, boolean>;
  set includeAllResources(value: boolean);
}
