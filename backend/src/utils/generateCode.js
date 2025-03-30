/**
 * Generates a unique team code with a minimum length of 5 characters
 * @returns {string} A random alphanumeric code
 */
const generateCode = () => {
    // Generate a random 5-character alphanumeric code
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    
    // Generate a code with exactly 5 characters
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters.charAt(randomIndex);
    }
    
    return code;
}

export default generateCode;
