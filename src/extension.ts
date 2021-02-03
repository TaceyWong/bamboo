// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {AboutItem,AboutProvider} from "./about"

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "bamboo" is now active!');
	vscode.window.showInformationMessage("激活bamboo");

	const aboutProvider = new AboutProvider();
	vscode.window.registerTreeDataProvider('bamboo.about', aboutProvider);

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	context.subscriptions.push(vscode.commands.registerCommand('bamboo.context.refresh', () => {
		vscode.window.showInformationMessage('命令：bamboo.context.refresh!');
	}));
	context.subscriptions.push(vscode.commands.registerCommand('bamboo.context.update', () => {
		vscode.window.showInformationMessage('命令：bamboo.context.update!');
	}));
	context.subscriptions.push(vscode.commands.registerCommand('bamboo.context.delete', () => {
		vscode.window.showInformationMessage('命令：bamboo.context.delete!');
	}));
	context.subscriptions.push(vscode.commands.registerCommand('bamboo.context.clear', () => {
		vscode.window.showInformationMessage('命令：bamboo.context.clear!');
	}));
	context.subscriptions.push(vscode.commands.registerCommand('bamboo.comment.quickAdd', () => {
		vscode.window.showInformationMessage('命令：bamboo.comment.quickAdd!');
	}));
	context.subscriptions.push(vscode.commands.registerCommand('bamboo.comment.quickClear', () => {
		vscode.window.showInformationMessage('命令：bamboo.comment.quickClear!');
	}));
}

// this method is called when your extension is deactivated
export function deactivate() { }
