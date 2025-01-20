import { GET_BLURBS_QUERY } from '@graphQl/queries';
import { ApolloError, useQuery } from '@apollo/client';
import useCaptureError from './useCaptureError';

export default function useGetBlurbs(): {
  loading: boolean;
  error: ApolloError | undefined;
  data: BlurbItem[];
} {
  const { loading, error, data } = useQuery<BlurbCollection>(GET_BLURBS_QUERY);
  useCaptureError(error, { type: 'hook', query: GET_BLURBS_QUERY, data });

  const items = data ? data.blurbCollection.items : [];

  return {
    loading,
    error,
    data: items,
  };
}
