<template>
  <div class="container">
    <app-header></app-header>

    <hr>

    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-server></app-server>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-server-detail></app-server-detail>
      </div>
    </div>

    <hr>

    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "./components/Shared/Header.vue";
import AppFooter from "./components/Shared/Footer.vue";
import AppServer from "./components/Server/Server.vue";
import AppServerDetail from "./components/Server/ServerDetail.vue";

export default {
  components: {
    "app-header": AppHeader,
    "app-footer": AppFooter,
    "app-server": AppServer,
    "app-server-detail": AppServerDetail
  }
};
</script>

<style>
</style>
