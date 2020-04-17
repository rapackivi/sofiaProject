// to use this module paste next line to where u want use it!
// const dateUtil = require(__dirname+"/timeTools.js");

exports.getDateAndTime = () =>{
    const date = new Date();
    return date.toLocaleDateString() + ", in " + date.getHours()+":"+date.getMinutes() + ", timezone:" + date.getTimezoneOffset()/60*-1;
} 