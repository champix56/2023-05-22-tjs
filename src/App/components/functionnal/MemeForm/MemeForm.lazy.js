import React, { lazy, Suspense } from 'react';

const LazyMemeForm = lazy(() => import('./MemeForm'));

const MemeForm = props => (
  <Suspense fallback={null}>
    <LazyMemeForm {...props} />
  </Suspense>
);

export default MemeForm;
