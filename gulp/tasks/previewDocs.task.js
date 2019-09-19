const gulp = require('gulp');
const browserSync = require('browser-sync').create();

/****************************************************/
/*                                                 */
/*   Preview Distribution Task                    */
/*                                               */
/************************************************/
/*

  - Run task 'gulp previewDocs' to preview the distribution content in the browser.
  - If no content is displayed, run 'gulp build' then try this task again.
  - This task previews the production site only.
    To preview the development site, see gulp task 'watch' (~/gulp/tasks/watch.task.js)

  *************
  * Contents: *
  *************

  # Configs
  # Preview Docs

*/

/*************************************/
/*   # Configs                      */
/***********************************/

let docsPath = 'docs'; // location of distribution files

/*************************************/
/*   # Preview Docs                 */
/***********************************/

/*
  Preview production files in browser
*/
gulp.task('previewDocs', () => {
  browserSync.init({
    notify: false, // False, don't show any notifications in the browser (default true)
    server: {
      baseDir: docsPath // Location of distribution files
    }
  });
});
