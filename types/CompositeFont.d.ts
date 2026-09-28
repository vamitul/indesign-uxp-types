/**
 * CompositeFont.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { Document } from './Document';
import type { CompositeFontEntries } from './CompositeFontEntries';
import type { CompositeFontEntry } from './CompositeFontEntry';

/**
 * A composite font: a named set of {@link CompositeFontEntry} slots that each
 * substitute a different font (and scale/baseline adjustment) for a Unicode
 * character range, letting CJK and Latin text share one applied font name.
 */
export interface CompositeFont<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Application | Document, M>,
    IndexedDOMObject<Application | Document, M>,
    NamableDOMObject<Application | Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'CompositeFont';

  /** Resolves the proxy into the individual {@link CompositeFont} objects it stands for. */
  getElements(): CompositeFont<'single'>[];

  /** The unique ID of the composite font, stable across saves and reopens. */
  readonly id: Read<M, number>;

  /** The {@link CompositeFontEntry} slots that make up this composite font. */
  readonly compositeFontEntries: CompositeFontEntries;

  /** Deletes the composite font. */
  remove(): Read<M, void>;
}
