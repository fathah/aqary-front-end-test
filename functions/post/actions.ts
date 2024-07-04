"use server";

import PostType from "@/types/post";

export default async function getPosts(): Promise<PostType[] | null> {
  const url = "https://jsonplaceholder.typicode.com/posts";
  try {
    const resp = await fetch(url).then((resp) => resp.json());

    return resp;
  } catch (error) {
    return null;
  }
}

export async function singlePost(id: number): Promise<PostType | null> {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  try {
    const resp = await fetch(url).then((resp) => resp.json());

    return resp;
  } catch (error) {
    return null;
  }
}
