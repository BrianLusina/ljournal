import { render } from '@testing-library/react';
import faker from 'faker';
import Header from './Header';

describe('Header', () => {
  it('should render', () => {
    const pages = [
      {
        title: faker.lorem.word(),
      },
      {
        title: faker.lorem.word(),
      },
      {
        title: faker.lorem.word(),
      },
    ];
    render(<Header title={faker.lorem.sentence()} navItems={pages} />);
  });
});
