function contar(){
 
 let ini = document.getElementById('txti');
 let fim = document.getElementById('txtf');
 let pass = document.getElementById('txtp');
 let res = document.getElementById('res');

 if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
  res.innerHTML = 'Impossivel contar'
   window.alert('[Erro] Faltam dados');
 }else{
  res.innerHTML = 'contando:.... '
  let i = Number(ini.value)
  let f = Number(fim.value)
  let p = Number(pass.value)
    if(p <= 0){
      window.alert('PASSO invalido!! considerando PASSO 1')
      p = 1
    }
    if(i < f){
      //contagem crecente
      for(let c = i;c <= f; c += p){
        res.innerHTML += `${c} \u{1F449}` 
    
      }
      
    }else{
      //contagem decrecente
      for(let c = i; c >= f; c -= p){
        res.innerHTML += `${c}` 
      }
    }
 
    res.innerHTML+= `\u{1F3C1}`

 }




}