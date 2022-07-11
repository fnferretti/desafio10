var re = new RegExp("0[xX][a-f0-9]", "g");

var test1 = re.test("0x43214Fa975EdC");
console.log(test1);

var test2 = re.test("x04A");
console.log(test2);