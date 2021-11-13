import API from "@/api/api";
// import FormRules from "@/utils/form_rules";
// import Utils from "@/utils/utils";
import Vue from 'vue'

import VueRouter, { Route, RawLocation, NavigationGuard } from './index'

declare module 'vue/types/vue' {
  interface Vue {
    $api: API
    // $utils: Utils
    // $formRules: FormRules
  }
}