import { defineConfig, resolveConfig } from 'vite'

const { resolve } = require('path')
// const { defineConfig } = require('vite')

module.exports = defineConfig({
    build: {
      rollupOptions: {
        input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'home.html'),
        gameover: resolve(__dirname, 'gameover.html')
       }
      }
    }
  })

    // build: {
    //     rollupOptions: {
    //         input: {
    //             intro: resolve(__dirname, "intro.html"),
    //             main: resolve(__dirname, "index.html"),
    //             gameover: resolve(__dirname, "gameover.html"),
    //         },
    //     },
    // },
    //publicDir: 'src/assets',
    //build: {
        //assetsDir: 'src/assets',
    //},
    //assetsInclude: ['**/*.{png,svg,wav,mp3,pdf,gif,jpg}'],
  //  build: {
        //assetsDir: 'src/assets',
        //rollupOptions: {
            //external: true
        //}
//    }
     
//    build: {
//        outDir,
//        emptyOutDir: true,
//        rollupOptions: {
//            input: {
//                home: resolveConfig(root, 'index.html'),
//                gameover: resolveConfig(root, 'index.html'),
//            }
//        }
//    }