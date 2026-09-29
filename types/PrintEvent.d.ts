/**
 * PrintEvent.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Event } from './Event';
import type { Document } from './Document';
import type { DocumentPrintUiOptions } from './Enums/DocumentPrintUiOptions';
import type { LayoutWindow } from './LayoutWindow';

/**
 * An event dispatched before or after a document is printed.
 */
export interface PrintEvent<M extends Mode = 'single'> extends Event<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'PrintEvent';

  /** Resolves the proxy into the individual {@link PrintEvent} objects it stands for. */
  getElements(): PrintEvent<'single'>[];

  readonly parent: Read<M, Document>;

  /** How much of the print dialog is suppressed — see {@link DocumentPrintUiOptions}. */
  get documentPrintUiOption(): Read<M, DocumentPrintUiOptions>;
  set documentPrintUiOption(value: DocumentPrintUiOptions);
}
