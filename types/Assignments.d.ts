/**
 * Assignments.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { FilePath } from './_base/Types';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { Assignment } from './Assignment';
import { PropertiesSetter } from './_base/Properties';

/**
 * A collection of editorial {@link Assignment} objects. Assignments facilitate
 * collaborative workflows between InDesign and InCopy by grouping stories and
 * page items for checkout and editing.
 *
 * @collection Assignment
 */
export interface Assignments
  extends
    BaseCollection<Assignment, Assignment, Assignment<'plural'>>,
    IdCollection<Assignment>,
    NamedCollection<Assignment> {
  /** The object's DOM class name. */
  readonly constructorName: 'Assignments';

  /**
   * Creates a new assignment.
   *
   * @param filePath The full file system path where the assignment file (.icma) will be saved.
   * @param versionComments Optional comments for this initial version of the assignment.
   * @param forceSave If `true`, forcibly saves the assignment to disk. Defaults to `false`.
   * @param withProperties Initial values for properties of the new Assignment.
   */
  add(
    filePath: FilePath,
    versionComments?: string,
    forceSave?: boolean,
    withProperties?: PropertiesSetter<Assignment>,
  ): Assignment;
}
