import CommentType from "@/types/comment";
import { Card } from "@mui/material";

export default function CommentsWidget({
  comments,
}: {
  comments: CommentType[] | null;
}) {
  return (
    <section>
      {!comments || comments?.length < 0 ? (
        <div>No Comments Found</div>
      ) : (
        <section className="grid lg:grid-cols-2 gap-6">
          {comments.map((cmnt) => {
            return (
              <Card key={cmnt.id} className="py-2 px-4 my-2">
                <div className="flex items-center gap-x-2">
                  <div className="uppercase h-10 w-10 bg-blue-600 text-white rounded-2xl flex justify-center items-center">
                    {cmnt.name[0]}
                  </div>
                  <div>
                    <h6 className="font-bold">{cmnt.name}</h6>
                    <p className="italic text-gray-600">{cmnt.email}</p>
                  </div>
                </div>
                <p className="py-2">{cmnt.body}</p>
              </Card>
            );
          })}
        </section>
      )}
    </section>
  );
}
