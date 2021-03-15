import React, {useEffect, useState, useRef} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {GenerateCodeFromAst} from "../mapper/code-generator";
import * as monaco from "monaco-editor";
import {listen, MessageConnection} from "vscode-ws-jsonrpc";
import {CloseAction, createConnection, ErrorAction, MonacoLanguageClient, MonacoServices} from "monaco-languageclient";
import ReconnectingWebSocket from "reconnecting-websocket";
import normalizeUrl from 'normalize-url';

export const ScriptBasedFlow: React.FC = () => {

    const [ast, changedFromVisualEditor] : any = useSelector(
        (state:any) => {
            return [state.astReducer.ast, state.astReducer.changedFromVisualEditor]
        },
        shallowEqual
    )

    const[code, setCode] = useState(GenerateCodeFromAst(ast));
    // const [decorations, setDecorations] = useState<string[]>([]);
    const editorRef: any = useRef(null);

    function createLanguageClient(connection: MessageConnection): MonacoLanguageClient {
        return new MonacoLanguageClient({
            name: "Sample Language Client",
            clientOptions: {
                // use a language id as a document selector
                documentSelector: ['typescript'],
                // disable the default error handler
                errorHandler: {
                    error: () => ErrorAction.Continue,
                    closed: () => CloseAction.DoNotRestart
                }
            },
            // create a language client connection from the JSON RPC connection on demand
            connectionProvider: {
                get: (errorHandler, closeHandler) => {
                    return Promise.resolve(createConnection(connection, errorHandler, closeHandler))
                }
            }
        });
    }

    function createUrl(path: string): string {
        return normalizeUrl(path);
    }

    function createWebSocket(url: string): any {
        const socketOptions = {
            maxReconnectionDelay: 10000,
            minReconnectionDelay: 1000,
            reconnectionDelayGrowFactor: 1.3,
            connectionTimeout: 10000,
            maxRetries: Infinity,
            debug: false,
        };
        return new ReconnectingWebSocket(url, [], socketOptions);
    }

    useEffect(()=>{

        // register Monaco languages
        monaco.languages.register({
            id: 'typescript',
            extensions: ['.ts'],
            aliases: ['typescript','ts','TS','typescript','typescript']
        });

        // create Monaco editor
        if (code != null) {
            const editor = monaco.editor.create(editorRef.current, {
                model: monaco.editor.createModel(code, 'typescript', monaco.Uri.parse('file:///home/himashi/Project/demo/ts/file.ts')),
                glyphMargin: true,
                theme: "vs-dark",
                lightbulb: {
                    enabled: true
                }
            });

            MonacoServices.install(editor, {rootUri: 'file:///home/himashi/Project/demo/ts'});

            // editor.onDidChangeModelContent(_.debounce(e => {
            //     setValue(editor.getValue())
            // }, 100))

            // editor.onDidChangeModel(e=>{
            //     let value = editor.getValue();
            //     if (value===undefined){
            //         value='';
            //     }
            //     setCode(value);
            //     let ast = ParseToAst(value);
            //     // showWarnings(ast);
            //     saveAstToStore(ast);
            // });

            // create the web socket
            const url : string = createUrl("wss://localhost:9443/lsp/lsp");
            // const url = createUrl('ws://localhost:3003/ts');
            const webSocket = createWebSocket(url);

            // listen when the web socket is opened
            listen({
                webSocket,
                onConnection: connection => {
                    // create and start the language client
                    const languageClient = createLanguageClient(connection);
                    const disposable = languageClient.start();
                    connection.onClose(() => disposable.dispose());
                }
            });

            return () => editor.dispose();
        }

    }, []);

    // useEffect(()=>{
    //     if (changedFromVisualEditor) {
    //         setCode(GenerateCodeFromAst(ast));
    //         // showWarnings(ast);
    //     }
    // }, [ast, changedFromVisualEditor]);

    // const showWarnings = (ast: any) => {
    //     let harmfulLines = HasHarmfulOperations(ast);
    //     let newDecorations : any[] = harmfulLines.map(line=>{
    //         return {
    //             range: new monacoRef.Range(line, 1, line, 1),
    //             options: {
    //                 isWholeLine: true,
    //                 glyphMarginClassName: "warningIcon",
    //                 glyphMarginHoverMessage: {value: "Warning : Harmful operation"},
    //             }
    //         }
    //     });
    //     setDecorations(editorRef.current.deltaDecorations(
    //         decorations,
    //         newDecorations
    //     ));
    // }

    return (
        <div className="Script-editor">
            <div className="Script-editor-container">
                <div className="script-editor-header">
                    <h3>Script Editor</h3>
                </div>
                <div
                    className="monaco-editor"
                    ref={editorRef}
                >
                </div>
            </div>
        </div>
    );

};
