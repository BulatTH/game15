$(document).ready(function () {
    function randColor(element, property) {
        var rcolor;
        rcolor = Math.floor(Math.random()*10+1);
        switch (rcolor){
            case 1:
                $(element).css(property, "#01FFAC")
                break
            case 2:
                $(element).css(property, "#85b3fc")
                break
            case 3:
                $(element).css(property, "#f2fc85")
                break
            case 4:
                $(element).css(property, "#fcb085")
                break
            case 5:
                $(element).css(property, "#85f8fc")
                break
            case 6:
                $(element).css(property, "#d685fc")
                break
            case 7:
                $(element).css(property, "#fc8585")
                break
            case 8:
                $(element).css(property, "#cefc85")
                break
            case 9:
                $(element).css(property, "#85fcc8")
                break
            case 10:
                $(element).css(property, "#8592fc")
                break

        }
    }
    randColor("#game_screen span#title", "color");
    randColor("#game_table", "background-color");
    randColor("#steps", "background-color");
    randColor("#timer", "background-color");
    var size = 4;
    var tr_arr = new Array();
    var table = document.getElementById("game_table");
    var tr, td;
    for (var i=0; i <= (size-1) ;i++){
        tr_arr[i] = [];
        for (var j = 0; j <= (size-1); j++){
            if (i+j != 6){
                tr_arr[i][j] = i*4  + j+1;
            } else {
                tr_arr[i][j] = "";
            }
        }
    }

    for (var i=0; i <= (size-1) ;i++){
        tr = document.createElement("tr");
        table.appendChild(tr);
        for (var j = 0; j <= (size-1); j++){
            if (i+j != 6){
                tr_arr[i][j] = i*4  + j+1;
                td = document.createElement("td");
                tr.appendChild(td);
                $(td).text(tr_arr[i][j])
                        .attr({"id": i + "," + j, "class":'notEmptyGrid'});
            } else {
                tr_arr[i][j] = "";
                td = document.createElement("td");
                tr.appendChild(td);
                $(td).text(tr_arr[i][j])
                    .attr("id", i + "," + j);
            }
        }
    }
    mix(700);
    $("#game_table tr td").click(function (event) {
        var target = event.target;
        var full_id = $(target).attr("id");
        var id_arr = full_id.split(",");
        var colum = Number(id_arr[0]);
        var row = Number(id_arr[1]);
        swap(colum, row, target);
        win();

    })
    function swap(col,rw,target) {
        var first_box = target;
        var left = rw-1;
        var right = rw+1;
        var top = col-1;
        var bottom = col+1;
        if ($("#game_table tr td[id='"+ bottom +","+rw+"']").text() == ""){
            if (bottom <= 3){
                $("#game_table tr td[id='"+ bottom +","+rw+"']").text($(first_box).text())
                    .attr("class", "notEmptyGrid");
                $(first_box).text("")
                    .removeClass("notEmptyGrid");
            }
        }

        if ($("#game_table tr td[id='"+ top +","+rw+"']").text() == ""){
            if (top >= 0){
                $("#game_table tr td[id='"+ top +","+rw+"']").text($(first_box).text())
                    .attr("class", "notEmptyGrid");
                $(first_box).text("")
                    .removeClass("notEmptyGrid");
            }
        }
        if ($("#game_table tr td[id='"+ col +","+right+"']").text() == ""){
            if (right <= 3){
                $("#game_table tr td[id='"+ col +","+right+"']").text($(first_box).text())
                    .attr("class", "notEmptyGrid");
                $(first_box).text("")
                    .removeClass("notEmptyGrid");
            }
        }
        if ($("#game_table tr td[id='"+ col +","+left+"']").text() == ""){
            if (left >= 0){
                $("#game_table tr td[id='"+ col +","+left+"']").text($(first_box).text())
                    .attr("class", "notEmptyGrid");
                $(first_box).text("")
                    .removeClass("notEmptyGrid");
            }
        }
    }
    function win() {
        var win_count = 0;
        for (var i=0; i <= (size-1) ;i++){
            for (var j = 0; j <= (size-1); j++){
                if (i+j != 6){
                    if (Number($("#game_table tr td[id='"+ i +","+j+"']").text()) == tr_arr[i][j]){
                        win_count++;
                    }
                }
            }
        }
        if (win_count == (Math.pow(size,2) - 1)){
            alert("You win!");
        }
    }
    function mix(a) {
        for (var j = 0; j <= a; j++){
            var rand1 = Math.floor(Math.random()*4);
            var rand2 = Math.floor(Math.random()*4);
            swap(rand1, rand2, $("#game_table tr td[id='"+ rand1 +","+rand2+"']"))
        }
    }
})