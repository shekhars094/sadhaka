const vscode = require("vscode");

function activate(context) {
  console.log('Congratulations, your extension "sadhaka" is now active!');

  let disposable = vscode.commands.registerCommand(
    "sadhaka.helloWorld",
    function () {
      vscode.window.showInformationMessage("Hello World!");
    }
  );


  let power = vscode.commands.registerCommand("sadhaka.gone", function () {});

  context.subscriptions.push(disposable, power);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
