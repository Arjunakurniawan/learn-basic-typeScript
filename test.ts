type User = {
  name: string;
  age: number;
};

function IsResult(user: User): boolean {
  return user.age <= 10;
}

const arjuna = {
  name: "Arjuna",
  age: 18,
} satisfies User;

const IsResultArjuna = console.log(IsResult(arjuna));
