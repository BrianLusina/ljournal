import { FunctionComponent } from 'react';
import useGetSocialData from '@hooks/useGetSocialData';
import SocialCardItem from './SocialCardItem';

const SocialCard: FunctionComponent = () => {
  const { loading, error, data } = useGetSocialData();

  if (loading) return <div>Loading...</div>;

  if (error) {
    return <p>Yikes! Something terrible has happened. Little bots are looking into this :)</p>;
  }

  return (
    <ul className="icons">
      {(data || []).map(({ name, link }) => (
        <li key={name}>
          <SocialCardItem iconName={name.toLocaleLowerCase()} link={link} label={name} />
        </li>
      ))}
    </ul>
  );
};

export default SocialCard;
