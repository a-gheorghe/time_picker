class timepicker {
    constructor() {
        this.prev_hour = "12"
        this.prev_minute = "00"
        this.prev_time_of_day = "AM"
        this.hour = "12"
        this.minute = "00"
        this.time_of_day = "AM"
    }
}

timepicker.prototype.buildModal = function(input_num, h, m) {
    console.log('h is ', h, 'm is ', m)
    console.log('this right when building modal', this)

    // if an hour and min are given from the input field
        // set this.hour to be the input field hour
        // set this.minute to be the input field minute
    if (h) {
        if (h > 12) {
            this.hour = h - 12
            this.time_of_day = "PM"
        } else if (h == 12) {
            this.hour = 12
            this.time_of_day = "PM"
        } else if (h == 0) {
            this.hour = 12
            this.time_of_day = "AM"
        } else {
            this.hour = h
        }
    }
    if (m) {
        this.minute = m
    }
    // check for edge case when this.hour is 0
    if (this.hour == 0) {
        this.hour = 12
    }

    console.log('this slightly after', this)
    // declare variables
    let min_clock_circle;
    let hour_clock_circle;
    let hour_clicked;
    let min_clicked;

    // create (or obtain) structural modal elements
    const main_div = document.getElementById("main-div")
    const modal = document.createElement('div')
    const container = document.createElement('div')
    const header = document.createElement('div')
    const m_body = document.createElement('div')
    const options = document.createElement('div')
    const ok_text = document.createElement('span')
    const cancel_text = document.createElement('span')
    const hour = document.createElement('span')
    const colon = document.createElement('span')
    const minute = document.createElement('span')
    const aft = document.createElement('div')
    const morn = document.createElement('div')

    // add classes and ids
    container.classList.add("container")
    header.classList.add("header")
    m_body.classList.add("m_body")
    options.classList.add("option_box")
    ok_text.classList.add('ok_text')
    cancel_text.classList.add('cancel_text')
    if (this.time_of_day === "AM") {
        aft.classList.remove("selected_text")
        morn.classList.add("selected_text")
    } else {
        morn.classList.remove("selected_text")
        aft.classList.add("selected_text")
    }
    modal.setAttribute("id", "modal")
    hour.setAttribute("id", "hour")
    colon.setAttribute("id", "colon")
    minute.setAttribute("id", "minute")
    morn.setAttribute("id", "morn_text")
    aft.setAttribute("id", "aft_text")

    // set text values
    ok_text.innerText = "OK"
    cancel_text.innerText = "CANCEL"
    colon.textContent = ":"
    aft.textContent = "PM"
    morn.textContent = "AM"
    hour.textContent = this.hour
    minute.textContent = this.minute

    options.appendChild(ok_text)
    options.appendChild(cancel_text)
    modal.appendChild(container)
    main_div.appendChild(modal)
    container.appendChild(header)
    container.appendChild(m_body)
    container.appendChild(options)
    header.appendChild(hour)
    header.appendChild(colon)
    header.appendChild(minute)
    header.appendChild(aft)
    header.appendChild(morn)

    // add event listeners to elements
    // add event listeners:
    // make minute clock when clicking minute span element
    // make hour clock when clicking hour span element
    minute.addEventListener("click", () => {
        hour_clicked = Array.from(document.getElementsByClassName("hour_clock_number_clicked"))[0].innerText
        console.log('hour_clicked is ', hour_clicked)
        make_min_clock()
    })

    hour.addEventListener("click", () => {
        min_clicked = Array.from(document.getElementsByClassName("min_clock_number_clicked"))[0].innerText
        // min_clicked = Array.from(document.getElementsByClassName("min_clock_number_clicked"))


        console.log('min_clicked is ', min_clicked)
        make_hour_clock()
    })



    ok_text.addEventListener("click", (e) => {
        // if clicking ok from minute clock
        // need to check one that is clicked
        if (min_clock_circle) {
            min_clicked = Array.from(document.getElementsByClassName("min_clock_number_clicked"))[0].innerText
        }
        // if no min_clickd
        // ie. never navigated to minute clock, used default
        if (!min_clicked) {
            min_clicked = this.minute
        }
        // if clicking ok from hour clock
        // need to check one that is clicked
        if (hour_clock_circle) {
            hour_clicked = Array.from(document.getElementsByClassName("hour_clock_number_clicked"))[0].innerText
        }
        let hour_to_set;
        let input_fill = document.getElementById(`input-${input_num}`)
        console.log('hour_clicked', hour_clicked)
        console.log('min_clicked', min_clicked)
        this.prev_hour = this.hour
        this.hour = hour_clicked
        this.prev_minute = this.minute
        this.minute = min_clicked
        if (aft.classList.contains("selected_text")) {
            this.prev_time_of_day = this.time_of_day
            this.time_of_day = "PM"
            if (this.hour == 12) {
                hour_to_set = this.hour
            } else if (this.hour == 1) {
                hour_to_set = 13
            } else if (this.hour == 2) {
                hour_to_set = 14
            } else if (this.hour == 3) {
                hour_to_set = 15
            } else if (this.hour == 4) {
                hour_to_set = 16
            } else if (this.hour == 5) {
                hour_to_set = 17
            } else if (this.hour == 6) {
                hour_to_set = 18
            } else if (this.hour == 7) {
                hour_to_set = 19
            } else if (this.hour == 8) {
                hour_to_set = 20
            } else if (this.hour == 9) {
                hour_to_set = 21
            } else if (this.hour == 10) {
                hour_to_set = 22
            } else if (this.hour == 11) {
                hour_to_set = 23
            }
        //
        } else {
            this.prev_time_of_day = this.time_of_day
            this.time_of_day = "AM"
            if (this.hour < 10) {
                hour_to_set = `0${this.hour}`
            } else if (this.hour == 12) {
                hour_to_set = "00"
            } else {
                hour_to_set = this.hour
            }
        }
        // working
        // } else if (this.hour < 10 && morn.classList.contains("selected_text")) {
        //     hour_to_set = `0${this.hour}`
        // } else {
        //     if (this.hour == 12) {
        //         hour_to_set = "00"
        //     } else {
        //         hour_to_set = this.hour
        //     }
        // }
        input_fill.value = `${hour_to_set}:${this.minute}`
        modal.remove()
    })

    cancel_text.addEventListener("click", (e) => {
        let hour_to_set;
        let input_fill = document.getElementById(`input-${input_num}`)
        if (this.prev_time_of_day === "AM") {
            morn.classList.add("selected_text")
            aft.classList.remove("selected_text")
        } else {
            morn.classList.remove("selected_text")
            aft.classList.add("selected_text")
        }
        if (aft.classList.contains("selected_text")) {
            if (this.prev_hour == 12) {
                hour_to_set = this.prev_hour
            } else if (this.prev_hour == 1) {
                hour_to_set = 13
            } else if (this.prev_hour == 2) {
                hour_to_set = 14
            } else if (this.prev_hour == 3) {
                hour_to_set = 15
            } else if (this.prev_hour == 4) {
                hour_to_set = 16
            } else if (this.prev_hour == 5) {
                hour_to_set = 17
            } else if (this.prev_hour == 6) {
                hour_to_set = 18
            } else if (this.prev_hour == 7) {
                hour_to_set = 19
            } else if (this.prev_hour == 8) {
                hour_to_set = 20
            } else if (this.prev_hour == 9) {
                hour_to_set = 21
            } else if (this.prev_hour == 10) {
                hour_to_set = 22
            } else if (this.prev_hour == 11) {
                hour_to_set = 23
            }
        } else if (this.prev_hour < 10 && morn.classList.contains("selected_text")) {
            hour_to_set = `0${this.prev_hour}`
        } else {
            if (this.prev_hour == 12) {
                hour_to_set = "00"
            } else {
                hour_to_set = this.prev_hour
            }
        }
        input_fill.value = `${hour_to_set}:${this.prev_minute}`
        modal.remove()
    })



    morn.addEventListener("click", () => {
        this.prev_time_of_day = this.time_of_day
        this.time_of_day = "AM"
        aft.classList.remove("selected_text")
        morn.classList.add("selected_text")
    })
    aft.addEventListener("click", () => {
        this.prev_time_of_day = this.time_of_day
        this.time_of_day = "PM"
        morn.classList.remove("selected_text")
        aft.classList.add("selected_text")
    })

    // FUNCTION THAT CREATES MINUTE CLOCK
    const make_min_clock = () => {
        // remove hour clock
        //or do nothing if minute clock already present
        let min_clock_circle = document.getElementById("min_clock_circle")
        let hour_clock_circle = document.getElementById("hour_clock_circle")
        if (hour_clock_circle) {
            hour_clock_circle.remove()
        }
        if (min_clock_circle) {
            return;
        }

        // change colors on hour and minute
        hour.classList.remove("selected_text")
        minute.classList.add("selected_text")

        // create minute clock elements (circle, pivot, and numbers)
        min_clock_circle = document.createElement('div')
        const min_clock_pivot = document.createElement('div')
        for (let i = 1; i < 61; i++) {
            let min_clock_number = document.createElement('div')
            min_clock_number.classList.add("min_clock_number")
            min_clock_number.setAttribute("id", `min_clock_number_${i}`)
            if (i % 5 === 0) {
                min_clock_number.textContent = i
            }
            if (i === 60) {
                min_clock_number.textContent = "00"
            }
            min_clock_circle.appendChild(min_clock_number)
        }

        // append clock items to modal body
        min_clock_circle.appendChild(min_clock_pivot)
        m_body.appendChild(min_clock_circle)

        // add id and classes
        min_clock_circle.setAttribute("id", "min_clock_circle")
        min_clock_pivot.classList.add("pivot")

        // add class to indicate clicked number (with edge cases)
        let curr_min;
        if (this.minute === "00") {
            curr_min = document.getElementById('min_clock_number_60')
        } else if (this.minute >= 1 && this.minute < 10) {
            curr_min = document.getElementById('min_clock_number_' + this.minute[1])
        } else {
            curr_min = document.getElementById(`min_clock_number_${this.minute}`)
        }
        curr_min.classList.add("min_clock_number_clicked")


        // add event listener on each clock number to:
            // remove clicked class from all other numbers
            // add clicked class to clicked number
            // make this.minute equal the number clicked on (with edge cases (60, single digits))
            // set the text of minute span element to this.minute
        let min_all_clock_numbers = Array.from(document.getElementsByClassName("min_clock_number"))
        min_all_clock_numbers.forEach((number) => {
            number.addEventListener("click", () => {
                let min_clicked_number = Array.from(document.getElementsByClassName("min_clock_number_clicked"))
                if (min_clicked_number.length === 0) {
                    number.classList.add("min_clock_number_clicked")
                } else {
                    for (let i = 0; i < min_clicked_number.length; i++) {
                        min_clicked_number[i].classList.remove("min_clock_number_clicked")
                    }
                    number.classList.add("min_clock_number_clicked")
                }
                if (isNaN(number.id[number.id.length - 2])) {
                    this.prev_minute = this.minute
                    this.minute = "" + 0 + number.id[number.id.length - 1]
                } else {
                    if (number.id === 'min_clock_number_60'){
                        this.prev_minute = this.minute
                        this.minute = "00"
                    } else {
                        this.prev_minute = this.minute
                        this.minute = "" + number.id[number.id.length - 2] + number.id[number.id.length - 1]
                    }
                }
                minute.textContent = this.minute
            })
        })
    }

    // FUNCTION THAT CREATES HOUR CLOCK
    const make_hour_clock = () => {
        // if hour clock exists already, do nothing
        // if minute clock exists, remove it
        let min_clock_circle = document.getElementById("min_clock_circle")
        let hour_clock_circle = document.getElementById("hour_clock_circle")
        if (min_clock_circle) {
            min_clock_circle.remove()
        }
        if (hour_clock_circle) {
            return;
        }


        // change colors on hour and minute
        minute.classList.remove("selected_text")
        hour.classList.add("selected_text")

        // create hour clock elements (circle, pivot, and numbers)
        hour_clock_circle = document.createElement('div')
        const hour_clock_pivot = document.createElement('div')
        for (let i = 1; i < 13; i++) {
            let hour_clock_number = document.createElement('div')
            hour_clock_number.classList.add("hour_clock_number")
            hour_clock_number.setAttribute("id", `hour_clock_number_${i}`)
            hour_clock_number.textContent = i;
            hour_clock_circle.append(hour_clock_number)
        }

        // append clock items to modal body
        hour_clock_circle.appendChild(hour_clock_pivot)
        m_body.appendChild(hour_clock_circle)

        // add id and classes
        hour_clock_circle.setAttribute("id", "hour_clock_circle")
        hour_clock_pivot.classList.add("pivot")


        // add class to indicate clicked number
        let curr_hour = document.getElementById(`hour_clock_number_${this.hour}`)
        curr_hour.classList.add("hour_clock_number_clicked")


        // add event listener on each clock number to:
            // remove clicked class from all other numbers
            // add clicked class to clicked number
            // set the text of the hour span to the number clicked on
        let hour_all_clock_numbers = Array.from(document.getElementsByClassName("hour_clock_number"))
        hour_all_clock_numbers.forEach((number) => {
            number.addEventListener("click", () => {
                let hour_clicked_number = Array.from(document.getElementsByClassName("hour_clock_number_clicked"))
                if (hour_clicked_number.length === 0) {
                    number.classList.add("hour_clock_number_clicked")
                } else {
                    for (let i = 0; i < hour_clicked_number.length; i++) {
                        hour_clicked_number[i].classList.remove("hour_clock_number_clicked")
                    }
                    number.classList.add("hour_clock_number_clicked")

                }
                // if (this.hour == 12 && morn.classList.contains("selected_text")) {
                //     this.hour = "00"
                // }
                if (isNaN(number.id[number.id.length - 2])) {
                    hour.textContent = "" + number.id[number.id.length - 1]
                    // this.prev_hour = this.hour
                    // this.hour = "" + number.id[number.id.length - 1]
                } else {
                    hour.textContent = "" + number.id[number.id.length - 2] + number.id[number.id.length - 1]
                    // this.prev_hour = this.hour
                    // this.hour = "" + number.id[number.id.length - 2] + number.id[number.id.length - 1]
                }
                // hour.textContent = this.hour
            })
        })
    }



    // make hour clock initially as default
    make_hour_clock()
}



let picker1 = new timepicker()
let picker2 = new timepicker()
let picker3 = new timepicker()


const clock_icon1 = document.getElementById("clock_icon1")
const input1 = document.getElementById("input-1")
clock_icon1.addEventListener("click", () => {
    input1_arr = input1.value.split(":")
    if (input1_arr[0] < 10) {
        input1_arr[0] = input1_arr[0][1]
    }
    if (input1_arr.length > 1) {
        picker1.buildModal(1, input1_arr[0], input1_arr[1])
    } else {
        picker1.buildModal(1)
    }
})


const clock_icon2 = document.getElementById("clock_icon2")
const input2 = document.getElementById("input-2")
clock_icon2.addEventListener("click", () => {
    input2_arr = input2.value.split(":")
    if (input2_arr[0] < 10) {
        input2_arr[0] = input2_arr[0][1]
    }
    if (input2_arr.length > 1) {
        picker2.buildModal(2, input2_arr[0], input2_arr[1])
    } else {
        picker2.buildModal(2)
    }
})

const clock_icon3 = document.getElementById("clock_icon3")
const input3 = document.getElementById("input-3")
clock_icon3.addEventListener("click", () => {
    input3_arr = input3.value.split(":")
    if (input3_arr[0] < 10) {
        input3_arr[0] = input3_arr[0][1]
    }
    if (input3_arr.length > 1) {
        picker3.buildModal(3, input3_arr[0], input3_arr[1])
    } else {
        picker3.buildModal(3)
    }
})
