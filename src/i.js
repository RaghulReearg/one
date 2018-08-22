var ss = "this is a . text and] you can edit it!";
var s = rawString
  .toLowerCase()
  .split(/[ ,!.";:-]+/)
  .filter(Boolean)
  .sort();
console.log(s);
