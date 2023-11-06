import BookList from "@/components/BookList/BookList";

type Props = { params: { slug: string } };

export default function UserBookShelf({ params }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BookList username={params.slug} />
    </main>
  );
}
