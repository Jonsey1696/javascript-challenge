// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");


// // Add all table data to HTML
data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

//   Select events
  var form = d3.select('form');

  var button = d3.select('button');


// Create filter function


  function runSearch () {

    d3.event.preventDefault();

    // clear current table data
    d3.selectAll('tr').remove();


    var query= d3.select('#datetime');
    var query_value= query.property('value');
    

    // var city_element=d3.select('#city');
    // var city_value=city_element.property('value');

    // var state_element=d3.select('#state');
    // var state_value=state_element.property('value');

    // var country_element=d3.select('#country');
    // var country_value=ccountry_element.property('value');

    // var shape_element=d3.select('#shape');
    // var shape_value=shape_element.property('value');


    var by_date= data.filter(sighting => sighting.datetime === query_value);
    // var by_city=by_date.filter(sighting => sighting.city === city_value);


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


