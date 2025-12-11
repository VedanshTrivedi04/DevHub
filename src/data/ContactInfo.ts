
        
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
  email: "devhub.piemr@example.com",
  phone: "+91 98765 43210",
  address: {
    line1: "Parmanand Institute of Engineering & Management Research (PIEMR)",
    city: "Indore, MP, India",
    zip: "452012",
    mapPlaceholderUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/11/b9eaf92f-9728-4856-8163-e9c70fb0a8b6.png",
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
      url: "https://instagram.com/devhub_piemr",
      iconName: "Instagram",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/devhub-piemr",
      iconName: "Linkedin",
    },
  ],
};
        
      