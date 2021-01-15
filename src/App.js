import { Grid } from "@material-ui/core";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item container xs={0} sm={12}>
        <Grid item xs={2}></Grid>
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={0} sm={2}></Grid>
      </Grid>
    </Grid>
  );
}

export default App;
