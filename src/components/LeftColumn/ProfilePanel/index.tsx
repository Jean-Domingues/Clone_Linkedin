import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQEWsWIqtFHX8A/profile-displayphoto-shrink_200_200/0?e=1604534400&v=beta&t=9xZF_reUt4lYA8pXKGgJ17XclQ_HkriGQByxRUEFv-4"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Jean Domingues</h1>
        <h2>Front-end developer ReactJs</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">126</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">388</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
