/**
 * CharacterStyleGroup.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { Application } from './Application';
import type { CharacterStyle } from './CharacterStyle';
import type { CharacterStyles } from './CharacterStyles';
import type { CharacterStyleGroups } from './CharacterStyleGroups';
import type { ParagraphStyle } from './ParagraphStyle';
import type { StyleMoveReference } from './_base/Unions';
import type { LocationOptions } from './Enums/LocationOptions';

/**
 * A folder-like container for organizing {@link CharacterStyle} objects,
 * nestable inside a document's or the application's
 * {@link CharacterStyleGroups} collection (or another group).
 */
export interface CharacterStyleGroup<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Document | Application | CharacterStyleGroup, M>,
    IndexedDOMObject<Document | Application | CharacterStyleGroup, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'CharacterStyleGroup';

  /** Resolves the proxy into the individual {@link CharacterStyleGroup} objects it stands for. */
  getElements(): CharacterStyleGroup<'single'>[];

  /** The unique ID of the group, stable across saves and reopens. */
  readonly id: Read<M, number>;

  /** The name of the group. */
  get name(): Read<M, string>;
  set name(value: string);

  /** Every character style contained in this group, including those in nested groups. */
  readonly allCharacterStyles: Read<M, CharacterStyle[]>;

  /** The character styles directly contained in this group. */
  readonly characterStyles: CharacterStyles;

  /** The character style groups nested directly inside this group. */
  readonly characterStyleGroups: CharacterStyleGroups;

  /** Duplicates the group, along with its contained styles and nested groups. */
  duplicate(): Read<M, CharacterStyleGroup>;

  /**
   * Moves the group to a new position among its siblings.
   * @param reference The style, group, or root relative to which the group is moved. Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  move(to: LocationOptions, reference?: StyleMoveReference): Read<M, CharacterStyleGroup>;

  /**
   * Deletes the group and its contents.
   * @param replacingWith The style applied to any paragraphs or characters tagged with a style from this group. Left unstyled if omitted.
   */
  remove(replacingWith?: ParagraphStyle | CharacterStyle): Read<M, void>;
}
