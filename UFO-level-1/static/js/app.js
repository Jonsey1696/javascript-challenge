// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");


// Add all table data to HTML
// data.forEach((sighting) => {
//     var row = tbody.append("tr");
//     Object.entries(sighting).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });

//   Select events
  var form = d3.select('form');

  var button = d3.select('button');


// Create filter function


  function runSearch () {

    d3.event.preventDefault();

    var query= d3.select('#datetime');
    var query_value= query.property('value');


    var by_date= data.filter(sighting => sighting.datetime === query_value);


    by_date.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

  };


  form.on('submit', runSearch);
  button.on('click', runSearch);


