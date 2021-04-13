const publicRoot = '..',
  root = `${publicRoot}`,
  paths = {
    src: `${root}/src`,
    dist: `${root}/assets`,
    js: 'js',
    css: 'css',
    scss: 'sass',
    img: 'images',
    fonts: []
  },
  vendor = [];

module.exports = {
  root,
  theme: {
    // main: {
    //   scss: {
    //     src: `${paths.src}/${paths.scss}/main.scss`,
    //     dist: `${paths.dist}/${paths.css}`,
    //     filename: 'main.css' 
    //   }
    // },
    header: {
      scss: {
        src: `${paths.src}/${paths.scss}/header/module.scss`,
        dist: `${paths.dist}/${paths.css}`,
        filename: 'header.css' 
      }
    },
    quickTask: {
      scss: {
        src: `${paths.src}/${paths.scss}/quick-task/module.scss`,
        dist: `${paths.dist}/${paths.css}`,
        filename: 'quick-task.css' 
      }
    },
    optionsSchedule: {
      scss: {
        src: `${paths.src}/${paths.scss}/options-schedule/module.scss`,
        dist: `${paths.dist}/${paths.css}`,
        filename: 'options-schedule.css' 
      }
    },
    footer: {
      scss: {
        src: `${paths.src}/${paths.scss}/footer/module.scss`,
        dist: `${paths.dist}/${paths.css}`,
        filename: 'footer.css' 
      }
    }
  },
  clonePathsAndFiles: [
    { src: `${paths.src}/vendors/**/*.css`, dist: `${paths.dist}/${paths.css}` }
  ],
  src: {
    root: paths.src,
    js: {
      all: `${paths.src}/${paths.js}/**/*.js`
    },
    css: `${paths.src}/${paths.css}/**/*.css`,
    scss: `${paths.src}/${paths.scss}/**/*.scss`,
    img: `${paths.src}/${paths.img}/**/*`,
    fonts: paths.fonts,
  },
  dist: {
    root: paths.dist,
    js: {
      all: `${paths.src}/${paths.js}`,
    },
    css: `${paths.dist}/${paths.css}`,
    img: `${paths.dist}/${paths.img}`,
    fonts: `${paths.dist}/fonts`,
  }
};