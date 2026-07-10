function crypto(password) {
    if (password.length !== 8) {
        return ('Введите пароль из 8 символов');
    }
    return password[1] + password[0] + 
           password[3] + password[2] + 
           password[5] + password[4] + 
           password[7] + password[6];
}

function check(encryptedPassword, originalPassword) {
    let decrypted = crypto(encryptedPassword);
    return decrypted === originalPassword;
}

console.log(crypto('password'));
console.log(check('apssowdr', 'password'));
console.log(check('apssowdr', 'wrong'));