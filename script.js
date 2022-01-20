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
const formEl = document.querySelector("form");
const tbodyEl= document.querySelector("tbody");
$.ajax({
    url: "https://wt.ops.labs.vu.nl/api22/9470b950",
    method: "GET",
    data: brand, model, os, screensize, image,
    dataType: "json"
});
function addRow(event){
    event.preventDefault();
    const brand= data.brand;
    const model=data.model;
    const os=data.os;
    const screensize=data.screensize;
    const image=data.image;
    
    tbodyEl.innerHTML += `
        <tr>
            <td>${brand}</td>
            <td>${model}</td>
            <td>${os}</td>
            <td>${screensize}</td>
            <td>${image}</td>
        </tr>
    `
}
formEl.addEventListener("submit", addRow);
});


//https://stackoverflow.com/questions/3160277/jquery-table-sort

