/**
 * CellStyleGroup.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { Application } from './Application';
import type { CellStyle } from './CellStyle';
import type { CellStyles } from './CellStyles';
import type { CellStyleGroups } from './CellStyleGroups';
import type { ParagraphStyle } from './ParagraphStyle';
import type { CharacterStyle } from './CharacterStyle';
import type { StyleMoveReference } from './_base/Unions';
import type { LocationOptions } from './Enums/LocationOptions';

/**
 * A folder-like container for organizing {@link CellStyle} objects,
 * nestable inside a document's or the application's
 * {@link CellStyleGroups} collection (or another group).
 */
export interface CellStyleGroup<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Document | Application | CellStyleGroup, M>,
    IndexedDOMObject<Document | Application | CellStyleGroup, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'CellStyleGroup';

  /** Resolves the proxy into the individual {@link CellStyleGroup} objects it stands for. */
  getElements(): CellStyleGroup<'single'>[];

  /** The unique ID of the group, stable across saves and reopens. */
  readonly id: Read<M, number>;

  /** The name of the group. */
  get name(): Read<M, string>;
  set name(value: string);

  /** Every cell style contained in this group, including those in nested groups. */
  readonly allCellStyles: Read<M, CellStyle[]>;

  /** The cell styles directly contained in this group. */
  readonly cellStyles: CellStyles;

  /** The cell style groups nested directly inside this group. */
  readonly cellStyleGroups: CellStyleGroups;

  /** Duplicates the group, along with its contained styles and nested groups. */
  duplicate(): Read<M, CellStyleGroup>;

  /**
   * Moves the group to a new position among its siblings.
   * @param reference The style, group, or root relative to which the group is moved. Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  move(to: LocationOptions, reference?: StyleMoveReference): Read<M, CellStyleGroup>;

  /**
   * Deletes the group and its contents.
   * @param replacingWith The style applied to any paragraphs or characters tagged with a style from this group. Left unstyled if omitted.
   */
  remove(replacingWith?: ParagraphStyle | CharacterStyle): Read<M, void>;
}
