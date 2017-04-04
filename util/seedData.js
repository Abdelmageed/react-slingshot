import mongoose from 'mongoose';

import config from '../config';
//import User from '../src/server/models/User';

mongoose.connect(config.DATA_URL);
console.log('connected to db at seeding script');

export function seed() {
  const User = mongoose.model('User');
  let user = new User({
    local: {
      username: "Abdelmageed",
      password: "password123"
    }
  });
  user.save((err, savedUser)=> {
    if (err) throw err;
    console.log(`user ${savedUser} saved`);
  });
}

export function reset() {
  User.remove({});
  delete mongoose.models.User;
  delete mongoose.modelSchema.User:
  mongoose.disconnect(()=> {
    console.log('db reset and connection closed');
  });
}