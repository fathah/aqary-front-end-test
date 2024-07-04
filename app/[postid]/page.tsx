import getPostComments from "@/functions/comments/actions";
import { singlePost } from "@/functions/post/actions";
import CommentForm from "./Form";
import CommentsWidget from "./(components)/Comments";

// Single Post Page
export default async function SinglePost({ params }: { params: any }) {
  // Get the [postid] from the params
  const { postid } = params;

  if (!postid) {
    return <div className="h-[50vh]  fullCenter">Post ID Not Found</div>;
  }
  // If ID is available fetch the POST
  const post = await singlePost(postid);

  if (!post) {
    return <div className="h-[50vh] fullCenter">Post Not Found</div>;
  }

  // Fetch the comments of Post [postid]
  const comments = await getPostComments(postid);
  return (
    <main>
      <section className="commonWidth py-20">
        <h1 className="text-center text-2xl lg:text-4xl font-bold my-2">
          {post?.title}
        </h1>
        <div
          className="w-full h-[40vh] rounded-2xl my-4"
          style={{
            backgroundImage: "url(placeholder.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <p className="text-center">
          {post?.body} {post?.body} {post?.body} {post?.body}
          {post?.body} {post?.body} {post?.body} {post?.body}
          {post?.body} {post?.body} {post?.body} {post?.body}
        </p>

        <div className="my-6">
          <h4 className="text-xl font-bold border-t py-5">Comments</h4>
          <CommentForm />
          <CommentsWidget comments={comments!} />
        </div>
      </section>
    </main>
  );
}
