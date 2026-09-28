/**
 * ClipboardPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';

/**
 * Settings controlling what format content copies and pastes in, and whether
 * PDF data placed on the system clipboard survives quitting the application.
 */
export interface ClipboardPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'ClipboardPreference';

  /** Resolves the proxy into the individual {@link ClipboardPreference} objects it stands for. */
  getElements(): ClipboardPreference<'single'>[];

  /** If true, includes text attributes when pasting text. */
  get preferStyledTextWhenPasting(): Read<M, boolean>;
  set preferStyledTextWhenPasting(value: boolean);

  /** If true, shows the Auto Style option. */
  get showAutoStyleOption(): Read<M, boolean>;
  set showAutoStyleOption(value: boolean);

  /** If true, pastes PDF if available. */
  get preferPDFWhenPasting(): Read<M, boolean>;
  set preferPDFWhenPasting(value: boolean);

  /** If true, copies PDF to the clipboard. */
  get copyPDFToClipboard(): Read<M, boolean>;
  set copyPDFToClipboard(value: boolean);

  /** If true, objects cut or copied from different layers retain their layer assignment when pasted. */
  get pasteRemembersLayers(): Read<M, boolean>;
  set pasteRemembersLayers(value: boolean);

  /** If true, preserves PDF data on the system clipboard when the application exits. */
  get preservePdfClipboardAtQuit(): Read<M, boolean>;
  set preservePdfClipboardAtQuit(value: boolean);

  /** If true, shows paste options when pasting. */
  get showPasteOptions(): Read<M, boolean>;
  set showPasteOptions(value: boolean);
}
