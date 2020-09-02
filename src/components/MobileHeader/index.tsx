import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileCircle src="https://media-exp1.licdn.com/dms/image/C4D03AQEWsWIqtFHX8A/profile-displayphoto-shrink_200_200/0?e=1604534400&v=beta&t=9xZF_reUt4lYA8pXKGgJ17XclQ_HkriGQByxRUEFv-4" />

      <SearchInput placeholder="Pesquisar" />
      <MessageIcon />
    </Container>
  );
}

export default MobileHeader;