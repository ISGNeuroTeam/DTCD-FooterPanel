import pluginMeta from './Plugin.Meta';
import PluginComponent from './PluginComponent.vue';

import { AppPanelPlugin, StyleSystemAdapter } from './../../DTCD-SDK/index';

export class FooterPanel extends AppPanelPlugin {
  static getRegistrationMeta() {
    return pluginMeta;
  }

  constructor(guid, selector) {
    super();

    const VueJS = this.getDependence('Vue');

    const data = { guid };

    const vue = new VueJS.default({
      data: () => data,
      render: h => h(PluginComponent),
    }).$mount(selector);
  }
}
