/**
 * XMLImportMap.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { Document } from './Document';
import type { XMLTag } from './XMLTag';
import type { ParagraphStyle } from './ParagraphStyle';
import type { CharacterStyle } from './CharacterStyle';
import type { TableStyle } from './TableStyle';
import type { CellStyle } from './CellStyle';

/**
 * A mapping from an XML tag to a paragraph, character, table, or cell style,
 * used when importing tagged XML into a document.
 */
export interface XMLImportMap<M extends Mode = 'single'>
  extends EventTargetDOMObject<Application | Document, M>,
    IndexedDOMObject<Application | Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'XMLImportMap';

  /** Resolves the proxy into the individual {@link XMLImportMap} objects it stands for. */
  getElements(): XMLImportMap<'single'>[];

  /** The XML tag mapped to the style. */
  readonly markupTag: Read<M, XMLTag>;

  /** The style applied to content bearing the mapped tag on import. */
  get mappedStyle(): Read<M, ParagraphStyle | CharacterStyle | TableStyle | CellStyle>;
  set mappedStyle(value: ParagraphStyle | CharacterStyle | TableStyle | CellStyle | string);

  /** Deletes the mapping. */
  remove(): Read<M, void>;
}
