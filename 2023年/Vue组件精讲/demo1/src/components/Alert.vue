<template>
  <div class="alert">
    <div class="alert-main" v-for="item in notices" :key="item.name">
    
      <div class="alert-content"> {{ item.content }}</div>
    </div>

  </div>
</template>

<script>
  export default {
    data() { 
      return {
        notices: []
      }
    },
    methods: {
      add (notice) {
        const name = getUuid();

        let _notice = Object.assign({
          name: name
        }, notice)

        // 定时移除
        const duration = notice.duration || 3000;
        setTimeout(
          () => {
            this.remove(name);
          }, duration )
      },
      remove (name) {
        const notices = this.notices;

        for (let i = 0; i < notices.length; i++){
          if (notices[i].name === name) {
            notices.splice(i, 1);
            break;
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>