export const getTodayDate = () =>
  new Date().toLocaleDateString().split('/').join('-');

export const notifyError = (id: string, errMsg: string) => {
  const element: any = document.querySelector(`#${id}`);
  element.trigger({ type: 'error', content: errMsg });
};
