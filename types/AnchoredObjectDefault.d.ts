/**
 * AnchoredObjectDefault.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { MeasurementValue } from './_base/Types';
import type { ObjectStyle } from './ObjectStyle';
import type { ParagraphStyle } from './ParagraphStyle';
import type { ContentType } from './Enums/ContentType';

/**
 * Default content type, size, and style applied to a new anchored object
 * when none are specified explicitly.
 */
export interface AnchoredObjectDefault<M extends Mode = 'single'> extends EventTargetDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'AnchoredObjectDefault';

  /** Resolves the proxy into the individual {@link AnchoredObjectDefault} objects it stands for. */
  getElements(): AnchoredObjectDefault<'single'>[];

  /** The initial frame type of a new anchored object. */
  get anchorContent(): Read<M, ContentType>;
  set anchorContent(value: ContentType);

  /** The initial height of a new anchored object. */
  get initialAnchorHeight(): Read<M, number>;
  set initialAnchorHeight(value: MeasurementValue);

  /** The initial width of a new anchored object. */
  get initialAnchorWidth(): Read<M, number>;
  set initialAnchorWidth(value: MeasurementValue);

  /** The initial paragraph style of a new anchored object. Note: Valid when anchor content is text. */
  get anchoredParagraphStyle(): Read<M, ParagraphStyle>;
  set anchoredParagraphStyle(value: ParagraphStyle);

  /** The initial object style of a new anchored object. */
  get anchoredObjectStyle(): Read<M, ObjectStyle>;
  set anchoredObjectStyle(value: ObjectStyle);
}
