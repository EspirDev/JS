function crypto(password) {
    
    return password[2] + password[3] + 
           password[1] + password[0] + 
           password[7] + password[5] + 
           password[6] + password[4];
}

function decrypt(password) {
    return password[3] + password[2] + 
           password[0] + password[1] + 
           password[7] + password[5] + 
           password[6] + password[4];
}

function check(encryptedPassword, originalPassword) {
    let decrypted = decrypt(encryptedPassword);
    return decrypted === originalPassword;
}

console.log(crypto('password'));
console.log(check('ssapdorw', 'password'));
console.log(check('ssapdorw', 'wrong'));