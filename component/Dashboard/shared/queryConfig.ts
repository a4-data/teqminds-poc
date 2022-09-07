const YEAR_FILTER_CLUSTER_NAME = "Cfo Dashboard Financial Year";
const REGION_FILTER_CLUSTER_NAME = "Cfo Dashboard Financial Region";
const SEGMENT_FILTER_CLUSTER_NAME = "Cfo Dashboard Financial Segment";
const FINANCIAL_SUMMARY = "financial summary";
const FINANCIAL_DETAILS = "Cfo Financial Details";
export const FINANCIAL_YEAR = "financial year";
export const FINANCIAL_MONTH = "financial month";
export const FINANCIAL_SEGMENT = "segment";
export const FINANCIAL_REGION = "region";
export const NO_DATA_AVAILABLE = "-";

export const filters = {
  year: {
    nlpQUery: `list of ${YEAR_FILTER_CLUSTER_NAME}`,
    fields: ["Cfo Financial Year Id", "Cfo Financial Year"],
  },
  region: {
    nlpQUery: `list of ${REGION_FILTER_CLUSTER_NAME}`,
    fields: ["Cfo Financial Region Id", "Cfo Financial Region"],
  },
  segment: {
    nlpQUery: `list of ${SEGMENT_FILTER_CLUSTER_NAME}`,
    fields: ["Financial Segment Id", "Financial Segment"],
  },
};

export const infoCard = [
  {
    nlpQuery: `sum of net sales of :year :region :segment ${FINANCIAL_SUMMARY} by financial year`,
    field: "SUM(Net Sales)",
    title: "Net Sales",
    formatNumber: true,
    decimalPlaces: 0,
    notation: "million",
    currency: "$",
    value: "2,3983M",
  },
  {
    nlpQuery: `sum of gross margin of :year :region :segment ${FINANCIAL_SUMMARY} by financial year`,
    field: "SUM(Gross Margin)",
    title: "Gross Margin",
    formatNumber: true,
    decimalPlaces: 0,
    notation: "million",
    currency: "$",
    value: "1,746M",
  },
  {
    nlpQuery: `sum of ebitda of :year :region :segment ${FINANCIAL_SUMMARY} by financial year`,
    field: "SUM(Ebitda)",
    title: "EBITDA",
    formatNumber: true,
    decimalPlaces: 0,
    notation: "million",
    currency: "$",
    value: "623M",
  },
  {
    nlpQuery: `sum of operating margin of :year :region :segment ${FINANCIAL_SUMMARY} by financial year`,
    field: "SUM(Operating Margin)",
    title: "Operating Margin",
    formatNumber: true,
    decimalPlaces: 0,
    notation: "million",
    currency: "$",
    value: "522M",
  },
  {
    nlpQuery: `sum of net operating cash flow of :year :region :segment ${FINANCIAL_SUMMARY} by financial year`,
    field: "SUM(Net Operating Cash Flow)",
    title: "Net Operating Cash Flow",
    formatNumber: true,
    decimalPlaces: 0,
    notation: "million",
    currency: "$",
    value: "1,458M",
  },
  {
    nlpQuery: `sum of net financing cash flow of :year :region :segment ${FINANCIAL_SUMMARY} by financial year`,
    field: "SUM(Net Financing Cash Flow)",
    title: "Net Financing Cash Flow",
    formatNumber: true,
    decimalPlaces: 0,
    notation: "million",
    currency: "$",
    value: "1,216M",
  },
  {
    nlpQuery: `sum of net investing cash flow of :year :region :segment ${FINANCIAL_SUMMARY} by financial year`,
    field: "SUM(Net Investing Cash Flow)",
    title: "Net Investing Cash Flow",
    formatNumber: true,
    decimalPlaces: 0,
    notation: "million",
    currency: "$",
    value: "260M",
  },
  {
    nlpQuery: `sum of cash at end of month flow of :year :region :segment ${FINANCIAL_SUMMARY} by financial year`,
    field: "SUM(Cash At End Of Month)",
    title: "Cash At End of Month",
    formatNumber: true,
    decimalPlaces: 0,
    notation: "million",
    currency: "$",
    value: "365M",
  },
  {
    nlpQuery: `sum of current ratio of :year :region :segment ${FINANCIAL_SUMMARY} by financial year`,
    field: "SUM(Current Ratio)",
    title: "Current Ratio",
    formatNumber: false,
    decimalPlaces: 0,
    notation: "million",
    currency: "$",
    value: "1.6",
  },
  {
    nlpQuery: `sum of quick ratio of :year :region :segment ${FINANCIAL_SUMMARY} by financial year`,
    field: "SUM(Quick Ratio)",
    title: "Quick Ratio",
    formatNumber: false,
    decimalPlaces: 0,
    notation: "million",
    currency: "$",
    value: "0.3",
  },
  {
    nlpQuery: `sum of debt equity ratio of :year :region :segment ${FINANCIAL_SUMMARY} by financial year`,
    field: "SUM(Debt Equity Ratio)",
    title: "Debt Equity Ratio",
    formatNumber: false,
    decimalPlaces: 0,
    notation: "million",
    currency: "$",
    value: "48%",
  },
];

export const barGraph = [
  {
    fields: [
      "Net Sales",
      "Cost Of Sales",
      "Gross Margin Percentage",
      "Sg And A",
      "Other Expenses",
      "Ebitda",
      "Other Income",
      "Operating Margin Percentage",
    ],
    operation: "sum",
    title: "Income Statement",
    cluster: FINANCIAL_SUMMARY,
    data: {
      labels: ["M", "T", "W", "T", "F", "S", "S"],
      datasets: [
        {
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          borderWidth: 1,
        },
      ],
    },
  },
];

export const lineChart = [
  {
    field: "Current Ratio",
    operation: "avg",
    title: "Current Ratio",
    cluster: FINANCIAL_DETAILS,
    data: {
      labels: ["January", "February", "March", "April", "May", "Jun"],
      datasets: [
        {
          label: "My First Dataset",
          data: [65, 59, 80, 81, 56, 55],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    },
  },
  {
    field: "Quick ratio",
    operation: "avg",
    title: "Quick ratio",
    cluster: FINANCIAL_DETAILS,
    data: {
      labels: ["January", "February", "March", "April", "May", "Jun"],
      datasets: [
        {
          label: "My First Dataset",
          data: [65, 59, 80, 81, 56, 55],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    },
  },
  {
    field: "Debt Equity Ratio",
    operation: "avg",
    title: "Debt Equity Ratio",
    cluster: FINANCIAL_DETAILS,
    data: {
      labels: ["January", "February", "March", "April", "May", "Jun"],
      datasets: [
        {
          label: "My First Dataset",
          data: [65, 59, 80, 81, 56, 55],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    },
  },
];

export const balanceSheet = [
  {
    tableData: [
      { label: "Fixed Assets", value: "3.227M", isBold: false },
      { label: "Other Assets", value: "3.227M", isBold: false },
      { label: "Current Assets", value: "3.227M", isBold: false },
      { label: "Total Assets", value: "3.227M", isBold: true },
      { label: "Current Liabilities", value: "1.4177M", isBold: false },
      { label: "Long Term Liabilities", value: "4.7517M", isBold: false },
      { label: "Equity", value: "426M", isBold: false }
    ],
    operation: "sum",
    title: "Balance Sheet",
    cluster: FINANCIAL_SUMMARY,
  },
];

export const curveChart = [
  {
    queryField: "Gross Margin Percentage",
    dataFields: ["Financial Year", "AVG(Gross Margin Percentage(%))"],
    operation: "avg",
    title: "Gross Margin Percentage",
    cluster: FINANCIAL_SUMMARY,
    data: [60, 30, 10]
  },
  {
    queryField: "Ebitda Percentage",
    dataFields: ["Financial Year", "AVG(Ebitda Percentage)"],
    operation: "avg",
    title: "EBITDA Percentage",
    cluster: FINANCIAL_SUMMARY,
    data: [60, 20, 20]
  },
  {
    queryField: "Operating Margin Percentage",
    dataFields: ["Financial Year", "AVG(Operating Margin Percentage)"],
    operation: "avg",
    title: "Operating Margin Percentage",
    cluster: FINANCIAL_SUMMARY,
    data: [40, 30, 30]
  },
];
