interface Test {
    name:string
    last:number
    fn:() => void 

}

const test:Test = {
      name:"Andy",
      last:2,
      fn:()=>console.log("In fn")
}

for (const props in test){
    console.log(props)
    console.log( test[props as keyof Test] instanceof Function)
}

export default Test