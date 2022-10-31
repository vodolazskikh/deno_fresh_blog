import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

import { Post } from "@/types/posts.ts";

import { PostCard } from "@/components/postCard.tsx";
import { getPosts } from "@/utils/posts.ts";

export const handler: Handlers<Post[]> = {
    async GET(_req, ctx) {
      const posts = await getPosts();
      return ctx.render(posts);
    },
  };

export default function BlogIndexPage(props: PageProps<Post[]>) {
    const posts = props.data;
    return (
        <>
        <Head>
        <meta>
        <title>Мой осом блог на deno</title>
        </meta>
      </Head>
      <main class="max-w-screen-md px-4 pt-16 mx-auto">
        <h1 class="text-5xl font-bold">Blog</h1>
        <div class="mt-8">
          {posts.map((post) => <PostCard post={post} />)}
        </div>
      </main></>
    );
  }