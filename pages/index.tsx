import { Container, Title, Anchor, Text, Paper, TextInput, Group, Button, Image,  } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useState } from 'react';
// import { Aluno } from "@prisma/client";
import { GetServerSideProps } from 'next'

import { prisma } from './../lib/prisma';

const MyComponent = () => {
  const router = useRouter();
  const [cpf, setCpf] = useState('');

  const handleLogin = async () => {
    try {
      // Verificar se o usuário já existe no banco de dados
      const aluno = await prisma.aluno.findMany({
        where: {
          cpf: cpf,
        },
      });

      if (aluno && aluno.length > 0) {
        console.log("Usuário Existe");
        router.push('/oficinas');
      } else {
        alert("Usuário não encontrado");
      }
    } catch (error) {
      console.error('Erro ao realizar o login:', error);
    }
  };

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
      <form>
        {/* <form onSubmit={(e) => 
      {router.push('/painel');
      e.preventDefault();}}> */}
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="CPF" placeholder="Digite sem ponto e traços" required  onChange={(event) => setCpf(event.currentTarget.value)} />
          {/* <TextInput label="CPF" placeholder="Digite sem ponto e traços" required /> */}
          
          <input type="date" style={{border:'1px solid #CED4DA', color:'#ADB5BD', paddingLeft:'8px', borderRadius:'4px', marginTop:'10px', width:'220px', height:'35px'}}></input>
      
          <Group position="center" spacing="xl" mt="lg">
            <Anchor<"a"> c="blue" onClick={(event) => event.preventDefault()} href="/cadastro" size="sm">
              Não encontrou seu CPF? Toque para redefinir
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" style={{background: "#004d2a"}} type="submit" onClick={handleLogin}>
            Verificar
          </Button>
        </Paper>
      </form>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (params) => {
  // const cpf = parseInt(params?.cpf as String);
          const selectedAluno = await prisma.aluno.findMany();


  return {
    props: {data: selectedAluno}, // Coloque os dados que você deseja passar para a página aqui.
  };
};

export default MyComponent;


// interface AlunoProps{
//   data: Aluno;
// }

// export  const getServerSideProps: GetServerSideProps = async () => {
//   const router = useRouter();
//   const [cpf, setCpf] = useState('');


//   const handleLogin = async () => {

//       try {
//         // Verificar se o usuário já existe no banco de dados
//           const aluno = await prisma.aluno.findMany({
//             where: { 
//               cpf: cpf,
//             },
//           });
//           if (aluno) {
//               console.log("Usuário Existe");
//           router.push('/oficinas');
//           } else {
//             alert("Usuário não encontrado");
//           }
//       } catch (error) {
//       console.error('Erro ao realizar o login:', error);
//     }
  
// }
 
//   return (
//     <Container size={420} my={10}>
//        <div style={{ display: 'flex', alignItems: 'center', justifyContent:"center", width:"100%"}}>
//           <Image width={200} height={140} fit="contain"  src="/img/logo.png" alt="logo do inova If"/>
 
        
//         </div>
//       <Title align="center" mt={35} sx={(theme) => ({
//           fontFamily: `Greycliff CF, ${theme.fontFamily}`,
//           fontWeight: 900,
//         })}
//       > Seja bem-vindo!</Title>
//       <Text color="dimmed" size="sm" align="center" mt={7}>
//         Digite seu CPF e verifique sua grade horaria. Atenção! Será mostrando apenas o seis dias posteriores a data escolhida.{" "}
//         <Anchor<"a"> c="blue" href="/cadastro" size="sm" 
//         >Preciso de ajuda</Anchor>
//       </Text>
//       <form>
//         {/* <form onSubmit={(e) => 
//       {router.push('/painel');
//       e.preventDefault();}}> */}
//       <Paper withBorder shadow="md" p={30} mt={30} radius="md">
//         <TextInput label="CPF" placeholder="Digite sem ponto e traços" required value={cpf} />
//         {/* <TextInput label="CPF" placeholder="Digite sem ponto e traços" required /> */}
        
//         <input type="date" style={{border:'1px solid #CED4DA', color:'#ADB5BD', paddingLeft:'8px', borderRadius:'4px', marginTop:'10px', width:'220px', height:'35px'}}></input>
    
//         <Group position="center" spacing="xl" mt="lg">
//           <Anchor<"a"> c="blue" onClick={(event) => event.preventDefault()} href="/cadastro" size="sm">
//             Não encontrou seu CPF? Toque para redefinir
//           </Anchor>
//         </Group>
//         <Button fullWidth mt="xl" style={{background: "#004d2a"}} type="submit" onClick={handleLogin}>
//           Verificar
//         </Button>
//       </Paper>
//       </form>
//     </Container>
// );

  
// };

