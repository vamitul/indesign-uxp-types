/**
 * TextWrapPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { PageItemUnion } from './_base/Unions';
import type { MeasurementValue } from './_base/Types';
import type { Application } from './Application';
import type { ContourOption } from './ContourOption';
import type { Document } from './Document';
import type { FormField } from './FormField';
import type { ObjectStyle } from './ObjectStyle';
import type { Paths } from './Paths';
import type { Preferences } from './Preferences';
import type { NothingEnum } from './Enums/NothingEnum';
import type { TextWrapModes } from './Enums/TextWrapModes';
import type { TextWrapSideOptions } from './Enums/TextWrapSideOptions';

/**
 * Settings controlling how surrounding text wraps around an object — the wrap
 * shape, the offset from the object's edges, and which side(s) text flows along.
 */
export interface TextWrapPreference<M extends Mode = 'single'> extends EventTargetDOMObject<PageItemUnion | FormField | Application | Document | ObjectStyle, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'TextWrapPreference';

  /** Resolves the proxy into the individual {@link TextWrapPreference} objects it stands for. */
  getElements(): TextWrapPreference<'single'>[];

  /** The contour used when {@link textWrapMode} is {@link TextWrapModes.CONTOUR}. */
  readonly contourOptions: Read<M, ContourOption>;

  /** If true, the text wrap path has been explicitly modified by the user. */
  readonly userModifiedWrap: Read<M, boolean>;

  /** A collection of preferences objects. */
  readonly preferences: Preferences;

  /** A collection of paths. */
  readonly paths: Paths;

  /**
   * The minimum space between text and the edges of the wrapped object.
   *
   * The format for defining text wrap offset values depends on the text wrap type. If text
   * wrap type is jump object text wrap, specify 2 values in the format [top, bottom]. If text
   * wrap type is next column text wrap or contour, specify a single value. For bounding box
   * text wrap, specify 4 values in the format in the format [top, left, bottom, right].
   */
  get textWrapOffset(): Read<M, number | number[] | NothingEnum.NOTHING>;
  set textWrapOffset(value: MeasurementValue | number[] | NothingEnum.NOTHING);

  /** If true, inverts the text wrap. */
  get inverse(): Read<M, boolean>;
  set inverse(value: boolean);

  /** If true, text wraps on the master spread apply to that spread only, and not to any pages the master spread has been applied to. */
  get applyToMasterPageOnly(): Read<M, boolean>;
  set applyToMasterPageOnly(value: boolean);

  /** Which side(s) of the object text is allowed to flow along. See {@link TextWrapSideOptions}. */
  get textWrapSide(): Read<M, TextWrapSideOptions>;
  set textWrapSide(value: TextWrapSideOptions);

  /**
   * How text wraps around the object — not at all, jumping above and below,
   * jumping to the next column, around the bounding box, or around a custom
   * {@link contourOptions} shape. See {@link TextWrapModes}.
   */
  get textWrapMode(): Read<M, TextWrapModes>;
  set textWrapMode(value: TextWrapModes);
}
