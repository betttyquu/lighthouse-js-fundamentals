function reverseString(s) {
    try {
        const newString = s.split("").reverse().join("");
        console.log(newString);
    }
    catch (error) {
        console.log(error.message);
        console.log(s);
    }
}

reverseString('123444');
reverseString(123444);
