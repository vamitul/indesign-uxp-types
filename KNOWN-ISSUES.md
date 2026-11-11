# Known InDesign issues

These are problems in InDesign itself, not in this package, that a script written against these types will run into. Each one was measured in InDesign 2027, build 22.0.0.104, on Windows 11, unless the section says otherwise. I re-test them on every new build and update this file, so check it again when you update InDesign.

The hover documentation in the types does not mention any of this. A defect Adobe fixes in the next build would leave a wrong sentence in your editor, so the notes live here instead.

| Issue | Where | What the types do |
|---|---|---|
| [JSON methods missing from UXP](#the-json-methods) | `Application` | left out |
| [Gen AI classes missing from UXP](#the-gen-ai-classes) | `GenAIModel`, `GenAIImage`, `Document.genaiModels` | left out |
| [Reading `checkDocumentOnExportPreference` throws](#checkdocumentonexportpreference) | `Application` | declared, as in the dictionary |
| [Grammar fixes corrupt text after an edit](#a-stale-cache-corrupts-text) | every text object | declared, as in the dictionary |
| [Grammar checks and fixes cover the whole story](#every-text-object-means-the-whole-story) | every text object | declared, as in the dictionary |
| [`applyGrammarFix` returns a number](#applygrammarfix-returns-a-number) | every text object | `number`, as UXP returns it |
| [`printFile` getter rejects](#printfile-rejects-on-read) | `PrintPreference` | `Promise<File>`, as intended |
| [`isValid` on an event breaks the event](#isvalid-on-an-event) | `Event` and subclasses | declared |
| [`currentTarget` is always `null`](#currenttarget-is-always-null) | `Event` and subclasses | `unknown` |
| [Application listeners crash InDesign](#application-level-listeners-crash-indesign) | `app.eventListeners` | declared |

I have reported the 22.0 issues to Adobe. If your build gives a different result for any of them, please [open an issue](https://github.com/vamitul/indesign-uxp-types/issues) with `app.version` and the few lines that show it.

## In the dictionary, but not in UXP

The 22.0 dictionary lists these, and ExtendScript has them, but `require('indesign')` does not. The package leaves them out, so calling one is a type error instead of a runtime one. When a build adds them to UXP, the package will declare them with an `@since` tag for that build.

### The JSON methods

`app.parseJson()`, `app.parseJsonFile()`, `app.stringifyJson()` and `app.writeJsonFile()` are `undefined` in UXP, and a call throws `is not a function`. In ExtendScript all four work.

You don't lose much: in UXP use JavaScript's own `JSON.parse()` and `JSON.stringify()`, and read or write the file with `require('uxp').storage` or `require('fs')`.

### The Gen AI classes

`GenAIModel`, `GenAIModels`, `GenAIImage` and `GenAIImages` are not exported by the `indesign` module, and `doc.genaiModels` is `undefined`. ExtendScript has no working path either: `doc.genaiModels` there is an empty collection, and its `add()` throws `Invalid object for this request.` As far as I can tell, no script can reach the Gen AI suite in this build.

## Members that throw

### checkDocumentOnExportPreference

`app.checkDocumentOnExportPreference` exists (`'checkDocumentOnExportPreference' in app` is `true`), but reading it throws `Error No.1` in UXP, and throws in ExtendScript too. The other new 22.0 preferences (`grammarCheckPreference`, `copySuggestionsPreference`, `generalPreferences.addAITagToTableSummary`, `viewPreferences.showAltTextIcon`) read and write normally. I have not tried writing this one. If you need to read it, wrap the read in a `try`/`catch`.

### printFile rejects on read

*Measured on 21.5.1.73, not yet re-tested on 22.0.*

Set `doc.printPreferences.printFile` to a path, from a string or from a `File` entry, and reading it back rejects with `Could not find an entry of 'file:///d:%5C...'`: the backslashes of the Windows path come back percent-encoded, and UXP cannot find a file at that URL. The value is stored correctly, ExtendScript reads it back fine, and the other file-valued getters set from the same paths resolve. macOS is not tested.

The type stays `Promise<File>`, which is what the getter is meant to return. Until it does, keep the path your script set, or read it through ExtendScript:

```js
app.doScript('app.activeDocument.printPreferences.printFile.fsName', ScriptLanguage.JAVASCRIPT);
```

## Grammar checking

The five grammar methods (`checkGrammar`, `getGrammarIssues`, `requestGrammarCheck`, `applyGrammarFix`, `applyAllGrammarFixes`) exist on `Document`, `Story` and every text object, and they are synchronous. The check itself works. The problems are all in the issue cache the fix methods read from, and one of them changes text you didn't ask it to touch, so read this section before you use the fix methods on a client's document.

### A stale cache corrupts text

`checkGrammar()` stores the issues it finds, with their character positions. The fix methods apply those stored issues at the stored positions, and they don't check that the text there is still the text that was checked. Anything that changes the story in between, an edit or an earlier fix, moves the text under them:

- Check `He go to the store yesterday. Their is many mistake.`, set the story's contents to `The cat sat on a mat today and it was fine.`, then call `applyAllGrammarFixes()`. It returns 2, and the story reads `Thegoesat sat on a mat today andThereas fine.`
- Check the same first sentence, call `applyGrammarFix(3)`, then `applyAllGrammarFixes()`. The single fix does not remove its issue from the cache, so the second call applies it again and puts "There" at the old position: `He goeses to the store yesterdayThereir is many mistake.`

The cache does not refresh by itself. After an edit and a 4 second wait it still listed the old issues, and on a visible document they were still there after 6 seconds. What did refresh it was `requestGrammarCheck()` followed by a wait of about 4 seconds.

What I'd do until Adobe fixes it:

- Call a fix method straight after `checkGrammar()`, with nothing changing the story in between. `checkGrammar()` then `applyAllGrammarFixes()` gave the right result every time I ran it.
- After one fix, don't call another on the same story until the cache has been refreshed.
- Before applying an issue yourself, compare its `foundText` with the story's text at its `startIndex`. If they differ, the cache is stale.

I have not measured whether a second `checkGrammar()` call on a changed story replaces the old issues. Until I have, don't rely on it.

### Every text object means the whole story

The dictionary says the methods work on "this story/text". In practice a word, a paragraph or an insertion point gives exactly what its story gives. `words.item(0).checkGrammar()` returns the issues of the whole story, and `words.item(0).applyAllGrammarFixes()` fixes all of them, including words far from the one you called it on. To work on a range, filter the issues by `startIndex` yourself and apply only those.

### A story never checked has no issues

`getGrammarIssues()` returns `"[]"` for a story that `checkGrammar()` has never run on, even with `app.grammarCheckPreference` on and after a 6 second wait on a visible document. An empty result does not mean the text is clean. Call `checkGrammar()` when you need an answer.

### applyGrammarFix returns a number

The dictionary says `applyGrammarFix()` returns a boolean. UXP returns `1` when it applied a fix and `0` when it didn't, so the types say `number`. If you test the result with `if (fixed)`, both work. If you compare it with `=== true`, that is always false.

## Events

*Measured on 21.5.1.73, not yet re-tested on 22.0.*

### isValid on an event

Reading `isValid` on an event object returns `false`, and `constructorName` returns `''`. Neither is true, and after either read every other property of that event throws `ReferenceError: Object is invalid`. Snapshot the properties with `{ ...evt.properties }`, which is safe to read as often as you like, and use `evt.constructor.name` for the class: `'DocumentEvent'` for `afterSave`, `'Event'` for `afterSelectionChanged`.

### currentTarget is always null

InDesign events bubble, and `currentTarget` should be the object handling the event at that point of the propagation. Adobe's own example reads `evt.currentTarget.name` from a document listener and an application listener. On every event I measured it was `null`, so that example throws. The type is `unknown`, which makes you check it before using it, whatever a later build returns. If a listener needs to know what it was registered on, keep a reference to that object in the listener's closure.

### Application-level listeners crash InDesign

A script that registered 50 listeners on `app`, removed them all, and finished cleanly, crashed InDesign after it had exited. It crashed again on a second run. The same 50 listeners on a document that the script then closed ran without a problem, so no single event name causes it. I haven't narrowed it further. My guess is that removing a listener from the application leaves something behind that InDesign later trips over.

Until it's fixed, don't register listeners on `app` from a script that then exits. Register them on a document the script closes, or from a plugin that stays loaded for as long as the listeners do.
