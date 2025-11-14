const cds =require('@sap/cds');
const { SELECT } = require('@sap/cds/lib/ql/cds-ql');
 
module.exports=cds.service.impl(function(){
    const {employee} = this.entities;
 
    this.before('CREATE',employee,req=>{
        if(req.data.salaryAmount > 50000 && req.data.Currency_code != "USD"){
            req.reject(400,'Employee’s salary must be less than 50000 USD')
        }
    })
    this.after('CREATE',employee,async req=>{
        console.log("Creation Sucessful")
    })
 
    this.before('UPDATE',employee,async req=>{
        const name = req.data.nameFirst
        const login = req.data.loginName
        const id = req.data.ID
        const obj= await SELECT.one.from(employee).where({ID:id})
        console.log(name,login)
        console.log(obj.nameFirst,obj.loginName)
       
        if( name != obj.nameFirst || login != obj.loginName){
        req.reject(400,'Operation not Allowed')
    }
    if (req.data.salaryAmount < 50000 && req.data.Currency_code == "USD"){
            req.reject(400,'Operation not Allowed')
        }
    })
    this.after('UPDATE',employee,req=>{
        console.log("Updation Successful")
    })
 
    this.before('DELETE',employee,async req=>{
        const id =req.data.ID
        const obj= await SELECT.one.from(employee).where({ID:id})
 
        if (obj.nameFirst[0] == "S"){
            req.reject(400,"Cannot delete")
        }
    })
    this.after('DELETE',employee,req=>{
        console.log("Deletion Successful")
    })
});