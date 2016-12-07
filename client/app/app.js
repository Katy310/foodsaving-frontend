import angular from "angular";
import uiRouter from "angular-ui-router";
import ngMaterial from "angular-material";
import ngCookies from "angular-cookies";
import translate from "angular-translate";
import translateStorageCookie from "angular-translate-storage-cookie";
import Common from "./common/common";
import PageComponents from "./components/pages";
import AppMaterial from "./app.material";
import AppTranslate from "./app.translate";
import AppXEditableConfig from "./app.xeditable";
import "angular-xeditable";
import "../../node_modules/angular-xeditable/dist/css/xeditable.css";
import "angular-easyfb";
import "normalize.css";
import "../../node_modules/angular-material/angular-material.css";
import "./fonts/fonts";
import "./app.styl";

import mainLayout from "./layouts/main.html";
import splashLayout from "./layouts/splash.html";

angular.module("app", [
  uiRouter,
  ngMaterial,
  "xeditable",
  ngCookies,
  translate,
  translateStorageCookie,
  "ezfb",
  Common,
  PageComponents
]).config(($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider) => {
  "ngInject";
  $locationProvider.html5Mode(false).hashPrefix("!");
  $stateProvider
    .state("main", {
      abstract: true,
      url: "",
      template: mainLayout
    })
    .state("splash", {
      abstract: true,
      url: "",
      template: splashLayout
    });
  $urlRouterProvider.otherwise("/login");
  $httpProvider.defaults.xsrfCookieName = "csrftoken";
  $httpProvider.defaults.xsrfHeaderName = "X-CSRFToken";
})
.config(AppTranslate)
.config(AppMaterial)
.config((ezfbProvider) => {
  "ngInject";
  ezfbProvider.setInitParams({
    appId: "1179987075388955"
  });
})
.run(AppXEditableConfig);
