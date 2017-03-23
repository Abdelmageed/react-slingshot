describe("A suite is just a function", function() {
  var a;

  it("and so is a spec", function() {
    a = true;
    //change
    expect(a).toBe(true);
  });
  
  it("passes", function() {
    expect(true).toBe(true);
  })
});