declare module "@microlink/react" {
  import { FC } from "react";

  interface MicrolinkProps {
    url: string;
    direction?: string;
    className?: string;
  }

  const Microlink: FC<MicrolinkProps>;

  export default Microlink;
}
