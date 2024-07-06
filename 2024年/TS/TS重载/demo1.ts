function message(options: object): void;
function message(text: string, onClose?: Function): void;
function message(text: string, mode: string, duration: number): void;
function message(text: string, duration?: number, onClose?: Function): void;
function message(
  param1: string | object,
  param2?: number | Function | string,
  param3?: Function | number
) {}

message({ mode: "mode" });
message("text");
message("text", 3000);
message("text", "mode", 3000);
