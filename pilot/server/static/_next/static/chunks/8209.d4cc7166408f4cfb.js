"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8209],{58209:function(e,t,i){i.r(t),i.d(t,{Adapter:function(){return w},CodeActionAdaptor:function(){return M},DefinitionAdapter:function(){return A},DiagnosticsAdapter:function(){return k},DocumentHighlightAdapter:function(){return D},FormatAdapter:function(){return N},FormatHelper:function(){return O},FormatOnTypeAdapter:function(){return K},InlayHintsAdapter:function(){return E},Kind:function(){return P},LibFiles:function(){return S},OutlineAdapter:function(){return T},QuickInfoAdapter:function(){return F},ReferenceAdapter:function(){return I},RenameAdapter:function(){return R},SignatureHelpAdapter:function(){return C},SuggestAdapter:function(){return x},WorkerManager:function(){return h},flattenDiagnosticMessageText:function(){return _},getJavaScriptWorker:function(){return j},getTypeScriptWorker:function(){return V},setupJavaScript:function(){return W},setupTypeScript:function(){return H}});var r,s,n,a=i(8483),o=i(20121),l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,d=Object.getOwnPropertyNames,c=Object.prototype.hasOwnProperty,g=(e,t,i)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,p=(e,t,i,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of d(t))c.call(e,s)||s===i||l(e,s,{get:()=>t[s],enumerable:!(r=u(t,s))||r.enumerable});return e},m=(e,t,i)=>(g(e,"symbol"!=typeof t?t+"":t,i),i),f={};p(f,a,"default"),r&&p(r,a,"default");var h=class{constructor(e,t){this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker()),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange(()=>this._updateExtraLibs())}_configChangeListener;_updateExtraLibsToken;_extraLibsChangeListener;_worker;_client;dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}async _updateExtraLibs(){if(!this._worker)return;let e=++this._updateExtraLibsToken,t=await this._worker.getProxy();this._updateExtraLibsToken===e&&t.updateExtraLibs(this._defaults.getExtraLibs())}_getClient(){return this._client||(this._client=(async()=>(this._worker=f.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}}),this._defaults.getEagerModelSync())?await this._worker.withSyncedResources(f.editor.getModels().filter(e=>e.getLanguageId()===this._modeId).map(e=>e.uri)):await this._worker.getProxy())()),this._client}async getLanguageServiceWorker(...e){let t=await this._getClient();return this._worker&&await this._worker.withSyncedResources(e),t}},b={};function _(e,t,i=0){if("string"==typeof e)return e;if(void 0===e)return"";let r="";if(i){r+=t;for(let e=0;e<i;e++)r+="  "}if(r+=e.messageText,i++,e.next)for(let s of e.next)r+=_(s,t,i);return r}function y(e){return e?e.map(e=>e.text).join(""):""}b["lib.d.ts"]=!0,b["lib.decorators.d.ts"]=!0,b["lib.decorators.legacy.d.ts"]=!0,b["lib.dom.d.ts"]=!0,b["lib.dom.iterable.d.ts"]=!0,b["lib.es2015.collection.d.ts"]=!0,b["lib.es2015.core.d.ts"]=!0,b["lib.es2015.d.ts"]=!0,b["lib.es2015.generator.d.ts"]=!0,b["lib.es2015.iterable.d.ts"]=!0,b["lib.es2015.promise.d.ts"]=!0,b["lib.es2015.proxy.d.ts"]=!0,b["lib.es2015.reflect.d.ts"]=!0,b["lib.es2015.symbol.d.ts"]=!0,b["lib.es2015.symbol.wellknown.d.ts"]=!0,b["lib.es2016.array.include.d.ts"]=!0,b["lib.es2016.d.ts"]=!0,b["lib.es2016.full.d.ts"]=!0,b["lib.es2017.d.ts"]=!0,b["lib.es2017.full.d.ts"]=!0,b["lib.es2017.intl.d.ts"]=!0,b["lib.es2017.object.d.ts"]=!0,b["lib.es2017.sharedmemory.d.ts"]=!0,b["lib.es2017.string.d.ts"]=!0,b["lib.es2017.typedarrays.d.ts"]=!0,b["lib.es2018.asyncgenerator.d.ts"]=!0,b["lib.es2018.asynciterable.d.ts"]=!0,b["lib.es2018.d.ts"]=!0,b["lib.es2018.full.d.ts"]=!0,b["lib.es2018.intl.d.ts"]=!0,b["lib.es2018.promise.d.ts"]=!0,b["lib.es2018.regexp.d.ts"]=!0,b["lib.es2019.array.d.ts"]=!0,b["lib.es2019.d.ts"]=!0,b["lib.es2019.full.d.ts"]=!0,b["lib.es2019.intl.d.ts"]=!0,b["lib.es2019.object.d.ts"]=!0,b["lib.es2019.string.d.ts"]=!0,b["lib.es2019.symbol.d.ts"]=!0,b["lib.es2020.bigint.d.ts"]=!0,b["lib.es2020.d.ts"]=!0,b["lib.es2020.date.d.ts"]=!0,b["lib.es2020.full.d.ts"]=!0,b["lib.es2020.intl.d.ts"]=!0,b["lib.es2020.number.d.ts"]=!0,b["lib.es2020.promise.d.ts"]=!0,b["lib.es2020.sharedmemory.d.ts"]=!0,b["lib.es2020.string.d.ts"]=!0,b["lib.es2020.symbol.wellknown.d.ts"]=!0,b["lib.es2021.d.ts"]=!0,b["lib.es2021.full.d.ts"]=!0,b["lib.es2021.intl.d.ts"]=!0,b["lib.es2021.promise.d.ts"]=!0,b["lib.es2021.string.d.ts"]=!0,b["lib.es2021.weakref.d.ts"]=!0,b["lib.es2022.array.d.ts"]=!0,b["lib.es2022.d.ts"]=!0,b["lib.es2022.error.d.ts"]=!0,b["lib.es2022.full.d.ts"]=!0,b["lib.es2022.intl.d.ts"]=!0,b["lib.es2022.object.d.ts"]=!0,b["lib.es2022.regexp.d.ts"]=!0,b["lib.es2022.sharedmemory.d.ts"]=!0,b["lib.es2022.string.d.ts"]=!0,b["lib.es2023.array.d.ts"]=!0,b["lib.es2023.d.ts"]=!0,b["lib.es2023.full.d.ts"]=!0,b["lib.es5.d.ts"]=!0,b["lib.es6.d.ts"]=!0,b["lib.esnext.d.ts"]=!0,b["lib.esnext.full.d.ts"]=!0,b["lib.esnext.intl.d.ts"]=!0,b["lib.scripthost.d.ts"]=!0,b["lib.webworker.d.ts"]=!0,b["lib.webworker.importscripts.d.ts"]=!0,b["lib.webworker.iterable.d.ts"]=!0;var w=class{constructor(e){this._worker=e}_textSpanToRange(e,t){let i=e.getPositionAt(t.start),r=e.getPositionAt(t.start+t.length),{lineNumber:s,column:n}=i,{lineNumber:a,column:o}=r;return{startLineNumber:s,startColumn:n,endLineNumber:a,endColumn:o}}},S=class{constructor(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}_libFiles;_hasFetchedLibFiles;_fetchLibFilesPromise;isLibFile(e){return!!e&&0===e.path.indexOf("/lib.")&&!!b[e.path.slice(1)]}getOrCreateModel(e){let t=f.Uri.parse(e),i=f.editor.getModel(t);if(i)return i;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return f.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);let r=o.TG.getExtraLibs()[e];return r?f.editor.createModel(r.content,"typescript",t):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}async fetchLibFilesIfNecessary(e){this._containsLibFile(e)&&await this._fetchLibFiles()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then(e=>e.getLibFiles()).then(e=>{this._hasFetchedLibFiles=!0,this._libFiles=e})),this._fetchLibFilesPromise}},k=class extends w{constructor(e,t,i,r){super(r),this._libFiles=e,this._defaults=t,this._selector=i;let s=e=>{let t;if(e.getLanguageId()!==i)return;let r=()=>{let{onlyVisible:t}=this._defaults.getDiagnosticsOptions();t?e.isAttachedToEditor()&&this._doValidate(e):this._doValidate(e)},s=e.onDidChangeContent(()=>{clearTimeout(t),t=window.setTimeout(r,500)}),n=e.onDidChangeAttached(()=>{let{onlyVisible:t}=this._defaults.getDiagnosticsOptions();t&&(e.isAttachedToEditor()?r():f.editor.setModelMarkers(e,this._selector,[]))});this._listener[e.uri.toString()]={dispose(){s.dispose(),n.dispose(),clearTimeout(t)}},r()},n=e=>{f.editor.setModelMarkers(e,this._selector,[]);let t=e.uri.toString();this._listener[t]&&(this._listener[t].dispose(),delete this._listener[t])};this._disposables.push(f.editor.onDidCreateModel(e=>s(e))),this._disposables.push(f.editor.onWillDisposeModel(n)),this._disposables.push(f.editor.onDidChangeModelLanguage(e=>{n(e.model),s(e.model)})),this._disposables.push({dispose(){for(let e of f.editor.getModels())n(e)}});let a=()=>{for(let e of f.editor.getModels())n(e),s(e)};this._disposables.push(this._defaults.onDidChange(a)),this._disposables.push(this._defaults.onDidExtraLibsChange(a)),f.editor.getModels().forEach(e=>s(e))}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach(e=>e&&e.dispose()),this._disposables=[]}async _doValidate(e){let t=await this._worker(e.uri);if(e.isDisposed())return;let i=[],{noSyntaxValidation:r,noSemanticValidation:s,noSuggestionDiagnostics:n}=this._defaults.getDiagnosticsOptions();r||i.push(t.getSyntacticDiagnostics(e.uri.toString())),s||i.push(t.getSemanticDiagnostics(e.uri.toString())),n||i.push(t.getSuggestionDiagnostics(e.uri.toString()));let a=await Promise.all(i);if(!a||e.isDisposed())return;let o=a.reduce((e,t)=>t.concat(e),[]).filter(e=>-1===(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code)),l=o.map(e=>e.relatedInformation||[]).reduce((e,t)=>t.concat(e),[]).map(e=>e.file?f.Uri.parse(e.file.fileName):null);await this._libFiles.fetchLibFilesIfNecessary(l),e.isDisposed()||f.editor.setModelMarkers(e,this._selector,o.map(t=>this._convertDiagnostics(e,t)))}_convertDiagnostics(e,t){let i=t.start||0,r=t.length||1,{lineNumber:s,column:n}=e.getPositionAt(i),{lineNumber:a,column:o}=e.getPositionAt(i+r),l=[];return t.reportsUnnecessary&&l.push(f.MarkerTag.Unnecessary),t.reportsDeprecated&&l.push(f.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:s,startColumn:n,endLineNumber:a,endColumn:o,message:_(t.messageText,"\n"),code:t.code.toString(),tags:l,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}_convertRelatedInformation(e,t){if(!t)return[];let i=[];return t.forEach(t=>{let r=e;if(t.file&&(r=this._libFiles.getOrCreateModel(t.file.fileName)),!r)return;let s=t.start||0,n=t.length||1,{lineNumber:a,column:o}=r.getPositionAt(s),{lineNumber:l,column:u}=r.getPositionAt(s+n);i.push({resource:r.uri,startLineNumber:a,startColumn:o,endLineNumber:l,endColumn:u,message:_(t.messageText,"\n")})}),i}_tsDiagnosticCategoryToMarkerSeverity(e){switch(e){case 1:return f.MarkerSeverity.Error;case 3:break;case 0:return f.MarkerSeverity.Warning;case 2:return f.MarkerSeverity.Hint}return f.MarkerSeverity.Info}},x=class extends w{get triggerCharacters(){return["."]}async provideCompletionItems(e,t,i,r){let s=e.getWordUntilPosition(t),n=new f.Range(t.lineNumber,s.startColumn,t.lineNumber,s.endColumn),a=e.uri,o=e.getOffsetAt(t),l=await this._worker(a);if(e.isDisposed())return;let u=await l.getCompletionsAtPosition(a.toString(),o);if(!u||e.isDisposed())return;let d=u.entries.map(i=>{let r=n;if(i.replacementSpan){let t=e.getPositionAt(i.replacementSpan.start),s=e.getPositionAt(i.replacementSpan.start+i.replacementSpan.length);r=new f.Range(t.lineNumber,t.column,s.lineNumber,s.column)}let s=[];return void 0!==i.kindModifiers&&-1!==i.kindModifiers.indexOf("deprecated")&&s.push(f.languages.CompletionItemTag.Deprecated),{uri:a,position:t,offset:o,range:r,label:i.name,insertText:i.name,sortText:i.sortText,kind:x.convertKind(i.kind),tags:s}});return{suggestions:d}}async resolveCompletionItem(e,t){let i=e.uri,r=e.position,s=e.offset,n=await this._worker(i),a=await n.getCompletionEntryDetails(i.toString(),s,e.label);return a?{uri:i,position:r,label:a.name,kind:x.convertKind(a.kind),detail:y(a.displayParts),documentation:{value:x.createDocumentationString(a)}}:e}static convertKind(e){switch(e){case P.primitiveType:case P.keyword:return f.languages.CompletionItemKind.Keyword;case P.variable:case P.localVariable:return f.languages.CompletionItemKind.Variable;case P.memberVariable:case P.memberGetAccessor:case P.memberSetAccessor:return f.languages.CompletionItemKind.Field;case P.function:case P.memberFunction:case P.constructSignature:case P.callSignature:case P.indexSignature:return f.languages.CompletionItemKind.Function;case P.enum:return f.languages.CompletionItemKind.Enum;case P.module:return f.languages.CompletionItemKind.Module;case P.class:return f.languages.CompletionItemKind.Class;case P.interface:return f.languages.CompletionItemKind.Interface;case P.warning:return f.languages.CompletionItemKind.File}return f.languages.CompletionItemKind.Property}static createDocumentationString(e){let t=y(e.documentation);if(e.tags)for(let i of e.tags)t+=`

${v(i)}`;return t}};function v(e){let t=`*@${e.name}*`;if("param"===e.name&&e.text){let[i,...r]=e.text;t+=`\`${i.text}\``,r.length>0&&(t+=` \u2014 ${r.map(e=>e.text).join(" ")}`)}else Array.isArray(e.text)?t+=` \u2014 ${e.text.map(e=>e.text).join(" ")}`:e.text&&(t+=` \u2014 ${e.text}`);return t}var C=class extends w{signatureHelpTriggerCharacters=["(",","];static _toSignatureHelpTriggerReason(e){switch(e.triggerKind){case f.languages.SignatureHelpTriggerKind.TriggerCharacter:if(!e.triggerCharacter)return{kind:"invoked"};if(e.isRetrigger)return{kind:"retrigger",triggerCharacter:e.triggerCharacter};return{kind:"characterTyped",triggerCharacter:e.triggerCharacter};case f.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case f.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}async provideSignatureHelp(e,t,i,r){let s=e.uri,n=e.getOffsetAt(t),a=await this._worker(s);if(e.isDisposed())return;let o=await a.getSignatureHelpItems(s.toString(),n,{triggerReason:C._toSignatureHelpTriggerReason(r)});if(!o||e.isDisposed())return;let l={activeSignature:o.selectedItemIndex,activeParameter:o.argumentIndex,signatures:[]};return o.items.forEach(e=>{let t={label:"",parameters:[]};t.documentation={value:y(e.documentation)},t.label+=y(e.prefixDisplayParts),e.parameters.forEach((i,r,s)=>{let n=y(i.displayParts),a={label:n,documentation:{value:y(i.documentation)}};t.label+=n,t.parameters.push(a),r<s.length-1&&(t.label+=y(e.separatorDisplayParts))}),t.label+=y(e.suffixDisplayParts),l.signatures.push(t)}),{value:l,dispose(){}}}},F=class extends w{async provideHover(e,t,i){let r=e.uri,s=e.getOffsetAt(t),n=await this._worker(r);if(e.isDisposed())return;let a=await n.getQuickInfoAtPosition(r.toString(),s);if(!a||e.isDisposed())return;let o=y(a.documentation),l=a.tags?a.tags.map(e=>v(e)).join("  \n\n"):"",u=y(a.displayParts);return{range:this._textSpanToRange(e,a.textSpan),contents:[{value:"```typescript\n"+u+"\n```\n"},{value:o+(l?"\n\n"+l:"")}]}}},D=class extends w{async provideDocumentHighlights(e,t,i){let r=e.uri,s=e.getOffsetAt(t),n=await this._worker(r);if(e.isDisposed())return;let a=await n.getDocumentHighlights(r.toString(),s,[r.toString()]);if(!(!a||e.isDisposed()))return a.flatMap(t=>t.highlightSpans.map(t=>({range:this._textSpanToRange(e,t.textSpan),kind:"writtenReference"===t.kind?f.languages.DocumentHighlightKind.Write:f.languages.DocumentHighlightKind.Text})))}},A=class extends w{constructor(e,t){super(t),this._libFiles=e}async provideDefinition(e,t,i){let r=e.uri,s=e.getOffsetAt(t),n=await this._worker(r);if(e.isDisposed())return;let a=await n.getDefinitionAtPosition(r.toString(),s);if(!a||e.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(a.map(e=>f.Uri.parse(e.fileName))),e.isDisposed()))return;let o=[];for(let e of a){let t=this._libFiles.getOrCreateModel(e.fileName);t&&o.push({uri:t.uri,range:this._textSpanToRange(t,e.textSpan)})}return o}},I=class extends w{constructor(e,t){super(t),this._libFiles=e}async provideReferences(e,t,i,r){let s=e.uri,n=e.getOffsetAt(t),a=await this._worker(s);if(e.isDisposed())return;let o=await a.getReferencesAtPosition(s.toString(),n);if(!o||e.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(o.map(e=>f.Uri.parse(e.fileName))),e.isDisposed()))return;let l=[];for(let e of o){let t=this._libFiles.getOrCreateModel(e.fileName);t&&l.push({uri:t.uri,range:this._textSpanToRange(t,e.textSpan)})}return l}},T=class extends w{async provideDocumentSymbols(e,t){let i=e.uri,r=await this._worker(i);if(e.isDisposed())return;let s=await r.getNavigationTree(i.toString());if(!s||e.isDisposed())return;let n=(t,i)=>{let r={name:t.text,detail:"",kind:L[t.kind]||f.languages.SymbolKind.Variable,range:this._textSpanToRange(e,t.spans[0]),selectionRange:this._textSpanToRange(e,t.spans[0]),tags:[],children:t.childItems?.map(e=>n(e,t.text)),containerName:i};return r},a=s.childItems?s.childItems.map(e=>n(e)):[];return a}},P=class{};m(P,"unknown",""),m(P,"keyword","keyword"),m(P,"script","script"),m(P,"module","module"),m(P,"class","class"),m(P,"interface","interface"),m(P,"type","type"),m(P,"enum","enum"),m(P,"variable","var"),m(P,"localVariable","local var"),m(P,"function","function"),m(P,"localFunction","local function"),m(P,"memberFunction","method"),m(P,"memberGetAccessor","getter"),m(P,"memberSetAccessor","setter"),m(P,"memberVariable","property"),m(P,"constructorImplementation","constructor"),m(P,"callSignature","call"),m(P,"indexSignature","index"),m(P,"constructSignature","construct"),m(P,"parameter","parameter"),m(P,"typeParameter","type parameter"),m(P,"primitiveType","primitive type"),m(P,"label","label"),m(P,"alias","alias"),m(P,"const","const"),m(P,"let","let"),m(P,"warning","warning");var L=Object.create(null);L[P.module]=f.languages.SymbolKind.Module,L[P.class]=f.languages.SymbolKind.Class,L[P.enum]=f.languages.SymbolKind.Enum,L[P.interface]=f.languages.SymbolKind.Interface,L[P.memberFunction]=f.languages.SymbolKind.Method,L[P.memberVariable]=f.languages.SymbolKind.Property,L[P.memberGetAccessor]=f.languages.SymbolKind.Property,L[P.memberSetAccessor]=f.languages.SymbolKind.Property,L[P.variable]=f.languages.SymbolKind.Variable,L[P.const]=f.languages.SymbolKind.Variable,L[P.localVariable]=f.languages.SymbolKind.Variable,L[P.variable]=f.languages.SymbolKind.Variable,L[P.function]=f.languages.SymbolKind.Function,L[P.localFunction]=f.languages.SymbolKind.Function;var O=class extends w{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}},N=class extends O{canFormatMultipleRanges=!1;async provideDocumentRangeFormattingEdits(e,t,i,r){let s=e.uri,n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=await this._worker(s);if(e.isDisposed())return;let l=await o.getFormattingEditsForRange(s.toString(),n,a,O._convertOptions(i));if(!(!l||e.isDisposed()))return l.map(t=>this._convertTextChanges(e,t))}},K=class extends O{get autoFormatTriggerCharacters(){return[";","}","\n"]}async provideOnTypeFormattingEdits(e,t,i,r,s){let n=e.uri,a=e.getOffsetAt(t),o=await this._worker(n);if(e.isDisposed())return;let l=await o.getFormattingEditsAfterKeystroke(n.toString(),a,i,O._convertOptions(r));if(!(!l||e.isDisposed()))return l.map(t=>this._convertTextChanges(e,t))}},M=class extends O{async provideCodeActions(e,t,i,r){let s=e.uri,n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=O._convertOptions(e.getOptions()),l=i.markers.filter(e=>e.code).map(e=>e.code).map(Number),u=await this._worker(s);if(e.isDisposed())return;let d=await u.getCodeFixesAtPosition(s.toString(),n,a,l,o);if(!d||e.isDisposed())return{actions:[],dispose:()=>{}};let c=d.filter(e=>0===e.changes.filter(e=>e.isNewFile).length).map(t=>this._tsCodeFixActionToMonacoCodeAction(e,i,t));return{actions:c,dispose:()=>{}}}_tsCodeFixActionToMonacoCodeAction(e,t,i){let r=[];for(let t of i.changes)for(let i of t.textChanges)r.push({resource:e.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(e,i.span),text:i.newText}});let s={title:i.description,edit:{edits:r},diagnostics:t.markers,kind:"quickfix"};return s}},R=class extends w{constructor(e,t){super(t),this._libFiles=e}async provideRenameEdits(e,t,i,r){let s=e.uri,n=s.toString(),a=e.getOffsetAt(t),o=await this._worker(s);if(e.isDisposed())return;let l=await o.getRenameInfo(n,a,{allowRenameOfImportPath:!1});if(!1===l.canRename)return{edits:[],rejectReason:l.localizedErrorMessage};if(void 0!==l.fileToRename)throw Error("Renaming files is not supported.");let u=await o.findRenameLocations(n,a,!1,!1,!1);if(!u||e.isDisposed())return;let d=[];for(let e of u){let t=this._libFiles.getOrCreateModel(e.fileName);if(t)d.push({resource:t.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(t,e.textSpan),text:i}});else throw Error(`Unknown file ${e.fileName}.`)}return{edits:d}}},E=class extends w{async provideInlayHints(e,t,i){let r=e.uri,s=r.toString(),n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=await this._worker(r);if(e.isDisposed())return null;let l=await o.provideInlayHints(s,n,a),u=l.map(t=>({...t,label:t.text,position:e.getPositionAt(t.position),kind:this._convertHintKind(t.kind)}));return{hints:u,dispose:()=>{}}}_convertHintKind(e){return"Parameter"===e?f.languages.InlayHintKind.Parameter:f.languages.InlayHintKind.Type}};function H(e){n=B(e,"typescript")}function W(e){s=B(e,"javascript")}function j(){return new Promise((e,t)=>{if(!s)return t("JavaScript not registered!");e(s)})}function V(){return new Promise((e,t)=>{if(!n)return t("TypeScript not registered!");e(n)})}function B(e,t){let i=[],r=[],s=new h(t,e);i.push(s);let n=(...e)=>s.getLanguageServiceWorker(...e),a=new S(n);return!function(){let{modeConfiguration:i}=e;U(r),i.completionItems&&r.push(f.languages.registerCompletionItemProvider(t,new x(n))),i.signatureHelp&&r.push(f.languages.registerSignatureHelpProvider(t,new C(n))),i.hovers&&r.push(f.languages.registerHoverProvider(t,new F(n))),i.documentHighlights&&r.push(f.languages.registerDocumentHighlightProvider(t,new D(n))),i.definitions&&r.push(f.languages.registerDefinitionProvider(t,new A(a,n))),i.references&&r.push(f.languages.registerReferenceProvider(t,new I(a,n))),i.documentSymbols&&r.push(f.languages.registerDocumentSymbolProvider(t,new T(n))),i.rename&&r.push(f.languages.registerRenameProvider(t,new R(a,n))),i.documentRangeFormattingEdits&&r.push(f.languages.registerDocumentRangeFormattingEditProvider(t,new N(n))),i.onTypeFormattingEdits&&r.push(f.languages.registerOnTypeFormattingEditProvider(t,new K(n))),i.codeActions&&r.push(f.languages.registerCodeActionProvider(t,new M(n))),i.inlayHints&&r.push(f.languages.registerInlayHintsProvider(t,new E(n))),i.diagnostics&&r.push(new k(a,e,t,n))}(),i.push({dispose:()=>U(r)}),n}function U(e){for(;e.length;)e.pop().dispose()}}}]);