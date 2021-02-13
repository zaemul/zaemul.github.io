import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Analytics from './Analytics';

export default function useGoogleAnalytics() {
  const location = useLocation()

  useEffect(() => {
    Analytics.init()
  }, [])

  useEffect(() => {
    const currentPath = location.pathname + location.search
    Analytics.sendPageview(currentPath)
  }, [location])
};