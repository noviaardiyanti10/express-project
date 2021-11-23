const success = (data = null) => ({
    status: "OK",
    data,
});

const fail = (data) => ({
    status: "FAIL",
    data,
});

const error = (err) => ({
    status: "ERROR",
    data: {
        name: err.name,
        message: err.message,
        stack: err.stack,
    },
});

module.exports = {
    success,
    error,
    fail,
};