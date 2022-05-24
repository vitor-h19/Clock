    function append(){
        var dateToday = new Date()

        let day = dateToday.getDay()
        let date = dateToday.getDate()
        let month = dateToday.getMonth()
        let fullYear = dateToday.getFullYear()

    if(day === 0) day = 'Sun'
    if(day === 1) day = 'Mon'
    if(day === 2) day = 'Tue'
    if(day === 3) day = 'Wed'
    if(day === 4) day = 'Thu'
    if(day === 5) day = 'Fri'
    if(day === 6) day = 'Sat'

    if(month === 0) month = 'Jan'
    if(month === 1) month = 'Feb'
    if(month === 2) month = 'Mar'
    if(month === 3) month = 'Apr'
    if(month === 4) month = 'May'
    if(month === 5) month = 'Jun'
    if(month === 6) month = 'Jul'
    if(month === 7) month = 'Aug'
    if(month === 8) month = 'Sep'
    if(month === 9) month = 'Oct'
    if(month === 10) month = 'Nov'
    if(month === 10) month = 'Dec'

                days.textContent = day
                dates.textContent = date
                months.textContent = month
                years.textContent = fullYear

    }

    function time24() {
        var hourNow = new Date()

        let hour = hourNow.getHours()
        let minute = hourNow.getMinutes()
        let second = hourNow.getSeconds()

        if(hour < 10 ) hour = '0' + hour
        if(minute < 10 ) minute = '0' + minute
        if(second < 10 ) second = '0' + second

                hours.textContent = hour
                minutes.textContent = minute
                seconds.textContent = second

    }

    function time12() {

        var hourNow = new Date()

        let hour = hourNow.getHours()
        let minute = hourNow.getMinutes()
        let second = hourNow.getSeconds()

            if(hour == 0){
                hour = 12
            }
            if(hour > 12){
                hour = hour - 12
                session.textContent = "PM"
            }

            if(hour < 10) hour = "0" + hour
            if(minute < 10) minute = "0" + minute
            if(second < 10) second = "0" + second

                hours.textContent = hour
                minutes.textContent = minute
                seconds.textContent = second

    } 
    

    const hours = document.getElementById("hours")
    const minutes = document.getElementById("minutes")
    const seconds = document.getElementById("seconds")

    const session = document.getElementById("session")
    const days = document.getElementById("day")
    const dates = document.getElementById("date")
    const months = document.getElementById("month")
    const years = document.getElementById("year")


    const clock = setInterval(

    function type() {

        append()

        if(document.getElementById("clock-type").checked){
            session.style.display = "none"
            time24()
        }else{
            session.style.display = "block"
            time12()
        }
        
    }, 1)



    