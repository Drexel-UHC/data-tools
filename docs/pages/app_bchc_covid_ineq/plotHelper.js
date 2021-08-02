// Master Function
async function fetchFilterPlot() {
  console.log('start  fetchFilterPlot()');
  // fetchFilterPlot(): Getting Data
  const myDataAllTmp = await myDataAll;
  // fetchFilterPlot(): Get Filters Data if
  dataState = {
    outcome: document.querySelector('#inputOutcome').value,
    adj: document.querySelector('#inputAdj').value,
    race: document.querySelector('#inputRace').value,
  };
  // fetchFilterPlot():  Filters Data
  // console.log(`Filters Data:  `);
  // console.table(dataState);
  // console.table(myDataAllTmp);

  myData = myDataAllTmp.filter((row) => {
    return (
      row.outcome === dataState.outcome &&
      row.adjusted == dataState.adj &&
      row.race === dataState.race
    );
  });
  titleMaker(myData);
  plotLollipop(myData);
}

// Data Fetcher
async function fetchData(query) {
  console.log(
    '!!!!!!!!!!!!!!!!!!!! GETTING DATA !!!!!!!!!!!!!!!!!!!!!!!! !!!!!'
  );
  const res = await fetch(query);
  const data = await res.json();
  return data;
}

// Title Maker
function titleMaker(myData) {
  let metaRow = myData[0];
  // Get Title
  let myTitle = `Inequities in COVID-19 ${metaRow.outcome} by Race/Ethnicity`;
  document.querySelector('.dashboardPlotTitle').innerHTML = myTitle;
  // Get Subtitle
  let mySubtitle = metaRow.subtitle_lollipop;
  document.querySelector('.dashboardPlotSubtitle').innerHTML = mySubtitle;
}

// Plot Maker
function plotLollipop(myData) {
  console.log('START plot()');
  console.table(myData);
  // Pull out meta data
  let metaRow = myData[0];
  console.log(`is low undefined: ${metaRow.low in window} `);
  if (metaRow.low in window) {
    myData.forEach((element) => {
      element.low = element.y;
    });
    console.log('RESTORED LOW');
    console.log(myData);
  }
  let ylabsTmp = metaRow.xlabs_tmp;
  let myArray = myData.map((a) => Math.abs(a.low));
  let citiesArray = myData.map((a) => a.cityHTML);
  let colors = myData.map((a) => a.col);
  let absMax = Math.max(...myArray);
  let yMin = absMax * -1.05;
  let yMax = absMax * 1.05;

  console.log(myArray);

  // Plot
  Highcharts.chart('plot1', {
    chart: {
      type: 'lollipop',
      inverted: true,
    },

    credits: {
      enabled: false,
    },

    legend: {
      enabled: false,
    },

    subtitle: {
      text: '',
    },

    title: {
      text: '',
    },

    tooltip: {
      // shared: true,
      formatter: function () {
        return (
          "<span style= 'font-weight: bold; font-size: 17px;'>" +
          this.point.name +
          '</span><br>' +
          this.point.tooltip_lollipop
        );
      },
      useHTML: true,
      width: 5500,
    },

    xAxis: {
      type: 'category',
      categories: citiesArray,
      gridLineWidth: 2,
      tickmarkPlacement: 'on',
      gridLineDashStyle: 'Dot',
      labels: {
        useHTML: false,
        style: {
          fontSize: '15px',
          zIndex: 0,
        },
      },
    },

    yAxis: {
      title: {
        text: ylabsTmp,
        style: {
          color: 'black',
          fontSize: '15px',
        },
      },
      opposite: false,
      max: yMax,
      min: yMin,
      gridLineWidth: 0,
      plotLines: [
        {
          color: 'black',
          value: 0,
          width: 2,
        },
      ],
    },

    series: [
      {
        name: 'diff',
        data: myData,
        color: colors,
      },
    ],
  });
  console.log('END PLOT');
}
