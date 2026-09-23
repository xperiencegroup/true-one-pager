const PROJECT = "trueonepager";

export const TRACK = {
  home: {
    menu: {
      toggle: `${PROJECT}:menu:toggle:click`,
      item: (id) => `${PROJECT}:menu:${id}:click`,
    },

    language: {
      toggle: `${PROJECT}:language:toggle:click`,
    },

    logo: {
      home: `${PROJECT}:logo:home:click`,
    },
  },
};
