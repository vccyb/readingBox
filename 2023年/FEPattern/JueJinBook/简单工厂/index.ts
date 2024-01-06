type Person = {
  name: string;
  age: number;
  career: "coder" | "product manager";
};

const liLei: Person = {
  name: "李雷",
  age: 25,
  career: "coder",
};

const hanMeimei: Person = {
  name: "韩梅梅",
  age: 24,
  career: "product manager",
};

function User(name: string, age: number, career: string, work: string[]) {
  this.name = name;
  this.age = age;
  this.career = career;
  this.work = work;
}

function Factory(name: string, age: number, career: string) {
  let work: string[];
  switch (career) {
    case "coder":
      work = ["写代码", "修Bug"];
      break;
    case "product manager":
      work = ["订会议室", "写PRD", "催更"];
      break;
    case "boss":
      work = ["喝茶", "看报", "见客户"];
      break;
    default:
      work = ["xxx"];
      break;
  }
  return new User(name, age, career, work);
}
