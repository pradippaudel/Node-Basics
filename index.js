const fs=require("fs");
//fs.writeFileSync("read.txt","Welcome to my channel");
//fs.appendFileSync("read.txt","My name is pradip");
// const buf_data=fs.readFileSync("read.txt");
// org_data=buf_data.toString();
// console.log(org_data);
fs.renameSync("read.txt","readwrite.txt");