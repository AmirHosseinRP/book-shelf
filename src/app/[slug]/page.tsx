import BookList from "@/components/BookList/BookList";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

type Props = { params: { slug: string } };

export default function UserBookShelf({ params }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="absolute top-0 z-10 w-screen">
        <AppBar position="static" sx={{ backgroundColor: "#283593" }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, color: "white" }}>
              BookShelf
            </Typography>
            <Button color="inherit" href="/">
              Home
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <BookList username={params.slug} />
    </main>
  );
}
