/**
 * Assets.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { Asset } from './Asset';
import type { Library } from './Library';

/**
 * A collection of {@link Asset} objects within an InDesign {@link Library}.
 * Assets are the individual, reusable components—such as graphics, text blocks,
 * or groups—stored within the library.
 *
 * @collection Asset
 */
export interface Assets
  extends BaseCollection<Asset, Asset, Asset<'plural'>>, IdCollection<Asset>, NamedCollection<Asset> {
  /** The object's DOM class name. */
  readonly constructorName: 'Assets';
}
