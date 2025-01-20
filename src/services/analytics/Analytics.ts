import {
  logEvent,
  getAnalytics,
  Analytics as FirebaseAnalytics,
  EventParams,
  CustomEventName,
} from 'firebase/analytics';
import config from '@config';
import firebaseApp from '@services/firebase';

const {
  env: { nodeEnv },
} = config;

/**
 * Analytics Service.
 * This will handle all analytics events.
 * This could be a wrapper around any analytics library.
 */
export class Analytics {
  private analytics: FirebaseAnalytics;

  constructor() {
    this.analytics = getAnalytics(firebaseApp);
  }

  logEvent(eventName: CustomEventName<string>, eventParams?: EventParams): void {
    if (nodeEnv === 'production') {
      logEvent(this.analytics, eventName, eventParams);
    }
  }
}

const analytics = new Analytics();

export default analytics;
