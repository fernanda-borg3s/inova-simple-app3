// import { NextApiRequest, NextApiResponse } from 'next';
// import { PrismaClient } from '@prisma/client';
// import { prisma } from '../../lib/prisma';



// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === 'POST') {
//     const { cpf } = req.body;

//     try {
//       // Verificar se o usuário já está cadastrado pelo email
//       const existingUser = await prisma.aluno.findUnique({ 
//         where: { cpf } 
//     });
//       if (existingUser) {
//         return res.status(409).json({ error: 'Email already registered' });
//       }
//     } catch (error) {
//       return res.status(500).json({ error: 'Something went wrong' });
//     }
//   }

//   return res.status(404).json({ error: 'Not found' });
// }
