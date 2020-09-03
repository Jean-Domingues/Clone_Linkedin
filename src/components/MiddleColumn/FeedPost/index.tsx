import React from 'react';

import Panel from '../../Panel';

import {
  Container,
  Row,
  PostImage,
  Separator,
  Avatar,
  Column,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SendIcon,
} from './styles';

const FeedPost: React.FC = () => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQHv9IK9Ts0dFA/profile-displayphoto-shrink_200_200/0?e=1604534400&v=beta&t=feHTRqLrluZsGEYfxW1nBtLZVCcwydVZhs032eEAtE8" />
          <Column>
            <h3>Bill Gates</h3>
            <h4>Co-chair, Bill e Melinda Gates Foundation</h4>
            <time>1 sem</time>
          </Column>
        </Row>

        <PostImage
          src="https://media-exp1.licdn.com/dms/image/C4E12AQFXhKSmwkInwA/article-cover_image-shrink_423_752/0?e=1604534400&v=beta&t=Et7oS5Sqg3NhnFTNm83Cm-d5rqex0OzHP7pkdN5RQ0c"
          alt="Gates"
        />

        <Row className="likes">
          <span className="circle blue" />
          <span className="circle green" />
          <span className="circle red" />
          <span className="number">49</span>
        </Row>

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
          <button>
            <LikeIcon />
            <span>Gostei</span>
          </button>
          <button>
            <CommentIcon />
            <span>Comentar</span>
          </button>
          <button>
            <ShareIcon />
            <span>Compartilhar</span>
          </button>
          <button>
            <SendIcon />
            <span>Enviar</span>
          </button>
        </Row>
      </Container>
    </Panel>
  );
};

export default FeedPost;
