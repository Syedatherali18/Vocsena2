const express = require('express');
//const authenticate = require('../../Middleware');
const signUpFormatter = require('../../Formatter/Sign-up');
const SignUp = require('../../Model/Sign-up');
const router = express.Router();


router.post('/sign-up', (req, res) => {

    const signUp = new SignUp(req.body);
    signUp.save()
        .then((signUp) => {
            res.status(200).send({
                status: 'success',
                message: 'Data saved successfully!',
                data: signUpFormatter(signUp),
            });
        })
        .catch((error) => {
            res.status(500).send({
                status: 'error',
                message: 'Failed to save data.',
                error: error.message, // Optionally, you can include the error message in the response
            });
        });

});

module.exports = router;