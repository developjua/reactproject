import React, { useState } from "react";
import { Button, Container, Box } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import { useAuth } from "../context/AuthContext";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
   const { setHasUnsavedChanges, updateChartData } = useAuth();

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    setHasUnsavedChanges(true);

   updateChartData("counter");
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
    setHasUnsavedChanges(true);

    updateChartData("counter");
  };
   const reset = () => {
     setCount(0);
     setHasUnsavedChanges(false);

   };

  
  const backgroundColorAnimation = useSpring({
    backgroundColor: `rgb(${Math.min(count * 10, 255)}, ${Math.min(
      count * 10,
      255
    )}, ${Math.min(count * 10, 255)})`,
    config: { tension: 200, friction: 20 }, 
  });

  return (
    <animated.div
      style={{
        backgroundColor: backgroundColorAnimation.backgroundColor,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Count: {count}
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <Button variant="contained" color="primary" onClick={increment}>
              Increment
            </Button>
            <Button variant="contained" color="secondary" onClick={decrement}>
              Decrement
            </Button>
            <Button variant="contained" color="error" onClick={reset}>
              Reset
            </Button>
          </Box>
        </Box>
      </Container>
    </animated.div>
  );
};

export default Counter;
