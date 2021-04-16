function generate(){
    let noOfStores=parseInt(document.getElementById('no-of-stores').value);
    let startingWeek=parseInt(document.getElementById('starting-week').value);
    let endingWeek=parseInt(document.getElementById('ending-week').value);
    let noOfScreens=parseInt(document.getElementById('no-of-screens').value);
    let result=getAllStoresData(noOfStores,noOfScreens,startingWeek,endingWeek);
    result=`{\n${result}\n\n}`
    console.log(result);
    document.getElementById('result').innerHTML=result.substr(0,50)+"<h1>Open Console for Whole data</h1>";
}

function getAllStoresData(noOfStores,noOfScreens,startingWeek,endingWeek){
    let str=``;
    for(let i=1;i<=noOfStores;i++){
        str+=getOneStoreData(i,noOfScreens,startingWeek,endingWeek);
        if(i<noOfStores)
        str+=`,\n`;
    }
    return str;
}

function getOneStoreData(storeNum,noOfScreens,startingWeek,endingWeek){
    let str=`\n"UID${storeNum}" :{\n`;
    str+=getPaymentData(startingWeek,endingWeek);
    str+=`,`;
    str+=getAllScreenData(noOfScreens);
    str+=`,\n`;
    str+=getStoreDetails();
    str+=`\n\t}`;
    return str;
}


function getPaymentData(startingWeek,endingWeek){
    let Commission=getRandom(4,20)*500;
    let str=`\t"Payment" : {\n`;
    str+=getAllWeekData(startingWeek,endingWeek);
    str+=`\n\t\t},\n`;
    str+=`\t\t"totalCommission" : ${Commission},\n`;
    str+=`\t\t"totalSales" : ${getRandom(2,5)*Commission}`;
    str+=`\n\t}`;
    return str;
}

function getOneScreenData(screenNum){
    let str=`\t\t"${screenNum}":{\n`;
    str+=`\t\t\t"lockUnlock" : 1 ,\n`
    str+=`\t\t\t"loggedinStatus" : 0`;
    str+=`\n\t\t\t}`;
    return str;
}

function getAllScreenData(screenNum){
    let str=`\n\t"Screens" : {\n`;
    for(let i=1;i<=screenNum;i++){
        str+=getOneScreenData(i);
        if(i<screenNum)
        str+=`,\n`;
    }
    str+=`\n\t\t}`;
    return str;
}

function getAllWeekData(startingWeek,endingWeek){
    let str=`\t\t"Weeks" : {\n`;
    for(let i=startingWeek;i<=endingWeek;i++){
        str+=getOneWeekData(i);
        if(i<endingWeek)
        str+=`,\n`;
    }
    return str;
}

function getStoreDetails(){
    let str=``;
    str+=`\t"details" : {
        "Address" : "${getRandomString(5)},${getRandomString(10)}",
        "City" : "${getRandomString(6)}",
        "CompanyName" : "${getRandomString(6)}",
        "Email" : "${getRandomString(6)}@${getRandomString(6)}.com",
        "OwnerName" : "${getRandomString(6)}  ${getRandomString(6)}",
        "Phone" : "+${getRandom(1,9)}(${getRandom(100,999)})${getRandom(100,999)}-${getRandom(10,99)}-${getRandom(10,99)}",
        "State" : "${getRandomString(10)}",
        "StoreName" : "${getRandomString(8)}",
        "Zipcode" : "${getRandom(100,999)} ${getRandom(100,999)}"
        }`;
    return str;
}

function getOneWeekData(weekNum){
    let Commission=getRandom(4,20)*50;
    let str=`\t\t"${weekNum}":{
    \t\t"billStatus" : ${getRandom(0,3)},
    \t\t"commission" : ${Commission},
    \t\t"counter" : [ ${getRandom(50,250)}, ${getRandom(50,250)}, ${getRandom(50,250)}, ${getRandom(50,250)}, ${getRandom(50,250)}, ${getRandom(50,250)}, ${getRandom(50,250)}],
    \t\t"sales" : ${getRandom(2,5)*Commission}
    \t\t}`;
    return str;
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

function getRandomString(length){
    let result=[];
    let characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;
    for (let i=0;i<length;i++){
        result.push(characters.charAt(Math.floor(Math.random()*charactersLength)));
    }
    return result.join('');
}