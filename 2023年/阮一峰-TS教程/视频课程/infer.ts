


function getUser(name: string, age: number) {
  return { name, age, address: {} }
}


type ReturnType<T  extends (...args : any)=> any> 
= T extends (...args: any[]) => infer R ? R : never


type T1 = ReturnType<typeof getUser>

// InstanceType<>

export {}