function checaIdade(idade) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        return idade >= 18 ? resolve() : reject();
      }, 2000);
    });
  }