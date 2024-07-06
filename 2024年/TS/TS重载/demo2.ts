interface ShowMessage {
  (options: object): void;
  (text: string, onClose?: Function): void;
  (text: string, mode: string, duration?: number): void;
  (text: string, duration?: number, onClose?: Function): void;
}

interface Utils {
  showMessage: ShowMessage;
}

const utils: Utils = {
  showMessage(
    param1: string | object,
    param2?: number | Function | string,
    param3?: Function | number
  ) {},
};

utils.showMessage({ a: "b" });
utils.showMessage("text", function () {});
