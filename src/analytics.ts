import ReactGA from "react-ga4";

const TRACKING_ID = "G-WHCQQHE2F0"; // Replace with your GA4 Measurement ID

export const initGA = (): void => {
  ReactGA.initialize(TRACKING_ID);
};

export const logPageView = (pagePath: string): void => {
  ReactGA.send({ hitType: "pageview", page: pagePath });
};
