const validation = (values) =>{

    let errors = {}
    const regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!values.email){
        errors.email = "Email Required"
    
    }else if(regex.test(values.email) === false ){
        errors.email = "Email is not valid"
    }
    
    if(!values.password){
        errors.password = "Password Required"
    }else if(values.password.length < 7){
        errors.password = "Password must be more than 7 char"
    }
    return errors;

}

export default validation;