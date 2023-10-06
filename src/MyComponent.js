import {
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Grid,
  Box,
  AppBar,
  IconButton,
  Toolbar,
  Avatar,
  Breadcrumbs, Link,
} from "@mui/material";
import "./App.css";

export default function MyParentComponent() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <MyThirdComponent />
        <MyFourthComponent/>
      </Grid>
      <Grid container spacing={2} style={{marginLeft:'12%'}}>
        <Grid item xs={12}>
        <MySecondComponent />
        <MySecondComponent />
        <MySecondComponent />
        <MySecondComponent />
        </Grid>
      </Grid>
    </Grid>
  );
}

function MySecondComponent() {
  return (
        <Card sx={{ maxWidth: 345, display: "inline-block", margin: ".5rem" }}>
      <CardMedia sx={{ height: 140 }} image="/tiki.jpg" title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
function MyThirdComponent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Avatar src="./logo192.png"/>   
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Arvin Santillan
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Profile</Button>
          <Button color="inherit">Message</Button>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
function MyFourthComponent() {
  return (
    <Breadcrumbs aria-label="breadcrumb" style={{  marginTop: '30px', marginLeft: '240px', marginBottom: '10px'}}>
      <Link underline="hover" color="inherit" href="/">
        HOME
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href="/material-ui/getting-started/installation/"
      >
        Graphics
      </Link>
      <Typography color="text.primary">Lizards</Typography>
    </Breadcrumbs>
  );
}

export { MySecondComponent, MyThirdComponent, MyFourthComponent };
