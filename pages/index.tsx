import { Container, Title, Anchor, Text, Paper, TextInput, Group, Button, Image,  } from "@mantine/core";
import { useRouter } from "next/navigation";
// import { sql } from "@vercel/postgres";
export default function Page() {
    const router = useRouter();
    return (
        <Container size={420} my={10}>
           <div style={{ display: 'flex', alignItems: 'center', justifyContent:"center", width:"100%"}}>
              <Image width={200} height={140} fit="contain"  src="/img/logo.png" alt="logo do inova If"/>
     
            
            </div>
          <Title align="center" mt={35} sx={(theme) => ({
              fontFamily: `Greycliff CF, ${theme.fontFamily}`,
              fontWeight: 900,
            })}
          > Seja bem-vindo!</Title>
          <Text color="dimmed" size="sm" align="center" mt={7}>
            Digite seu CPF e verifique sua grade horaria. Atenção! Será mostrando apenas o seis dias posteriores a data escolhida.{" "}
            <Anchor<"a"> c="blue" href="/cadastro" size="sm" 
            >Preciso de ajuda</Anchor>
          </Text>
          <form onSubmit={(e) => 
          {router.push('/painel');
          e.preventDefault();}}>
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput label="CPF" placeholder="Digite sem ponto e traços" required />
            {/* <TextInput label="CPF" placeholder="Digite sem ponto e traços" required /> */}
            
            <input type="date" style={{border:'1px solid #CED4DA', color:'#ADB5BD', paddingLeft:'8px', borderRadius:'4px', marginTop:'10px', width:'220px', height:'35px'}}></input>
        
            <Group position="center" spacing="xl" mt="lg">
              <Anchor<"a"> c="blue" onClick={(event) => event.preventDefault()} href="/cadastro" size="sm">
                Não encontrou seu CPF? Toque para redefinir
              </Anchor>
            </Group>
            <Button fullWidth mt="xl" style={{background: "#004d2a"}} type="submit">
              Verificar
            </Button>
          </Paper>
          </form>
        </Container>
    )
  }
{/* <Container size={420} my={10}>
           <div style={{ display: 'flex', alignItems: 'center', justifyContent:"center", width:"100%"}}>
              <Image width={200} height={140} fit="contain"  src="/img/logo.png" alt="logo do inova If"/>
     
            
            </div>
          <Title align="center" mt={35} sx={(theme) => ({
              fontFamily: `Greycliff CF, ${theme.fontFamily}`,
              fontWeight: 900,
            })}
          > Seja bem-vindo!</Title>
          <Text color="dimmed" size="sm" align="center" mt={5}>
            Não tem uma conta ainda?{" "}
            <Anchor<"a"> c="blue" href="/cadastro" size="sm" 
            >Criar conta</Anchor>
          </Text>
          <form onSubmit={(e) => 
          {router.push('/painel');
          e.preventDefault();}}>
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput label="Email" placeholder="exemplo@estudante.edu.br" required />
            <PasswordInput
              label="Senha"
              placeholder="Senha"
              required
              mt="md"
            />
            <Group position="center" spacing="xl" mt="lg">
              <Checkbox label="Lembrar-me" sx={{ lineHeight: 1 }} />
              <Anchor<"a"> c="blue" onClick={(event) => event.preventDefault()} href="/cadastro" size="sm">
                Esqueceu a senha? Toque para redefinir
              </Anchor>
            </Group>
            <Button fullWidth mt="xl" style={{background: "#004d2a"}} type="submit">
              Entrar
            </Button>
          </Paper>
          </form>
        </Container> */}