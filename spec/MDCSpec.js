describe("MDC", function() {

  it ("TESTE1", function(){

    var resultEsp = 5;
    var result = mdcRecursive(10,5);
    
    expect(resultEsp).toEqual (result);
  });

  it ("TESTE2", function(){

    var resultEsp = 5;
    var result = mdcRecursive(20,14);
    
    expect(resultEsp).toEqual (result);
  });

  it ("TESTE3", function(){

    var resultEsp = 3;
    var result = mdcRecursive(13,5);
    
    expect(resultEsp).toEqual (result);
  });

  it ("TESTE4", function(){

    var resultEsp = 2;
    var result = mdcRecursive(20,14);
    
    expect(resultEsp).toEqual (result);
  });

});

