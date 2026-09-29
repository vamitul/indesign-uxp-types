/**
 * DialogColumn.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { DialogContainerParent } from './_base/Parents';
import type { WidgetContainer } from './_base/WidgetMixins';
import type { DialogRows } from './DialogRows';
import type { Dialog } from './Dialog';
import type { DialogRow } from './DialogRow';

/**
 * A borderless column laid out inside a {@link Dialog} (or another dialog
 * container) that holds controls and nested {@link DialogRow}s.
 */
export interface DialogColumn<M extends Mode = 'single'>
  extends EventTargetDOMObject<DialogContainerParent, M>,
    IndexedDOMObject<DialogContainerParent, M>,
    WidgetContainer<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'DialogColumn';

  /** Resolves the proxy into the individual {@link DialogColumn} objects it stands for. */
  getElements(): DialogColumn<'single'>[];

  /** The unique ID of the DialogColumn. */
  readonly id: Read<M, number>;

  /** The rows nested directly inside the column. */
  readonly dialogRows: DialogRows;
}
