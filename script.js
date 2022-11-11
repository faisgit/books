fetch("https://echos0909.herokuapp.com/users")
.then(response => response.json())
.then(data => {
    console.table(data)
    // document.getElementById('name').innerHTML = data[2]['name']
    output = ""
    for (i = 0; i < data.length; i++) {
        output += `<tr>`
        output += `<td>${data[i]['Books_Name']}</td>`
        output += `<td>${data[i]['Writer']}</td>`
        output += `<td>${data[i]['Edition']}</td>`
        output += `<td>${data[i]['Price']} Rs</td>`
        output += `</tr>`
    }

    console.log(output)

    document.getElementById('tb').innerHTML = output
})

       
function postData() {
	var name = document.getElementById("name").value;
	var writer = document.getElementById("writer").value;
	var Edition = document.getElementById("edition").value;
    var city = document.getElementById("price").value;
	
	data = {Books_Name: name, Writer: writer, Edition: Edition, Price:city};
	
	fetch("https://echos0909.herokuapp.com/users", {
		method: "POST",
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	.then((response) => response.json())
	.then((data) => { 
		console.log(data); 
		window.location.href = "listing.html";
	})
}	
