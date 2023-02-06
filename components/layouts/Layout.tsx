import { Box } from "@mui/material";
import { Sidebar } from "components/ui";
import { Navbar } from "components/ui";
import Head from "next/head";
import { FC } from "react";

interface Props {
    title?:string;
    children:any;
}

export const Layout :FC<Props>= ({ title='Open-jira',children }:Props) => {
  return (
   <Box sx={{ flexFlow:1 }} >
    <Head>
        <title>{ title }</title>
    </Head>
     <Navbar />
    <Sidebar />
    <Box sx={{ padding:'10px 20px' }} >
        { children }
    </Box>
   </Box>
  )
}
