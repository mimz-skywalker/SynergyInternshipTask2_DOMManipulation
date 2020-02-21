function loadFunction() {

    var currentDate = new Date();

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

    function fillDays() {

        var m = months[currentDate.getMonth()];
        var indexOfM = months.indexOf(m);

        //Getting the month and writing its name
        for (var i = 0; i < 12; i++) {
            if (indexOfM == months[i].id) {
                var selectionTag = document.getElementById("current");
                var selectionTitle = months[i].name;

                selectionTag.append(selectionTitle.toString());
            }
        }

        var firstDay;
        var lastDay;


        var bigMonthCheck = (indexOfM == 0) ||
            (indexOfM == 2) ||
            (indexOfM == 4) ||
            (indexOfM == 6) ||
            (indexOfM == 7) ||
            (indexOfM == 9) ||
            (indexOfM == 11);



        var smallMonthCheck = (indexOfM == 3) ||
            (indexOfM == 5) ||
            (indexOfM == 8) ||
            (indexOfM == 10);



        var isFebruary = (indexOfM == 1);

        //TODO: month should srtart from the actual startdate                    
        var temp = new Date();
        temp.setDate(1);

        firstDay = temp.getDay();
        //var dayOfTheWeek = days[firstDay];

        if (bigMonthCheck) {
            lastDay = 31;
        }

        if (smallMonthCheck) {
            lastDay = 30;
        }

        if (isFebruary) {

            if(currentDate.getFullYear()%400 == 0 || currentDate.getFullYear()%4 == 0)
            {
                lastDay = 29;
            }
            else
            {
                lastDay = 28;
            }
        }


        for (var i = firstDay, z = 1; i <= lastDay, z<= lastDay; i++, z++) {

            var tdTag = document.getElementById(i.toString());
            var content = document.createTextNode(z.toString());

            tdTag.append(content);

            //Highlighting today
            var today = currentDate.getDate();
            var todayTag = document.getElementById((today+firstDay-1).toString());
            todayTag.style.backgroundColor = "#ffa64d";

        }

    }
    
    var functionCall = fillDays();

};

/*document.getElementById("btnPrev").addEventListener("click", function () {

    window.location.reload();
})

document.getElementById("btnNext").addEventListener("click", function () {

    window.location.reload();

})*/


        
    






