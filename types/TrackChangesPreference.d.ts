/**
 * TrackChangesPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { ChangeBackgroundColorChoices } from './Enums/ChangeBackgroundColorChoices';
import type { ChangeMarkings } from './Enums/ChangeMarkings';
import type { ChangeTextColorChoices } from './Enums/ChangeTextColorChoices';
import type { ChangebarLocations } from './Enums/ChangebarLocations';
import type { InCopyUIColors } from './Enums/InCopyUIColors';

/**
 * Track changes preferences.
 */
export interface TrackChangesPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'TrackChangesPreference';

  /** Resolves the proxy into the individual {@link TrackChangesPreference} objects it stands for. */
  getElements(): TrackChangesPreference<'single'>[];

  /** The change bar color, specified as an InCopy UI color. */
  get changeBarColor(): Read<M, number[] | InCopyUIColors>;
  set changeBarColor(value: number[] | InCopyUIColors);

  /** If true, displays added text. */
  get showAddedText(): Read<M, boolean>;
  set showAddedText(value: boolean);

  /** If true, displays change bars. */
  get showChangeBars(): Read<M, boolean>;
  set showChangeBars(value: boolean);

  /** If true, displays deleted text. */
  get showDeletedText(): Read<M, boolean>;
  set showDeletedText(value: boolean);

  /** If true, displays moved text. */
  get showMovedText(): Read<M, boolean>;
  set showMovedText(value: boolean);

  /** If true, includes deleted text when using the Spell Check command. */
  get spellCheckDeletedText(): Read<M, boolean>;
  set spellCheckDeletedText(value: boolean);

  /** The color for added text. Applies only when {@link addedTextColorChoice} is {@link ChangeTextColorChoices.CHANGE_USES_CHANGE_PREF_COLOR}. */
  get textColorForAddedText(): Read<M, number[] | InCopyUIColors>;
  set textColorForAddedText(value: number[] | InCopyUIColors);

  /** The background color for added text. Applies only when {@link addedBackgroundColorChoice} is {@link ChangeBackgroundColorChoices.CHANGE_BACKGROUND_USES_CHANGE_PREF_COLOR}. */
  get backgroundColorForAddedText(): Read<M, number[] | InCopyUIColors>;
  set backgroundColorForAddedText(value: number[] | InCopyUIColors);

  /** The color for deleted text. Applies only when {@link deletedTextColorChoice} is {@link ChangeTextColorChoices.CHANGE_USES_CHANGE_PREF_COLOR}. */
  get textColorForDeletedText(): Read<M, number[] | InCopyUIColors>;
  set textColorForDeletedText(value: number[] | InCopyUIColors);

  /** The background color for deleted text. Applies only when {@link deletedBackgroundColorChoice} is {@link ChangeBackgroundColorChoices.CHANGE_BACKGROUND_USES_CHANGE_PREF_COLOR}. */
  get backgroundColorForDeletedText(): Read<M, number[] | InCopyUIColors>;
  set backgroundColorForDeletedText(value: number[] | InCopyUIColors);

  /** The color for moved text. Applies only when {@link movedTextColorChoice} is {@link ChangeTextColorChoices.CHANGE_USES_CHANGE_PREF_COLOR}. */
  get textColorForMovedText(): Read<M, number[] | InCopyUIColors>;
  set textColorForMovedText(value: number[] | InCopyUIColors);

  /** The background color for moved text. Applies only when {@link movedBackgroundColorChoice} is {@link ChangeBackgroundColorChoices.CHANGE_BACKGROUND_USES_CHANGE_PREF_COLOR}. */
  get backgroundColorForMovedText(): Read<M, number[] | InCopyUIColors>;
  set backgroundColorForMovedText(value: number[] | InCopyUIColors);

  /** How added text is marked — see {@link ChangeMarkings}. */
  get markingForAddedText(): Read<M, ChangeMarkings>;
  set markingForAddedText(value: ChangeMarkings);

  /** How deleted text is marked — see {@link ChangeMarkings}. */
  get markingForDeletedText(): Read<M, ChangeMarkings>;
  set markingForDeletedText(value: ChangeMarkings);

  /** How moved text is marked — see {@link ChangeMarkings}. */
  get markingForMovedText(): Read<M, ChangeMarkings>;
  set markingForMovedText(value: ChangeMarkings);

  /** Which margin change bars appear in — see {@link ChangebarLocations}. */
  get locationForChangeBar(): Read<M, ChangebarLocations>;
  set locationForChangeBar(value: ChangebarLocations);

  /** Whether added text uses the galley text color or {@link textColorForAddedText} — see {@link ChangeTextColorChoices}. */
  get addedTextColorChoice(): Read<M, ChangeTextColorChoices>;
  set addedTextColorChoice(value: ChangeTextColorChoices);

  /** Whether added text's background uses the galley background color, the current user's color, or {@link backgroundColorForAddedText} — see {@link ChangeBackgroundColorChoices}. */
  get addedBackgroundColorChoice(): Read<M, ChangeBackgroundColorChoices>;
  set addedBackgroundColorChoice(value: ChangeBackgroundColorChoices);

  /** Whether deleted text uses the galley text color or {@link textColorForDeletedText} — see {@link ChangeTextColorChoices}. */
  get deletedTextColorChoice(): Read<M, ChangeTextColorChoices>;
  set deletedTextColorChoice(value: ChangeTextColorChoices);

  /** Whether deleted text's background uses the galley background color, the current user's color, or {@link backgroundColorForDeletedText} — see {@link ChangeBackgroundColorChoices}. */
  get deletedBackgroundColorChoice(): Read<M, ChangeBackgroundColorChoices>;
  set deletedBackgroundColorChoice(value: ChangeBackgroundColorChoices);

  /** Whether moved text uses the galley text color or {@link textColorForMovedText} — see {@link ChangeTextColorChoices}. */
  get movedTextColorChoice(): Read<M, ChangeTextColorChoices>;
  set movedTextColorChoice(value: ChangeTextColorChoices);

  /** Whether moved text's background uses the galley background color, the current user's color, or {@link backgroundColorForMovedText} — see {@link ChangeBackgroundColorChoices}. */
  get movedBackgroundColorChoice(): Read<M, ChangeBackgroundColorChoices>;
  set movedBackgroundColorChoice(value: ChangeBackgroundColorChoices);

  /** If true, keeps this user's tracked-changes background color from duplicating another user's. */
  get preventDuplicateColor(): Read<M, boolean>;
  set preventDuplicateColor(value: boolean);
}
