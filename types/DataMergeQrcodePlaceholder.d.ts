/**
 * DataMergeQrcodePlaceholder.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { DataMergeField } from './DataMergeField';
import type { PageItem } from './PageItem';

/**
 * A page item marked to receive a generated QR code image built from a data
 * merge field's value during a merge.
 */
export interface DataMergeQrcodePlaceholder<M extends Mode = 'single'>
  extends EventTargetDOMObject<Document, M>,
    IndexedDOMObject<Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'DataMergeQrcodePlaceholder';

  /** Resolves the proxy into the individual {@link DataMergeQrcodePlaceholder} objects it stands for. */
  getElements(): DataMergeQrcodePlaceholder<'single'>[];

  /** The data merge field encoded into the QR code at this placeholder. */
  readonly field: Read<M, DataMergeField>;

  /** The page item that hosts the placeholder. */
  readonly placeholderPageItem: Read<M, PageItem>;
}
