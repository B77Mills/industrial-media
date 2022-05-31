import DefaultTheme from '@parameter1/base-cms-marko-web-theme-default/browser';
import GTM from '@parameter1/base-cms-marko-web-gtm/browser';
import GAM from '@parameter1/base-cms-marko-web-gam/browser';
import GCSE from '@parameter1/base-cms-marko-web-gcse/browser';
import SocialSharing from '@parameter1/base-cms-marko-web-social-sharing/browser';
import PhotoSwipe from '@parameter1/base-cms-marko-web-photoswipe/browser';
import ContactUs from '@parameter1/base-cms-marko-web-contact-us/browser';
import P1Events from '@parameter1/base-cms-marko-web-p1-events/browser';
import OmedaIdentityX from '@parameter1/base-cms-marko-web-omeda-identity-x/browser';
import SharedFloatingVideoPlayer from './floating-video-player.vue';

const RevealAdHandler = () => import(/* webpackChunkName: "reveal-ad-handler" */ './reveal-ad-handler.vue');


const setP1EventsIdentity = ({ p1events, brandKey, encryptedId }) => {
  if (!p1events || !brandKey || !encryptedId) return;
  p1events('setIdentity', `omeda.${brandKey}.customer*${encryptedId}~encrypted`);
};

export default (Browser) => {
  const { EventBus } = Browser;
  EventBus.$on('identity-x-logout', () => {
    if (window.p1events) window.p1events('setIdentity', null);
  });
  EventBus.$on('omeda-identity-x-authenticated', ({ brandKey, encryptedId }) => {
    setP1EventsIdentity({ p1events: window.p1events, brandKey, encryptedId });
  });
  EventBus.$on('omeda-identity-x-rapid-identify-response', ({ brandKey, encryptedId }) => {
    setP1EventsIdentity({ p1events: window.p1events, brandKey, encryptedId });
  });

  DefaultTheme(Browser);
  GTM(Browser);
  GAM(Browser);
  GCSE(Browser);
  SocialSharing(Browser);
  PhotoSwipe(Browser);
  ContactUs(Browser);
  OmedaIdentityX(Browser);
  P1Events(Browser);
  Browser.register('SharedFloatingVideoPlayer', SharedFloatingVideoPlayer);
  Browser.register('RevealAdHandler', RevealAdHandler);
};
