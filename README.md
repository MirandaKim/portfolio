***Under Construction***

# Welcome!
Welcome to my work-in-progress portfolio site. There is still some cleanup and added features that need to be added, but it's pretty much functional at this point.

---

## The Structure
Here is an overview of the file structure to give you an idea of what they are for and where to find stuff.

**~/src**

This is the working directory. Make your changes within this directory then propagate those changes using the available gulp tasks.

**~/src/assets/scripts**

This is where scripts should be defined and imported. Keep custom scripts within the modules directory and import vendor modules into the file Vendors.js. App.js is processed via the gulp scripts task, so only modules imported within this file will be included.

**~/src/assets/styles**

This is where all styles should be defined. Define globals and general styles under the base directory and the styles for different elements under the modules directory. Import those style files into the styles.css file. This styles.css file is processed via the gulp styles task.

**~/tmp/**

Files generated from the source code for a development environment. This is the directory served to the browser when previewing the site for development. See Gulp Tasks for more details.

_Don't make any changes to the contents of this directory as any changes may be overridden by any of the gulp development tasks._

**~/dist/**

Files generated from the source code for a production environment. These files are intended to be minimized for performance. See Gulp Tasks to see how to populate this directory and preview its contents in the browser.

_Don't make any changes to the contents of this directory as any changes may be overridden by any of the gulp production tasks._

**~/node_modules**

Third party modules required (or at least useful) for this site. If the directory is empty run: npm install. Go to ~/package.json to see the list of (dev)dependencies.

_Do not modify any of these files. Any changes will be lost once the module is updated._

**~/gulp**

Contains the logic for running all gulp tasks, with the exception of the default task. The default class and task imports are found in the file ~/gulpfile.js.

---

## Gulp Tasks
To run gulp tasks: in the terminal/command line, navigate into the root directory and enter 'gulp' followed by the command name. Example: gulp watch

See all the gulp files under ~/gulp. The default gulp task is in the file ~/gulpfile.js

### Development

* **gulp** (default)

Triggers the tasks "gulp dev" then "gulp watch"

* **gulp copyGeneral**

Copy general files into the temporary directory (~/tmp)

* **gulp dev**

Process html/style/script source files using a development environment. The resulting files can be found in ~/tmp. These files are intended for development, not distribution.

This task does not copy over other files such as images. See the other gulp tasks for those functions.

* **gulp favicons**

Copy the favicon image file(s) from ~/src/assets/favicons into ~/tmp

* **gulp html**

Copy ~/src/index into ~/tmp while injecting script and style addresses.

* **gulp images**

Create optimized versions of the image files from ~/src/assets/images. These optimized images will be placed under ~/tmp/assets/images

* **gulp modernizr**

Generate a modernizr script file within the script assets directory (~/src/assets/scripts). The current Vendors.js (~/src/assets/scripts) file imports this file into the site.

This task is triggered automatically by the task gulp scripts

* **gulp scripts**

Bundles scripts into a single file under ~/tmp/assets/scripts.

* **gulp styles**

Processes PostCSS and bundles script files into a single file under ~/tmp/assets/styles. Several PostCSS plugins are used to form the resulting CSS, including: autoprefixer, postcss-mixins, and postcss-nested.

* **gulp watch**

This will run browsersync and open a browser window to view the development version of the site. If no content is displayed, run the task gulp or gulp dev first. Then any other copy tasks such as gulp images, gulp favicons, and gulp copyGeneral.

While it is running, the watch task will keep an eye on changes to html, js, and css files within the src file and reload or sync the browser so you can see a live version of the development site.

### Production
_Note:_ Many of the gulp development tasks have a production version that may be accessed by appending '--prod' to the task name. These are not intended to be accessed independently (though possible) but will be triggered via the task: gulp build.

* **gulp build**

Run all tasks for greeting a full site suitable to a production environment in the distribution folder (~/dist).

These tasks include production versions of the gulp development tasks, such as: gulp html--prod, gulp scripts--prod, gulp styles--prod, etc.

* **gulp previewDist**

This will run browsersync and open a browser window to view the distribution/production version of the site. If no content is displayed, run the task gulp build first to generate the distribution files.
