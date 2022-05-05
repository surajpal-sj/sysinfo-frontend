import clientPromise, { connectToDatabase } from '../../lib/mongodb'


export default async function handler(req, res) {
    const { db } = await connectToDatabase()

    const data = await db.collection("systeminfo").find({}).toArray();

    const info = JSON.parse(JSON.stringify(data));  //to resolve child error

    res.status(200).json({ info })
  }
  