 var name="";
 var startDate="";
 var endDate="";
 var locationInput="";
function openPage(pageName) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    document.getElementById(pageName).style.display = "block";
  
  }
  
  document.getElementById("defaultOpen").click();
  


  $("#nextBtn").on("click",function(){
    name=$("#name").val();
    startDate=$("#startdate").val();
    endDate=$("#enddate").val();
    locationInput=$("#location").val();


    document.getElementById("info").style.display = "none";
    document.getElementById("rules").style.display = "block";

    
  });

  $("#createBtn").on("click",function(){

    var rounds=$("#rounds").val();
    var duration=$("#duration").val();
    var Win=$("#Win").val();
    var Loss=$("#Loss").val();
    var BYE=$("#BYE").val();
    var Draw=$("#Draw").val();
    var createdBy=document.cookie.split(" ")[0]

    console.log(rounds);
    console.log(duration);
    console.log(Win);
    console.log(Loss);
    console.log(BYE);
    console.log(Draw);

    $.post('createTournament',{
      name:name,
      startDate:startDate,
      endDate:endDate,
      locationInput:locationInput,
      rounds:rounds,
      duration:duration,
      Win:Win,
      Loss:Loss,
      BYE:BYE,
      Draw:Draw,
      createdBy:createdBy

    },function(data,status){
      alert(status);
      if(status=="success")
        window.location.replace("home.html")

    });




  });

