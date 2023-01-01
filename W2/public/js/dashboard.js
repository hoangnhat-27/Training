const ctx = document.getElementById("chart");

new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["TV", "Washer", "Retrigerator", "Selling Fan"],
    datasets: [
      {
        label: "Device",
        data: [50, 60, 80, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(255,140,0)",
          "rgb(255, 205, 86)",
          "rgb(64,224,208)",
        ],
        hoverOffset: 4,
      },
    ],
  },
});
