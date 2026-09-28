/**
 * DataMergeField.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { DataMerge } from './DataMerge';
import type { SourceFieldType } from './Enums/SourceFieldType';
import type { DataMergeImagePlaceholder } from './DataMergeImagePlaceholder';
import type { DataMergeQrcodePlaceholder } from './DataMergeQrcodePlaceholder';
import type { DataMergeTextPlaceholder } from './DataMergeTextPlaceholder';

/**
 * A single field read from the data merge source file, available for
 * insertion into {@link DataMergeTextPlaceholder}, {@link DataMergeImagePlaceholder},
 * and {@link DataMergeQrcodePlaceholder} placeholders.
 */
export interface DataMergeField<M extends Mode = 'single'>
  extends EventTargetDOMObject<DataMerge, M>,
    IndexedDOMObject<DataMerge, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'DataMergeField';

  /** Resolves the proxy into the individual {@link DataMergeField} objects it stands for. */
  getElements(): DataMergeField<'single'>[];

  /** The name of the field, as read from the data source's header row. */
  readonly fieldName: Read<M, string>;

  /** The kind of content the field's source column holds. */
  readonly fieldType: Read<M, SourceFieldType>;
}
