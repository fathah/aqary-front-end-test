"use client";

import { Button, TextField } from "@mui/material";

// Client Component for Adding New Comment

export default function CommentForm() {
  return (
    <form className="p-4 border rounded-xl mb-3 bg-gray-50">
      <div className="mb-4 flex justify-between gap-x-6">
        <TextField
          id="outlined-basic"
          label="Name"
          className="w-full"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Email"
          className="w-full"
          variant="outlined"
        />
      </div>

      <div className="mb-2">
        <TextField
          id="outlined-basic"
          label="Your Comment"
          className="w-full"
          variant="outlined"
        />
      </div>
      <Button variant="contained" className="mt-3">
        Submit
      </Button>
    </form>
  );
}
