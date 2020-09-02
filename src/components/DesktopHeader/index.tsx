import React from "react";

import {
  Container,
  Wrapper,
  LinkedinIcon,
  SearchInput,
  HomeIcon,
  NotificationsIcon,
  ProfileCircle,
  CaretDownIcon
} from "./styles";

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedinIcon />
          <SearchInput placeholder="Pesquisar" />
        </div>

        <div className="right">
          <nav>
          <button className="active">
            <HomeIcon />
            <span>Início</span>
          </button>

          <button>
            <NotificationsIcon />
            <span>Notificações</span>
          </button>

          <button>
            <ProfileCircle src="https://media-exp1.licdn.com/dms/image/C4D03AQEWsWIqtFHX8A/profile-displayphoto-shrink_200_200/0?e=1604534400&v=beta&t=9xZF_reUt4lYA8pXKGgJ17XclQ_HkriGQByxRUEFv-4" />
            <span>
              Eu <CaretDownIcon />
            </span>
          </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
};

export default DesktopHeader;
