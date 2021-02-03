import * as vscode from 'vscode';
import * as path from 'path';

export class AboutItem extends vscode.TreeItem{
    constructor(
        public readonly name: string,
        public readonly value :string,
        public readonly collapsibleState: vscode.TreeItemCollapsibleState,
        public readonly command?: vscode.Command,
        public readonly description ?:string,
        
	) {
		super(name, collapsibleState);

        this.tooltip = this.value;
        if (description){
            this.description = this.description;
        }else{
            this.description = value;
        }
        this.value = value;
	}
	iconPath = path.join(__filename, '..', '..', 'resources', 'bamboo.svg');
	contextValue = this.name;
}


export class AboutProvider implements vscode.TreeDataProvider<AboutItem> {
    private _onDidChangeTreeData: vscode.EventEmitter<AboutItem | undefined | void> = new vscode.EventEmitter<AboutItem | undefined | void>();
    readonly onDidChangeTreeData: vscode.Event<AboutItem | undefined | void> = this._onDidChangeTreeData.event;
    refresh(): void {
		this._onDidChangeTreeData.fire();
    }
    getTreeItem(element: AboutItem): vscode.TreeItem {
		return element;
	}
    getChildren(element?: AboutItem): Thenable<AboutItem[]> {
        let name = new AboutItem("插件名","Bamboo：Go开发辅助",vscode.TreeItemCollapsibleState.None)
        let version = new AboutItem("版本","0.0.1",vscode.TreeItemCollapsibleState.None)
        let email = new AboutItem("邮箱","xinyong.w@gmail.com",vscode.TreeItemCollapsibleState.None)
        let website = new AboutItem("主页","https://baidu.com",vscode.TreeItemCollapsibleState.None)
        let author = new AboutItem("作者","王新勇",vscode.TreeItemCollapsibleState.None)

        return Promise.resolve([name,version,author,email,website]);
    }
}