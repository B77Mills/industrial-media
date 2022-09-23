const sortNavItems = require('@industrial-media/package-global/utils/sort-nav-items');

const topics = sortNavItems([
  { href: '/new-products', label: 'New Products' },
  { href: '/business-technology', label: 'Business Technology' },
  { href: '/earnings', label: 'Earnings' },
  { href: '/economy', label: 'Economy' },
  { href: '/mergers-acquisitions', label: 'Mergers & Acquisitions' },
  { href: '/operations', label: 'Operations' },
  { href: '/sales', label: 'Sales' },
  { href: '/staffing-changes', label: 'Staffing Changes' },
  { href: '/supply-chain', label: 'Supply Chain' },
  { href: '/big-50', label: 'Big 50' },
]);

const secondary = [
  { href: '/video', label: 'Video' },
  { href: 'https://ien.formstack.com/forms/advertise_with_industrial_media', label: 'Advertise', target: '_blank' },
  { href: 'https://industrialmedia.dragonforms.com/loading.do?omedasite=id_signup', label: 'Newsletter Signup', target: '_blank' },
  { href: '/magazine', label: 'Magazine' },
];

const resources = [
  { href: '/video', label: 'Video' },
  { href: '/page/id-about-us', label: 'About Us' },
  { href: '/contact-us', label: 'Contact Us' },
  { href: 'https://ien.formstack.com/forms/advertise_with_industrial_media', label: 'Advertise', target: '_blank' },
];

const utilities = [
  { href: 'https://industrialmedia.dragonforms.com/loading.do?omedasite=id_signup', label: 'Newsletter Signup', target: '_blank' },
];

const mobileMenu = {
  primary: [
    ...topics,
    ...secondary,
  ],
  secondary: [
    ...resources,
  ],
};

const desktopMenu = {};

module.exports = {
  type: 'navbar-custom',
  user: {
    items: [],
  },
  desktopMenu,
  mobileMenu,
  topics,
  primary: {
    items: [
      ...topics,
    ],
  },
  secondary: {
    items: [
      ...secondary,
    ],
  },
  tertiary: {
    items: [],
  },
  toggleMenu: {
    about: {
      // label: 'About',
      // items: utilities,
    },
    leftColumn: {
      label: 'Topics',
      items: [
        ...topics,
        { href: '/workforce-development', label: 'Workforce' },
      ],
    },
    midColumn: {
      items: [
        ...resources,
      ],
    },
    rightColumn: {
      label: 'User Tools',
      items: utilities,
    },
  },
  footer: {
    items: [
      { href: '/page/id-about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://ien.formstack.com/forms/advertise_with_industrial_media', label: 'Advertise', target: '_blank' },
      { href: '/page/id-privacy-policy', label: 'Privacy Policy' },
      { href: '/page/id-terms-conditions', label: 'Terms & Conditions' },
      { href: 'https://www.manufacturing.net/page/CCPA', label: 'CA Consumer Privacy Act', target: '_blank' },
      { href: '/site-map', label: 'Site Map' },
    ],
  },
};
