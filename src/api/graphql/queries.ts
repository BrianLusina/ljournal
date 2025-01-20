import { gql } from '@apollo/client';

export const GET_SOCIAL_INFO_QUERY = gql`
  query GetSocialInfo {
    socialCollection {
      items {
        name
        link
      }
    }
  }
`;

export const GET_BLURBS_QUERY = gql`
  query GetAllBlurbs {
    blurbCollection {
      items {
        description
        image {
          url
        }
        title
      }
    }
  }
`;
