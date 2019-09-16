

// from data.js
var tableData = data;


// select tbody 
tbody = d3.select("tbody")


// using Object.entries to get key, value data inside of the table
// and loop through them to add to the table in html
function displayData(data){ 
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}
displayData(tableData)

function updateFilters(){
	let filterId= this.id
	let filterValue = this.value
	console.log(filterValue,filterId)

tableData = tableData.filter(r=>

	r[filterId]==filterValue
);

displayData(tableData)


}


d3.selectAll("input").on("change",updateFilters)

	
