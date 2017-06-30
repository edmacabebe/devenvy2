const gulp = require('gulp');
const config = require('./gulp.config')();
const mlconfig = require('./env-config/ml-config')();
const jshint = require('gulp-jshint');
const nodemon = require('gulp-nodemon');
const stylish = require('jshint-stylish');
const fs = require('graceful-fs');

//TODO: Set this debug code to accomodate different environment
const debug = require('debug');
const log = debug('gulpfile');

// This is required but causes warning
/* jshint ignore:start */
const mocha = require('gulp-mocha');
/* jshint ignore:end */

// TODO: this should be based on environment 
// if on dev=true, local=true, prod=false
log.enabled = true; 
log.log = console.log.bind(console);

let encoding = { encoding: 'utf8' };

/**
 * Required for task listting
 * cmd 'gulp' or 'gulp help' to display all available gulp commands
 * for this project
 */
const taskListing = require('gulp-task-listing');

/**
 * Run specs and wait.
 * Watch for file changes and re-run tests on each change
 * To start servers and run midway specs as well:
 *  gulp serve-local
 * 
 * @param  {Function} done - callback when complete
 */

// TODO: This should build a docker container for 
// Testing the NODE API's or endpoints
gulp.task('serve-local', ['lint', 'test'], () => { 
  serve('local', () => {
    log('Serving Development Environment');
    serveNodemon();
  });
      
});

//TODO: This is to remind me to do more in this task for serve-dev
gulp.task('serve-dev', ['lint', 'test'], () => { 
  serve('dev', () => {
    log('Serving Development Environment');
    serveNodemon();
  }); 
});

//TODO: This is to remind me to do more in this task for serve-prod
gulp.task('serve-prod', ['lint', 'test'], () => { 
  serve('prod', () => {
    log('Serving Production Environment');
    serveNodemon();
  });
 });

//TODO: This is to remind me to do more in this task for serve-test
gulp.task('serve-test', ['test'], () => { 
  serve('test', () => {
    log('Serving Testing Environment');
    serveNodemon();
  });
 });

function serveNodemon(){
  var process = nodemon({script: './bin/www',
          ext:'js',
          tasks: ['lint', 'test']}); // Re-execute the task on every restart
      process
      .on('restart', () => {
        log('*** nodemon started');
      })
      .on('crash', () => {
        log('*** nodemon crashed: script crashed for some reason');
        process.emit('end');
      })
      .on('exit', () => {
        log('*** nodemon exited cleanly');
      });
}
/**
 * Error handlers for task and forces to stop the entire process 
 */
function handleError(err) {
  log('Failed to build due to ', err);
  process.exit(1);
}


/*Task to execute test api*/
gulp.task('test', () => {
  return gulp.src(['test/**'], { read: false })
    .pipe(mocha({
      reporter: 'spec' // Values min, list, nyn, landing, progress and spec.
    })
    .on('error', handleError));
});

/**
 * lint the code and create coverage report
 * @return {Stream}
 */
gulp.task('lint', () => {
  
  return gulp.src(config.alljs)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish, {verbose: true }))
    .pipe(jshint.reporter('fail'))
    .on('error', handleError);
});

let serve = (env, cb) => {
    var ecosystem = 'ecosystem.json';
    log('PROCESS ', process.env.NODE_ENV);
    log('SERVE ', env);
    //if(!fs.existsSync(ecosystem)){
      try{
        let config = mlconfig[env];
        let configStr = JSON.stringify(config) + '\n';
        fs.writeFileSync('./utils/'+ ecosystem, configStr, encoding);
      }catch(err){
        log('ERROR ', err );
      }
    //}
    /*log('Deploying Environment ' + env);
    return env;*/
    cb();
};

// Add a task to render the output if no param is passed
gulp.task('help', taskListing);
gulp.task('default', ['help']);
