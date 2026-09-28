/**
 * TransformAttributeOption.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { MeasurementValue } from './_base/Types';
import type { ObjectStyle } from './ObjectStyle';
import type { AnchorPoint } from './Enums/AnchorPoint';
import type { TransformPositionReference } from './Enums/TransformPositionReference';

/**
 * Options for applying layout attributes to any page item.
 */
export interface TransformAttributeOption<M extends Mode = 'single'> extends EventTargetDOMObject<ObjectStyle, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'TransformAttributeOption';

  /** Resolves the proxy into the individual {@link TransformAttributeOption} objects it stands for. */
  getElements(): TransformAttributeOption<'single'>[];

  /** The left position of the object, defined by the object style. */
  get transformAttrX(): Read<M, number>;
  set transformAttrX(value: MeasurementValue);

  /** The top position of the object, defined by the object style. */
  get transformAttrY(): Read<M, number>;
  set transformAttrY(value: MeasurementValue);

  /** The width of the object, defined by the object style. */
  get transformAttrWidth(): Read<M, number>;
  set transformAttrWidth(value: MeasurementValue);

  /** The height of the object, defined by the object style. */
  get transformAttrHeight(): Read<M, number>;
  set transformAttrHeight(value: MeasurementValue);

  /** The reference point used when applying {@link transformAttrX}. */
  get transformAttrLeftReference(): Read<M, TransformPositionReference>;
  set transformAttrLeftReference(value: TransformPositionReference);

  /** The reference point used when applying {@link transformAttrY}. */
  get transformAttrTopReference(): Read<M, TransformPositionReference>;
  set transformAttrTopReference(value: TransformPositionReference);

  /** The anchor point used when applying the object's position. */
  get transformAttrRefAnchorPoint(): Read<M, AnchorPoint>;
  set transformAttrRefAnchorPoint(value: AnchorPoint);
}
