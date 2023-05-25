export function validateEmail(input, value, errorMessage) {
    const regEx = /\S+@\S+\.\S+/;
    const result = regEx.test(value);
   
    if (result) {
        input.style.border = "2px solid #7DA87B";
        errorMessage.style.display = "none";
    } else {
        errorMessage.style.display = "block";
        input.style.border = "2px solid var(--clr-error)";
    }
    return result;
};

export function validateLength(input, value, length, errorMessage) {
    if(value.trim().length > length) {
        input.style.border = "2px solid #7DA87B";
        errorMessage.style.display = "none";
        return true;
    } else {
        errorMessage.style.display = "block";
        input.style.border = "2px solid var(--clr-error)"
        return false;
    }
};
