$(document).ready(function(){
//task1
var table = $("table");

$("th.sortable").click(function(){
    var table = $(this).parents("table").eq(0);
    var ths = table.find("tr:gt(0)").toArray().sort(compare($(this).index()));
    this.asc = !this.asc;
    if (!this.asc)
       ths = ths.reverse();
    for (var i = 0; i < ths.length; i++)
       table.append(ths[i]);
});

function compare(idx) {
    return function(a, b) {
       var A = tableCell(a, idx), B = tableCell(b, idx)
       return $.isNumeric(A) && $.isNumeric(B) ? 
          A - B : A.toString().localeCompare(B)
    }
}

function tableCell(tr, index){ 
    return $(tr).children("td").eq(index).text() 
}
//task2
$("button.reset").click(function(){
    $.ajax({
        url: "https://wt.ops.labs.vu.nl/api22/9470b950/reset",
        method: "GET",
        dataType: "json"
     })
    })
//task 3
$("#btn").click(function(){
$.ajax({
    url: "https://wt.ops.labs.vu.nl/api22/9470b950",
    method: "GET",
    dataType: "json",
    success: function(data,status){
        console.log(data);
        data.forEach(function(dt){
            $("#tdata").append("<tr>"+
            "<td>"+dt.brand+"</td>"+
            "<td>"+dt.model+"</td>"+
            "<td>"+dt.os+"</td>"+
            "<td>"+dt.screensize+"</td>"+
            "<td><img src="+dt.image+" width= '100'></img></td>"
        
            +"</tr>"
            );
        
        })
    
    }
});
});
});



//https://stackoverflow.com/questions/3160277/jquery-table-sort

