
var counter = 0;

function inicijalizuj() {

    addTable()();

    function addTable() {

        var queryString = decodeURIComponent(window.location.search);
        queryString = queryString.substring(1);
        var queries = queryString.split("&");

        for (var i = 0; i<queries.length; i++) {
            queries[i] =queries[i].slice( queries[i].indexOf("=")+1);

            //replace brise jedan znak  ---- ovo jer su se pojavili ++++++
            for(var j=0; j < queries[i].length; j++) {
                queries[i]=  queries[i].replace("+", " ");
            }

        }


        var sadrzaj= [
            { Left: "Ime i Prezime", Right: queries[0]},
            { Left: "Adresa", Right: queries[1]},
            { Left: "Email", Right: queries[2]},
            { Left: "Komentar", Right: queries[3]}
        ];

        var myTableDiv = document.getElementById("myDynamicTable");

        var table = document.createElement('TABLE');
        table.border = '10';
        table.style.backgroundColor="lightgrey";
        table.style.fontFamily="Arial Black";
        table.style.fontSize="23px";
        table.style.lineHeight="1,5";

        var tableBody = document.createElement('TBODY');
        table.appendChild(tableBody);

        for (var i = 0; i < 4; i++) {
            var tr = document.createElement('TR');
            tableBody.appendChild(tr);

            var td = document.createElement('TD');
            td.width = '150';
            td.style.padding="0px 0px 0px 10px";
            td.appendChild(document.createTextNode(sadrzaj[i].Left));

            tr.appendChild(td);
            td = document.createElement('TD');
            td.width = '400';
            td.style.padding="0px 0px 0px 10px";
            td.appendChild(document.createTextNode(sadrzaj[i].Right));

            tr.appendChild(td);

        }
        myTableDiv.appendChild(table);

    }

}
