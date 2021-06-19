const Router = require('express-promise-router');

const controller = require('./moviesController');

module.exports = () => {
    const router = Router({ mergeParams: true });

    router.route('/create').post(controller.createNewMovie);
    router.route('/delete/:title').delete(controller.deleteMovie);
    router.route('/search/:title').get(controller.searchMovieTitle);
    router.route('/list').get(controller.listMovies);
    router.route('/update/:movieId').put(controller.updateMovie);
    
    return router;
} 