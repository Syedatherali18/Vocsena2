const signUpFormatter = (signUp) => {
    return {
        id: signUp._id,
        firstName: signUp.title,
        lastName: signUp.summary,
        gender: signUp.gender,
        email: signUp.email,
        password: signUp.passcode
    }
};

module.exports = signUpFormatter;