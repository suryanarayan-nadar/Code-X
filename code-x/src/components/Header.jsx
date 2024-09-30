// import { AppBar, Toolbar, styled } from "@mui/material";

// const Container = styled(AppBar)`
//   background-color: #060606;
//   height: 9vh;
// `;

// const Header = () => {
//   return (
//     <Container position="static">
//       <Toolbar>Code - X</Toolbar>
//     </Container>
//   );
// };

// export default Header;

import { AppBar, Toolbar, styled } from "@mui/material";

const Container = styled(AppBar)`
  background: #060606;
  position: static;
  border-bottom: 1px solid #2f2f2f;
  height: 9vh;
`;

const Header = () => {
  return (
    <Container>
      <Toolbar>Code - X</Toolbar>
    </Container>
  );
};

export default Header;
