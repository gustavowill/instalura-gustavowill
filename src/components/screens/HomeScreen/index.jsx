import React from 'react';
import Button from '../../commons/Button';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import { WebsitePageContext } from '../../wrappers/WebsitePage';

export default function HomeScreen() {
  const websitePageContext = React.useContext(WebsitePageContext);

  return (
    <Box
      display="flex"
      flexDirection="column"
      flex="1"
      justifyContent="center"
    >
      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '75px',
        }}
      >
        <Grid.Row>
          <Grid.Column
            value={{ xs: 12, md: 5 }}
            offset={{ xs: 0, md: 1 }}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
          >
            <Text
              variant="title"
              tag="h1"
              color="tertiary.main"
          // textAlign="right"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Compartilhe momentos e conecte-se com amigos
            </Text>
            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
            </Text>

            <Button
              margin={{
                xs: 'auto',
                md: 'initial',
              }}
              display="block"
              variant="primary.main"
              onClick={() => websitePageContext.toggleModalCadastro()}
            >
              Cadastrar
            </Button>
          </Grid.Column>
          <Grid.Column
            value={{
              xs: 12,
              md: 6,
            }}
          >
            <img
              alt="Imagem de celular com páginas internas do projeto com o perfil do Cage"
              style={{ display: 'block', margin: 'auto' }}
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}