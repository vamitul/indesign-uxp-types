/**
 * MapType.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __MapType: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface MapType extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<MapType>): boolean;

  /**
   * @internal **WARNING:** `__MapType` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__MapType]: never;
}


/**
 * Maps one style to another style.
 */
interface MapType_STYLE_MAPPING_RULE extends MapType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1937011570;
}

/**
 * Maps one style group to another style group.
 */
interface MapType_GROUP_MAPPING_RULE extends MapType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1735681906;
}

/**
 * Maps a style to a style group.
 */
interface MapType_STYLE_TO_GROUP_MAPPING_RULE extends MapType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1937008498;
}

/**
 * Maps a style group to a style.
 */
interface MapType_GROUP_TO_STYLE_MAPPING_RULE extends MapType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1735684978;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Mapping type for style mappings.
 */
export declare namespace MapType {
/**
 * style to style mapping rule.
 */
type STYLE_MAPPING_RULE = MapType_STYLE_MAPPING_RULE;

/**
 * group to group mapping rule.
 */
type GROUP_MAPPING_RULE = MapType_GROUP_MAPPING_RULE;

/**
 * style to group mapping rule.
 */
type STYLE_TO_GROUP_MAPPING_RULE = MapType_STYLE_TO_GROUP_MAPPING_RULE;

/**
 * group to style mapping rule.
 */
type GROUP_TO_STYLE_MAPPING_RULE = MapType_GROUP_TO_STYLE_MAPPING_RULE;

}
/**
 * Mapping type for style mappings.
 */
export declare const MapType: typeof Enumeration & {

  /**
   * Maps one style to another style.
   */
  readonly STYLE_MAPPING_RULE: MapType_STYLE_MAPPING_RULE;
  /**
   * Maps one style to another style.
   */
  readonly styleMappingRule: MapType_STYLE_MAPPING_RULE;
  /**
   * Maps one style to another style.
   */
  readonly stylemappingrule: MapType_STYLE_MAPPING_RULE;

  /**
   * Maps one style group to another style group.
   */
  readonly GROUP_MAPPING_RULE: MapType_GROUP_MAPPING_RULE;
  /**
   * Maps one style group to another style group.
   */
  readonly groupMappingRule: MapType_GROUP_MAPPING_RULE;
  /**
   * Maps one style group to another style group.
   */
  readonly groupmappingrule: MapType_GROUP_MAPPING_RULE;

  /**
   * Maps a style to a style group.
   */
  readonly STYLE_TO_GROUP_MAPPING_RULE: MapType_STYLE_TO_GROUP_MAPPING_RULE;
  /**
   * Maps a style to a style group.
   */
  readonly styleToGroupMappingRule: MapType_STYLE_TO_GROUP_MAPPING_RULE;
  /**
   * Maps a style to a style group.
   */
  readonly styletogroupmappingrule: MapType_STYLE_TO_GROUP_MAPPING_RULE;

  /**
   * Maps a style group to a style.
   */
  readonly GROUP_TO_STYLE_MAPPING_RULE: MapType_GROUP_TO_STYLE_MAPPING_RULE;
  /**
   * Maps a style group to a style.
   */
  readonly groupToStyleMappingRule: MapType_GROUP_TO_STYLE_MAPPING_RULE;
  /**
   * Maps a style group to a style.
   */
  readonly grouptostylemappingrule: MapType_GROUP_TO_STYLE_MAPPING_RULE;

}
