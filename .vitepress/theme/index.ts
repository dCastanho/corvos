// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import type { Theme } from 'vitepress'
import './style.css'
import CORBattleListing from './components/CORBattleListing.vue'


export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.component('CORBattleListing', CORBattleListing)
  }
} satisfies Theme

