<template>
  <div ref="display">

  </div>
</template>

<script>
  export default {
    props: {
      code: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        html: '',
        js: '',
        css: ''
      }
    },
    methods: {
      getSource (source, type) {
        const regex = new RegExp(`<${type}[^>]*>`);
        let openingTag = source.match(regex);

        if(!openingTag) return '';
        else openingTag = openingTag[0];
        return source.slice(source.indexOf(openingTag) + openingTag.length,
        openingTag.lastIndexOf(`</${type}>`))
      },
      splitCode() {
        const script = this.getSource(this.code, 'script')
        .replace(/export default/, 'return ')

        const style = this.getSource(this.code, 'style');
      const template = '<div id="app">' + this.getSource(this.code, 'template') + '</div>';

      this.js = script;
      this.css = style;
      this.html = template;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>