import getPosts from "@/functions/post/actions";
import Posts from "./(components)/Posts";

export default async function HomePage() {
  const posts = await getPosts();
  return (
    <main>
      <section className="commonWidth">
        {!posts ? <div>Failed to Fetch</div> : <Posts posts={posts} />}
      </section>
    </main>
  );
}
