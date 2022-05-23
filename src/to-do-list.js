
    var day = document.getElementById("day-select")
    var task = document.getElementById("task-description")
    var time = document.getElementById("time-input")

    var dayValue
    var taskValue
    var timeValue



    const monday = document.getElementById("monday")
    const tuesday = document.getElementById("tuesday")
    const wednesday = document.getElementById("wednesday")
    const thursday = document.getElementById("thursday")
    const friday = document.getElementById("friday")
    const saturday = document.getElementById("saturday")
    const sunday = document.getElementById("sunday")

    const btnAdd = document.getElementById("btn-add")


    btnAdd.addEventListener('click', () => {
        dayValue = day.value
        taskValue = task.value
        timeValue = time.value

        if(taskValue == ''){
            alert('Insert a task description!')
        }else if(timeValue == ''){
            alert('Insert a time for your task!')
        } else {

            var createArticle = document.createElement("article")
            var createH2 = document.createElement("h2")
            var createH3 = document.createElement("h3")

            var v1 = document.createTextNode(taskValue)
            var v2 = document.createTextNode(timeValue)

            createH2.appendChild(v1)
            createH3.appendChild(v2)
            createArticle.append(createH2, createH3)

            if(dayValue == 'monday'){
                monday.appendChild(createArticle)
            }else if(dayValue === 'tuesday'){
                tuesday.appendChild(createArticle)
            }else if(dayValue === 'wednesday'){
                wednesday.appendChild(createArticle)
            }else if(dayValue === 'thursday'){
                thursday.appendChild(createArticle)
            }else if(dayValue === 'friday'){
                friday.appendChild(createArticle)
            }else if(dayValue === 'saturday'){
                saturday.appendChild(createArticle)
            }else if(dayValue === 'sunday'){
                sunday.appendChild(createArticle)
            }
        }
    })
