import getPosts, { singlePost } from '@/functions/post/actions'
import { expect, test } from 'vitest'

test('Get Single Post',async () => {
    
    const data = {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      };
  expect(await singlePost(1)).toBe(data);
})