import { connectDB } from '@/util/database.js';
import ListItem from './ListItem';

export default async function ContactList() {
  const db = (await connectDB).db('forum');
  let result = await db.collection('contact').find().toArray();

  // ObjectId를 문자열로 변환
  result = result.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));

  return (
    <div className='list-bg'>
      <ListItem result={result} />
    </div>
  );
}
