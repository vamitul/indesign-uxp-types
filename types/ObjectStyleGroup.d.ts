/**
 * ObjectStyleGroup.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { Application } from './Application';
import type { ObjectStyle } from './ObjectStyle';
import type { ObjectStyles } from './ObjectStyles';
import type { ObjectStyleGroups } from './ObjectStyleGroups';
import type { LocationOptions } from './Enums/LocationOptions';

/**
 * A folder-like container for organizing {@link ObjectStyle} objects,
 * nestable inside a document's or the application's
 * {@link ObjectStyleGroups} collection (or another group).
 */
export interface ObjectStyleGroup<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Document | Application | ObjectStyleGroup, M>,
    IndexedDOMObject<Document | Application | ObjectStyleGroup, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'ObjectStyleGroup';

  /** Resolves the proxy into the individual {@link ObjectStyleGroup} objects it stands for. */
  getElements(): ObjectStyleGroup<'single'>[];

  /** The unique ID of the group, stable across saves and reopens. */
  readonly id: Read<M, number>;

  /** The name of the group. */
  get name(): Read<M, string>;
  set name(value: string);

  /** Every object style contained in this group, including those in nested groups. */
  readonly allObjectStyles: Read<M, ObjectStyle[]>;

  /** The object styles directly contained in this group. */
  readonly objectStyles: ObjectStyles;

  /** The object style groups nested directly inside this group. */
  readonly objectStyleGroups: ObjectStyleGroups;

  /** Duplicates the group, along with its contained styles and nested groups. */
  duplicate(): Read<M, ObjectStyleGroup>;

  /**
   * Moves the group to a new position among its siblings.
   * @param reference The style, group, or root relative to which the group is moved. Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  move(
    to: LocationOptions,
    reference?: ObjectStyle | ObjectStyleGroup | Document | Application,
  ): ObjectStyleGroup;

  /**
   * Deletes the group and its contents.
   * @param replacingWith The style applied to any objects tagged with a style from this group. Left unstyled if omitted.
   */
  remove(replacingWith?: ObjectStyle | string): Read<M, void>;
}
