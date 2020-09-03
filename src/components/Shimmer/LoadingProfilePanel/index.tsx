import React from 'react';
import Panel from '../../Panel';

import { Container } from './styles';
import Skeleton from '../../Skeleton';

const LoadingProfilePanel: React.FC = () => {
  return (
    <Container className="no-shadow">
      <Panel>
      <Skeleton className="bg-skeleton" />
      <span>
        
      <Skeleton className="avatar-skeleton" />
      <Skeleton className="row-skeleton" />
      <Skeleton className="row-skeleton" />
      </span>

      </Panel>
    </Container>
  )
}

export default LoadingProfilePanel;