import request from 'supertest';
import express from 'express';
import config from '../../../config';
import mongoose from 'mongoose';
const User = mongoose.model('User');

const testDone = (done)=> {
  return (err, res)=> {
    if(err) {
      done.fail(err);
    } else {
      done();
    }
  };
};

describe('user router', ()=> {
  
  describe('POST /login', ()=> {
    
    it('should respond with 200 and user object on providing valid credentials', (done) => {
      const successMessage = "logged in successfuly";
      agent
        .post('/api/login')
        .send('username=Abdelmageed&password=password123')
        .expect(200)
        .expect((res)=> {
          expect(res.body.user.username).toBe('Abdelmageed');
      })
        .end(testDone(done));
    });
    
    it('should respond with 401 on invalid credentials', (done) => {
      const unauthorized = "Unauthorized"
      agent
        .post('/api/login')
        .send('username=Abdelmageed&password=password1234')
        .expect(401, unauthorized)
        .end(testDone(done))

      agent
        .post('/api/login')
        .send('username=Abdelmageedz&password=password1234')
        .expect(401, unauthorized)
        .end(testDone(done));

    });
  });
  
  describe('POST /signup', () => {
    
    it('should sign up a user locally by username and password', (done)=> {
      agent
        .post('/api/signup')
        .send('username=NewUser&password=NewPassword123')
        .expect(200)
        .expect((res)=> {
          expect(res.body.user.username).toBe('NewUser');
        })
        .end(testDone(done));
    });
    
  });
});