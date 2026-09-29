/**
 * XMLExportMap.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
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
 * A mapping from a paragraph, character, table, or cell style to an XML tag,
 * used when exporting a document (or a portion of it) as tagged XML.
 */
export interface XMLExportMap<M extends Mode = 'single'>
  extends EventTargetDOMObject<Application | Document, M>,
    IndexedDOMObject<Application | Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'XMLExportMap';

  /** Resolves the proxy into the individual {@link XMLExportMap} objects it stands for. */
  getElements(): XMLExportMap<'single'>[];

  /** The style mapped to the XML tag. */
  readonly mappedStyle: Read<M, ParagraphStyle | CharacterStyle | TableStyle | CellStyle>;

  /** The XML tag applied to content in the mapped style on export. */
  get markupTag(): Read<M, XMLTag>;
  set markupTag(value: XMLTag | string);

  /** If `true`, includes stories on master spreads when mapping styles to tags. */
  get includeMasterPageStories(): Read<M, boolean>;
  set includeMasterPageStories(value: boolean);

  /** If `true`, includes stories on the pasteboard when mapping styles to tags. */
  get includePasteboardStories(): Read<M, boolean>;
  set includePasteboardStories(value: boolean);

  /** If `true`, includes empty stories when mapping styles to tags. */
  get includeEmptyStories(): Read<M, boolean>;
  set includeEmptyStories(value: boolean);

  /** Deletes the mapping. */
  remove(): Read<M, void>;
}
