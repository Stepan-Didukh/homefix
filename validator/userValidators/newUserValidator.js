module.exports = userObject => {
    const {name,email,password} = userObject;

    if(!name || !email || !password){
        throw new Error('Error2')
    }
};