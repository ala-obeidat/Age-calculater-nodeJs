/* jshint esversion: 9 */

const PORT = process.env.PORT || 5000;
const axios = require('axios');
const express = require('express');

const app = express();
app.get('/age/:date',(req,res)=>{
    const date= req.params.date.split('-');
    const birthday=new Date(Date.parse(`${date[1]}/${date[0]}/${date[2]}`));
    console.log('DATE: ',date);
    console.log('Birthday: ',birthday);
    const age=calculate_age(birthday);

    res.json({'Birthday':date, age});
});
app.get('/',(req,res)=>{
    res.json('Welcome to Age Calculater');
});
function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
    let year= Math.abs(age_dt.getUTCFullYear() - 1970);
    let month= age_dt.getUTCMonth();
    let day= age_dt.getUTCDay();
    return {year,month,day};
}
app.listen(PORT,()=>{console.log(`Server runing on PORT ${PORT}`);});

