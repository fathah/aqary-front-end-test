"use server";

import CommentType from "@/types/comment";

export default async function getPostComments(
  postId: number
): Promise<CommentType[] | null> {
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
  try {
    const resp = await fetch(url).then((resp) => resp.json());

    return resp;
  } catch (error) {
    return null;
  }
}
