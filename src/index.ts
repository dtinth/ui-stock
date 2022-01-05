/**
 * TODO
 * @packageDocumentation
 */

/**
 * The interface of UI stock that an implementation should conform.
 * This is a strict subset of the `vscode.window` interface.
 * @public
 */
export interface IStock {
  showInformationMessage<T extends IMessageItem>(
    message: string,
    options: IMessageOptions,
    ...items: T[]
  ): PromiseLike<T | undefined>

  showWarningMessage<T extends IMessageItem>(
    message: string,
    options: IMessageOptions,
    ...items: T[]
  ): PromiseLike<T | undefined>

  showErrorMessage<T extends IMessageItem>(
    message: string,
    options: IMessageOptions,
    ...items: T[]
  ): PromiseLike<T | undefined>

  showQuickPick<T extends IQuickPickItem>(
    items: readonly T[],
    options: IQuickPickOptions,
    token?: ICancellationToken,
  ): PromiseLike<T | undefined>

  showInputBox(
    options: IInputBoxOptions,
    token?: ICancellationToken,
  ): PromiseLike<string | undefined>

  withProgress<R>(
    options: IProgressOptions,
    task: (progress: IProgress, token?: ICancellationToken) => PromiseLike<R>,
  ): PromiseLike<R>
}

/**
 * See: https://code.visualstudio.com/api/references/vscode-api#MessageItem
 */
export interface IMessageItem {
  title: string
}

/**
 * See: https://code.visualstudio.com/api/references/vscode-api#MessageOptions
 */
export interface IMessageOptions {
  modal?: boolean
  detail?: string
}

/**
 * See: https://code.visualstudio.com/api/references/vscode-api#QuickPickItem
 */
export interface IQuickPickItem {
  label: string
}

/**
 * See: https://code.visualstudio.com/api/references/vscode-api#QuickPickOptions
 */
export interface IQuickPickOptions {
  title?: string
  placeHolder?: string
}

/**
 * See: https://code.visualstudio.com/api/references/vscode-api#InputBoxOptions
 */
export interface IInputBoxOptions {
  title?: string
  placeHolder?: string
  prompt?: string
}

/**
 * See: https://code.visualstudio.com/api/references/vscode-api#ProgressOptions
 */
export interface IProgressOptions {
  title?: string
  cancellable?: boolean
}

/**
 * See: https://code.visualstudio.com/api/references/vscode-api#Progress
 */
export interface IProgress {
  report(value: { increment: number; message: string }): void
}

/**
 * See: https://code.visualstudio.com/api/references/vscode-api#CancellationToken
 * @public
 */
export interface ICancellationToken {
  isCancellationRequested: boolean
  onCancellationRequested(listener: () => void): IDisposable
}

/**
 * See: https://code.visualstudio.com/api/references/vscode-api#Disposable
 * @public
 */
export interface IDisposable {
  dispose(): void
}
