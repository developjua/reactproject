import { Container, Grid, Typography, Button } from "@mui/material";
import { animated, useScroll } from "@react-spring/web";
import Counter from "../components/Counter";
import RichTextEditor from "../components/RichTextEditor";
import UserDataForm from "../components/UserDataForm";
import UserProfileChart from "../components/UserProfileChart";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { scrollYProgress } = useScroll();
   
   const { logout } = useAuth();

  const logouts = () => {
    console.log("User logged out");

    logout()
   


  };

  return (
    <Container>
     
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 4 }}
      >
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Dashboard
          </Typography>
        </Grid>
        <Grid item space={4}>
          <Button variant="contained" color="secondary" onClick={logouts}>
            Logout

          </Button>
        </Grid>
      </Grid>
      <Counter />

    
      <animated.div
        style={{
          opacity: scrollYProgress.to([0.2, 0.4], [0, 1]), 
          transform: scrollYProgress.to(
            (y) => `translateY(${y * 50}px)` 
          ),
        }}
      >
        <RichTextEditor />
      </animated.div>

     
      <animated.div
        style={{
          opacity: scrollYProgress.to([0.4, 0.6], [0, 1]), 
          transform: scrollYProgress.to(
            (y) => `translateY(${y * 50}px)` 
          ),
        }}
      >
        <UserDataForm />
      </animated.div>

     
      <animated.div
        style={{
          opacity: scrollYProgress.to([0.6, 0.8], [0, 1]),
          transform: scrollYProgress.to(
            (y) => `translateY(${y * 50}px)` 
          ),
          marginTop:20,
        }}
      >
        <UserProfileChart />
      </animated.div>
    </Container>
  );
};

export default Dashboard;

