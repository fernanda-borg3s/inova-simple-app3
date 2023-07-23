import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, AppShell, Footer, Header, Image, NavLink } from '@mantine/core';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>InovaIF</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      footer={
        <Footer height={50} style={{display: 'flex', alignItems: 'center',justifyContent:"center",background:'#004d2a', color:"#FFFFFF",}}>
         INSTITUTO FEDERAL DE BRASÍLIA | 2023
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
                <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                  <Image width={150} height={45} p="lg" src="/img/logoif.png" fit="contain" alt="logo do Instituto Federal"></Image>
                  <div style={{display:"flex", flexDirection:"row", marginLeft:"1%"}}>
                    {/* <NavLink component="a" href="/cadastro" label="Cadastrar" p={'lg'}/> */}
                    <NavLink component="a" href="/sobre" label="Sobre"/>
                    <NavLink component="a" href="/ajuda" label="Ajuda"/>
                  </div>
                  
                </div>
              </Header>

      }
    >
    <Component {...pageProps} />
    </AppShell>
        
      </MantineProvider>
    </>
  );
}