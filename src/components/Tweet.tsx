import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Tweet = (props: Props) => {
  console.log("tweet props", props);

  return (
    <Box background="gray.200" margin="1rem" padding="1rem" borderRadius="1rem">
      {props.children}
    </Box>
  );
};
