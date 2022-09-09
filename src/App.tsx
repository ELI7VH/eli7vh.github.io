import { Box, Button, Grid, Heading, Tag, Text } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import { Tweet } from "./components/Tweet";

export const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleClick = () => {
    console.log("Loggin In!");
    setLoggedIn(loggedIn ? false : true);
  };

  return (
    <Grid gridTemplateRows="1fr 2fr" height="100vh">
      <Box
        bgColor="gray.700"
        color="white"
        display="flex"
        flexDir="row"
        justifyContent="space-between"
        alignItems="end"
        padding="1rem"
      >
        <Heading>This is my website</Heading>
        <Text>Click this button to Log {loggedIn ? "out" : "in"}!</Text>
        <Button color="gray.700" onClick={handleClick}>
          ----Log {loggedIn ? "Out" : "In"}!
        </Button>
        <Tag transition="0.5s all" bgColor={loggedIn ? "green.200" : "red.200"}>
          Logged in
        </Tag>
      </Box>
      <Box padding="1rem">
        <Heading>Home Page</Heading>
        <Tweet>some text</Tweet>
        <Tweet>news article</Tweet>
        <Tweet>some artwork</Tweet>
        <Tweet>
          <Box>
            <Heading>Cool Tweet</Heading>
            <Button>Click Me!</Button>
          </Box>
        </Tweet>
        <Tweet>I am the best developer</Tweet>
      </Box>
    </Grid>
  );
};

export default App;
