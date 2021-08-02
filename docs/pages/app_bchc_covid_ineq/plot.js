// Data URL
const urlDataIneq =
  'https://raw.githubusercontent.com/Drexel-UHC/covid_inequities_project/json-data/JSON/json_ineq_outcomes_pop.json';
let myDataAll = fetchData(urlDataIneq);
let plotState = 0;
let dataState = { outcome: '', adj: '', race: '' };

const inputDropdowns = document.querySelectorAll('.dashboardInputItem');
console.log(inputDropdowns);

// Run function
fetchFilterPlot();

inputChangeHandler = function (e) {
  valueTmp = e.target.value;
  inputIdTmp = e.target.id;
  change = false;
  // Check if input id matches data-state
  if (inputIdTmp === 'inputOutcome' && dataState.outcome != valueTmp) {
    dataState.outcome = valueTmp;
    change = true;
  } else if (inputIdTmp === 'inputAdj' && dataState.adj != valueTmp) {
    dataState.adj = valueTmp;
    change = true;
  } else if (inputIdTmp === 'inputRace' && dataState.race != valueTmp) {
    dataState.race = valueTmp;
    change = true;
  } else {
    change = false;
  }
  // Check there is change in data-state, then replot
  if (change) {
    console.log('STATE CHANGE DETECTED, TRIGGER');
    console.log(dataState);
    fetchFilterPlot();
  }
};

// Add event listeners
inputDropdowns.forEach((item) => {
  item.addEventListener('click', inputChangeHandler);
});
