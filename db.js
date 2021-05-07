const mongoose = require('mongoose');
mongoose.connect('mongodb database path',(err)=>{
    if(!err){
        console.log('Yes connection successful');
    }
    else{
        console.log(`${err} error in connection`);
    }
})
module.exports = mongoose;
