// Create a file called xRobotsTagMiddleware.js in your project
const xRobotsTagMiddleware = (req, res, next) => {
    res.setHeader('X-Robots-Tag', 'index, follow'); // Adjust as per your requirements
    next();
  };
  
  export default xRobotsTagMiddleware;
  