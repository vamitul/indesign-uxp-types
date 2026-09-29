/**
 * ValidationError.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { XMLElement } from './XMLElement';

/**
 * A single XML validation failure reported when a {@link Document}'s XML
 * content is checked against its DTD.
 */
export interface ValidationError<M extends Mode = 'single'>
  extends EventTargetDOMObject<Document, M>,
    IndexedDOMObject<Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'ValidationError';

  /** Resolves the proxy into the individual {@link ValidationError} objects it stands for. */
  getElements(): ValidationError<'single'>[];

  /** The element that caused the validation error. */
  readonly element: Read<M, XMLElement>;

  /** The attribute name, when the validation error refers to an attribute. */
  readonly attributeName: Read<M, string>;

  /** The validation error message. */
  readonly errorMessage: Read<M, string>;
}
