// declare var document;
// document.addEventListener("click", () => {});

declare function sayHello(params: string): void;

sayHello("hello world");

declare module AnimalLib {
  class Animal {
    constructor(name: string);
    eat(): void;
    sleep(): void;
  }

  type AnimalType = "animal";
}

declare module myLib {
  function makeGreeting(s: string): string;

  let numberOfGreetings: number;
}

declare global {
  interface String {
    toSmallString(): string;
  }

  interface window {
    myAppConfig: object;
  }
}

export {};
