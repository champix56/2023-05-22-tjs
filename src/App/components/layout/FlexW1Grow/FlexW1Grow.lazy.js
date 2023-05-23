import React, { lazy, Suspense } from 'react';

const LazyFlexW1Grow = lazy(() => import('./FlexW1Grow'));

const FlexW1Grow = props => (
  <Suspense fallback={null}>
    <LazyFlexW1Grow {...props} />
  </Suspense>
);

export default FlexW1Grow;
