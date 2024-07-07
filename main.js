let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];

//map문제
//1.모든 이름을 대문자로 바꾸어서 출력하시오
let data1 = names.map((item)=>item.toUpperCase())
console.log(data1)

//2.성을 제외한 이름만 출력하시오
let data2 = names.map((item)=>item.split(' ')[0]
)
console.log(data2)

// 3.이름의 이니셜만 출력하시오 ★
let data3 = names.map((item)=>{
  let splitName = item.split(' ');
  let initial = "";
  splitName.forEach((nameItem)=>(initial += nameItem[0]))
  return initial
})
console.log(data3)


//filter 문제
//4.이름에 a를 포함한 사람들을 출력하시오.

let data4 = names.filter((item)=>item.includes("a"))
console.log(data4)

//5.이름에 같은 글자가 연속해서 들어간 사람을 출력하시오.★
let data5 = names.filter((item)=>{
  let splitName = item.split('');
  return splitName.some((letter, index)=>letter == splitName[index+1])
})

console.log(data5)

//some 문제(true or false)
//6.전체 이름의 길이가 20자 이상인 사람이 있는가?
console.log(names.some((item)=>item.length>=20))

// 7.성을 제외한 이름에 p를 포함한 사림이 있는가?
let data7 = names.some((item)=>{
  let splitName = item.split(' ')
  splitName.pop()
  return splitName.some(eachName=> eachName.toLocaleLowerCase().includes("p"))
})
console.log(data7)

// every 문제
// 8.모두의 전체 이름의 길이가 20자 이상인가?
console.log(names.every((item)=>item.length>=20))

// 9.모두의 이름에 a가 포함되어 있는가?
console.log(names.every((item)=>item.includes("a")))

// find 문제
// 10.전체 이름의 길이가 20자 이상인 사람을 찾으시오
console.log(names.find((item)=>item.length>=20))

// 11.미들네임이 포함되어있는 사람을 찾으시오
console.log(names.find((item)=>item.split(' ').length>=3))

// findIndex 문제
// 12.전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.
console.log(names.findIndex((item)=>item.length>=20))

// 13.미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.
console.log(names.findIndex((item)=>item.split(' ').length>=3))
