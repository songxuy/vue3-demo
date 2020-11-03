<template>
  <div class="hover">
    <ul class="float-text-menu">
      <li><a data-text="Home">Home</a></li>
      <li><a data-text="Archives">Archives</a></li>
      <li><a data-text="Tags">Tags</a></li>
      <li><a data-text="Categories">Categories</a></li>
      <li><a data-text="About">About</a></li>
    </ul>
    <button class="btn btn-primary btn-ghost btn-shine">
      hover me
    </button>
  </div>
</template>
<script>
/* import { ref } from 'vue'; */
export default {
  components: {},
  setup() {
    /* const view = ref('Animate1');
    const callback = key => {
      view.value = 'Animate' + key;
    };
    return {
      callback,
      view,
    }; */
  },
  mounted() {
    const floatTextMenuLinks = document.querySelectorAll('.float-text-menu li a');
    floatTextMenuLinks.forEach(link => {
      const letters = link.textContent.split('');
      link.textContent = '';
      letters.forEach((letter, i) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.transitionDelay = `${i / 20}s`;
        span.dataset.text = letter;
        link.append(span);
      });
    });
  },
};
</script>
<style lang="scss">
.float-text-menu {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  li {
    a {
      display: flex;
      padding: 6px;
      color: #000;
      font-family: Lato, sans-serif;
      text-decoration: none;
      overflow: hidden;

      span {
        position: relative;
        transition: 0.3s;

        &::before {
          position: absolute;
          content: attr(data-text);
          transform: translateY(130%);
        }
      }

      &:hover {
        span {
          transform: translateY(-130%);
        }
      }
    }
  }
}
.btn {
  --hue: 190;
  position: relative;
  padding: 1rem 3rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #000;
  text-decoration: none;
  text-transform: uppercase;
  background-color: hsl(var(--hue), 100%, 41%);
  border: 1px solid hsl(var(--hue), 100%, 41%);
  outline: transparent;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  transition: 0.25s;

  &:hover {
    background: hsl(var(--hue), 100%, 31%);
  }

  &-primary {
    --hue: 187;
  }

  &-ghost {
    color: hsl(var(--hue), 100%, 41%);
    background-color: transparent;
    border-color: hsl(var(--hue), 100%, 41%);

    &:hover {
      color: #000;
    }
  }

  &-shine {
    color: #000;

    &::before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent,
        hsla(var(--hue), 100%, 41%, 0.5),
        transparent
      );
      transform: translateX(-100%);
      transition: 0.6s;
    }

    &:hover {
      background: transparent;
      /* box-shadow: 0 0 20px 10px hsla(var(--hue), 100%, 41%, 0.5); */
    }

    &:hover::before {
      transform: translateX(100%);
    }
  }
}
</style>
