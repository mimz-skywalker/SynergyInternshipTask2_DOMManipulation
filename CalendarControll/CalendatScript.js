  
function loadFunction() {

    var currentDate = new Date();
    //var countPrev = 0;
    //var countNext = 0;

    var months = [
        { id: 0, name: "January" },
        { id: 1, name: "February" },
        { id: 2, name: "March" },
        { id: 3, name: "April" },
        { id: 4, name: "May" },
        { id: 5, name: "June" },
        { id: 6, name: "July" },
        { id: 7, name: "August" },
        { id: 8, name: "September" },
        { id: 9, name: "October" },
        { id: 10, name: "November" },
        { id: 11, name: "December" }
    ];

    var days = ['Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sun'];


    function loadmonthView() {

    }

    function loadweekView() {
    }

    function fillDays(myDate) {

        var today = myDate.getDate();

        //Getting the month and writing its name
        var month = myDate.getMonth() // Number 0-11
        var selectionTitle = months[month].name;
        var selectionYear = myDate.getFullYear();

        var selectionTag = document.getElementById("current");
        selectionTag.append(selectionTitle.toString() + " " + selectionYear.toString());

        var firstDay;
        var lastDay;


        var bigMonthCheck = (month == 0) ||
            (month == 2) ||
            (month == 4) ||
            (month == 6) ||
            (month== 7) ||
            (month == 9) ||
            (month == 11);



        var smallMonthCheck = (month == 3) ||
            (month == 5) ||
            (month == 8) ||
            (month == 10);



        var isFebruary = (month == 1);
              
        var temp = myDate;
        temp.setDate(1);

        tempDay = temp.getDay();

        //Because getDay() returns 0 for Sunday, 1 for Monday and so on
        if(tempDay==0)
        {
            firstDay = 7;
        }
        else
        {
            firstDay = tempDay;
        }

        if (bigMonthCheck) {
            lastDay = 31;
        }

        if (smallMonthCheck) {
            lastDay = 30;
        }
        

        //leap year check
        if (isFebruary) {

            if(myDate.getFullYear()%400 == 0 || myDate.getFullYear()%4 == 0)
            {
                lastDay = 29;
            }
            else
            {
                lastDay = 28;
            }
        }


        for (var i = firstDay, z = 1; i <= lastDay, z <= lastDay; i++, z++) {

            var tdTag = document.getElementById(i.toString());
            var content = document.createTextNode(z.toString());
            tdTag.appendChild(content);

            //Highlighting today
            var todayTag = document.getElementById((today+firstDay-1).toString());
            todayTag.style.backgroundColor = "#ffa64d";

        }

        //To hide the last row if not needed
        if (firstDay + lastDay <= 36)
        {
            document.getElementById("week6").style.display = "none";
        }
        else
        {
            document.getElementById("week6").style.display = "table-row";
        }

    }


    var functionCall = fillDays(currentDate);

    function ClearTags(){

        document.getElementById("current").innerHTML = "";

        for(var i = 1; i < 42; i++)
        {
            document.getElementById(i.toString()).innerHTML = "";
            document.getElementById(i.toString()).style.backgroundColor = "yellow"
        }
    }

    document.getElementById("btnPrev").addEventListener("click", function () {


        //++countPrev;
        ClearTags();

        var today = new Date(currentDate.getFullYear(), currentDate.getMonth()-1, currentDate.getDate());
        
        fillDays(today);

        currentDate = today;

    })
    
    document.getElementById("btnNext").addEventListener("click", function () {

        //++countNext;
        ClearTags();

        var today = new Date(currentDate.getFullYear(), currentDate.getMonth()+1, currentDate.getDate());
        
        fillDays(today);

        currentDate = today;
    
    })

    document.getElementById("weekView").addEventListener("click", function() {

        var dayOfTheWeek = currentDate.getDay();
        var dateSelected = currentDate.getDate();

        switch(dayOfTheWeek)
        {

        }

    })

    document.getElementById("display").addEventListener("click", function() {

        var inputYear = document.getElementById("year").value;

        if (isNaN(inputYear))
        {
            document.getElementById("year").value = "";
            window.alert("Please enter a valid year!");
        }
        else if (inputYear < 1900 || inputYear > 2300)
        {
            document.getElementById("year").value= "";
            window.alert("Please enter a number between 1900 and 2300!");
        }
        else
        {
            var newDate = currentDate;
            newDate.setFullYear(inputYear);

            ClearTags();
            fillDays(newDate);
        }
    })
    
};
