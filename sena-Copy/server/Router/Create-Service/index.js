const express = require('express');
//const authenticate = require('../../Middleware');
const createServiceFormatter = require('../../Formatter/Create-Service');
const CreateServices = require('../../Model/Create-Service');
const router = express.Router();


router.post('/create-service', (req, res) => {

    const createService = new CreateServices(req.body);
    createService.save()
        .then((createService) => {
            res.status(200).send({
                status: 'success',
                message: 'Data saved successfully!',
                data: createServiceFormatter(createService),
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