import { connectDB } from '@/util/database';

// GET 메서드 처리
export async function GET(request) {
  const db = (await connectDB).db('forum');
  const result = await db.collection('education').find().toArray();
  return Response.json({ result });
}
