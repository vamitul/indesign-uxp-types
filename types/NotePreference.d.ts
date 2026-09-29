/**
 * NotePreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { InCopyUIColors } from './Enums/InCopyUIColors';
import type { NoteBackgrounds } from './Enums/NoteBackgrounds';
import type { NoteColorChoices } from './Enums/NoteColorChoices';

/**
 * Settings for how notes are colored, and how their content is treated by
 * Find/Change and Spell Check.
 */
export interface NotePreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'NotePreference';

  /** Resolves the proxy into the individual {@link NotePreference} objects it stands for. */
  getElements(): NotePreference<'single'>[];

  /** Whether a note's background uses the story-galley background color or its own {@link noteColor}. */
  get noteBackgroundColor(): Read<M, NoteBackgrounds>;
  set noteBackgroundColor(value: NoteBackgrounds);

  /** The note color, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as an InCopy UI color. */
  get noteColor(): Read<M, number[] | InCopyUIColors>;
  set noteColor(value: number[] | InCopyUIColors);

  /** If true, displays note information and some note content when the mouse pointer hovers over a note anchor in layout view or a note bookend in galley or story view. */
  get showNoteTips(): Read<M, boolean>;
  set showNoteTips(value: boolean);

  /** If true, includes inline notes content when using Find/Change commands (in Galley and Story views only). */
  get findAndReplaceNoteContents(): Read<M, boolean>;
  set findAndReplaceNoteContents(value: boolean);

  /** If true, includes inline notes content when using Spell Check (in Galley and Story views only). */
  get spellCheckNotes(): Read<M, boolean>;
  set spellCheckNotes(value: boolean);

  /** Whether a note uses the color assigned to the user, or the fixed {@link noteColor}. */
  get noteColorChoices(): Read<M, NoteColorChoices>;
  set noteColorChoices(value: NoteColorChoices);
}
