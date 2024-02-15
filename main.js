// document.getElementById - Single Node
// document.getElementsByClassName - HTMLCollection
// document.getElementsByTagName - HTMLCollection
// document.querySelector - First match Single Node
// document.querySelectorAll -All match (NodeList Collection)

//Array Like - NodeList implement forEach
//Array Like - HTMLCollection does not implement forEach, using Array.from(HTMLColloction) when use forEach

// 1.query <div><p>...</p></div>
const divElementV1 = document.getElementsByTagName('div')
console.log(divElementV1)
console.log(divElementV1[1]) //เรียกเอาจาก index คือ div เบอร์ 1




const divV1Children = divElementV1[1].children  //ลูก
console.log(divV1Children)

Array.from(divV1Children).forEach((element) =>{

    console.log(element)
})                                   //แปลงเป็น array จริงๆ




const divElementV2 = document.querySelectorAll('div')
//NodeList
console.log(divElementV2)
//its children returns HTMLCollection

Array.from(divElementV2[1].children).forEach((element) => {  //กำกับ index ด้วย
  console.log(element)
})



//foreach เพื่อเข้าถีงข้อมูลได้
const divElementV3 = document.querySelector('div.faculty')
console.log(divElementV3)

const divElementV4 = document.querySelector('div#div-faculty')
console.log(divElementV4)

Array.from(divElementV4.children).forEach((element) => {
  console.log(element)
})




//2. query <p> under <div class="faculty" id="div-faculty">

const pElements = document.querySelectorAll('div.faculty>p')
console.log(pElements)
pElements.forEach((element) => {
  console.log(element)
})



//3. query element with id "courses"
const courseElement =document.getElementById('courses')
console.log(courseElement)



//4. query element with class "lecturer"
const lecturerElements = document.getElementsByClassName('lecturer')
console.log(lecturerElements)




//5. query all <button> element (collection)
const buttonElement = document.getElementsByTagName('button')
console.log(buttonElement)



//6. query <li> elements under <ul id="courses" (collection)

const liElements = document.querySelector('ul#courses')
console.log(liElements)

const liliElement = document.getElementsByTagName('li')
console.log(liliElement)



//7. query first <li> element under <ul id="courses" (Single Node)

const firstliElements = document.querySelector('ul#courses>li')
console.log(firstliElements)






