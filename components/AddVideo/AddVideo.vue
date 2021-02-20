<template>
  <video-player 
    :src="src" 
    :allow-fullscreen="false" 
    :preload="false"
    :container-styles="className" 
  />
</template>

<script>
import VideoPlayer from 'nuxt-video-player'
require('nuxt-video-player/src/assets/css/main.css')

export default {
  components: {
    VideoPlayer
  },
  props: {
    src: {
      type: String,
      default: "https://www.youtube.com/embed/E_Jbf73lH8g"
    },
    className: {
      type: String,
      default: "video-player"
    },

  }
}
</script>