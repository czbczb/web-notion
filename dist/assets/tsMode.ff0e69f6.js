var M=Object.defineProperty;var K=(e,t,r)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var _=(e,t,r)=>(K(e,typeof t!="symbol"?t+"":t,r),r);import{t as R,m as E}from"./MonacoEditor.25941f3f.js";import"./antdv.415263d7.js";import"./index.9e8b6c69.js";import"./article.2a92057c.js";import"./_plugin-vue_export-helper.cdc0426e.js";/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.1(547870b6881302c5b4ff32173c16d06009e3588f)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var P=Object.defineProperty,H=Object.getOwnPropertyDescriptor,V=Object.getOwnPropertyNames,W=Object.prototype.hasOwnProperty,j=(e,t,r)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,T=(e,t,r,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of V(t))!W.call(e,a)&&a!==r&&P(e,a,{get:()=>t[a],enumerable:!(s=H(t,a))||s.enumerable});return e},B=(e,t,r)=>(T(e,t,"default"),r&&T(r,t,"default")),b=(e,t,r)=>(j(e,typeof t!="symbol"?t+"":t,r),r),i={};B(i,E);var U=class{constructor(e,t){_(this,"_configChangeListener");_(this,"_updateExtraLibsToken");_(this,"_extraLibsChangeListener");_(this,"_worker");_(this,"_client");this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker()),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange(()=>this._updateExtraLibs())}dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}async _updateExtraLibs(){if(!this._worker)return;const e=++this._updateExtraLibsToken,t=await this._worker.getProxy();this._updateExtraLibsToken===e&&t.updateExtraLibs(this._defaults.getExtraLibs())}_getClient(){return this._client||(this._client=(async()=>(this._worker=i.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}}),this._defaults.getEagerModelSync()?await this._worker.withSyncedResources(i.editor.getModels().filter(e=>e.getLanguageId()===this._modeId).map(e=>e.uri)):await this._worker.getProxy()))()),this._client}async getLanguageServiceWorker(...e){const t=await this._getClient();return this._worker&&await this._worker.withSyncedResources(e),t}},o={};o["lib.d.ts"]=!0;o["lib.dom.d.ts"]=!0;o["lib.dom.iterable.d.ts"]=!0;o["lib.es2015.collection.d.ts"]=!0;o["lib.es2015.core.d.ts"]=!0;o["lib.es2015.d.ts"]=!0;o["lib.es2015.generator.d.ts"]=!0;o["lib.es2015.iterable.d.ts"]=!0;o["lib.es2015.promise.d.ts"]=!0;o["lib.es2015.proxy.d.ts"]=!0;o["lib.es2015.reflect.d.ts"]=!0;o["lib.es2015.symbol.d.ts"]=!0;o["lib.es2015.symbol.wellknown.d.ts"]=!0;o["lib.es2016.array.include.d.ts"]=!0;o["lib.es2016.d.ts"]=!0;o["lib.es2016.full.d.ts"]=!0;o["lib.es2017.d.ts"]=!0;o["lib.es2017.full.d.ts"]=!0;o["lib.es2017.intl.d.ts"]=!0;o["lib.es2017.object.d.ts"]=!0;o["lib.es2017.sharedmemory.d.ts"]=!0;o["lib.es2017.string.d.ts"]=!0;o["lib.es2017.typedarrays.d.ts"]=!0;o["lib.es2018.asyncgenerator.d.ts"]=!0;o["lib.es2018.asynciterable.d.ts"]=!0;o["lib.es2018.d.ts"]=!0;o["lib.es2018.full.d.ts"]=!0;o["lib.es2018.intl.d.ts"]=!0;o["lib.es2018.promise.d.ts"]=!0;o["lib.es2018.regexp.d.ts"]=!0;o["lib.es2019.array.d.ts"]=!0;o["lib.es2019.d.ts"]=!0;o["lib.es2019.full.d.ts"]=!0;o["lib.es2019.object.d.ts"]=!0;o["lib.es2019.string.d.ts"]=!0;o["lib.es2019.symbol.d.ts"]=!0;o["lib.es2020.bigint.d.ts"]=!0;o["lib.es2020.d.ts"]=!0;o["lib.es2020.full.d.ts"]=!0;o["lib.es2020.intl.d.ts"]=!0;o["lib.es2020.promise.d.ts"]=!0;o["lib.es2020.sharedmemory.d.ts"]=!0;o["lib.es2020.string.d.ts"]=!0;o["lib.es2020.symbol.wellknown.d.ts"]=!0;o["lib.es2021.d.ts"]=!0;o["lib.es2021.full.d.ts"]=!0;o["lib.es2021.intl.d.ts"]=!0;o["lib.es2021.promise.d.ts"]=!0;o["lib.es2021.string.d.ts"]=!0;o["lib.es2021.weakref.d.ts"]=!0;o["lib.es5.d.ts"]=!0;o["lib.es6.d.ts"]=!0;o["lib.esnext.d.ts"]=!0;o["lib.esnext.full.d.ts"]=!0;o["lib.esnext.intl.d.ts"]=!0;o["lib.esnext.promise.d.ts"]=!0;o["lib.esnext.string.d.ts"]=!0;o["lib.esnext.weakref.d.ts"]=!0;o["lib.scripthost.d.ts"]=!0;o["lib.webworker.d.ts"]=!0;o["lib.webworker.importscripts.d.ts"]=!0;o["lib.webworker.iterable.d.ts"]=!0;function F(e,t,r=0){if(typeof e=="string")return e;if(e===void 0)return"";let s="";if(r){s+=t;for(let a=0;a<r;a++)s+="  "}if(s+=e.messageText,r++,e.next)for(const a of e.next)s+=F(a,t,r);return s}function k(e){return e?e.map(t=>t.text).join(""):""}var w=class{constructor(e){this._worker=e}_textSpanToRange(e,t){let r=e.getPositionAt(t.start),s=e.getPositionAt(t.start+t.length),{lineNumber:a,column:u}=r,{lineNumber:c,column:g}=s;return{startLineNumber:a,startColumn:u,endLineNumber:c,endColumn:g}}},$=class{constructor(e){_(this,"_libFiles");_(this,"_hasFetchedLibFiles");_(this,"_fetchLibFilesPromise");this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}isLibFile(e){return e&&e.path.indexOf("/lib.")===0?!!o[e.path.slice(1)]:!1}getOrCreateModel(e){const t=i.Uri.parse(e),r=i.editor.getModel(t);if(r)return r;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return i.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);const s=R.getExtraLibs()[e];return s?i.editor.createModel(s.content,"typescript",t):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}async fetchLibFilesIfNecessary(e){!this._containsLibFile(e)||await this._fetchLibFiles()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then(e=>e.getLibFiles()).then(e=>{this._hasFetchedLibFiles=!0,this._libFiles=e})),this._fetchLibFilesPromise}},z=class extends w{constructor(t,r,s,a){super(a);_(this,"_disposables",[]);_(this,"_listener",Object.create(null));this._libFiles=t,this._defaults=r,this._selector=s;const u=n=>{if(n.getLanguageId()!==s)return;const p=()=>{const{onlyVisible:y}=this._defaults.getDiagnosticsOptions();y?n.isAttachedToEditor()&&this._doValidate(n):this._doValidate(n)};let d;const f=n.onDidChangeContent(()=>{clearTimeout(d),d=window.setTimeout(p,500)}),h=n.onDidChangeAttached(()=>{const{onlyVisible:y}=this._defaults.getDiagnosticsOptions();y&&(n.isAttachedToEditor()?p():i.editor.setModelMarkers(n,this._selector,[]))});this._listener[n.uri.toString()]={dispose(){f.dispose(),h.dispose(),clearTimeout(d)}},p()},c=n=>{i.editor.setModelMarkers(n,this._selector,[]);const p=n.uri.toString();this._listener[p]&&(this._listener[p].dispose(),delete this._listener[p])};this._disposables.push(i.editor.onDidCreateModel(n=>u(n))),this._disposables.push(i.editor.onWillDisposeModel(c)),this._disposables.push(i.editor.onDidChangeModelLanguage(n=>{c(n.model),u(n.model)})),this._disposables.push({dispose(){for(const n of i.editor.getModels())c(n)}});const g=()=>{for(const n of i.editor.getModels())c(n),u(n)};this._disposables.push(this._defaults.onDidChange(g)),this._disposables.push(this._defaults.onDidExtraLibsChange(g)),i.editor.getModels().forEach(n=>u(n))}dispose(){this._disposables.forEach(t=>t&&t.dispose()),this._disposables=[]}async _doValidate(t){const r=await this._worker(t.uri);if(t.isDisposed())return;const s=[],{noSyntaxValidation:a,noSemanticValidation:u,noSuggestionDiagnostics:c}=this._defaults.getDiagnosticsOptions();a||s.push(r.getSyntacticDiagnostics(t.uri.toString())),u||s.push(r.getSemanticDiagnostics(t.uri.toString())),c||s.push(r.getSuggestionDiagnostics(t.uri.toString()));const g=await Promise.all(s);if(!g||t.isDisposed())return;const n=g.reduce((d,f)=>f.concat(d),[]).filter(d=>(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(d.code)===-1),p=n.map(d=>d.relatedInformation||[]).reduce((d,f)=>f.concat(d),[]).map(d=>d.file?i.Uri.parse(d.file.fileName):null);await this._libFiles.fetchLibFilesIfNecessary(p),!t.isDisposed()&&i.editor.setModelMarkers(t,this._selector,n.map(d=>this._convertDiagnostics(t,d)))}_convertDiagnostics(t,r){const s=r.start||0,a=r.length||1,{lineNumber:u,column:c}=t.getPositionAt(s),{lineNumber:g,column:n}=t.getPositionAt(s+a),p=[];return r.reportsUnnecessary&&p.push(i.MarkerTag.Unnecessary),r.reportsDeprecated&&p.push(i.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(r.category),startLineNumber:u,startColumn:c,endLineNumber:g,endColumn:n,message:F(r.messageText,`
`),code:r.code.toString(),tags:p,relatedInformation:this._convertRelatedInformation(t,r.relatedInformation)}}_convertRelatedInformation(t,r){if(!r)return[];const s=[];return r.forEach(a=>{let u=t;if(a.file&&(u=this._libFiles.getOrCreateModel(a.file.fileName)),!u)return;const c=a.start||0,g=a.length||1,{lineNumber:n,column:p}=u.getPositionAt(c),{lineNumber:d,column:f}=u.getPositionAt(c+g);s.push({resource:u.uri,startLineNumber:n,startColumn:p,endLineNumber:d,endColumn:f,message:F(a.messageText,`
`)})}),s}_tsDiagnosticCategoryToMarkerSeverity(t){switch(t){case 1:return i.MarkerSeverity.Error;case 3:return i.MarkerSeverity.Info;case 0:return i.MarkerSeverity.Warning;case 2:return i.MarkerSeverity.Hint}return i.MarkerSeverity.Info}},D=class extends w{get triggerCharacters(){return["."]}async provideCompletionItems(e,t,r,s){const a=e.getWordUntilPosition(t),u=new i.Range(t.lineNumber,a.startColumn,t.lineNumber,a.endColumn),c=e.uri,g=e.getOffsetAt(t),n=await this._worker(c);if(e.isDisposed())return;const p=await n.getCompletionsAtPosition(c.toString(),g);return!p||e.isDisposed()?void 0:{suggestions:p.entries.map(f=>{var x;let h=u;if(f.replacementSpan){const v=e.getPositionAt(f.replacementSpan.start),C=e.getPositionAt(f.replacementSpan.start+f.replacementSpan.length);h=new i.Range(v.lineNumber,v.column,C.lineNumber,C.column)}const y=[];return((x=f.kindModifiers)==null?void 0:x.indexOf("deprecated"))!==-1&&y.push(i.languages.CompletionItemTag.Deprecated),{uri:c,position:t,offset:g,range:h,label:f.name,insertText:f.name,sortText:f.sortText,kind:D.convertKind(f.kind),tags:y}})}}async resolveCompletionItem(e,t){const r=e,s=r.uri,a=r.position,u=r.offset,g=await(await this._worker(s)).getCompletionEntryDetails(s.toString(),u,r.label);return g?{uri:s,position:a,label:g.name,kind:D.convertKind(g.kind),detail:k(g.displayParts),documentation:{value:D.createDocumentationString(g)}}:r}static convertKind(e){switch(e){case l.primitiveType:case l.keyword:return i.languages.CompletionItemKind.Keyword;case l.variable:case l.localVariable:return i.languages.CompletionItemKind.Variable;case l.memberVariable:case l.memberGetAccessor:case l.memberSetAccessor:return i.languages.CompletionItemKind.Field;case l.function:case l.memberFunction:case l.constructSignature:case l.callSignature:case l.indexSignature:return i.languages.CompletionItemKind.Function;case l.enum:return i.languages.CompletionItemKind.Enum;case l.module:return i.languages.CompletionItemKind.Module;case l.class:return i.languages.CompletionItemKind.Class;case l.interface:return i.languages.CompletionItemKind.Interface;case l.warning:return i.languages.CompletionItemKind.File}return i.languages.CompletionItemKind.Property}static createDocumentationString(e){let t=k(e.documentation);if(e.tags)for(const r of e.tags)t+=`

${O(r)}`;return t}};function O(e){let t=`*@${e.name}*`;if(e.name==="param"&&e.text){const[r,...s]=e.text;t+=`\`${r.text}\``,s.length>0&&(t+=` \u2014 ${s.map(a=>a.text).join(" ")}`)}else Array.isArray(e.text)?t+=` \u2014 ${e.text.map(r=>r.text).join(" ")}`:e.text&&(t+=` \u2014 ${e.text}`);return t}var I=class extends w{constructor(){super(...arguments);_(this,"signatureHelpTriggerCharacters",["(",","])}static _toSignatureHelpTriggerReason(t){switch(t.triggerKind){case i.languages.SignatureHelpTriggerKind.TriggerCharacter:return t.triggerCharacter?t.isRetrigger?{kind:"retrigger",triggerCharacter:t.triggerCharacter}:{kind:"characterTyped",triggerCharacter:t.triggerCharacter}:{kind:"invoked"};case i.languages.SignatureHelpTriggerKind.ContentChange:return t.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case i.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}async provideSignatureHelp(t,r,s,a){const u=t.uri,c=t.getOffsetAt(r),g=await this._worker(u);if(t.isDisposed())return;const n=await g.getSignatureHelpItems(u.toString(),c,{triggerReason:I._toSignatureHelpTriggerReason(a)});if(!n||t.isDisposed())return;const p={activeSignature:n.selectedItemIndex,activeParameter:n.argumentIndex,signatures:[]};return n.items.forEach(d=>{const f={label:"",parameters:[]};f.documentation={value:k(d.documentation)},f.label+=k(d.prefixDisplayParts),d.parameters.forEach((h,y,x)=>{const v=k(h.displayParts),C={label:v,documentation:{value:k(h.documentation)}};f.label+=v,f.parameters.push(C),y<x.length-1&&(f.label+=k(d.separatorDisplayParts))}),f.label+=k(d.suffixDisplayParts),p.signatures.push(f)}),{value:p,dispose(){}}}},G=class extends w{async provideHover(e,t,r){const s=e.uri,a=e.getOffsetAt(t),u=await this._worker(s);if(e.isDisposed())return;const c=await u.getQuickInfoAtPosition(s.toString(),a);if(!c||e.isDisposed())return;const g=k(c.documentation),n=c.tags?c.tags.map(d=>O(d)).join(`  

`):"",p=k(c.displayParts);return{range:this._textSpanToRange(e,c.textSpan),contents:[{value:"```typescript\n"+p+"\n```\n"},{value:g+(n?`

`+n:"")}]}}},J=class extends w{async provideDocumentHighlights(e,t,r){const s=e.uri,a=e.getOffsetAt(t),u=await this._worker(s);if(e.isDisposed())return;const c=await u.getOccurrencesAtPosition(s.toString(),a);if(!(!c||e.isDisposed()))return c.map(g=>({range:this._textSpanToRange(e,g.textSpan),kind:g.isWriteAccess?i.languages.DocumentHighlightKind.Write:i.languages.DocumentHighlightKind.Text}))}},Q=class extends w{constructor(e,t){super(t),this._libFiles=e}async provideDefinition(e,t,r){const s=e.uri,a=e.getOffsetAt(t),u=await this._worker(s);if(e.isDisposed())return;const c=await u.getDefinitionAtPosition(s.toString(),a);if(!c||e.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(c.map(n=>i.Uri.parse(n.fileName))),e.isDisposed()))return;const g=[];for(let n of c){const p=this._libFiles.getOrCreateModel(n.fileName);p&&g.push({uri:p.uri,range:this._textSpanToRange(p,n.textSpan)})}return g}},q=class extends w{constructor(e,t){super(t),this._libFiles=e}async provideReferences(e,t,r,s){const a=e.uri,u=e.getOffsetAt(t),c=await this._worker(a);if(e.isDisposed())return;const g=await c.getReferencesAtPosition(a.toString(),u);if(!g||e.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(g.map(p=>i.Uri.parse(p.fileName))),e.isDisposed()))return;const n=[];for(let p of g){const d=this._libFiles.getOrCreateModel(p.fileName);d&&n.push({uri:d.uri,range:this._textSpanToRange(d,p.textSpan)})}return n}},X=class extends w{async provideDocumentSymbols(e,t){const r=e.uri,s=await this._worker(r);if(e.isDisposed())return;const a=await s.getNavigationBarItems(r.toString());if(!a||e.isDisposed())return;const u=(g,n,p)=>{let d={name:n.text,detail:"",kind:m[n.kind]||i.languages.SymbolKind.Variable,range:this._textSpanToRange(e,n.spans[0]),selectionRange:this._textSpanToRange(e,n.spans[0]),tags:[]};if(p&&(d.containerName=p),n.childItems&&n.childItems.length>0)for(let f of n.childItems)u(g,f,d.name);g.push(d)};let c=[];return a.forEach(g=>u(c,g)),c}},l=class{};b(l,"unknown","");b(l,"keyword","keyword");b(l,"script","script");b(l,"module","module");b(l,"class","class");b(l,"interface","interface");b(l,"type","type");b(l,"enum","enum");b(l,"variable","var");b(l,"localVariable","local var");b(l,"function","function");b(l,"localFunction","local function");b(l,"memberFunction","method");b(l,"memberGetAccessor","getter");b(l,"memberSetAccessor","setter");b(l,"memberVariable","property");b(l,"constructorImplementation","constructor");b(l,"callSignature","call");b(l,"indexSignature","index");b(l,"constructSignature","construct");b(l,"parameter","parameter");b(l,"typeParameter","type parameter");b(l,"primitiveType","primitive type");b(l,"label","label");b(l,"alias","alias");b(l,"const","const");b(l,"let","let");b(l,"warning","warning");var m=Object.create(null);m[l.module]=i.languages.SymbolKind.Module;m[l.class]=i.languages.SymbolKind.Class;m[l.enum]=i.languages.SymbolKind.Enum;m[l.interface]=i.languages.SymbolKind.Interface;m[l.memberFunction]=i.languages.SymbolKind.Method;m[l.memberVariable]=i.languages.SymbolKind.Property;m[l.memberGetAccessor]=i.languages.SymbolKind.Property;m[l.memberSetAccessor]=i.languages.SymbolKind.Property;m[l.variable]=i.languages.SymbolKind.Variable;m[l.const]=i.languages.SymbolKind.Variable;m[l.localVariable]=i.languages.SymbolKind.Variable;m[l.variable]=i.languages.SymbolKind.Variable;m[l.function]=i.languages.SymbolKind.Function;m[l.localFunction]=i.languages.SymbolKind.Function;var S=class extends w{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:`
`,InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}},Y=class extends S{async provideDocumentRangeFormattingEdits(e,t,r,s){const a=e.uri,u=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),c=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),g=await this._worker(a);if(e.isDisposed())return;const n=await g.getFormattingEditsForRange(a.toString(),u,c,S._convertOptions(r));if(!(!n||e.isDisposed()))return n.map(p=>this._convertTextChanges(e,p))}},Z=class extends S{get autoFormatTriggerCharacters(){return[";","}",`
`]}async provideOnTypeFormattingEdits(e,t,r,s,a){const u=e.uri,c=e.getOffsetAt(t),g=await this._worker(u);if(e.isDisposed())return;const n=await g.getFormattingEditsAfterKeystroke(u.toString(),c,r,S._convertOptions(s));if(!(!n||e.isDisposed()))return n.map(p=>this._convertTextChanges(e,p))}},ee=class extends S{async provideCodeActions(e,t,r,s){const a=e.uri,u=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),c=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),g=S._convertOptions(e.getOptions()),n=r.markers.filter(h=>h.code).map(h=>h.code).map(Number),p=await this._worker(a);if(e.isDisposed())return;const d=await p.getCodeFixesAtPosition(a.toString(),u,c,n,g);return!d||e.isDisposed()?{actions:[],dispose:()=>{}}:{actions:d.filter(h=>h.changes.filter(y=>y.isNewFile).length===0).map(h=>this._tsCodeFixActionToMonacoCodeAction(e,r,h)),dispose:()=>{}}}_tsCodeFixActionToMonacoCodeAction(e,t,r){const s=[];for(const u of r.changes)for(const c of u.textChanges)s.push({resource:e.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(e,c.span),text:c.newText}});return{title:r.description,edit:{edits:s},diagnostics:t.markers,kind:"quickfix"}}},te=class extends w{constructor(e,t){super(t),this._libFiles=e}async provideRenameEdits(e,t,r,s){const a=e.uri,u=a.toString(),c=e.getOffsetAt(t),g=await this._worker(a);if(e.isDisposed())return;const n=await g.getRenameInfo(u,c,{allowRenameOfImportPath:!1});if(n.canRename===!1)return{edits:[],rejectReason:n.localizedErrorMessage};if(n.fileToRename!==void 0)throw new Error("Renaming files is not supported.");const p=await g.findRenameLocations(u,c,!1,!1,!1);if(!p||e.isDisposed())return;const d=[];for(const f of p){const h=this._libFiles.getOrCreateModel(f.fileName);if(h)d.push({resource:h.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(h,f.textSpan),text:r}});else throw new Error(`Unknown file ${f.fileName}.`)}return{edits:d}}},re=class extends w{async provideInlayHints(e,t,r){const s=e.uri,a=s.toString(),u=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),c=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),g=await this._worker(s);return e.isDisposed()?null:{hints:(await g.provideInlayHints(a,u,c)).map(d=>({...d,label:d.text,position:e.getPositionAt(d.position),kind:this._convertHintKind(d.kind)})),dispose:()=>{}}}_convertHintKind(e){switch(e){case"Parameter":return i.languages.InlayHintKind.Parameter;case"Type":return i.languages.InlayHintKind.Type;default:return i.languages.InlayHintKind.Type}}},A,L;function ce(e){L=N(e,"typescript")}function ue(e){A=N(e,"javascript")}function ge(){return new Promise((e,t)=>{if(!A)return t("JavaScript not registered!");e(A)})}function de(){return new Promise((e,t)=>{if(!L)return t("TypeScript not registered!");e(L)})}function N(e,t){const r=new U(t,e),s=(...u)=>r.getLanguageServiceWorker(...u),a=new $(s);return i.languages.registerCompletionItemProvider(t,new D(s)),i.languages.registerSignatureHelpProvider(t,new I(s)),i.languages.registerHoverProvider(t,new G(s)),i.languages.registerDocumentHighlightProvider(t,new J(s)),i.languages.registerDefinitionProvider(t,new Q(a,s)),i.languages.registerReferenceProvider(t,new q(a,s)),i.languages.registerDocumentSymbolProvider(t,new X(s)),i.languages.registerDocumentRangeFormattingEditProvider(t,new Y(s)),i.languages.registerOnTypeFormattingEditProvider(t,new Z(s)),i.languages.registerCodeActionProvider(t,new ee(s)),i.languages.registerRenameProvider(t,new te(a,s)),i.languages.registerInlayHintsProvider(t,new re(s)),new z(a,e,t,s),s}export{w as Adapter,ee as CodeActionAdaptor,Q as DefinitionAdapter,z as DiagnosticsAdapter,Y as FormatAdapter,S as FormatHelper,Z as FormatOnTypeAdapter,re as InlayHintsAdapter,l as Kind,$ as LibFiles,J as OccurrencesAdapter,X as OutlineAdapter,G as QuickInfoAdapter,q as ReferenceAdapter,te as RenameAdapter,I as SignatureHelpAdapter,D as SuggestAdapter,U as WorkerManager,F as flattenDiagnosticMessageText,ge as getJavaScriptWorker,de as getTypeScriptWorker,ue as setupJavaScript,ce as setupTypeScript};
