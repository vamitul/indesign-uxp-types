/**
 * NamedGrid.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type {
  LabelableEventDOMObject,
  IndexedDOMObject,
  NamableDOMObject,
} from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { GridDataInformation } from './GridDataInformation';
import type { Preferences } from './Preferences';

/**
 * A named, reusable baseline/character grid definition, applicable to layout,
 * frame, and story grids.
 */
export interface NamedGrid<M extends Mode = 'single'>
  extends LabelableEventDOMObject<DocumentOrApplication, M>,
    IndexedDOMObject<DocumentOrApplication, M>,
    NamableDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'NamedGrid';

  /** Resolves the proxy into the individual {@link NamedGrid} objects it stands for. */
  getElements(): NamedGrid<'single'>[];

  /** The unique ID of the NamedGrid. */
  readonly id: Read<M, number>;

  /** The default grid properties for this named grid. */
  readonly gridData: Read<M, GridDataInformation>;

  /** A collection of preferences objects. */
  readonly preferences: Preferences;

  /** Deletes the NamedGrid. */
  remove(): Read<M, void>;
}
