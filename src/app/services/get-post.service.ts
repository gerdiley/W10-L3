import { Post } from "../models/post.interface";

export async function getPost():Promise<Post[]>{
  return await (await fetch('../assets/data/db.json')).json();
}

// export async function updatePost(data: Partial<Post>, id: number){
//   return  fetch('../assets/data/db.json', {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   })
// }


