/**
 * Created by cintec on 15/07/2017.
 */
var mysql=require('mysql');
var connection=mysql.createPool({

    host:'localhost',
    user:'root',
    password:'password',
    database:'ostara_project'

});
module.exports=connection;