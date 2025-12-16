// Suave ao clicar nos links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Form → WhatsApp
  document.getElementById('form-contato').addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = this.nome.value;
    const telefone = this.telefone.value;
    const mensagem = this.mensagem.value || 'Quero um orçamento';
    const texto = `Olá, sou ${nome}. Meu telefone é ${telefone}. ${mensagem}`;
    window.open(`https://wa.me/5533999571994?text=${encodeURIComponent(texto)}`, '_blank');
  });