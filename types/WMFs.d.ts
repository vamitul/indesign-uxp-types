/**
 * WMFs.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { WMF } from './WMF';
import type { PageItemParent } from './_base/Parents';

/**
 * A collection of placed {@link WMF} (Windows Metafile) graphics within an
 * InDesign document.
 *
 * @collection WMF
 */
export interface WMFs<TParent = PageItemParent>
  extends BaseCollection<WMF<TParent>, WMF, WMF<TParent, 'plural'>>, IdCollection<WMF<TParent>>, NamedCollection<WMF<TParent>> {
  /** The object's DOM class name. */
  readonly constructorName: 'WMFs';
}
