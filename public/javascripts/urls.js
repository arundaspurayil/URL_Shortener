
function shortenUrl(){
    let givenUrl = $("#url").val();
    $.ajax({
        type: "POST",
        url: '/shorten',
        dataType: 'json',
        data: {url: givenUrl},
        success: ((res) => {
            if(res.error){
                $("#errors").html("<p class=\"small text-danger\">" +res.msg+ "</p>")
                $("#printurl").html("")
            }else{
                $("#errors").html("")
                $("#printurl").html("<h1>" +res.msg+ "</h1>")
            }
        }),
        error: ((error) => {
            console.log(error)
        })
    });
}