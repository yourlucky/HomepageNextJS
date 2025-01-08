import { connectDB } from '@/util/database';

export async function POST(request) {
  try {

    //pplication/x-www-form-urlencoded
    const bodyText = await request.text();
    const params = new URLSearchParams(bodyText);
    const body = Object.fromEntries(params.entries());

    const db = (await connectDB).db('forum');
    const result = await db.collection('contact').insertOne(body);


    return new Response(null, {
        status: 302,
        headers: { Location: '/contactList' },
      });
    } catch (error) {
      console.error('Error saving contact data:', error);
  
      return new Response(
        JSON.stringify({ error: 'Failed to save contact data.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  }