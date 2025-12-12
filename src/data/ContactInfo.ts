
        
export interface SocialLinkModel {
  platform: string;
  url: string;
  iconName: string;
}

export interface ContactInfoModel {
  email: string;
  phone: string;
  address: {
    line1: string;
    city: string;
    zip: string;
    mapPlaceholderUrl: string;
  };
  socialLinks: SocialLinkModel[];
}

export const DEVHUB_CONTACT_INFO: ContactInfoModel = {
  email: "devhub.piemr@gmail.com",
  phone: "President : 9584441119        Vice President : 8889992223",
  address: {
    line1: "Prestige Institute of Engineering and Management Research, Scheme No. 78, Vijay Nagar",
    city: "Indore, MP, India",
    zip: "452010",
    mapPlaceholderUrl: "https://maps.app.goo.gl/zoPbsvnpinREk5ko7",
  },
  socialLinks: [
    { 
        platform: "WhatsApp", 
        url: "https://wa.me/919876543210", 
        iconName: "MessageCircle" 
    },
    {
      platform: "GitHub",
      url: "https://github.com/devhub-piemr",
      iconName: "Github",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/devhub_piemr?igsh=MTQ3ZGR4cjFyZWQ3dA==",
      iconName: "Instagram",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/devhub-piemr",
      iconName: "Linkedin",
    },
  ],
};
        
      
