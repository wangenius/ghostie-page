import { ReactNode } from "react";

const Text = ({ children }: { children: ReactNode }) => {
  return <p className="text-2xl sm:text-base text-center mt-6">{children}</p>;
};

export default Text;
