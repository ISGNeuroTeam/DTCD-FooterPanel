import pluginMeta from './Plugin.Meta';
import PluginComponent from './PluginComponent.vue';

import { PanelPlugin, InteractionSystemAdapter, EventSystemAdapter } from '../../DTCD-SDK/index';

export class Plugin extends PanelPlugin {
  static getRegistrationMeta() {
    return pluginMeta;
  }

  constructor(guid, selector) {
    super();
    const eventSystem = new EventSystemAdapter('0.4.0', guid);
    const interactionSystem = new InteractionSystemAdapter('0.4.0');

    const VueJS = this.getDependence('Vue');

    const data = { guid, interactionSystem, eventSystem };

    new VueJS.default({
      data: () => data,
      render: h => h(PluginComponent),
    }).$mount(selector);
  }
}
