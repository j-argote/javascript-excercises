function nav(){


    //navbar
    var nav = document.createElement('nav');
    nav.setAttribute("class", "navbar navbar-expand navbar-dark p-4");
    nav.setAttribute("style", "background-color: rgb(82, 167, 250); ");

   

    //div container

    var div = document.createElement('div');
    div.setAttribute("class", "nav navbar-nav h3");
    nav.appendChild(div);

    //links
    //a1
    var a1 = document.createElement('a');
    a1.setAttribute('class', "nav-item nav-link active");
    a1.setAttribute('href', "#");
    a1.textContent = "HighOnCoding";

    div.appendChild(a1);

    //a2
    var a2 = document.createElement('a');
    a2.setAttribute('class', "nav-item nav-link active small pl-5");
    a2.setAttribute('href', "#");
    a2.textContent = "Home";

    div.appendChild(a2);


    //a3
    var a3 = document.createElement('a');
    a3.setAttribute('class', "nav-item nav-link small pl-5");
    a3.setAttribute('href', "#");
    a3.textContent = "Categories";

    div.appendChild(a3);

    return nav;
}

function grayBox(){

    var divMain = document.createElement('div');
    divMain.setAttribute('class', "container");
    
    //div 1

    var div1 = document.createElement('div');
    div1.setAttribute('class', "p-4 mt-4");
    div1.setAttribute('style', "background-color: rgb(221, 222, 224)")

    divMain.appendChild(div1);

    var div1_h1 = document.createElement('h1');
    div1_h1.setAttribute('class', "h1");
    div1_h1.setAttribute('style', 'color: rgb(83, 88, 94);');
    div1_h1.textContent = "Curse of the Current Reviews";

    div1.appendChild(div1_h1);

    var div1_p = document.createElement('p');
    div1_p.textContent = `When you want to buy any application from the Apple iTubes store you have more choices that you can handle.
    Most of the users scroll past the application description completely avoiding it like ads displayed on
    the right column of your webpage. Their choice is dependent on three important factors price, screenshot,
    and reviews.`

    div1.appendChild(div1_p);

    var div2 = document.createElement('div');
    
    divMain.appendChild(div2);
    
    var div2_h4 = document.createElement('h4');
    div2_h4.setAttribute("class", "h4 pt-4");
    div2_h4.setAttribute("style", "color: rgb(6, 101, 192);");
    div2_h4.textContent = "Hello WatchKit";
    div2.appendChild(div2_h4);

    var div2_p1 = document.createElement('h4');
    div2_p1.textContent = `Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK
    release. The WatchKit framework enables the developers to create Apple Watch applications. In this article
    we are going to focus on the basics of getting started with the WatchKit and developing apps for the
    Apple Watch.`

    div2.appendChild(div2_p1);

    var div2_p2 = document.createElement('h4');
    div2_p2.setAttribute('class','pl-2');
    div2_p2.setAttribute('style', 'color: white; background-color: rgb(243, 144, 24);');
    div2_p2.textContent = "12 comments"

    div2.appendChild(div2_p2);

    var div3 = document.createElement('div');
    divMain.appendChild(div3);

    div3_h4 = document.createElement('h4');
    div3_h4.setAttribute('class', 'h4 pt-4');
    div3_h4.setAttribute('style', 'color: rgb(6, 101, 192);');
    div3_h4.textContent = "Introduction to Swift";
    div3.appendChild(div3_h4);

    div3_p1 = document.createElement('p');
    div3_p1.textContent =`Swift is a modern programming language developed by apple to create the next generation of iOS ans OSX applications.
    Swift is a fairly new language and still in development but it clearly reflects the intentions and the
    future direction. This article will revolve around the basic concepts in the Swift language and how you
    can get started.`;

    div3.appendChild(div3_p1);

    div3_p2 = document.createElement('p');
    div3_p2.setAttribute("class", "pl-2");
    div3_p2.setAttribute("style", "color: white; background-color: rgb(243, 144, 24);");
    div3_p2.textContent ="15 comments";
    div3.appendChild(div3_p2);


    return divMain;
}

var container = document.getElementById('container-fluid');
var navGlobal = nav();
container.appendChild(navGlobal);

var grayDivGlobal = grayBox();
container.appendChild(grayDivGlobal)
