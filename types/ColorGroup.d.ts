/**
 * ColorGroup.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { ColorGroupSwatches } from './ColorGroupSwatches';
import type { Swatch } from './Swatch';
import type { ColorGroupSwatch } from './ColorGroupSwatch';

/**
 * A named group of {@link Swatch} references, shown together in the Swatches
 * panel — for example a palette imported from a library or another document.
 */
export interface ColorGroup<M extends Mode = 'single'>
  extends LabelableEventDOMObject<DocumentOrApplication, M>,
    IndexedDOMObject<DocumentOrApplication, M>,
    NamableDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'ColorGroup';

  /** Resolves the proxy into the individual {@link ColorGroup} objects it stands for. */
  getElements(): ColorGroup<'single'>[];

  /** The unique ID of the color group, stable across saves and reopens. */
  readonly id: Read<M, number>;

  /** The {@link ColorGroupSwatch} references this group contains. */
  readonly colorGroupSwatches: ColorGroupSwatches;

  /** Deletes the color group, leaving its swatches in the document. */
  remove(): Read<M, void>;

  /** Removes every swatch reference from the group without deleting the group itself. */
  ungroup(): Read<M, void>;

  /** Duplicates the color group and its swatch references. */
  duplicate(): Read<M, ColorGroup>;
}
