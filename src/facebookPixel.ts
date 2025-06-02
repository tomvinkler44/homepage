import ReactPixel from 'react-facebook-pixel';

const options: Parameters<typeof ReactPixel.init>[2] = {
  autoConfig: true,
  debug: true,
};

export const initMetaPixel = (): void => {
  ReactPixel.init('580109988450472', undefined, options);
  ReactPixel.pageView(); // Fires pageview
};

export const trackPlanClick = (planName: string, price: number): void => {
  ReactPixel.track('Lead', {
    content_name: planName,
    value: price,
    currency: 'USD',
  });
};
