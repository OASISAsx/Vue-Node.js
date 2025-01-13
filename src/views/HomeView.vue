<template>
  <SideBar/>
 
</template>

<script>
import PizZip from 'pizzip'
import Docxtemplater from 'docxtemplater'
import JszipUtils from 'jszip-utils'
import { saveAs } from 'file-saver'
import ImageModule from 'docxtemplater-image-module-free'
import SideBar from '@/components/SideBar.vue'

export default {
  components: {
    SideBar
  },
  data() {
    return {
      img: 'https://media.discordapp.net/attachments/1252284229677744178/1252628911284555919/MG_8493.jpg?ex=6672e915&is=66719795&hm=2524ff49a40149555ad85b6d3aee405e366d92dd1386b042f476f72189fd0781&=&format=webp&width=656&height=437'
    }
  },
  methods: {
    
}
}
</script>

<style lang="">
</style>