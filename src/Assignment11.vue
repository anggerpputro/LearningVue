<template>
    <div class="container">
        <header>
            <h3 class="text-center">Assignment 11: Filter and Mixins</h3>
        </header>

        <hr>

        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <p>1, 2. {{ text | reverse | count }}</p>
                <p>3, 4. {{ reverseText }}, {{ countText }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { textMixins } from './components/Assignment11/TextMixins';

export default {
    data() {
        return {
            text: 'Hello World!'
        }
    },
    filters: {
        reverse(value) {
            return value.split("").reverse().join("");
        }
    },
    mixins: [textMixins]
}
</script>
