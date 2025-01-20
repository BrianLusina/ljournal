import { ApolloError, useQuery } from '@apollo/client';
import { GET_SOCIAL_INFO_QUERY } from '@graphQl/queries';
import useCaptureError from './useCaptureError';

export default function useGetSocialData(): {
  loading: boolean;
  error: ApolloError | undefined;
  data: SocialItem[] | undefined;
} {
  const { loading, error, data } = useQuery<SocialsData>(GET_SOCIAL_INFO_QUERY);
  useCaptureError(error, { type: 'hook', query: GET_SOCIAL_INFO_QUERY, data });

  const socialItems = data ? data.socialCollection.items : [];

  return {
    loading,
    error,
    data: socialItems,
  };
}
