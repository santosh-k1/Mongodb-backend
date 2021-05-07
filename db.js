const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dxperts:India@123@cluster0.oc1ai.mongodb.net/devMean?retryWrites=true&w=majority',(err)=>{
    if(!err){
        console.log('Yes connection successful');
    }
    else{
        console.log(`${err} error in connection`);
    }
})
module.exports = mongoose;