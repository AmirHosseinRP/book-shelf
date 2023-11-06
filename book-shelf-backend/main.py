from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database
SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class Book(Base):
    __tablename__ = "books"

    id = Column(Integer, primary_key=True, index=True)
    owner_name = Column(String)
    name = Column(String)
    author = Column(String)
    link = Column(String)

class BookIn(BaseModel):
    owner_name: str
    name: str
    author: str
    link: str

Base.metadata.create_all(bind=engine)

# API Endpoints
@app.get("/books/{username}")
async def get_books(username: str):
    db = SessionLocal()
    books = db.query(Book).filter(Book.owner_name == username).all()
    return books

@app.post("/books")
async def add_book(book: BookIn):
    db = SessionLocal()
    db_book = Book(**book.dict())
    db.add(db_book)
    db.commit()
    db.refresh(db_book)
    return {"message": "Book added successfully"}

@app.delete("/books/{owner_name}/{book_name}")
async def delete_book(owner_name: str, book_name: str):
    db = SessionLocal()
    book = db.query(Book).filter(Book.owner_name == owner_name, Book.name == book_name).first()
    if book:
        db.delete(book)
        db.commit()
        return {"message": "Book deleted successfully"}
    raise HTTPException(status_code=404, detail="Book not found")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=8000)
