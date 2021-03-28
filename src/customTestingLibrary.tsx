import React, { ReactNode } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { SWRConfig } from "swr";

// https://testing-library.com/docs/react-testing-library/setup#custom-render
const AllTheProviders = (props: { children: ReactNode }) => {
  return (
    <SWRConfig value={{ dedupingInterval: 0 }}>
        {props.children}
    </SWRConfig>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: RenderOptions
  // @ts-ignore
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
