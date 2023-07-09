import mongoose from 'mongoose';

const Connection = async (username = 'AsharOP', password = 'le2315') => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.cwcnaeo.mongodb.net/MERNAUTH?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log('Database connected successfully');
  } catch (error) {
    console.log('Error while connecting with the database ', error);
  }
}

export default Connection;