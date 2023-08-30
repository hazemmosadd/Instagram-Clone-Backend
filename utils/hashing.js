const bcrypt = require('bcrypt')


const hashPassword = async (userEnteredPassword)=> {
    const hashedPassword = await bcrypt.hash(userEnteredPassword, 10);
    return hashedPassword
}

const passwordsMatch =async (userEnteredPassword , hashedPassword) =>{
    const isMatch = await bcrypt.compare(userEnteredPassword, hashedPassword);
    return isMatch 
}
module.exports = {hashPassword ,passwordsMatch }