async function carregarDashboard() {
  const res = await fetch("/dashboard/mensal");
  const dados = await res.json();

  document.getElementById("totalHoje").innerText = "R$ " + dados.totalHoje;
  document.getElementById("lucroHoje").innerText = "R$ " + dados.lucroHoje;
  document.getElementById("crescimento").innerText = dados.percentual + "%";

  const ctx = document.getElementById('graficoMensal');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: dados.dias,
      datasets: [{
        label: 'Vendas do Mês',
        data: dados.valores
      }]
    }
  });
}

carregarDashboard();