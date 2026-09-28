/**
 * EPSs.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { EPS } from './EPS';
import type { PageItemParent } from './_base/Parents';

/**
 * A collection of placed {@link EPS} graphics within an InDesign document.
 * EPS items support specific settings for OPI replacement and color management.
 *
 * @collection EPS
 */
export interface EPSs<TParent = PageItemParent>
  extends BaseCollection<EPS<TParent>, EPS, EPS<TParent, 'plural'>>, IdCollection<EPS<TParent>>, NamedCollection<EPS<TParent>> {
  /** The object's DOM class name. */
  readonly constructorName: 'EPSs';
}
