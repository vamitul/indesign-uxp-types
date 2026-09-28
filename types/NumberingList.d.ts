/**
 * NumberingList.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { Document } from './Document';

/**
 * A named numbered-list definition, shared by paragraphs using list-based
 * paragraph numbering, controlling whether numbering continues across
 * stories and across book documents.
 */
export interface NumberingList<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Application | Document, M>,
    IndexedDOMObject<Application | Document, M>,
    NamableDOMObject<Application | Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'NumberingList';

  /** Resolves the proxy into the individual {@link NumberingList} objects it stands for. */
  getElements(): NumberingList<'single'>[];

  /** The unique ID of the numbering list. */
  readonly id: Read<M, number>;

  /** If `true`, numbering continues across stories. */
  get continueNumbersAcrossStories(): Read<M, boolean>;
  set continueNumbersAcrossStories(value: boolean);

  /** If `true`, numbering continues across book documents. */
  get continueNumbersAcrossDocuments(): Read<M, boolean>;
  set continueNumbersAcrossDocuments(value: boolean);

  /** Deletes the numbering list, optionally replacing its uses with another. */
  remove(replacingWith?: NumberingList): Read<M, void>;
}
