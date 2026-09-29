/**
 * ValidationErrors.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { BaseCollection } from './_base/Collections';
import type { ValidationError } from './ValidationError';

/**
 * A collection of {@link ValidationError} objects. These errors represent
 * specific failures discovered during XML structure validation.
 *
 * @collection ValidationError
 */
export interface ValidationErrors extends BaseCollection<ValidationError, ValidationError, ValidationError<'plural'>> {
  /** The object's DOM class name. */
  readonly constructorName: 'ValidationErrors';
}
