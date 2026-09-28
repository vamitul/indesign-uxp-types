/**
 * DialogRow.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { DialogColumn } from './DialogColumn';
import type { WidgetContainer } from './_base/WidgetMixins';
import type { DialogColumns } from './DialogColumns';

/**
 * A borderless row laid out inside a {@link DialogColumn} that holds
 * controls and nested {@link DialogColumn}s.
 */
export interface DialogRow<M extends Mode = 'single'>
  extends EventTargetDOMObject<DialogColumn, M>,
    IndexedDOMObject<DialogColumn, M>,
    WidgetContainer<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'DialogRow';

  /** Resolves the proxy into the individual {@link DialogRow} objects it stands for. */
  getElements(): DialogRow<'single'>[];

  /** The unique ID of the DialogRow. */
  readonly id: Read<M, number>;

  /** The columns nested directly inside the row. */
  readonly dialogColumns: DialogColumns;
}
