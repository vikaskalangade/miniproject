fetch("https://api.github.com/users")
.then((res)=>res.json())
.then((data)=>{
    console.log(data)
    document.getElementById("image1").setAttribute("src", data[0].avatar_url)
    document.getElementById("username1").innerHTML = data[0].login
    document.getElementById("visitprofile1").setAttribute("href" ,data[0].html_url)
 
    document.getElementById("image2").setAttribute("src", data[14].avatar_url)
    document.getElementById("username2").innerHTML = data[14].login
    document.getElementById("visitprofile2").setAttribute("href" ,data[14].html_url)

    document.getElementById("image3").setAttribute("src", data[17].avatar_url)
    document.getElementById("username3").innerHTML = data[17].login
    document.getElementById("visitprofile3").setAttribute("href" ,data[17].html_url)

    document.getElementById("image4").setAttribute("src", data[3].avatar_url)
    document.getElementById("username4").innerHTML = data[3].login
    document.getElementById("visitprofile4").setAttribute("href" ,data[3].html_url)

    document.getElementById("image5").setAttribute("src", data[16].avatar_url)
    document.getElementById("username5").innerHTML = data[16].login
    document.getElementById("visitprofile5").setAttribute("href" ,data[16].html_url)

    document.getElementById("image6").setAttribute("src", data[12].avatar_url)
    document.getElementById("username6").innerHTML = data[12].login
    document.getElementById("visitprofile6").setAttribute("href" ,data[12].html_url)


})
.catch((err)=>console.error(err));