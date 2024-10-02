import styled from "styled-components";

export const Container = styled.section`
  justify-content: center;
  display: flex;
  align-items: center;
  margin: 0 5px 0 5px;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .logo {
    margin-top: 2.5rem;
  }

  .cards {
    display: grid;
    grid-template-columns: 290px 290px;
    gap: 0 20px;
    max-width: 290px;
    justify-content: center;
    align-items: center;
    flex: 1;

    @media screen and (max-width: 620px) {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

      .img-off {
        width: 100%;
        justify-content: center;
        align-items: center;
        text-align: center;
        grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
      }
    }
  }
`;
