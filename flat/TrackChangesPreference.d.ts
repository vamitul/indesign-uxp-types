/**
 * TrackChangesPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
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
import type { Event } from './Event';
import type { EventHandler } from './_base/Events';
import type { EventListener } from './EventListener';
import type { EventListeners } from './EventListeners';
import type { EventString } from './_base/Events';
import type { Events } from './Events';
import type { FilePath } from './_base/Types';
import type { InDesignEventMap } from './_base/Events';
import type { PropertiesGetter } from './_base/Properties';
import type { PropertiesSetter } from './_base/Properties';
/**
 * Track changes preferences.
 */
export interface TrackChangesPreference {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Application;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<TrackChangesPreference, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<TrackChangesPreference, 'single'>);
  /**
   * Compares this object with another object to determine if they refer to the
   * exact same underlying InDesign DOM element.
   *
   * Use this instead of `==` or `===`: every property read mints a fresh
   * object, so two references to the same element still compare unequal by
   * reference.
   */
  equals(otherObject: any): boolean;
  /**
   * Generates a string which, if executed, will return the InDesign object referenced.
   */
  toSource(): string;
  /**
   * Generates the specifier string stringently mapping the path
   * to this object within the InDesign DOM hierarchy (e.g., `/document[@id=1]/rectangle[@id=242]`).
   */
  toSpecifier(): string;
  /**
   * The object's specifier string — the same value as {@link toSpecifier}, not a
   * human-readable description.
   */
  toString(): string;
  /**
   * A collection of events
   */
  readonly events: Events;
  /**
   * A collection of event listeners
   */
  readonly eventListeners: EventListeners;
  /**
   * Adds an event listener.
   * @param eventType The event to listen for, such as `beforeSave` or `afterOpen`.
   * @param handler Invoked when the event fires. Either a JavaScript function or a {@link FilePath} referencing an external script.
   * @param captures Obsolete and ignored. Defaults to `false`.
   */
  addEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): EventListener;
  addEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): EventListener;
  /**
   * Removes a previously registered event listener. The `eventType`, `handler`,
   * and `captures` must match those passed to {@link addEventListener}.
   * @param captures Obsolete and ignored. Defaults to `false`.
   * @returns `true` if a matching listener was found and removed.
   */
  removeEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): boolean;
  removeEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): boolean;
  /** The object's DOM class name. */
  readonly constructorName: 'TrackChangesPreference';
  /** Resolves the proxy into the individual {@link TrackChangesPreference} objects it stands for. */
  getElements(): TrackChangesPreference[];
  /** The change bar color, specified as an InCopy UI color. */
  get changeBarColor(): number[] | InCopyUIColors;
  set changeBarColor(value: number[] | InCopyUIColors);
  /** If true, displays added text. */
  get showAddedText(): boolean;
  set showAddedText(value: boolean);
  /** If true, displays change bars. */
  get showChangeBars(): boolean;
  set showChangeBars(value: boolean);
  /** If true, displays deleted text. */
  get showDeletedText(): boolean;
  set showDeletedText(value: boolean);
  /** If true, displays moved text. */
  get showMovedText(): boolean;
  set showMovedText(value: boolean);
  /** If true, includes deleted text when using the Spell Check command. */
  get spellCheckDeletedText(): boolean;
  set spellCheckDeletedText(value: boolean);
  /** The color for added text. Applies only when {@link addedTextColorChoice} is {@link ChangeTextColorChoices.CHANGE_USES_CHANGE_PREF_COLOR}. */
  get textColorForAddedText(): number[] | InCopyUIColors;
  set textColorForAddedText(value: number[] | InCopyUIColors);
  /** The background color for added text. Applies only when {@link addedBackgroundColorChoice} is {@link ChangeBackgroundColorChoices.CHANGE_BACKGROUND_USES_CHANGE_PREF_COLOR}. */
  get backgroundColorForAddedText(): number[] | InCopyUIColors;
  set backgroundColorForAddedText(value: number[] | InCopyUIColors);
  /** The color for deleted text. Applies only when {@link deletedTextColorChoice} is {@link ChangeTextColorChoices.CHANGE_USES_CHANGE_PREF_COLOR}. */
  get textColorForDeletedText(): number[] | InCopyUIColors;
  set textColorForDeletedText(value: number[] | InCopyUIColors);
  /** The background color for deleted text. Applies only when {@link deletedBackgroundColorChoice} is {@link ChangeBackgroundColorChoices.CHANGE_BACKGROUND_USES_CHANGE_PREF_COLOR}. */
  get backgroundColorForDeletedText(): number[] | InCopyUIColors;
  set backgroundColorForDeletedText(value: number[] | InCopyUIColors);
  /** The color for moved text. Applies only when {@link movedTextColorChoice} is {@link ChangeTextColorChoices.CHANGE_USES_CHANGE_PREF_COLOR}. */
  get textColorForMovedText(): number[] | InCopyUIColors;
  set textColorForMovedText(value: number[] | InCopyUIColors);
  /** The background color for moved text. Applies only when {@link movedBackgroundColorChoice} is {@link ChangeBackgroundColorChoices.CHANGE_BACKGROUND_USES_CHANGE_PREF_COLOR}. */
  get backgroundColorForMovedText(): number[] | InCopyUIColors;
  set backgroundColorForMovedText(value: number[] | InCopyUIColors);
  /** How added text is marked — see {@link ChangeMarkings}. */
  get markingForAddedText(): ChangeMarkings;
  set markingForAddedText(value: ChangeMarkings);
  /** How deleted text is marked — see {@link ChangeMarkings}. */
  get markingForDeletedText(): ChangeMarkings;
  set markingForDeletedText(value: ChangeMarkings);
  /** How moved text is marked — see {@link ChangeMarkings}. */
  get markingForMovedText(): ChangeMarkings;
  set markingForMovedText(value: ChangeMarkings);
  /** Which margin change bars appear in — see {@link ChangebarLocations}. */
  get locationForChangeBar(): ChangebarLocations;
  set locationForChangeBar(value: ChangebarLocations);
  /** Whether added text uses the galley text color or {@link textColorForAddedText} — see {@link ChangeTextColorChoices}. */
  get addedTextColorChoice(): ChangeTextColorChoices;
  set addedTextColorChoice(value: ChangeTextColorChoices);
  /** Whether added text's background uses the galley background color, the current user's color, or {@link backgroundColorForAddedText} — see {@link ChangeBackgroundColorChoices}. */
  get addedBackgroundColorChoice(): ChangeBackgroundColorChoices;
  set addedBackgroundColorChoice(value: ChangeBackgroundColorChoices);
  /** Whether deleted text uses the galley text color or {@link textColorForDeletedText} — see {@link ChangeTextColorChoices}. */
  get deletedTextColorChoice(): ChangeTextColorChoices;
  set deletedTextColorChoice(value: ChangeTextColorChoices);
  /** Whether deleted text's background uses the galley background color, the current user's color, or {@link backgroundColorForDeletedText} — see {@link ChangeBackgroundColorChoices}. */
  get deletedBackgroundColorChoice(): ChangeBackgroundColorChoices;
  set deletedBackgroundColorChoice(value: ChangeBackgroundColorChoices);
  /** Whether moved text uses the galley text color or {@link textColorForMovedText} — see {@link ChangeTextColorChoices}. */
  get movedTextColorChoice(): ChangeTextColorChoices;
  set movedTextColorChoice(value: ChangeTextColorChoices);
  /** Whether moved text's background uses the galley background color, the current user's color, or {@link backgroundColorForMovedText} — see {@link ChangeBackgroundColorChoices}. */
  get movedBackgroundColorChoice(): ChangeBackgroundColorChoices;
  set movedBackgroundColorChoice(value: ChangeBackgroundColorChoices);
  /** If true, keeps this user's tracked-changes background color from duplicating another user's. */
  get preventDuplicateColor(): boolean;
  set preventDuplicateColor(value: boolean);
}


/**
 * The broadcast proxy for {@link TrackChangesPreference} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link TrackChangesPreference} there.
 */
export interface TrackChangesPreferencePlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Application)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<TrackChangesPreferencePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<TrackChangesPreferencePlural, 'plural'>);
  /**
   * Compares this object with another object to determine if they refer to the
   * exact same underlying InDesign DOM element.
   *
   * Use this instead of `==` or `===`: every property read mints a fresh
   * object, so two references to the same element still compare unequal by
   * reference.
   */
  equals(otherObject: any): boolean;
  /**
   * Generates a string which, if executed, will return the InDesign object referenced.
   */
  toSource(): string;
  /**
   * Generates the specifier string stringently mapping the path
   * to this object within the InDesign DOM hierarchy (e.g., `/document[@id=1]/rectangle[@id=242]`).
   */
  toSpecifier(): string;
  /**
   * The object's specifier string — the same value as {@link toSpecifier}, not a
   * human-readable description.
   */
  toString(): string;
  /**
   * A collection of events
   */
  readonly events: Events;
  /**
   * A collection of event listeners
   */
  readonly eventListeners: EventListeners;
  /**
   * Adds an event listener.
   * @param eventType The event to listen for, such as `beforeSave` or `afterOpen`.
   * @param handler Invoked when the event fires. Either a JavaScript function or a {@link FilePath} referencing an external script.
   * @param captures Obsolete and ignored. Defaults to `false`.
   */
  addEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): EventListener;
  addEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): EventListener;
  /**
   * Removes a previously registered event listener. The `eventType`, `handler`,
   * and `captures` must match those passed to {@link addEventListener}.
   * @param captures Obsolete and ignored. Defaults to `false`.
   * @returns `true` if a matching listener was found and removed.
   */
  removeEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): boolean;
  removeEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): boolean;
  /** The object's DOM class name. */
  readonly constructorName: 'TrackChangesPreference';
  /** Resolves the proxy into the individual {@link TrackChangesPreference} objects it stands for. */
  getElements(): TrackChangesPreference[];
  /** The change bar color, specified as an InCopy UI color. */
  get changeBarColor(): (number[] | InCopyUIColors)[];
  set changeBarColor(value: number[] | InCopyUIColors);
  /** If true, displays added text. */
  get showAddedText(): (boolean)[];
  set showAddedText(value: boolean);
  /** If true, displays change bars. */
  get showChangeBars(): (boolean)[];
  set showChangeBars(value: boolean);
  /** If true, displays deleted text. */
  get showDeletedText(): (boolean)[];
  set showDeletedText(value: boolean);
  /** If true, displays moved text. */
  get showMovedText(): (boolean)[];
  set showMovedText(value: boolean);
  /** If true, includes deleted text when using the Spell Check command. */
  get spellCheckDeletedText(): (boolean)[];
  set spellCheckDeletedText(value: boolean);
  /** The color for added text. Applies only when {@link addedTextColorChoice} is {@link ChangeTextColorChoices.CHANGE_USES_CHANGE_PREF_COLOR}. */
  get textColorForAddedText(): (number[] | InCopyUIColors)[];
  set textColorForAddedText(value: number[] | InCopyUIColors);
  /** The background color for added text. Applies only when {@link addedBackgroundColorChoice} is {@link ChangeBackgroundColorChoices.CHANGE_BACKGROUND_USES_CHANGE_PREF_COLOR}. */
  get backgroundColorForAddedText(): (number[] | InCopyUIColors)[];
  set backgroundColorForAddedText(value: number[] | InCopyUIColors);
  /** The color for deleted text. Applies only when {@link deletedTextColorChoice} is {@link ChangeTextColorChoices.CHANGE_USES_CHANGE_PREF_COLOR}. */
  get textColorForDeletedText(): (number[] | InCopyUIColors)[];
  set textColorForDeletedText(value: number[] | InCopyUIColors);
  /** The background color for deleted text. Applies only when {@link deletedBackgroundColorChoice} is {@link ChangeBackgroundColorChoices.CHANGE_BACKGROUND_USES_CHANGE_PREF_COLOR}. */
  get backgroundColorForDeletedText(): (number[] | InCopyUIColors)[];
  set backgroundColorForDeletedText(value: number[] | InCopyUIColors);
  /** The color for moved text. Applies only when {@link movedTextColorChoice} is {@link ChangeTextColorChoices.CHANGE_USES_CHANGE_PREF_COLOR}. */
  get textColorForMovedText(): (number[] | InCopyUIColors)[];
  set textColorForMovedText(value: number[] | InCopyUIColors);
  /** The background color for moved text. Applies only when {@link movedBackgroundColorChoice} is {@link ChangeBackgroundColorChoices.CHANGE_BACKGROUND_USES_CHANGE_PREF_COLOR}. */
  get backgroundColorForMovedText(): (number[] | InCopyUIColors)[];
  set backgroundColorForMovedText(value: number[] | InCopyUIColors);
  /** How added text is marked — see {@link ChangeMarkings}. */
  get markingForAddedText(): (ChangeMarkings)[];
  set markingForAddedText(value: ChangeMarkings);
  /** How deleted text is marked — see {@link ChangeMarkings}. */
  get markingForDeletedText(): (ChangeMarkings)[];
  set markingForDeletedText(value: ChangeMarkings);
  /** How moved text is marked — see {@link ChangeMarkings}. */
  get markingForMovedText(): (ChangeMarkings)[];
  set markingForMovedText(value: ChangeMarkings);
  /** Which margin change bars appear in — see {@link ChangebarLocations}. */
  get locationForChangeBar(): (ChangebarLocations)[];
  set locationForChangeBar(value: ChangebarLocations);
  /** Whether added text uses the galley text color or {@link textColorForAddedText} — see {@link ChangeTextColorChoices}. */
  get addedTextColorChoice(): (ChangeTextColorChoices)[];
  set addedTextColorChoice(value: ChangeTextColorChoices);
  /** Whether added text's background uses the galley background color, the current user's color, or {@link backgroundColorForAddedText} — see {@link ChangeBackgroundColorChoices}. */
  get addedBackgroundColorChoice(): (ChangeBackgroundColorChoices)[];
  set addedBackgroundColorChoice(value: ChangeBackgroundColorChoices);
  /** Whether deleted text uses the galley text color or {@link textColorForDeletedText} — see {@link ChangeTextColorChoices}. */
  get deletedTextColorChoice(): (ChangeTextColorChoices)[];
  set deletedTextColorChoice(value: ChangeTextColorChoices);
  /** Whether deleted text's background uses the galley background color, the current user's color, or {@link backgroundColorForDeletedText} — see {@link ChangeBackgroundColorChoices}. */
  get deletedBackgroundColorChoice(): (ChangeBackgroundColorChoices)[];
  set deletedBackgroundColorChoice(value: ChangeBackgroundColorChoices);
  /** Whether moved text uses the galley text color or {@link textColorForMovedText} — see {@link ChangeTextColorChoices}. */
  get movedTextColorChoice(): (ChangeTextColorChoices)[];
  set movedTextColorChoice(value: ChangeTextColorChoices);
  /** Whether moved text's background uses the galley background color, the current user's color, or {@link backgroundColorForMovedText} — see {@link ChangeBackgroundColorChoices}. */
  get movedBackgroundColorChoice(): (ChangeBackgroundColorChoices)[];
  set movedBackgroundColorChoice(value: ChangeBackgroundColorChoices);
  /** If true, keeps this user's tracked-changes background color from duplicating another user's. */
  get preventDuplicateColor(): (boolean)[];
  set preventDuplicateColor(value: boolean);
}
