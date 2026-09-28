/**
 * Ovals.d.ts — indesign-uxp-types
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
import type { Oval } from './Oval';
import type { PageItemParent } from './_base/Parents';
import type { LocationOptions } from './Enums/LocationOptions';
import type { Layer } from './Layer';

/**
 * A collection of {@link Oval} page items. Ovals (or ellipses) are geometric
 * frames that can be placed on a page, layer, or other container object.
 *
 * @collection Oval
 */
export interface Ovals<TParent = PageItemParent>
  extends
    BaseCollection<Oval<TParent>, Oval, Oval<TParent, 'plural'>>,
    IdCollection<Oval<TParent>>,
    NamedCollection<Oval<TParent>>,
    AddablePageItemCollection<Oval<TParent>, Oval> {
  /** The object's DOM class name. */
  readonly constructorName: 'Ovals';
}
