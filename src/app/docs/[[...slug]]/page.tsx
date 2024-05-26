export default function DocsSlug({ params }: { params: { slug: string[] } }) {
	if (params.slug?.length === 2) {
		return (
			<h1>Doc for {params.slug[0]}, and concept {params.slug[1]}</h1>
		);
	} else if (params.slug?.length === 1) {
		return (
			<h1>Doc for {params.slug[0]}</h1>
		);
	} else {
		return (
		  <main>
			<h1>Docs page</h1>
		  </main>
		);
	}
}
