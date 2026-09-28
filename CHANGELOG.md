# Changelog

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
