/**
 * TableStyleGroup.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { Application } from './Application';
import type { TableStyle } from './TableStyle';
import type { TableStyles } from './TableStyles';
import type { TableStyleGroups } from './TableStyleGroups';
import type { ParagraphStyle } from './ParagraphStyle';
import type { CharacterStyle } from './CharacterStyle';
import type { StyleMoveReference } from './_base/Unions';
import type { LocationOptions } from './Enums/LocationOptions';

/**
 * A folder-like container for organizing {@link TableStyle} objects,
 * nestable inside a document's or the application's
 * {@link TableStyleGroups} collection (or another group).
 */
export interface TableStyleGroup<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Document | Application | TableStyleGroup, M>,
    IndexedDOMObject<Document | Application | TableStyleGroup, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'TableStyleGroup';

  /** Resolves the proxy into the individual {@link TableStyleGroup} objects it stands for. */
  getElements(): TableStyleGroup<'single'>[];

  /** The unique ID of the group, stable across saves and reopens. */
  readonly id: Read<M, number>;

  /** The name of the group. */
  get name(): Read<M, string>;
  set name(value: string);

  /** Every table style contained in this group, including those in nested groups. */
  readonly allTableStyles: Read<M, TableStyle[]>;

  /** The table styles directly contained in this group. */
  readonly tableStyles: TableStyles;

  /** The table style groups nested directly inside this group. */
  readonly tableStyleGroups: TableStyleGroups;

  /** Duplicates the group, along with its contained styles and nested groups. */
  duplicate(): Read<M, TableStyleGroup>;

  /**
   * Moves the group to a new position among its siblings.
   * @param reference The style, group, or root relative to which the group is moved. Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  move(to: LocationOptions, reference?: StyleMoveReference): Read<M, TableStyleGroup>;

  /**
   * Deletes the group and its contents.
   * @param replacingWith The style applied to any paragraphs or characters tagged with a style from this group. Left unstyled if omitted.
   */
  remove(replacingWith?: ParagraphStyle | CharacterStyle): Read<M, void>;
}
