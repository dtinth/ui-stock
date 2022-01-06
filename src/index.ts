/**
 * Strict subset of `vscode.window` API for rapidly prototyping web apps. (Interface only; no implementation)
 * @packageDocumentation
 */

/**
 * The interface of UI stock that an implementation should conform.
 * This is a strict subset of the `vscode.window` interface.
 * @public
 */
export interface UIStock {
  showInformationMessage<T extends MessageItem>(
    message: string,
    options: MessageOptions,
    ...items: T[]
  ): PromiseLike<T | undefined>

  showWarningMessage<T extends MessageItem>(
    message: string,
    options: MessageOptions,
    ...items: T[]
  ): PromiseLike<T | undefined>

  showErrorMessage<T extends MessageItem>(
    message: string,
    options: MessageOptions,
    ...items: T[]
  ): PromiseLike<T | undefined>

  showQuickPick<T extends QuickPickItem>(
    items: readonly T[],
    options: QuickPickOptions,
    token?: CancellationToken,
  ): PromiseLike<T | undefined>

  showInputBox(
    options: InputBoxOptions,
    token?: CancellationToken,
  ): PromiseLike<string | undefined>

  withProgress<R>(
    options: ProgressOptions,
    task: (progress: Progress, token?: CancellationToken) => PromiseLike<R>,
  ): PromiseLike<R>
}

/**
 * See: https://code.visualstudio.com/api/references/vscode-api#MessageItem
 */
export interface MessageItem {
  title: string
}

/**
 * See: https://code.visualstudio.com/api/references/vscode-api#MessageOptions
 */
export interface MessageOptions {
  modal?: boolean
  detail?: string
}

/**
 * See: https://code.visualstudio.com/api/references/vscode-api#QuickPickItem
 */
export interface QuickPickItem {
  label: string
}

/**
 * See: https://code.visualstudio.com/api/references/vscode-api#QuickPickOptions
 */
export interface QuickPickOptions {
  title?: string
  placeHolder?: string
}

/**
 * See: https://code.visualstudio.com/api/references/vscode-api#InputBoxOptions
 */
export interface InputBoxOptions {
  title?: string
  placeHolder?: string
  prompt?: string
}

/**
 * See: https://code.visualstudio.com/api/references/vscode-api#ProgressOptions
 */
export interface ProgressOptions {
  title?: string
  cancellable?: boolean
}

/**
 * See: https://code.visualstudio.com/api/references/vscode-api#Progress
 */
export interface Progress {
  report(value: { increment: number; message: string }): void
}

/**
 * See: https://code.visualstudio.com/api/references/vscode-api#CancellationToken
 * @public
 */
export interface CancellationToken {
  isCancellationRequested: boolean
  onCancellationRequested(listener: () => void): Disposable
}

/**
 * See: https://code.visualstudio.com/api/references/vscode-api#Disposable
 * @public
 */
export interface Disposable {
  dispose(): void
}
