<template>
    <div id="app">
       <atom-spinner
            :animation-duration="1000"
            :size="60"
            :color="'#ff1d5e'"
       />

       <flower-spinner
     :animation-duration="2500"
      :size="70"
       :color="'#ff1d5e'"
/>
    </div>
  </template>
  
  <script>
    // To use minified css and js files instead of .vue single file components:
    // import 'epic-spinners/dist/lib/epic-spinners.min.css'
    // import {AtomSpinner} from 'epic-spinners/dist/lib/epic-spinners.min.js'
    
    import {AtomSpinner} from 'epic-spinners'
    export default {
      components: {
        AtomSpinner
      }
    }
  </script>