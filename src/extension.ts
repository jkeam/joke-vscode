import * as vscode from 'vscode';
import fetch, { Response } from 'node-fetch';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('joke-vscode.joke', async () => {
		const resp: Response = await fetch('https://official-joke-api.appspot.com/jokes/random');
		const { setup, punchline } = await resp.json();
		vscode.window.showInformationMessage(`${setup}  ${punchline}`);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
