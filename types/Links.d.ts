/**
 * Links.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { Link } from './Link';

/**
 * A collection of {@link Link} objects. Links represent the connection
 * between the document and its external assets, such as placed graphics
 * or imported text files.
 *
 * @collection Link
 */
export interface Links
  extends BaseCollection<Link, Link, Link<'plural'>>, IdCollection<Link>, NamedCollection<Link> {
  /** The object's DOM class name. */
  readonly constructorName: 'Links';
}
