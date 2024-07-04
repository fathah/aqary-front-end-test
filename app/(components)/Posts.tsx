import NavBar from "@/components/common/Nav";
import getPosts from "@/functions/post/actions";
import { substring } from "@/functions/utils/string";
import PostType from "@/types/post";
import { Button, Card } from "@mui/material";

export default  function Posts({posts}:{posts:PostType[]}){
  return <main className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  gap-6 py-6">
          {posts.map((post)=>{
            return <Card key={post.id} className="rounded-xl hover:scale-[1.01] duration-300">
              <div className="bg-gray-600 h-40 w-full"
              style={{
                backgroundImage: "url(placeholder.png)",
                backgroundSize: 'cover',
                backgroundPosition:"center"

              }}
              ></div>
             <section className="p-5 ">
            
             <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-gray-500 text-sm py-1">
                {substring(post.body, 80)}
              </p>
             
              
              <Button variant="contained" href={`/${post.id}`}>Read More</Button>
             </section>

            </Card>})
          }
    
      

   
  </main>
}