export default Object.freeze({
    create: {
        name: {
           // errorMessage: 'Name is wrong!',
            in: ['body'],
            isLength: {
                errorMessage: 'Name should be at least 2 chars long',
                // Multiple options would be expressed as an array
                options: { min: 8 },
            },
        },
        id: {
            string: true,
            exists: true,
            errorMessage: 'Bad ID format',
            in: ['body'],
        },
    },
    delete: {
        id: {
            string: true,
            exists: true,
            errorMessage: 'Bad ID format',
            in: ['params'],
        },
    },
    get: {

    },
    update: {
        id: {
            string: true,
            exists: true,
            errorMessage: 'Bad ID format',
            in: ['body'],
        },
    },

});