import pluginMeta from './Plugin.Meta';
import PluginComponent from './PluginComponent.vue';

import { PanelPlugin, StyleSystemAdapter } from './../../DTCD-SDK/index';

export class FooterPanel extends PanelPlugin {
  static getRegistrationMeta() {
    return pluginMeta;
  }

  constructor(guid, selector) {
    super();

    const styleSystem = new StyleSystemAdapter('0.4.0');

    const VueJS = this.getDependence('Vue');

    const data = { guid };

    const vue = new VueJS.default({
      data: () => data,
      render: h => h(PluginComponent),
    }).$mount(selector);

    styleSystem.setVariablesToElement(vue.$el, styleSystem.getCurrentTheme());
  }
}
