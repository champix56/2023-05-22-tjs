import React, { lazy, Suspense } from 'react';

const LazyFlexH3Grow = lazy(() => import('./FlexH3Grow'));

const FlexH3Grow = props => (
  <Suspense fallback={null}>
    <LazyFlexH3Grow {...props} />
  </Suspense>
);

export default FlexH3Grow;
