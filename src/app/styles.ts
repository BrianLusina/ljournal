import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const AppWrapper = styled.div``;

type ArticleProps = {
  visible?: boolean;
};

export const Article = styled.article<ArticleProps>(({ visible = false }) => ({
  display: visible ? 'block' : 'none',
}));

export const ArticleCard = styled(Article)``;
