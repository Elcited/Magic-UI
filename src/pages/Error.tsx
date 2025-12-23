import { useRouteError, isRouteErrorResponse } from 'react-router';
import NotFound from '@/components/errors/NotFound';
import UnknownError from '@/components/errors/UnknownError';

export default function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        return <NotFound />;
    }
  }

  return <UnknownError />;
}
