import { render, screen, act } from '@testing-library/react';
import faker from 'faker';
import { MockedResponseType } from '@testUtils/MockAppWithGqlProvider';
import MockApp from '@testUtils/MockApp';
import { GET_SOCIAL_INFO_QUERY } from '@graphQl/queries';
import SocialCard from './SocialCard';

describe('SocialCard', () => {
  it('should render', async () => {
    const socialMock: MockedResponseType[] = [];
    await act(async () => {
      render(
        <MockApp mocks={socialMock}>
          <SocialCard />
        </MockApp>,
      );
    });
  });

  it('should display content as received from query', async () => {
    const name = faker.lorem.word();
    const link = faker.internet.url();

    const socialMock: MockedResponseType[] = [
      {
        request: {
          query: GET_SOCIAL_INFO_QUERY,
        },
        result: {
          data: {
            socialCollection: {
              items: [
                {
                  name,
                  link,
                },
              ],
            },
          },
        },
      },
    ];

    await act(async () => {
      render(
        <MockApp mocks={socialMock}>
          <SocialCard />
        </MockApp>,
      );
    });

    await new Promise((resolve) => setTimeout(resolve, 0));

    const nameTextElement = screen.getByText(name);
    const linkElement = screen.getByRole('link');

    expect(nameTextElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
