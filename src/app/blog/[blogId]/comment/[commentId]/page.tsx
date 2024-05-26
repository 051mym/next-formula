import { notFound } from "next/navigation";

export default function BlogComment({params,} : {params: {
	blogId: string,
	commentId: string,
}}) {

	if (parseInt(params.commentId) > 1000) {
		notFound();
	}

	return (
		<main>
			<h1>Blog {params.blogId} Comment {params.commentId}</h1>
		</main>
	);
}