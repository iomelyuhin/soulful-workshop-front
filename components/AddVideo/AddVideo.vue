<template>
  <video-player 
    :src="src" 
    :preload="false"
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
    }
  }
}
</script>