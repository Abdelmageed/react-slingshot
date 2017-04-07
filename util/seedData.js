import mongoose from 'mongoose';

import config from '../configs/main';

if(!mongoose.connection._hasOpened) {
  mongoose.connect(config.DATA_URL);
  console.log('connected to db at seeding script');
}
const User = mongoose.model('User');

export function seed(done) {
  let user = new User({
    local: {
      username: "Abdelmageed",
      password: "password123"
    }
  });
  user.save((err, savedUser)=> {
    if (err) throw err;
    done();
  });
}

export function reset(done) {

  User.remove({}, (err)=> {
    if (err) throw err;
    done();
  });
  }