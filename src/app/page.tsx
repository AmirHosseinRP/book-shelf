import Login from "@/components/Login/Login";
import { AppBar, Box, Button, Card, CardContent, CardMedia, Container, Toolbar, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#283593" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "white" }}>
            BookShelf
          </Typography>
          <Button color="inherit" href="#login">
            Login
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h2" component="h1">
            Welcome to BookShelf!
          </Typography>
          <Typography variant="subtitle1">Organize and track your book collection digitally.</Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            About BookShelf
          </Typography>
          <Typography variant="body1">
            BookShelf allows you to catalog your digital book collection in one place. Add books by name, author and
            Goodreads link. Take your library anywhere with BookShelfs beautiful, responsive interface.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }} display="flex">
          <Card sx={{ mr: 2, width: "50%" }}>
            <CardMedia
              component="img"
              image="https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/UUID-cl90h6k0c1719819tqygo19n0tf/public"
              sx={{ height: 320, objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Track Your Collection
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Add books easily and view your full library in one place.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ width: "50%" }}>
            <CardMedia
              component="img"
              image="https://cdn.hswstatic.com/gif/libraries-ebooks-orig.jpg"
              sx={{ height: 320, objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Organize with Shelves
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Create custom shelves to organize your library your way.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom>
            Built with Modern Technologies
          </Typography>

          <Card sx={{ mb: 2 }}>
            <CardMedia
              image="https://miro.medium.com/v2/resize:fit:1400/0*8SHzP9vjOB9Lztzi.png"
              title="Next.js logo"
              sx={{ height: 100, objectFit: "contain" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Next.js
              </Typography>
              <Typography variant="body2">
                Next.js provides server-side rendering and routing for super fast page loads.
              </Typography>
            </CardContent>
          </Card>

          <Card>
            <CardMedia
              image="https://www.q3tech.com/wp-content/uploads/2022/01/FastAPI-banner-image-mobile.png"
              title="FastAPI logo"
              sx={{ height: 100, objectFit: "contain" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                FastAPI
              </Typography>
              <Typography variant="body2">
                FastAPI is a modern Python framework for building APIs and backend services.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <div
          className="mb-5 w-full h-96 bg-gradient-to-r from-purple-400 to-black rounded-md flex flex-row items-center justify-between p-44"
          id="login"
        >
          <p className="text-white font-bold text-4xl text-center max-w-[400px]">
            No need to register just choose a username and enjoy!
          </p>
          <div className="max-w-xs bg-white p-10 shadow-xl rounded-2xl">
            <Box>
              <Login />
            </Box>
          </div>
        </div>
      </Container>

      <AppBar
        position="static"
        color="default"
        sx={{ backgroundColor: "#f5f5f5", display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Toolbar>
          <Typography variant="body2">&copy; {new Date().getFullYear()} Amirhossein Rezapanh</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
