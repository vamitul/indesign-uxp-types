/**
 * FlexLayoutAttributeOption.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { MeasurementValue } from './_base/Types';
import type { ObjectStyle } from './ObjectStyle';
import type { FlexDirection } from './Enums/FlexDirection';
import type { FlexEnum } from './Enums/FlexEnum';
import type { FlexPosition } from './Enums/FlexPosition';
import type { FlexSpacing } from './Enums/FlexSpacing';
import type { FlexWidthHeightMode } from './Enums/FlexWidthHeightMode';
import type { FlexWrap } from './Enums/FlexWrap';

/**
 * Options for applying flex layout attributes to a flex object.
 */
export interface FlexLayoutAttributeOption<M extends Mode = 'single'> extends EventTargetDOMObject<ObjectStyle, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'FlexLayoutAttributeOption';

  /** Resolves the proxy into the individual {@link FlexLayoutAttributeOption} objects it stands for. */
  getElements(): FlexLayoutAttributeOption<'single'>[];

  /** The width behavior of the flex container. */
  get flexWidthMode(): Read<M, FlexWidthHeightMode | FlexEnum>;
  set flexWidthMode(value: FlexWidthHeightMode | FlexEnum);

  /** The height behavior of the flex container. */
  get flexHeightMode(): Read<M, FlexWidthHeightMode | FlexEnum>;
  set flexHeightMode(value: FlexWidthHeightMode | FlexEnum);

  /** The direction of the flex container. */
  get flexDirection(): Read<M, FlexDirection>;
  set flexDirection(value: FlexDirection);

  /** Whether flex items are forced onto one line or can wrap onto multiple lines. */
  get flexWrap(): Read<M, FlexWrap>;
  set flexWrap(value: FlexWrap);

  /** Defines how the browser distributes space between and around content items along the main-axis. */
  get justifyContent(): Read<M, FlexPosition | FlexSpacing>;
  set justifyContent(value: FlexPosition | FlexSpacing);

  /** Defines the default behavior for how flex items are laid out along the cross axis. */
  get alignItems(): Read<M, FlexPosition | FlexEnum>;
  set alignItems(value: FlexPosition | FlexEnum);

  /** The top padding of the flex container. */
  get flexPaddingTop(): Read<M, number>;
  set flexPaddingTop(value: MeasurementValue);

  /** The right padding of the flex container. */
  get flexPaddingRight(): Read<M, number>;
  set flexPaddingRight(value: MeasurementValue);

  /** The bottom padding of the flex container. */
  get flexPaddingBottom(): Read<M, number>;
  set flexPaddingBottom(value: MeasurementValue);

  /** The left padding of the flex container. */
  get flexPaddingLeft(): Read<M, number>;
  set flexPaddingLeft(value: MeasurementValue);

  /** The row gap between flex items. */
  get flexGapRow(): Read<M, number>;
  set flexGapRow(value: MeasurementValue);

  /** Aligns a flex container's lines within when there is extra space in the cross-axis. */
  get alignContent(): Read<M, FlexPosition | FlexEnum>;
  set alignContent(value: FlexPosition | FlexEnum);

  /** The column gap between flex items. */
  get flexGapColumn(): Read<M, number>;
  set flexGapColumn(value: MeasurementValue);
}
