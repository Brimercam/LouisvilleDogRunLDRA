<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <!----Stylesheet and JavaScript links---->
  <link rel="stylesheet" href=LDRA_Styles1.css>
  <script src="LDRA_JavaScript.js"></script>
  <title>Louisville Dog Run Associ</title>
</head>

<!---Beginning of Body--->
<body> 
    <header>
        <div id="navbar">
            <nav>
                <a href="#rules">Rules</a>
                <a href="#application">Application</a>
                <a href="#news">News</a>
                <a href="#staff">Staff</a>
                <a href="#contact">Contact</a>
                <a href="#gallery">Gallery</a>
            </nav>
        </div>
    </header>

    <div class="primaryContent">
        <h1>Louisville Dog Run Association</h1>
        <p> Louisville Dog Run Association (LDRA) is an all-volunteer, 501(c)(3) non-profit organization dedicated to
            operating
            off-leash dog parks around the Louisville Area. There are currently eight official off-leash areas in the
            Louisville Area: </p>
  <!---Images of all parks--->
       <div class="parktable">
            <img src="Cochranhilllogo.gif">
            <img src="Championslogo.gif">                   
            <img src="cauleylogo.gif">
        </div>       

    </div>

 <div class="form">
    <form>
        <h1>Does my dog meet LDRA requirements for park entry?</h1>

        <label for="weight">What is your Dog's weight?</label><br>
        <select id="weight" name=weight><br>
            <option value="10lb">10 lb</option>
            <option value="20lb">20 lb</option>
            <option value="30lb">30 lb</option>
            <option value="40lb">40 lb</option>
            <option value="50lb">50 lb</option>
            <option value="60+">60 lb +</option>
        </select><br>

        Is the dog up to date on vaccinations?<br>
        <input type="radio" name="vac" value="Yes"> Yes<br>
        <input type="radio" name="vac" value="No"> No<br>

        Does the dog have any known aggressions towards people or dogs?<br>
        <input type="radio" name="agg" value="Yes"> Yes<br>
        <input type="radio" name="agg" value="No"> No<br>

        <button type="submit" name="submit" onclick="sendData({test:'ok'})">Submit</button>
    </form>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCZW0gmF9ybxCcmEwhwlWnN9oPQhIBXg74&callback=initMap" async defer></script>

<!---Google Map API--->
    <div id="map"></div>
  </div>
</body>
<!-----End of Body----->

<div id="footercontainer">
    <footer>
        <p>LOUISVILLE DOG RUN ASSOCIATION
            P.O. Box 221611
            Louisville, Kentucky 40252
            (502) 876-9416
            info@louisvilledogs.com
        </p>
    </footer>
</div>

</html>