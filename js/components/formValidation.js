export function validateEmail(input, value, errorMessage) {
    const regEx = /\S+@\S+\.\S+/;
    const result = regEx.test(value);
   
    if (result) {
        errorMessage.style.display = "none";
    } else {
        errorMessage.style.display = "block";
        input.style.border = "2px solid var(--clr-error)";
    }
    return result
};

export function validateMinLength(value, length) {
    if(value.trim().length >= length) {
        return true;
    } else {
        return false;
    }
};

export function validateLength(value, length) {
    if (value.trim().length === length) {
        return true;
    } else {
        return false;
    }
};
