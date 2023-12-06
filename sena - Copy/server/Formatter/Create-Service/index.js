const createServiceFormatter = (createService) => {
    return {
        id: createService._id,
        title: createService.title,
        summary: createService.summary,
        packageName : createService.packageName,
        price: createService.price
    }
};

module.exports = createServiceFormatter;