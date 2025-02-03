"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { ThemeProvider } from "@/components/theme-provider";

export const Providers = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session?: Session | null;
}) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
};