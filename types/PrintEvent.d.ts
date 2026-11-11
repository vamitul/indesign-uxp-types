/**
 * PrintEvent.d.ts — indesign-uxp-types
 * Adobe InDesign 2027 (22.x) UXP scripting DOM declarations.
 * Version: 2.0.0 · Updated: 2026-11-11
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

// The event names PrintEvent carries as constants (G-F248). No block JSDoc: it would merge
// into the hover of the PrintEvent type.
export declare const PrintEvent: {
  /** Dispatched before a PrintEvent is printed. This event bubbles. This event is cancelable. */
  readonly BEFORE_PRINT: 'beforePrint';
  /** Dispatched after a PrintEvent is printed. This event bubbles. This event is not cancelable. */
  readonly AFTER_PRINT: 'afterPrint';
};
