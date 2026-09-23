const PROJECT = "trueonepager";

export const TRACK = {
  home: {
    menu: {
      toggle: `${PROJECT}:menu:toggle:click`,
      item: `${PROJECT}:menu:item:click`,
    },

    language: {
      toggle: `${PROJECT}:language:toggle:click`,
    },

    logo: {
      home: `${PROJECT}:logo:hero:click`,
    },

    social: {
      click: `${PROJECT}:social:click`,
    },

    whatsapp: {
      float: `${PROJECT}:whatsapp:float:click`,
    },

    popup: {
      registro: {
        open: `${PROJECT}:popup:registro:open`,
        close: `${PROJECT}:popup:registro:close`,
        submit: `${PROJECT}:popup:registro:submit`,
        submitError: `${PROJECT}:popup:registro:submit-error`,
        social: `${PROJECT}:popup:registro:social:click`,
      },
      clickAndXperience: {
        open: `${PROJECT}:popup:click-xperience:open`,
        close: `${PROJECT}:popup:click-xperience:close`,
        submit: `${PROJECT}:popup:click-xperience:submit`,
        submitError: `${PROJECT}:popup:click-xperience:submit-error`,
        social: `${PROJECT}:popup:click-xperience:social:click`,
        redirect: `${PROJECT}:popup:click-xperience:redirect`,
      },
    },
  },
};
