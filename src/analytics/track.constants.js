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

    hero: {
      cta: `${PROJECT}:hero:cta:click`,
    },

    eligenos: {
      cta: `${PROJECT}:eligenos:cta:click`,
    },

    infraestructura: {
      mapClick: `${PROJECT}:infraestructura:map:click`,
    },

    faq: {
      toggle: `${PROJECT}:faq:item:toggle`,
    },

    dfc: {
      mainSiteClick: `${PROJECT}:designed-for-certainity:main-site:click`,
    },

    contacto: {
      contactMethodClick: `${PROJECT}:contacto:metodo:click`,
      formSubmit: `${PROJECT}:contacto:form:submit`,
      formSubmitError: `${PROJECT}:contacto:form:submit-error`,
    },

    footer: {
      backToTop: `${PROJECT}:footer:back-to-top:click`,
      contactInfoClick: `${PROJECT}:footer:contact-info:click`,
    },
  },
};
