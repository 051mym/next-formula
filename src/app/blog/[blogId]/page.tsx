export default function BlogDetail({ params }: { params: { blogId: string } }) {
  return (
    <main>
      <h1>Blog Detail {params.blogId}</h1>
    </main>
  );
}
