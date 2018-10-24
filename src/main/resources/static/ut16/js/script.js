document.querySelector("#shop_id").onclick = function () {
    ajaxGet("http://ip-api.com/json");
    ajaxGet("http://ip-api.com/json?p1=asd");
};

function ajaxGet(url) {
    let request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if(request.readyState == 4){
            document.querySelector("#myip").innerHTML =
                request.responseText;
        }
    };

    request.open("GET", url);
    request.send();

}

