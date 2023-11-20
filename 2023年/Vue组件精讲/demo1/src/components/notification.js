import Alert from './Alert.vue';
import Vue from 'vue';

Alert.newInstance = properties => {
  const props = properties || {};
  const Instace = new Vue({
    data: props,
    render(h) {
      return h(Alert, {
        props: props
      }); 
    }
  });

  const component = Instance.$mount();
  document.body.appendChild(component.$el);

  const alert = Instance.$children[0];

  return {
    add (noticeProps) {
      alert.add(noticeProps)
    },
    remove (noticeProps) {
      alert.remove(noticeProps)
    }
  }
}