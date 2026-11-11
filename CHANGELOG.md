# Changelog

## 2.0.0

InDesign 2027. Modelled on the 22.0 object-model dictionary. Members new in 22.0 carry an `@since 22.0` tag. For InDesign 2026, stay on 1.x.

### Events, menus and scripts

- **Event-name constants.** `Application.AFTER_SELECTION_CHANGED`, `Document.BEFORE_SAVE`,
  `MenuAction.AFTER_INVOKE` and the rest: the 211 constants the dictionary lists on 56 classes, each
  typed as its event name, so it works with `addEventListener` like the string.
- **`beforeInvoke`, `onInvoke` and `afterInvoke`** type their `target` as the `MenuAction` that was
  invoked.
- **`menuElements.everyItem().getElements()`** returns `MenuItem | MenuSeparator | Submenu`, each with
  its own members, instead of the bare `MenuElement`.
- **`app.doScript(fn)`** returns what `fn` returns. Source text still returns `unknown`; its
  documentation says what each language hands back.

### Grammar checking

- **`checkGrammar()`, `getGrammarIssues()`, `requestGrammarCheck()`, `applyGrammarFix()` and `applyAllGrammarFixes()`** on `Document`, `Story`, `XmlStory`, `Text` and every text range (`Character`, `Word`, `Line`, `Paragraph`, `TextColumn`, `TextStyleRange`, `InsertionPoint`). The issues come back as a JSON string. The hover documentation lists each issue's fields.
- `applyGrammarFix()` returns a number, `1` or `0`, which is what UXP returns. The dictionary says boolean.

### Preferences and tables

- `app.grammarCheckPreference`, `app.copySuggestionsPreference`, `app.checkDocumentOnExportPreference`.
- `GeneralPreference.addAITagToTableSummary`, `ViewPreference.showAltTextIcon`.
- `Table.tableSummary` and `TableStyle.tableSummary`, the accessibility summary: a string, empty when unset.

### Not declared

The 22.0 dictionary also lists these, but UXP does not provide them in InDesign 22.0, so the package leaves them out:

- `app.parseJson()`, `app.parseJsonFile()`, `app.stringifyJson()`, `app.writeJsonFile()`.
- `GenAIModel`, `GenAIModels`, `GenAIImage`, `GenAIImages`, and `Document.genaiModels`.

These, the grammar cache that can corrupt text, and the other InDesign defects that scripts run into are in [KNOWN-ISSUES.md](KNOWN-ISSUES.md).

## 1.0.0

First public release.

### Installing and enabling

- **The package now declares the `indesign` module itself.** Add `"types": ["indesign-uxp-types"]`
  to tsconfig.json; no `paths` mapping is needed any more.
- **The flattened tree is the default** — short tooltips, same API. The authored, fully generic
  tree is `indesign-uxp-types/authored`.
- **Adobe's UXP types are a peer dependency** and are loaded by the package. Without them every
  `File` and `Folder` silently became `any`.

### Precision

- **`.parent` is exact in the flattened tree**: `spread.rectangles.item(0).parent` is `Spread`, as in
  the authored tree. The beta widened it to the general parent union.

### Files and folders

- **File parameters and setters accept a UXP `File` entry** as well as a path string —
  `app.open(file)`, `app.open([a, b])`, `frame.exportFile(format, file)`, `frame.place(file)`,
  `doc.save(file)`, `printPreferences.printFile = file`, and every other file slot.
- **Folder parameters take a path string only** — `packageUCF`, `unpackageUCF`, `packageForPrint`,
  `generateIDMLSchema`, `exportFolioToDirectory`, `generalPreferences.temporaryFolder`. InDesign
  rejects a `Folder` entry there.
- **Four getters are promises**, as every other file-valued getter is: `XMLExportPreference` and
  `XMLImportPreference.transformFilename`, `XMLExportPreference.preferredBrowser`, and
  `EventListener.handler` when it is a script file. They were typed as strings.

### InDesign 21.5

- Modelled on the 21.5 object-model dictionary, which also covers 21.6.
- `Document.updateTOC(using?)` takes an optional `TOCStyle` and returns nothing.
- `ObjectExportOption.altTextGenerationError` is writable.

## 1.0.0-beta.1

First beta, InDesign 21.3 dictionary, distributed to testers.
