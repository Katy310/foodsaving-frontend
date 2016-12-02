import angular from "angular";
import uiRouter from "angular-ui-router";
import ngMaterial from "angular-material";
import Group from "../../common/group/group";
import joinGroupComponent from "./joinGroup.component";

let joinGroupModule = angular.module("joinGroup", [
  uiRouter,
  ngMaterial,
  Group
])

.component("joinGroup", joinGroupComponent)

.name;

export default joinGroupModule;
