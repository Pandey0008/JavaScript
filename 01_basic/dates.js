//*************DATES***********


let myDate=new Date()

//console.log(myDate);//2024-12-19T08:27:23.961Z
//console.log(myDate.toLocaleString());//12/19/2024, 1:58:31 PM
//console.log(myDate.toDateString());//Thu Dec 19 2024
//console.log(myDate.toString());//Thu Dec 19 2024 14:01:43 GMT+0530 (India Standard Time)
//console.log(typeof myDate);//object

let createDate=new Date(2001,9,25,12,5,45)//=>[year,month(starts from 0),date,hours,minutes,seconds,miliseconds]
//console.log(createDate.toLocaleString());//10/25/2001, 12:05:45 PM


                //*********TIMES*********

let myTime=Date.now()
//console.log(myTime);//(time in milisec from 1 january 1970)//1734598086199
//console.log(createDate.getTime());//(createDate se abhi tak ka time)//1003991745000
//console.log(Math.floor(Date.now()/1000));//(time in second from 1 january 1970)//1734598405

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);//12
console.log(newDate.getDay());//4

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    })


