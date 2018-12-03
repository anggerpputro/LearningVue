<template>
    <div class="container">
        <h3 class="text-center">Assignment 10: Custom Vue Directives</h3>

        <hr>

        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <button class="btn btn-primary"
                    v-custom-on:click="clicked">Click Me!</button>

                <hr>

                <div style="width: 100px; height: 100px; background-color: lightgreen"
                    v-custom-on:mouseenter="mouseEntered"
                    v-custom-on:mouseleave="mouseLeft"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    directives: {
        'custom-on': {
            bind(el, binding) {
                const ev = binding.arg;
                const fn = binding.value;

                el.addEventListener(ev, fn);
            }
        }
    },
    methods: {
        clicked() {
            alert('clicked!');
        },
        mouseEntered() {
            console.log('Mouse Enter!');
        },
        mouseLeft() {
            console.log('Mouse Left!');
        }
    }
}
</script>
