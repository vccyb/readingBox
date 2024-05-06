export function isUndef(v: any): v is undefined | null {
  return v === undefined || v === null;
}

let a;

if (isUndef(a)) {
  a;
} else {
  a;
}
