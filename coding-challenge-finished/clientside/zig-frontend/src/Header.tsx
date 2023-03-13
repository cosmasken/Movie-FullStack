import * as React from 'react';

interface IProps {
  name?: string;
}

const Header: React.SFC<IProps> = (props: IProps) => (
  <h1>{props.name}</h1>
);

Header.defaultProps = {
  name: 'Popular',
  
};

export default Header;