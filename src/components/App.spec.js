import App from './App';
describe("A suite is just a function", ()=> {
  let a;

  it("and so is a spec", ()=> {
    a = true;
    //change
    expect(a).toBe(true);
  });
  
  it("passes", ()=> {
    expect(true).toBe(true);
  })
});