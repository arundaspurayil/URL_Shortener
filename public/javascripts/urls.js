
function shortenUrl(){
    let givenUrl = $("#url").val();
    $.ajax({
        type: "POST",
        url: '/shorten',
        dataType: 'json',
        data: {url: givenUrl},
        success: ((res) => {
            console.log(res)
            if(res.error){
                $("#errors").append("<p class=\"small text-danger\">" +res.msg+ "</p>")
            }else{
                $("#printurl").append("<h1>" +res.msg+ "</h1>")
            }
        }),
        error: ((error) => {
            console.log(error)
        })
    });
}