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
  ): PromiseLike<T | undefined>

  showInputBox(options: IInputBoxOptions): PromiseLike<string | undefined>

  withProgress<R>(
    options: IProgressOptions,
    task: (progress: IProgress) => PromiseLike<R>,
  ): PromiseLike<R>
}
export interface IMessageItem {
  title: string
}
export interface IMessageOptions {
  modal?: boolean
  detail?: string
}

export interface IQuickPickItem {
  label: string
}

export interface IQuickPickOptions {
  title?: string
  placeHolder?: string
}

export interface IInputBoxOptions {
  title?: string
  placeHolder?: string
  prompt?: string
}

export interface IProgressOptions {
  title?: string
}

export interface IProgress {
  report(value: { increment: number; message: string }): void
}
