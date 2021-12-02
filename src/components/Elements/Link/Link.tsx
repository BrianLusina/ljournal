import { FunctionComponent } from 'react';
import { Link as RouterLink, LinkProps as RouterProps } from 'react-router-dom';

type LinkProps = RouterProps & {
  link: string;
  text: string;
  rest: any;
};

const Link: FunctionComponent<LinkProps> = ({ text, ...rest }: LinkProps) => (
  <RouterLink className="button large" {...rest}>
    {text}
  </RouterLink>
);

export default Link;