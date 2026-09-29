/**
 * TextPaths.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { TextPath } from './TextPath';

/**
 * A collection of {@link TextPath} objects. Text paths allow text to flow along
 * the visual edge of a path or graphic line, rather than within a rectangular frame.
 *
 * @collection TextPath
 */
export interface TextPaths
  extends
    BaseCollection<TextPath, TextPath, TextPath<'plural'>>,
    IdCollection<TextPath>,
    NamedCollection<TextPath> {
  /** The object's DOM class name. */
  readonly constructorName: 'TextPaths';

  /**
   * Creates a new text path on the parent object.
   * @param withProperties Initial values for properties of the new {@link TextPath}.
   */
  add(withProperties?: PropertiesSetter<TextPath>): TextPath;
}
