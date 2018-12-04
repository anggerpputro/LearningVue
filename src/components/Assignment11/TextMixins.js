export const textMixins = {
    computed: {
        reverseText() {
            return this.text.split("").reverse().join("");
        },
        countText() {
            return this.text + " (" + this.text.length + ")";
        }
    }
}