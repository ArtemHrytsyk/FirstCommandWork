const userRoutes = require('./users')

const appRouter = (app, fs) => {
    app.get('/', (req, res) => {
        res.send('Welcome to the development api-server');
    });
    console.log('main page')
    userRoutes(app, fs);
};

module.exports = appRouter;