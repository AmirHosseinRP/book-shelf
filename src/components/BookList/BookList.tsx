"use client";

import { Book } from "@/shared/dto/books.dto";
import { deleteData, getById, postData } from "@/shared/services/books";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, IconButton, Modal, TextField, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Link from "next/link";
import { useState } from "react";
import useSWR, { mutate } from "swr";

type Books = Book[];
type Props = {
  username: string;
};

function createData(name: string, author: string, link: string) {
  return { name, author, link };
}

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookList = (props: Props) => {
  const { data, error } = useSWR<Books>(`http://localhost:8000/books/${props.username}`, getById);
  const rows = data?.map(item => createData(item.name, item.author, item.link));
  const [openModal, setOpenModal] = useState(false);
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookLink, setBookLink] = useState("");
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const handleDelete = async (bookName: string) => {
    try {
      await deleteData(`http://localhost:8000/books/${props.username}/${bookName}`);
      await mutate(`http://localhost:8000/books/${props.username}`);
    } catch (error) {
      return <div>Failed to load</div>;
    }
  };

  const handleAdd = async () => {
    try {
      if (bookName !== "" && bookAuthor !== "" && bookLink !== "") {
        await postData("http://localhost:8000/books", {
          owner_name: props.username,
          name: bookName,
          author: bookAuthor,
          link: bookLink,
        });
        await mutate(`http://localhost:8000/books/${props.username}`);
        handleClose();
      }
    } catch (error) {
      return <div>Failed to load</div>;
    }
  };

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <>
      <div className="absolute top-0 w-screen h-screen bg-gradient-to-r from-white to-[#c0c7ff]" />
      <div className="w-full z-10 relative top-10">
        <Button variant="outlined" color="success" onClick={handleOpen} className="!mb-3">
          Add a new Book
        </Button>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Author</TableCell>
                <TableCell align="left">Link</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows &&
                rows.map((row, index) => (
                  <>
                    <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                      <TableCell component="th" scope="row">
                        {index + 1}
                      </TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row.author}</TableCell>
                      <TableCell align="left">
                        <Link href={row.link} target="_blank">
                          <Button className="!text-left">Go to {row.name} in GoodReads</Button>
                        </Link>
                      </TableCell>
                      <TableCell align="right">
                        <IconButton color="error" onClick={() => handleDelete(row.name)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  </>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" className="!mb-3">
              Add a new Book:
            </Typography>
            <TextField
              className="!mb-5"
              fullWidth
              id="book-name"
              label="Book Name"
              variant="outlined"
              onChange={e => setBookName(e.target.value)}
              size="small"
            />
            <TextField
              className="!mb-5"
              fullWidth
              id="book-author"
              label="Book Author"
              variant="outlined"
              onChange={e => setBookAuthor(e.target.value)}
              size="small"
            />
            <TextField
              className="!mb-5"
              fullWidth
              id="link"
              label="Goodreads Link"
              variant="outlined"
              onChange={e => setBookLink(e.target.value)}
              size="small"
            />
            <Button variant="outlined" color="success" onClick={handleAdd}>
              Add a new Book
            </Button>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default BookList;
