function pesquisar() {
    const pesquisaInput = document.getElementById('pesquisa-input').value.toLowerCase();
    const resultadosPesquisa = document.getElementById('resultados-pesquisa');
  
    // Limpa os resultados anteriores
    resultadosPesquisa.innerHTML = '';
  
    if (pesquisaInput.trim() !== '') {
      // Filtra os dados com base no nome, descrição e descritores
      const resultados = dados.filter(item => {
        const termoPesquisa = pesquisaInput.toLowerCase();
        return (
          item.nome.toLowerCase().includes(termoPesquisa) ||
          item.descricao.toLowerCase().includes(termoPesquisa) ||
          item.descritores.some(descritor => descritor.toLowerCase().includes(termoPesquisa))
        );
      });
  
      if (resultados.length > 0) {
        resultados.forEach(resultado => {
          const item = document.createElement('div');
          item.classList.add('item-resultado');
          item.innerHTML = `
            <h2>${resultado.nome}</h2>
            <p><strong>Autor(es):</strong> ${resultado.autores.join(', ')}</p>
            <p><strong>Ano de Publicação:</strong> ${resultado.anoPublicacao}</p>
            <p><strong>Descritores:</strong> ${resultado.descritores.join(', ')}</p>
            <p><strong>Referência:</strong> ${resultado.referencia}</p>
            <p><strong>Informações Psicométricas:</strong> ${resultado.informacoesPsicometricas}</p>
            <p><strong>Licença:</strong> ${resultado.licenca}</p>
            <p>${resultado.descricao}</p>
            <a href="${resultado.link}" target="_blank">Ver mais</a>
          `;
          resultadosPesquisa.appendChild(item);
        });
      } else {
        resultadosPesquisa.innerHTML = '<p>Nenhum resultado encontrado.</p>';
      }
  
      // Exibe a caixa de resultados após a pesquisa
      resultadosPesquisa.style.display = 'block';
    } else {
      // Oculta a caixa de resultados se o campo de pesquisa estiver vazio
      resultadosPesquisa.style.display = 'none';
    }
  }
  