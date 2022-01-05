import type { IStock } from '.'

const showMessage: IStock['showInformationMessage'] = async (
  message,
  options,
  ...items
) => {
  if (items.length === 0) {
    alert(message + '\n' + options.detail)
    return
  } else {
    return stock
      .showQuickPick(
        items.map((item) => ({
          label: item.title,
          item,
        })),
        {
          title: message,
          placeHolder: options.detail,
        },
      )
      .then((r) => r?.item)
  }
}

const stock: IStock = {
  showInformationMessage: showMessage,
  showWarningMessage: showMessage,
  showErrorMessage: showMessage,
  showQuickPick: async (items, options) => {
    const { title, placeHolder } = options
    const index = prompt(
      (title || '') +
        '\n' +
        items.map(({ label }, i) => `${i + 1}. ${label}`).join('\n'),
      placeHolder || '',
    )
    if (index == null) {
      return
    }
    return items[+index - 1]
  },
  showInputBox: async (options) => {
    const { title, placeHolder, prompt: promptText } = options
    const value = prompt(
      (title || '') + '\n' + (promptText || ''),
      placeHolder || '',
    )
    return value || undefined
  },
  withProgress: async (options, task) => {
    return task({
      report: () => {},
    })
  },
}

export default stock
