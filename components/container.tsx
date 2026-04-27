import { PropsWithChildren } from "react";

export const Container = ({ children }: PropsWithChildren) => {
  return <div className="max-w-5xl my-0 mx-auto">{children}</div>;
};
