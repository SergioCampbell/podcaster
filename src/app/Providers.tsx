"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from "react";

/**
 * Renders the Providers component.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The children of the component.
 * @return {React.ReactNode} The rendered component.
 */
export function Providers(props: { children: ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
      {<ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}
