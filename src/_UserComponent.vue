<template>
  <div class="container">
    <app-user></app-user>
  </div>
</template>

<script>
import User from "./components/User/User.vue";

export default {
  components: {
    "app-user": User
  }
};
</script>

<style>
.component {
  border: 1px solid black !important;
  padding: 20px;
  min-height: 250px;
}
</style>
