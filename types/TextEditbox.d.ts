/**
 * TextEditbox.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Widget } from './Widget';

/**
 * A free-text entry field.
 */
export interface TextEditbox<M extends Mode = 'single'> extends Widget<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'TextEditbox';

  /** Resolves the proxy into the individual {@link TextEditbox} objects it stands for. */
  getElements(): TextEditbox<'single'>[];

  /** The default text shown in the control. */
  get editContents(): Read<M, string>;
  set editContents(value: string);
}
