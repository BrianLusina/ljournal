import analytics from '@analytics';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Tracks page views for the current user.
 */
export default function usePageViews(): void {
  const location = useLocation();
  useEffect(() => {
    analytics.logEvent('page_view', {
      page_path: location.pathname,
    });
  }, [location]);
}
