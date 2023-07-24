import { Oficina } from "@prisma/client";
import { PrismaClient } from '@prisma/client';
import type { GetStaticPaths, GetStaticProps, GetServerSideProps } from 'next';
import React from "react";
import { prisma } from "../../lib/prisma";

interface OficinaProps{
    data: Oficina;
}
export default function PageOficina({data}: OficinaProps){
    return(
        <div>
            <p>id: {data.id}</p>
            <p>id: {data.titulo}</p>
            <p>id: {data.professor}</p>
            <p>id: {data.sala}</p>
           
        </div>
    )
}

export const getStaticProps: GetStaticProps = async ({params}) =>{
    const id = parseInt(params?.id as string);
    const selectedOficina = await prisma.oficina.findUnique({
        where:{
            id: id,
        },
    });

    return{
        props: {data: selectedOficina},
    }
}

export const getStaticPaths: GetStaticPaths = async () =>{
    const oficinas = await prisma.oficina.findMany();
    const paths = oficinas.map((oficina) => ({
        params: {id: oficina.id.toString()},
    }));
    return {paths, fallback: false};
}