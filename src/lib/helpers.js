const helpers={}
const bcrypt=require('bcryptjs')
helpers.encryptPassword=async(password)=>
{
    const salt= await bcrypt.genSalt(10)
    const hash =await bcrypt.hash(password,salt)
    return hash;
}
helpers.compararPassword=async(password,dbpaswword)=>{
    try {
        await bcrypt.compare(password,dbpaswword)
    } catch (error) {
        console.log(error);     
    }
}

module.exports=helpers