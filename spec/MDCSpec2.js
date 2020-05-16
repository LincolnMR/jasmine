
describe("MDC", function() {

    it ("Se o teste MDC estiver correto, a página ficara verde, caso contrário ficará vermelho", function(){
  
      var resultEsp = 3;
      var result = mdcRecursive(10,5);
      
      expect(resultEsp).toEqual (result);
    });
  
  });