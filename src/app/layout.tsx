"use client";
import {
  GlobalContextProvider,
  useGlobalContext,
} from "@context/globalContext";

import { QueryClient, QueryClientProvider } from "react-query";

import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";

import { Header } from "@components/organism";
import { classNames } from "@utils/index";

import "@style/index.css";
import "./i18n";

import Head from "next/head";

const queryClient = new QueryClient();

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const { settingOpen } = useGlobalContext();

  const isMobile =
    typeof window !== "undefined" && /Android/i.test(navigator.userAgent);

    //push jenkins
  return (
    <html>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Create your own League of Legend build for the champion of your choice. And visualize its effects in real time, thanks to a host of statistics."
        />
        <title>Build-lol.com</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <GlobalContextProvider>
          <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
            <body
              className={classNames(settingOpen && "overflow-hidden h-screen")}
            >
              <Header />
              <main
                className="relative flex z-10"
                style={{ height: "calc(100vh - 56px)" }}
              >
                {children}
              </main>
            </body>
          </DndProvider>
        </GlobalContextProvider>
      </QueryClientProvider>
    </html>
  );
}
