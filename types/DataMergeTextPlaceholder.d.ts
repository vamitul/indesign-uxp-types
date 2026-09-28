/**
 * DataMergeTextPlaceholder.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { DataMergeField } from './DataMergeField';
import type { InsertionPoint } from './InsertionPoint';
import type { Story } from './Story';

/**
 * A location in story text marked to receive a data merge field's text value
 * during a merge.
 */
export interface DataMergeTextPlaceholder<M extends Mode = 'single'>
  extends EventTargetDOMObject<Document, M>,
    IndexedDOMObject<Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'DataMergeTextPlaceholder';

  /** Resolves the proxy into the individual {@link DataMergeTextPlaceholder} objects it stands for. */
  getElements(): DataMergeTextPlaceholder<'single'>[];

  /** The data merge field inserted at this placeholder. */
  readonly field: Read<M, DataMergeField>;

  /** The insertion point immediately before the placeholder in its story. */
  readonly storyOffset: Read<M, InsertionPoint>;

  /** The story that contains the placeholder. */
  readonly parentStory: Read<M, Story>;

  /** The number of characters the placeholder occupies in {@link parentStory}, starting at
   * {@link storyOffset}. */
  readonly length: Read<M, number>;
}
