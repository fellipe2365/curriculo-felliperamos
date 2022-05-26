var el = document.querySelector("#animacao");
var text = "Olá, me chamo Fellipe Ramos e acredito que esta empresa é um lugar onde os profissionais são valorizados e têm oportunidades de mostrar seu potencial e talentos. Eu quero ter esta chance e colaborar com minhas experiências, habilidades, conhecimentos e dedicação para que a organização continue crescendo e obtendo sempre grandes resultados. Minha intenção é crescer junto e também ter sucesso em minha carreira fazendo parte desta equipe."
var interval = 90;
function showtext(el, text, interval) {
  var char = text.split("").reverse();
  
  var typer = setInterval(function() {
  
    if (!char.length) {
        return clearInterval(typer)
    }
    
    var next = char.pop();
    
    el.innerHTML += next;
    
  }, interval);
  
}
showtext(el, text, interval);