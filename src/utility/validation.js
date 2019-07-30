//to validate the login/signup data. rules should pass on given value
//rules are a javascript object coming from Auth.js
const validate = (val, rules) => {
    let isValid = true;
    for (let rule in rules){
        switch(rule){
            case 'isEmail':
                //take previous validity that you have and update with new condition
                isValid = isValid && emailValidator(val);
            case 'minLength':
                isValid = isValid && minLengthValidator(val, rules[rule])
            case 'equalTo': 
                isValid = isValid && equalToValidator(val, rules[rule])
            default:
                isValid = true;
        }
    }
    return isValid;
}

const emailValidator = val => {
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(val);
}

const minLengthValidator = (val, minLength) => {
    return val.length >= minLength;

}

const equalToValidator = (val, checkValue) => {
    return val === checkValue;
}

export default validate;