import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function AppBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <div>404</div>;
    }

    if (error.status === 401) {
      return <div>401</div>;
    }

    if (error.status === 503) {
      return <div>Looks like our API is down</div>;
    }

    if (error.status === 418) {
      return <div>🫖</div>;
    }
  }
  throw error;
}
