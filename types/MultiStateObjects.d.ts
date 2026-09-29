/**
 * MultiStateObjects.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  AddablePageItemCollection,
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { MultiStateObject } from './MultiStateObject';
import type { PageItemParent } from './_base/Parents';
import type { LocationOptions } from './Enums/LocationOptions';
import type { Layer } from './Layer';

/**
 * A collection of {@link MultiStateObject} (MSO) page items. MSOs contain
 * multiple appearance states, typically used for creating interactive
 * slideshows or buttons with complex visual behaviors.
 *
 * @collection MultiStateObject
 */
export interface MultiStateObjects<TParent = PageItemParent>
  extends
    BaseCollection<MultiStateObject<TParent>, MultiStateObject, MultiStateObject<TParent, 'plural'>>,
    IdCollection<MultiStateObject<TParent>>,
    NamedCollection<MultiStateObject<TParent>>,
    AddablePageItemCollection<MultiStateObject<TParent>, MultiStateObject> {
  /** The object's DOM class name. */
  readonly constructorName: 'MultiStateObjects';
}
