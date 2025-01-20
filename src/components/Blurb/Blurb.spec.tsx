import { render } from '@testing-library/react';
import faker from 'faker';
import BlurbItem from './Blurb';

describe('BlurbItem', () => {
  const props = {
    title: faker.lorem.sentence(),
    image: faker.image.imageUrl(),
    description: faker.lorem.paragraph(),
  };

  it('should render', () => {
    render(<BlurbItem {...props} />);
  });
});
