// Toggle entre Modo Claro e Escuro
document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

// Gráficos usando Chart.js
const ctxProductivity = document.getElementById('productivityChart').getContext('2d');
const ctxStress = document.getElementById('stressChart').getContext('2d');

const productivityChart = new Chart(ctxProductivity, {
  type: 'line',
  data: {
      labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
      datasets: [{
          label: 'Produtividade (%)',
          data: [85, 90, 80, 75, 85, 70, 60],
          backgroundColor: 'rgba(37, 99, 235, 0.2)',
          borderColor: 'rgba(37, 99, 235, 1)',
          borderWidth: 2
      }]
  }
});

const stressChart = new Chart(ctxStress, {
  type: 'bar',
  data: {
      labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
      datasets: [{
          label: 'Nível de Estresse',
          data: [40, 60, 55, 50, 45, 60, 30],
          backgroundColor: 'rgba(239, 68, 68, 0.8)',
      }]
  }
});
