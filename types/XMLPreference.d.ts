/**
 * XMLPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { UIColors } from './Enums/UIColors';

/**
 * Default tag names and colors InDesign assigns automatically to new story, table,
 * cell, and image elements, and whether an element is removed along with the
 * content it tags.
 */
export interface XMLPreference<M extends Mode = 'single'> extends EventTargetDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'XMLPreference';

  /** Resolves the proxy into the individual {@link XMLPreference} objects it stands for. */
  getElements(): XMLPreference<'single'>[];

  /** The preference for deleting the element when deleting the associated content like a page item or a text fragment. */
  get deleteElementOnContentDeletion(): Read<M, boolean>;
  set deleteElementOnContentDeletion(value: boolean);

  /** The name of the default tag to use for new story elements. Note: Either specifies an existing tag or creates a new tag. */
  get defaultStoryTagName(): Read<M, string>;
  set defaultStoryTagName(value: string);

  /**
   * The color of the default story tag, specified either as an array of three doubles, each
   * in the range 0 to 255 and representing R, G, and B values, or as a UI color.
   *
   * Notes: Valid only when default story tag name value creates a new tag. Does not update
   * the color of an existing tag.
   */
  get defaultStoryTagColor(): Read<M, number[] | UIColors>;
  set defaultStoryTagColor(value: number[] | UIColors);

  /** The name of the default tag to use for new table elements. Note: Either specifies an existing tag or creates a new tag. */
  get defaultTableTagName(): Read<M, string>;
  set defaultTableTagName(value: string);

  /**
   * The color of the default table tag, specified either as an array of three doubles, each
   * in the range 0 to 255 and representing R, G, and B values, or as a UI color.
   *
   * Notes: Valid only when default table tag name value creates a new tag. Does not update
   * the color of an existing tag.
   */
  get defaultTableTagColor(): Read<M, number[] | UIColors>;
  set defaultTableTagColor(value: number[] | UIColors);

  /** The name of the default tag to use for new table cell elements. Note: Either specifies an existing tag or creates a new tag. */
  get defaultCellTagName(): Read<M, string>;
  set defaultCellTagName(value: string);

  /**
   * The color of the default cell tag, specified either as an array of three doubles, each in
   * the range 0 to 255 and representing R, G, and B values, or as a UI color.
   *
   * Note: Valid only when default cell tag name value creates a new tag. Does not update the
   * color of an existing tag.
   */
  get defaultCellTagColor(): Read<M, number[] | UIColors>;
  set defaultCellTagColor(value: number[] | UIColors);

  /** The default name for new image elements created automatically. */
  get defaultImageTagName(): Read<M, string>;
  set defaultImageTagName(value: string);

  /** The color to give a new image tag, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Note: Used only when the tag needs to be created. */
  get defaultImageTagColor(): Read<M, number[] | UIColors>;
  set defaultImageTagColor(value: number[] | UIColors);
}
