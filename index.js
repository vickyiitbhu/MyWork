console.log("hello")
var i2 = 0;
var j=0;
var speed = 100;
var company_1_arr=["Full_stack","Artificial Intelligence","Machine Learning"];

function typing() {
  // console.log(i2);
  if (j < company_1_arr[i2].length) {
    // console.log(company_1_arr[i2].charAt(j));
    document.getElementById("company_1_text").innerHTML += company_1_arr[i2].charAt(j);
    j++;
    if(j!=company_1_arr.length);
        setTimeout(typing, speed);
  }
  else
  {
    document.getElementById("company_1_text").innerHTML="";
    i2+=1;
    if(i2==company_1_arr.length)
        i2=0;
    j=0;
    setTimeout(typing, speed);
  }
}
typing();

var i1=0;
var company_3_2_1="N0.1 world ranking";
function typing2() {
    if (i1 < company_3_2_1.length) {
      // console.log(company_3_2_1.charAt(j));
      document.getElementById("company_3_2_1").innerHTML += company_3_2_1.charAt(i1);
      i1++;
      if(i1==company_3_2_1.length)
      {
        i1=1;
        setTimeout(function(){
          document.getElementById("company_3_2_1").innerHTML= company_3_2_1.charAt(0);
        },speed);
        
      }
    setTimeout(typing2, speed);
    }
    
  }
typing2();

//everything about services

var services_heading=["First service","Second service","Third service","Fourth srvice","Fifth Service"];


for(var i=1;i<services_heading.length;i++)
{
  var newSidebarBox = document.createElement("div");
  // var newSidebarBox1=document.getElementById("services_data_1").clone();
  // newSidebarBox1.id="services_data_"+(1).toString();
  // newSidebarBox.appendChild(newImage);
  newSidebarBox.innerHTML = services_heading[i];
  newSidebarBox.className = "services_data";
  newSidebarBox.id="services_data_"+(i+1).toString();
  var mainBox = document.getElementById("services_data");
  // Create an img element
  var newImage = document.createElement("img");
  newImage.src = "/images/bell.png"; // Replace with the actual path to your image
  newImage.alt = "Image Alt Text"; // 
  // mainBox.appendChild(newSidebarBox1);
}
var partners_name=["Nike","Google","Twitter","Facebook","WWF","IBM","BMW","Walmart","Visa","ebay","FedEx","CocaCola","Disney","GAP","McDonald's","Pepsi","Microsoft","SHELL","StarBuks"]
for(var i=0;i<partners_name.length;i++)
{
  var newSidebarBox = document.createElement("div");
  newSidebarBox.id="partner_"+(i+1).toString();
  newSidebarBox.className="partner_box";
  newSidebarBox.appendChild(newImage);
  newSidebarBox.innerHTML =`<img src="images/partners/`+ partners_name[i]+`.jpg" alt="">`+`<h3>`+partners_name[i]+`</h3>`;
  // `<img src="images/company_backgroung.jpg" alt="">`+
  var mainBox = document.getElementById("partners_data");
  mainBox.appendChild(newSidebarBox);
}


//for sliding effect in about section 
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Target div is visible!');
      document.getElementById("scrollabout").className="scrollabout";
      document.getElementById("scrollabout_head").className="scrollabout_head";
      // document.getElementById("scrollabout").className="revealing-text";
      // document.getElementById("scrollabout").className="reveal";


    }
    else {
      // The target div is not currently visible on the screen
      console.log('Target div is not visible!');
      document.getElementById("scrollabout").classList.remove("scrollabout");
      document.getElementById("scrollabout_head").classList.remove("scrollabout_head");
    }
  });
}
let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

let observer = new IntersectionObserver(handleIntersection, options);
let target = document.getElementById("about_company");
observer.observe(target);



