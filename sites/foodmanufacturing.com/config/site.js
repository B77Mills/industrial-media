const { brandLogos } = require('@industrial-media/package-shared/config/footer-brand-logos');

const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const socialMediaLinks = require('./social-links');

module.exports = {
  navigation,
  gam,
  nativeX,
  socialMediaLinks,
  company: 'Industrial Media, LLC',
  p1events: {
    tenant: 'indm',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'foodmanufacturing.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.foodmanufacturing.com/files/base/indm/all/fm_logo.png?h=45',
      srcset: [
        'https://img.foodmanufacturing.com/files/base/indm/all/fm_logo.png?h=90 2x',
      ],
    },
    footer: {
      brandLogos,
      src: 'https://img.foodmanufacturing.com/files/base/indm/all/fm_logo.png?h=60',
      srcset: [
        'https://img.foodmanufacturing.com/files/base/indm/all/fm_logo.png?h=120 2x',
      ],
    },
  },
  identityX: {
    appId: '5e28a3dd58e67b229e55ae43',
    enabled: true,
    comments: { enabled: false },
    options: {
      appContextId: '5e82041275a0950125baf2b6',
    },
  },
  gtm: {
    containerId: 'GTM-T6RB25V',
  },
  gcse: {
    id: '003355913687346718228:w3ie9ydeqtb',
  },
  wufoo: {
    userName: 'ien',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    to: 'david@ien.com',
    branding: {
      logo: 'https://img.foodmanufacturing.com/files/base/indm/all/fm_logo.png?h=60',
    },
    support: {
      email: 'reply@ien.com',
    },
  },
};
