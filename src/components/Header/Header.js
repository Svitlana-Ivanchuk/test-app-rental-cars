import { Container, StyledLink } from './Header.styled';

export const Header = () => {
  return (
    <Container>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/catalog">Catalog</StyledLink>
      <StyledLink to="/favorites">Favorites</StyledLink>
    </Container>
  );
};
