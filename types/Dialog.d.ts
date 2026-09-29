/**
 * Dialog.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type {
  LabelableEventDOMObject,
  IndexedDOMObject,
  NamableDOMObject,
} from './_base/DomObjects';
import type { Application } from './Application';
import type { DialogColumns } from './DialogColumns';
import type { DialogColumn } from './DialogColumn';

/**
 * A custom modal dialog window built via scripting to gather user input or
 * display information.
 */
export interface Dialog<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Application, M>,
    IndexedDOMObject<Application, M>,
    NamableDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Dialog';

  /** Resolves the proxy into the individual {@link Dialog} objects it stands for. */
  getElements(): Dialog<'single'>[];

  /** The unique ID of the Dialog. */
  readonly id: Read<M, number>;

  /** The top-level {@link DialogColumn}s laid out in the dialog. */
  readonly dialogColumns: DialogColumns;

  /**
   * If `true`, the dialog shows a Cancel button alongside OK. If `false`,
   * only an OK button is shown.
   */
  get canCancel(): Read<M, boolean>;
  set canCancel(value: boolean);

  /** Destroys the dialog object. The dialog stays in memory until destroyed or the application quits. */
  destroy(): Read<M, void>;

  /** Displays the dialog and blocks until dismissed. */
  show(): Read<M, boolean>;
}
