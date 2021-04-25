
var names = ["Smith","Johnson","Williams","Brown","Jones","Miller","Davis","Garcia","Rodriguez","Wilson","Martinez","Anderson","Taylor","Thomas","Hernandez","Moore","Martin","Jackson","Thompson","White","Lopez","Lee","Gonzalez","Harris","Clark","Lewis","Robinson","Walker","Perez","Hall","Young","Allen","Sanchez","Wright","King","Scott","Green","Baker","Adams","Nelson","Hill","Ramirez","Campbell","Mitchell","Roberts","Carter","Phillips","Evans","Turner","Torres","Parker","Collins","Edwards","Stewart","Flores","Morris","Nguyen","Murphy","Rivera","Cook","Rogers","Morgan","Peterson","Cooper","Reed","Bailey","Bell","Gomez","Kelly","Howard","Ward","Cox","Diaz","Richardson","Wood","Watson","Brooks","Bennett","Gray","James","Reyes","Cruz","Hughes","Price","Myers","Long","Foster","Sanders","Ross","Morales","Powell","Sullivan","Russell","Ortiz","Jenkins","Gutierrez","Perry","Butler","Barnes","Fisher"];
var city = ["Los Angeles",
    "San Diego",
    "San Jose",
    "San Francisco",
    "Fresno",
    "Sacramento",
    "Long Beach",
    "Oakland",
    "Bakersfield",
    "Anaheim",
    "Santa Ana",
    "Chicago",
    "Aurora",
    "Rockford",
    "Joliet",
    "Naperville",
    "Springfield",
    "Peoria",
    "Elgin",
    "Waukegan",
    "Cicero",
    "Champaign",
    "Bloomington",
    "Arlington Heights",
    "Evanston",
    "Decatur",
    "Schaumburg",
    "Bolingbrook"]

var states = ["California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District Of Columbia",
    "Federated States Of Micronesia",
    "Florida",
    "Georgia",
    "Guam"]

var nameLength = names.length
var cityLength = city.length
var statesLength = states.length

// let OwnerName = getNamefromRandomIndex() + " " + getNamefromRandomIndex();

// console.log("Email = ",`${firstName}${lastName}@gmail.com`);
// console.log("Address", `${lastName}${firstName}, Street`)
// console.log("Company =",`${lastName} Company`)
// console.log("")

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
    Commission = Commission.toFixed(0)
    let str=`\t"payment" : {\n`;
    str+=getAllWeekData(startingWeek,endingWeek);
    str+=`\n\t\t},\n`;
    str+=`\t\t"totalCommission" : ${Commission},\n`;
    str+=`\t\t"totalSales" : ${getRandom(2,5)*Commission}`;
    str+=`\n\t}`;
    return str;
}

function getOneScreenData(screenNum){
    let str=`\t\t"${screenNum}":{\n`;
    str+=`\t\t\t"lockStatus" : 1 ,\n`
    str+=`\t\t\t"loggedinStatus" : 0`;
    str+=`\n\t\t\t}`;
    return str;
}

function getAllScreenData(screenNum){
    let str=`\n\t"screens" : {\n`;
    for(let i=1;i<=screenNum;i++){
        str+=getOneScreenData(i);
        if(i<screenNum)
        str+=`,\n`;
    }
    str+=`\n\t\t}`;
    return str;
}

function getAllWeekData(startingWeek,endingWeek){
    let str=`\t\t"weeks" : {\n`;
    str+=`\t\t"start": ${startingWeek},\n`;
    for(let i=startingWeek;i<=endingWeek;i++){
        str+=getOneWeekData(i);
        if(i<endingWeek)
        str+=`,\n`;
    }
    return str;
}

function getStoreDetails(){
    let str=``;

    let firstName = getNamefromRandomIndex()
    let lastName = getNamefromRandomIndex()

    str+=`\t"details" : {
        "address" : "${lastName}${firstName}, Street" ,
        "city" : "${city[getRandom(1,cityLength)]}",
        "companyName" : "${lastName} Company",
        "email" : "${firstName}${lastName}@gmail.com",
        "ownerName" : "${firstName} ${lastName}",
        "phone" : "+${getRandom(1,9)}(${getRandom(100,999)})${getRandom(100,999)}-${getRandom(10,99)}-${getRandom(10,99)}",
        "state" : "${states[getRandom(1,statesLength)]}",
        "storeName" : "${lastName} Gaming",
        "zipCode" : "${getRandom(100,999)} ${getRandom(100,999)}"
        }`;
    return str;
}

// }
function getOneWeekData(weekNum){
    let Commission=getRandom(4,20)*50;
    Commission = Commission.toFixed(0);
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

function getNamefromRandomIndex() {
    var FN = getRandom(1,nameLength)
    return names[FN]
}

