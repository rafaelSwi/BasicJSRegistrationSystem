let userBaseData = [
    {
        userid: "87u0e7o",
        username: "marcelooow",
        age: "45",
        gender: "H",
        email: "marcelo@gmail.com",
        pswd: "m4celaaao@gomez33"
    },
    {
        userid: "9t5uv47",
        username: "julia",
        age: "20",
        gender: "M",
        email: "julia@hotmail.com",
        pswd: "juli4zinhaaa."
    },
    {
        userid: "y7ik36g",
        username: "felipezin",
        age: "19",
        gender: "O",
        email: "felipe@outlook.com",
        pswd: "loc4oz4o*estrela"
    },
    {
        userid: "4un7kp8",
        username: "gustavao",
        age: "27",
        gender: "N",
        email: "gustavo@terra.com.br",
        pswd: "terrac0ta&marnele"
    }
]

function REGcreatePassword () {

    let userPassword = prompt ("Please, create a Safe Password!\n\nRequirements:\n\
* MUST CONTAIN 1 OR MORE NUMBERS\n* A SPECIAL CHARACTER\n* MORE THAN 5 CHARACTERS\n\
* ONE CAPS LETTER");

let howMuchNumbers = 0;
let hasSpecial = false;
let isBigEnough = new Boolean;
let itHasUpperCase = new Boolean;

let pswDist = userPassword.length;
let isEverythingOk = new Boolean;
let specifiChar;

while (isEverythingOk != true) {

    pswDist = userPassword.length;

let i = 0;
while (i < pswDist) {
    specifiChar = (userPassword.charAt (i));
    if (specifiChar == "0" || specifiChar == "1" || specifiChar == "2" || specifiChar == "3" || specifiChar == "4" || specifiChar == "5" || specifiChar == "6" || specifiChar == "7" || specifiChar == "8" || specifiChar == "9") {
        howMuchNumbers = (howMuchNumbers + 1); }
    i++;
}

i = 0;
while (i < pswDist) {
    specifiChar = (userPassword.charAt (i));
    if (specifiChar == "*" || specifiChar == "@" || specifiChar == "#" || specifiChar == "&" || specifiChar == "/" || specifiChar == "." || specifiChar == ":" || specifiChar == "?" || specifiChar == "!" || specifiChar == "%" || specifiChar == "$" || specifiChar == "<" || specifiChar == ">" || specifiChar == "~" || specifiChar == "_" || specifiChar == "-" || specifiChar == "^") {
        hasSpecial = true; }
    i++;
}

if (pswDist > 5 || pswDist == 5) {isBigEnough = true}
if (pswDist < 5) {isBigEnough = false}

i = 0;
let upperCaseSpecificChar;
while (i < pswDist) {
    specifiChar = (userPassword.charAt (i));
    if (specifiChar != "0" && specifiChar != "1" && specifiChar != "2" && specifiChar != "3" && specifiChar != "4" && specifiChar != "5" && specifiChar != "6" && specifiChar != "7" && specifiChar != "8" && specifiChar != "9") {
    upperCaseSpecificChar = (specifiChar.toUpperCase ());
    if (specifiChar == upperCaseSpecificChar) {itHasUpperCase = true}
    }
    i++;
}

if (howMuchNumbers >= 1 && hasSpecial == true && isBigEnough == true && itHasUpperCase == true) {
    isEverythingOk = true;
} else isEverythingOk = false;

if (isEverythingOk == false) {
    alert ("Inappropriate Password!\nPlease re-enter a new password.");
    userPassword = prompt ("Please, create a Safe Password!\n\nRequirements:\n\
* MUST CONTAIN 1 OR MORE NUMBERS\n* A SPECIAL CHARACTER\n* MORE THAN 5 CHARACTERS\n\
* ONE CAPS LETTER"); }
}

return insertpswd = userPassword;

}

function REGcreateUserName () {
let userName = prompt ("Create Your Username.");
let isEverythingOk = new Boolean;
let i = 0;
let nameDist = userName.length;

let hasSpecial = new Boolean;
let specifiChar;
let doesThisUserHasTheSameName = new Boolean;
let fitInSize = new Boolean;

while (isEverythingOk != true) {
nameDist = userName.length;
hasSpecial = undefined; doesThisUserHasTheSameName = undefined; fitInSize = undefined; isEverythingOk = undefined;

i = 0;
while (i < nameDist) {
    specifiChar = (userName.charAt(i));
    if (specifiChar == "*" || specifiChar == "@" || specifiChar == "#" || specifiChar == "&" || specifiChar == "/" || specifiChar == "." || specifiChar == ":" || specifiChar == "?" || specifiChar == "!" || specifiChar == "%" || specifiChar == "$" || specifiChar == "<" || specifiChar == ">" || specifiChar == "~" || specifiChar == "-" || specifiChar == "^") {
        hasSpecial = true; }
    i++;
}

i = 0;
while (i < userBaseData.length) {
    if (userName == userBaseData[i].username) {doesThisUserHasTheSameName = true; }
    i++;
}

let firstC = userName.charAt(0);
if (firstC == "0" || firstC == "1" || firstC == "2" || firstC == "3" || firstC == "4" || firstC == "5" || firstC == "6" || firstC == "7" || firstC == "8" || firstC == "9") {hasSpecial = true;}

if (nameDist >= 14 || nameDist <= 3) { fitInSize = false; }
if (nameDist < 14 && nameDist > 3) { fitInSize = true; }

if (fitInSize == true && doesThisUserHasTheSameName != true && hasSpecial != true) {isEverythingOk = true; }
if (isEverythingOk != true && doesThisUserHasTheSameName != true) {
    alert ("Inappropriate username!\nPlease re-enter a new username according to the rules.\n\n* BETWEEN 4 AND 14 CHARACTERS\n* FIRST CHARACTER MUST BE A LETTER\n* SPECIAL CHARACTER PROHIBITED EXCEPT \"_\"\n* USERNAME MUST BE UNIQUE");
    userName = prompt ("Create Your Username.");
}
if (isEverythingOk != true && doesThisUserHasTheSameName == true) {
    alert ("Unfortunately, this username already exists!\Please re-enter a new username.\n\n* BETWEEN 4 AND 14 CHARACTERS\n* FIRST CHARACTER MUST BE A LETTER\n* SPECIAL CHARACTER PROHIBITED EXCEPT \"_\"\n* USERNAME MUST BE UNIQUE");
    userName = prompt ("Create Your Username.");
}
}

return insertname = userName;

}

function REGage () {

let userage = prompt ('Insert your Age.');
let isEverythingOk = undefined;
while (isEverythingOk != true) {

if (userage < 13 && userage > 0) { isEverythingOk = false;
alert ("You must have or be over 13 years old to use our server."); }

if (userage <= 0 || userage > 110) { isEverythingOk = false;
alert ("Invalid age value."); }

if (userage > 13 && userage <= 110) { isEverythingOk = true;}

if (isEverythingOk == false) {userage = prompt ('Insert your Age.')}
}
return insertage = userage;
}

function REGsex () {

let isEverythingOk = undefined;

let userSex = prompt ("Please enter your gender.\n\n[M] Male\n[M] Female\n[O] Other\n[N] Ignore.");

while (isEverythingOk != true) {

if (userSex != "H" || userSex != "M" || userSex != "O" || userSex != "N" || userSex != "h" || userSex != "m" || userSex != "o" || userSex != "n") {
    isEverythingOk = false; }

if (userSex == "H" || userSex == "M" || userSex == "O" || userSex == "N" || userSex == "h" || userSex == "m" || userSex == "o" || userSex == "n") {
    isEverythingOk = true;
}

if (isEverythingOk != true) {userSex = prompt ("Please enter your gender.\n\n[M] Male\n[M] Female\n[O] Other\n[N] Ignore.");}
}

return insertsex = (userSex.toUpperCase ());

}

function REGemail () {
    let doUserWantsToProgress = undefined;

    let useremail;

    while (doUserWantsToProgress != true) {

    useremail = prompt ("Enter your email address.\nIf you want to know our supported email list, type \"SUPPORT\".");
    
    if (useremail == "support" || useremail == "SUPPORT" || useremail == "Support") {
        alert (`Supported Emails:\n\n* Google Mail\n* Microsoft Outlook\n* Microsoft Hotmail\n* Apple iCloud\n* ProtonMail`);
        doUserWantsToProgress = false;
    } else doUserWantsToProgress = true;
    }
    
    let isEverythingOk = undefined;
    let trycheck = 0;

    while (isEverythingOk != true) {

        if (trycheck != 0) {
            useremail = prompt ("Enter your email to register.");
        }

        useremail = (useremail.toLowerCase ());
        
        let checkprotonmail = useremail.includes ("@protonmail.com");
        let checkicloud = useremail.includes ("@icloud.com");
        let checkgmail = useremail.includes ("@gmail.com");
        let checkhotmail = useremail.includes ("@hotmail.com");
        let checkoutlook = useremail.includes ("@outlook.com");
        let checkarroba = useremail.includes ("@");
        let mailDist = useremail.length;
        
        if (checkgmail == true) {isEverythingOk = true;}
        if (checkhotmail == true) {isEverythingOk = true;}
        if (checkicloud == true) {isEverythingOk = true;}
        if (checkprotonmail == true) {isEverythingOk = true;}
        if (checkoutlook == true) {isEverythingOk = true;}

        if (checkgmail == false && checkhotmail == false && checkicloud == false && checkprotonmail == false && checkoutlook == false && mailDist < 45 && checkarroba == true) {
            isEverythingOk = false;
            alert ("Please enter a different email address.\n\nYour email server is probably not on our Allowed list.");
            trycheck = (trycheck + 1);
        }
        if (mailDist > 45 && checkarroba == true) {
            isEverythingOk = false;
            alert ("Please enter a shorter e-mail address.\n\nThe e-mail entered contains more characters than allowed.");
            trycheck = (trycheck + 1);
        }
        if (checkarroba == false) {
            isEverythingOk = false;
            alert ("The Content entered does not correspond to an email address.\n\nPlease enter a valid email address.");
            trycheck = (trycheck + 1);
        }
        if (checkarroba == true && mailDist == true) {
            isEverythingOk = false;
            alert ("Unfortunately, your email can't just be only \"@\".");
            trycheck = (trycheck + 1);
        }

        if (isEverythingOk != true) {trycheck = (trycheck + 1);}

    }
return insertemail = useremail;
}

function REGuniqueId () {

    let isEverythingOk = undefined;
    const totaloptions = ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");
    const optionsDist = totaloptions.length;
    let idToAdd = [];

    let doesThisIdAlreadyExit = undefined;
    while (doesThisIdAlreadyExit != false) {

    let i = 0;

    while (i < 7) {

        let randomNumber = (Math.floor ((Math.random ()) * 100));
        isEverythingOk = undefined;
    while (isEverythingOk != true) {

    randomNumber = (Math.floor ((Math.random ()) * 100));
        
    if (randomNumber > optionsDist || randomNumber < 0) {
        isEverythingOk = false;
    } else isEverythingOk = true;

    }

    let addThis = totaloptions.charAt(randomNumber);
    idToAdd.push (addThis);

i++;
}

    idToAdd = idToAdd.toString ();
    idToAdd = idToAdd.replace (/\,/gi,'');
    let userBaseDist = Object.keys(userBaseData).length;
    let ctt = 0;
    while (ctt < userBaseDist) {
        let doesItExist = userBaseData[ctt].userid;
        if (doesItExist == idToAdd) {doesThisIdAlreadyExit = true;}
        else doesThisIdAlreadyExit = false;
        ctt++;
    }


    }

return insertid = idToAdd;
}

let insertname;
let insertpswd;
let insertage;
let insertsex;
let insertemail;
let insertid;

REGemail (userBaseData, insertemail);
REGcreateUserName (userBaseData, insertname);
REGage (userBaseData, insertage);
REGsex (userBaseData, insertsex);
REGcreatePassword (userBaseData, insertpswd);
REGuniqueId (userBaseData, insertid);

userBaseData.push ({
    userid: (`${insertid}`),
    username: (`${insertname}`),
    age: (`${insertage}`),
    gender: (`${insertsex}`),
    email: (`${insertemail}`),
    pswd: (`${insertpswd}`)

})

console.log (userBaseData);