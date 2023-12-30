<template>
  <div
    :style="{
      height: item.height + 'px',
      background: item.background,
      top: item.top + 'px',
      left: item.left + 'px',
    }"
    v-for="(item, index) in waterList"
    class="items"
  >
    <span style="color: #fff, font-size:'24px'">{{ index }}</span>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
const props = defineProps<{
  list: any[];
}>();

const waterList = reactive<any[]>([]);

const init = () => {
  const heightList: any[] = [];
  const width = 130;
  const x = document.body.clientWidth;
  const column = Math.floor(x / width);

  for (let i = 0; i < props.list.length; i++) {
    if (i < column) {
      props.list[i].left = i * width;
      props.list[i].top = 10;
      waterList.push(props.list[i]);
      heightList.push(props.list[i].height + 10);
    } else {
      let current = heightList[0];
      let index = 0;
      heightList.forEach((h, idx) => {
        if (current > h) {
          current = h;
          index = idx;
        }
      });
      console.log(current, "c");
      props.list[i].top = current + 20;
      console.log(props.list[i].top, "top", i);
      props.list[i].left = index * width;
      // 更新heightList
      heightList[index] = heightList[index] + props.list[i].height + 20;
      waterList.push(props.list[i]);
    }
  }
};

onMounted(() => {
  init();
});
console.log(props);
</script>
<style scoped>
.items {
  position: absolute;
  width: 120px;
}
</style>
