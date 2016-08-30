/// <reference path="scripts/typings/jquery/jquery.d.ts" />

var MyAry = ["A", "B", "C", "D"];
var MyAry2 = new Array("AA", "BB", "CC", "DD");
var Join = MyAry.join("--");
var Combin = MyAry.concat(MyAry2);
//console.info(Combin); MyAry + MyAry2
//console.info(Join);
//console.info(MyAry2);
var person = {
    Name: "Charles",
    Age: 20,
    say: function (msg) {
        //alert(this.Name  + this.Age + " said: " + msg) 
    }
};
person.say("QQ");

for (var z = 1; z <= 9; z++) {
    for (var x = 1; x <= 9; x++) {
        //console.info (z + "*" + x + "=" + z*x);
    };
};

var NumAry = new Array();
for (var x = 0; x <= 10; x++) {
    NumAry[x] = x;
}
if (Array.isArray(NumAry)) {
    //console.info("OK");
};

var ArrTest = new Array();　
for (var i = 0; i < 10; i++) {
    　ArrTest[i] = i;　
}
for (i = 0; i < 10; i++) {
    　//document.write(ArrTest[i]);　
}

for (var x = 50; x >= 1; x -= 2) {
    //console.info(x);
}


var TArr = new Array("QAZ", "WSX", "EDC", "RFV", "TGB");
var ArrLength = TArr.length;
var msg = "\n Test \n";

for (var i = 0; i <= ArrLength; i++) {
    console.info(msg + TArr);
};


var myObj = new Object(),
    Name = "Charles",
    Num = "AAA",
    obj = new Object();
myObj[Name] = "CC";
myObj[Num] = 123456;

console.log(myObj);
