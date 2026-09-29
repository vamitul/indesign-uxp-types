/**
 * PublishExportPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { GIFOptionsPalette } from './Enums/GIFOptionsPalette';
import type { ImageConversion } from './Enums/ImageConversion';
import type { ImageResolution } from './Enums/ImageResolution';
import type { JPEGOptionsQuality } from './Enums/JPEGOptionsQuality';
import type { PageRangeFormat } from './Enums/PageRangeFormat';
import type { PublishCoverEnum } from './Enums/PublishCoverEnum';
import type { PublishFormatEnum } from './Enums/PublishFormatEnum';
import type { Event } from './Event';
import type { EventHandler } from './_base/Events';
import type { EventListener } from './EventListener';
import type { EventListeners } from './EventListeners';
import type { EventString } from './_base/Events';
import type { Events } from './Events';
import type { FilePath } from './_base/Types';
import type { InDesignEventMap } from './_base/Events';
import type { PropertiesGetter } from './_base/Properties';
import type { PropertiesSetter } from './_base/Properties';
/**
 * Publish export preferences.
 */
export interface PublishExportPreference {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Document;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<PublishExportPreference, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<PublishExportPreference, 'single'>);
  /**
   * Compares this object with another object to determine if they refer to the
   * exact same underlying InDesign DOM element.
   *
   * Use this instead of `==` or `===`: every property read mints a fresh
   * object, so two references to the same element still compare unequal by
   * reference.
   */
  equals(otherObject: any): boolean;
  /**
   * Generates a string which, if executed, will return the InDesign object referenced.
   */
  toSource(): string;
  /**
   * Generates the specifier string stringently mapping the path
   * to this object within the InDesign DOM hierarchy (e.g., `/document[@id=1]/rectangle[@id=242]`).
   */
  toSpecifier(): string;
  /**
   * The object's specifier string — the same value as {@link toSpecifier}, not a
   * human-readable description.
   */
  toString(): string;
  /**
   * A collection of events
   */
  readonly events: Events;
  /**
   * A collection of event listeners
   */
  readonly eventListeners: EventListeners;
  /**
   * Adds an event listener.
   * @param eventType The event to listen for, such as `beforeSave` or `afterOpen`.
   * @param handler Invoked when the event fires. Either a JavaScript function or a {@link FilePath} referencing an external script.
   * @param captures Obsolete and ignored. Defaults to `false`.
   */
  addEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): EventListener;
  addEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): EventListener;
  /**
   * Removes a previously registered event listener. The `eventType`, `handler`,
   * and `captures` must match those passed to {@link addEventListener}.
   * @param captures Obsolete and ignored. Defaults to `false`.
   * @returns `true` if a matching listener was found and removed.
   */
  removeEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): boolean;
  removeEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): boolean;
  /** The object's DOM class name. */
  readonly constructorName: 'PublishExportPreference';
  /** Resolves the proxy into the individual {@link PublishExportPreference} objects it stands for. */
  getElements(): PublishExportPreference[];
  /** Where the publish cover comes from — the document's first page, a chosen page, or an external image — see {@link PublishCoverEnum}. */
  get publishCover(): PublishCoverEnum;
  set publishCover(value: PublishCoverEnum);
  /** The epub cover image file path. */
  get coverImageFile(): string;
  set coverImageFile(value: string);
  /** The pages to publish, as a page range string; used when the export is not set to publish all pages. */
  get publishPageRange(): string;
  set publishPageRange(value: string);
  /** Whether all pages are published or only {@link publishPageRange} — see {@link PageRangeFormat}. */
  get publishPageRangeFormat(): PageRangeFormat;
  set publishPageRangeFormat(value: PageRangeFormat);
  /** The file format to use for converted images. */
  get imageConversion(): ImageConversion;
  set imageConversion(value: ImageConversion);
  /** The resolution, in pixels per inch, at which images are exported — see {@link ImageResolution}. */
  get imageExportResolution(): ImageResolution;
  set imageExportResolution(value: ImageResolution);
  /** The description shown alongside the published document. */
  get publishDescription(): string;
  set publishDescription(value: string);
  /** The file name. */
  get publishFileName(): string;
  set publishFileName(value: string);
  /** Whether the document is published page by page or spread by spread — see {@link PublishFormatEnum}. */
  get publishFormat(): PublishFormatEnum;
  set publishFormat(value: PublishFormatEnum);
  /** The page rasterised as the cover image, used when the cover option is a chosen page. */
  get coverPage(): string;
  set coverPage(value: string);
  /** The color palette for GIF conversion. Has no effect when {@link imageConversion} is JPEG. */
  get gifOptionsPalette(): GIFOptionsPalette;
  set gifOptionsPalette(value: GIFOptionsPalette);
  /** The quality of converted JPEG images. Has no effect when {@link imageConversion} is GIF. */
  get jpegOptionsQuality(): JPEGOptionsQuality;
  set jpegOptionsQuality(value: JPEGOptionsQuality);
  /** If PDF should be uploaded while publishing. */
  get publishPdf(): boolean;
  set publishPdf(value: boolean);
}


/**
 * The broadcast proxy for {@link PublishExportPreference} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link PublishExportPreference} there.
 */
export interface PublishExportPreferencePlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Document)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<PublishExportPreferencePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<PublishExportPreferencePlural, 'plural'>);
  /**
   * Compares this object with another object to determine if they refer to the
   * exact same underlying InDesign DOM element.
   *
   * Use this instead of `==` or `===`: every property read mints a fresh
   * object, so two references to the same element still compare unequal by
   * reference.
   */
  equals(otherObject: any): boolean;
  /**
   * Generates a string which, if executed, will return the InDesign object referenced.
   */
  toSource(): string;
  /**
   * Generates the specifier string stringently mapping the path
   * to this object within the InDesign DOM hierarchy (e.g., `/document[@id=1]/rectangle[@id=242]`).
   */
  toSpecifier(): string;
  /**
   * The object's specifier string — the same value as {@link toSpecifier}, not a
   * human-readable description.
   */
  toString(): string;
  /**
   * A collection of events
   */
  readonly events: Events;
  /**
   * A collection of event listeners
   */
  readonly eventListeners: EventListeners;
  /**
   * Adds an event listener.
   * @param eventType The event to listen for, such as `beforeSave` or `afterOpen`.
   * @param handler Invoked when the event fires. Either a JavaScript function or a {@link FilePath} referencing an external script.
   * @param captures Obsolete and ignored. Defaults to `false`.
   */
  addEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): EventListener;
  addEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): EventListener;
  /**
   * Removes a previously registered event listener. The `eventType`, `handler`,
   * and `captures` must match those passed to {@link addEventListener}.
   * @param captures Obsolete and ignored. Defaults to `false`.
   * @returns `true` if a matching listener was found and removed.
   */
  removeEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): boolean;
  removeEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): boolean;
  /** The object's DOM class name. */
  readonly constructorName: 'PublishExportPreference';
  /** Resolves the proxy into the individual {@link PublishExportPreference} objects it stands for. */
  getElements(): PublishExportPreference[];
  /** Where the publish cover comes from — the document's first page, a chosen page, or an external image — see {@link PublishCoverEnum}. */
  get publishCover(): (PublishCoverEnum)[];
  set publishCover(value: PublishCoverEnum);
  /** The epub cover image file path. */
  get coverImageFile(): (string)[];
  set coverImageFile(value: string);
  /** The pages to publish, as a page range string; used when the export is not set to publish all pages. */
  get publishPageRange(): (string)[];
  set publishPageRange(value: string);
  /** Whether all pages are published or only {@link publishPageRange} — see {@link PageRangeFormat}. */
  get publishPageRangeFormat(): (PageRangeFormat)[];
  set publishPageRangeFormat(value: PageRangeFormat);
  /** The file format to use for converted images. */
  get imageConversion(): (ImageConversion)[];
  set imageConversion(value: ImageConversion);
  /** The resolution, in pixels per inch, at which images are exported — see {@link ImageResolution}. */
  get imageExportResolution(): (ImageResolution)[];
  set imageExportResolution(value: ImageResolution);
  /** The description shown alongside the published document. */
  get publishDescription(): (string)[];
  set publishDescription(value: string);
  /** The file name. */
  get publishFileName(): (string)[];
  set publishFileName(value: string);
  /** Whether the document is published page by page or spread by spread — see {@link PublishFormatEnum}. */
  get publishFormat(): (PublishFormatEnum)[];
  set publishFormat(value: PublishFormatEnum);
  /** The page rasterised as the cover image, used when the cover option is a chosen page. */
  get coverPage(): (string)[];
  set coverPage(value: string);
  /** The color palette for GIF conversion. Has no effect when {@link imageConversion} is JPEG. */
  get gifOptionsPalette(): (GIFOptionsPalette)[];
  set gifOptionsPalette(value: GIFOptionsPalette);
  /** The quality of converted JPEG images. Has no effect when {@link imageConversion} is GIF. */
  get jpegOptionsQuality(): (JPEGOptionsQuality)[];
  set jpegOptionsQuality(value: JPEGOptionsQuality);
  /** If PDF should be uploaded while publishing. */
  get publishPdf(): (boolean)[];
  set publishPdf(value: boolean);
}
