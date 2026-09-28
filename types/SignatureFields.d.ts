/**
 * SignatureFields.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  AddablePageItemCollection,
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { SignatureField } from './SignatureField';
import type { PageItemParent } from './_base/Parents';
import type { LocationOptions } from './Enums/LocationOptions';
import type { Layer } from './Layer';

/**
 * A collection of {@link SignatureField} page items. Signature fields are
 * interactive form elements that allow users to apply digital signatures
 * to PDF documents.
 *
 * @collection SignatureField
 */
export interface SignatureFields<TParent = PageItemParent>
  extends
    BaseCollection<SignatureField<TParent>, SignatureField, SignatureField<TParent, 'plural'>>,
    IdCollection<SignatureField<TParent>>,
    NamedCollection<SignatureField<TParent>>,
    AddablePageItemCollection<SignatureField<TParent>, SignatureField> {
  /** The object's DOM class name. */
  readonly constructorName: 'SignatureFields';
}
