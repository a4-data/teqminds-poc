export default {
    barChart : {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: { label: "Sales", data: ['2982583839.76', '1236730267.78', '936.55', '1480080000.05', '112220000.00', '622811669.63', '202720000.02', '151.10'] },
    },
    otCashFlow: {
        labels: ["January","February","March","April","May","Jun"],
        datasets: [
            {
              label: "",
              data: [1.8, 1.5, 1.8, 1.4, 2.0],
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
    },
    fCashFlow: {
        labels: ["January","February","March","April","May","Jun"],
        datasets: [
            {
              label: "",
              data: [0.3, 0.3, 0.2, 0.4],
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
    },
    iCashFlow: {
        labels: ["January","February","March","April","May","Jun"],
        datasets: [
            {
              label: ['30%', "40%", "47%", "55%", "59%"],
              data: [30, 40, 47, 55, 59],
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
    },
    tableData: [
      { label: "Fixed Assets", value: "3.227M", isBold: false },
      { label: "Other Assets", value: "3.227M", isBold: false },
      { label: "Current Assets", value: "3.227M", isBold: false },
      { label: "Total Assets", value: "3.227M", isBold: true },
      { label: "Current Liabilities", value: "1.4177M", isBold: false },
      { label: "Long Term Liabilities", value: "4.7517M", isBold: false },
      { label: "Equity", value: "426M", isBold: false }
    ]
}