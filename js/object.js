       //10th May, 2021
//javascript object
//................................................
//................................................
let emptyObject = {};

//A simple object
const person = {firstName:"Harvey", lastName:"Specter"};
typeof person; //"Object"

//Mixed Array
const userDetails = {
    email: "someone@gmail.com",
    userName: "Michael",
    password: "00112233",
    isFunny: true,
    favColors: ["red","black","grey"]
};
//manipulating objects
//calling out value using a square bracket ([]) (first method)
person["firstName"]; //Harvey
person["lastName"]; //"specter"
person["colors"];// undefined //if a key does not exist it returns undefined
userDetails["favColors"];// (3) ["red","Black", "gray"]

//Calling out a number using dot(.)
person.firstName; //"Harvey"
person.lastName; //"specter"
userDetails.favColors; //(3) ["red","Black", "gray"]

//using object as key values
const years = {
    1999: "GOOD",
    2000: "BETTER",
    2010: "BEST",
    2020: "BAD"
};
//Using square bracket to access to the data in the object
years["1999"];//"GOOD"
years["2000"];//"BETTER"
years[2010];//"BEST"
years[2000];//"BETTER"

//Using dot(.) notation to access the data in the object
//years.2000; //uncaught syntaxError : unexpected number
//years."2000"; //uncaught syntaxError : unexpected string
//NOTE: when using numbers as a key value,
//Javascript cannot identify the number as a key value so it returns ERROR


//Using booleans as keys
const booObj = {
    true: "beautiful",
    false: "ugly",
    null: "Alright",
    undefined: "Don't know"
};
//using square[] bracket to access the data in the object
ooObj["null"];//"Alright"
booObj[true]; //"beautiful"
booObj["true"]; //"beautiful"
booObj["false"];//"ugly"
booObj[undefined];//"Don't know"

//Using dot(.) notation to access the data in the object
booObj.false;//"Ugly"
booObj.null;//"Alright"

//Changing Values in our javascript object
const examScores ={
    Fortune: 50,
    Mandela: 68,
    Austin: 70,
    mesoma:74,
    Mr_Ifeanyi: 76,
    Mr_Acho: 78
};
//Accessing the values 
examScores.Austin; //70
examScores["mesoma"];//74


//Changing the values
examScores.Mr_Ifeanyi;"A";//"A" //Changes the value of "Mr_Ifenyi to "A",
examScores.Fortune = "C";//"C+" // Changes the value of "Fortune" to "C+",

//Adding a new Data to our object
examScores.Ebube = "A+"; //"A+" //Adds a key of "Ebube" with the value of "A+",
examScores.["Ella"] = "B+"; //"B+" //Adds a key of ["Ella"] with the value of "B+"

//Arrays+Objects
const comments = [
    {username: "Tammy",
     text: "Not Funny",
     likes: 78
    },
    {
        userName: "George",
        text: "Loved it",
        likes: 12
    }
];

comments;//(2) [{…}, {…}]
        //0: {username: "Tammy", text: "Not Funny", likes: 78}
        //1: {userName: "George", text: "Loved it", likes: 12}
        //length: 2
        //__proto__: Array(0)

        comments[1];//{userName: "George", text: "Loved it", likes: 12}
        comments[1].userName;//"George"
        comments[1]["text"];//"Loved it"
        comments[0].dislikes = 10;//10//Adds a key of "duslikes" and the value of 10 to the object
        
        comments[0];//{username: "Tammy", text: "Not Funny", likes: 78, dislikes: 10}

//Updated Array of Objects
       // comments:   //(2) [{…}, {…}]
                    //0: {username: "Tammy", text: "Not Funny", likes: 78}
                    //1: {userName: "George", text: "Loved it", likes: 12}
                    //length: 2
                    //__proto__: Array(0)