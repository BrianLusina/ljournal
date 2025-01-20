import { FunctionComponent } from 'react';
import { BlurbProps } from './Blurb.types';

const Blurb: FunctionComponent<BlurbProps> = ({ title, image, description }) => (
  <>
    <h2 className="major">{title}</h2>
    <span className="image main">
      <img src={image} alt={title.toLowerCase()} />
    </span>
    {/* eslint-disable-next-line react/no-danger */}
    <div dangerouslySetInnerHTML={{ __html: description as string }} />
  </>
);

export default Blurb;
