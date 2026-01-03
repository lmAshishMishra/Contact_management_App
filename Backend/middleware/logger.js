// This middleware logs the method, path, and timestamp of every request
const requestLogger = (req, res, next) => {
    const start = Date.now();
    
    // Once the request is finished, log the result
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.originalUrl} - ${res.statusCode} (${duration}ms)`);
    });

    next(); // Move to the next function (Controller)
};

export default requestLogger;