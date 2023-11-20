<template>
    <!-- <transition name="fade" mode="out-in">
      <h2 v-if="flag" key="main">Hello World!</h2>
      <h2 v-else key="content">Another hello!</h2>
    </transition> -->

    <!-- <transition name="zoom" apper>
      <h2 v-show="flag">Hello</h2>

    </transition> -->
    <button @click="addItem">Add</button>
    <transition-group name="fade">
      <li v-for="(number, index) in numbers" :key="number" @click="removeItem(index)">
        {{ number }}
      </li>
    </transition-group>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        flag: false,
        numbers: [1,2,3,4,5]
      }
    },
    // methods: {
    //   beforeEnter(el) {
    //     console.log('beforeEnter', el)
    //   },
    //   enter(el, done) {
    //     console.log('enter', el)
    //     const animation =  el.animate([{transform: "scale3d(0,0,0)"},{}], {
    //       duration: 1000,
    //     });
    //     animation.onfinish = () => {
    //       done();
    //     }
    //   },
    //   afterEnter(el) {
    //     console.log('afterEnter', el)
    //   },
    //   beforeLeave(el) {
    //     console.log('beforeLeave', el)
    //   },
    //   leave(el, done) {
    //     console.log('leave', el)
    //     const animation =  el.animate([{transform: "scale3d(0,0,0)"}, {}], {
    //       duration: 1000,
    //     });
    //     animation.onfinish = () => {
    //       done();
    //     }
    //   },
    //   afterLeave(el) {
    //     console.log('afterLeave', el)
    //   }
    // }
    methods: {
      addItem() {
        const num = Math.floor(Math.random() * 100 + 1)
        const index = Math.floor(Math.random() * this.numbers.length)
        this.numbers.splice(index, 0, num)
      },
      removeItem(index) {
        this.numbers.splice(index, 1)
      }
    }
  }
</script>

<style  scoped>

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s linear;
}



.fade-leave-to {
  transition: all 1s linear;

  opacity: 0;
}


.fade-move {
  transition: all 1s linear;
}

.fade-leave-active {
  position: absolute;
}
/* 
.fade-enter-active,
.fade-leave-active {
  transition: all 3s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */

/* .fade-enter-active {
  transition: all 3s linear;
} */

/* h2 {
  width: 400px;
  padding: 20px;
  margin: 20px;
}

@keyframes zoom-in {
  from {
    transform: scale(0, 0);
  },
  to {
    transform: scale(1, 1);
  }
}

@keyframes zoom-out {
  from {
    transform: scale(1, 1);
  },
  to {
    transform: scale(0, 0);
  }
} */

/* .zoom-enter-active {
  animation: zoom-in 1s linear forwards;
}

.zoom-leave-active {
  animation: zoom-out 1s linear forwards;
} */

</style>