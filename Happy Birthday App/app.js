const date = document.querySelector('#date')
const month = document.querySelector('#month')
const year = document.querySelector('#year')
const name = document.querySelector('#username')
const btn = document.querySelector('button')

// button if clicked
btn.onclick = () => {
    const cheering = document.querySelector('#cheering')

    // checks for invalid date
    if (date.value === '') {
        window.alert('invalid date! \nyou must write your birth day!')
        return cheering.innerHTML = ''
    }
    // checks for invalid month
    if (month.value === '') {
        window.alert('invalid month! \nyou must write your birth year! \nyou must write your birth month!')
        return cheering.innerHTML = ''
    }
    // checks for invalid year
    if (year.value === '') {
        window.alert('invalid year! \nyou must write your birth year!')
        return cheering.innerHTML = ''
    }
    // checks for invalid name
    if (name.value === '') {
        window.alert('invalid name! \nyou must write your name!')
        return cheering.innerHTML = ''
    }

    // Cheering Happy Birthday with username in it
    cheering.innerHTML = `🎉Happy Birthday🎉 <br /> ${name.value}!`

    const info = document.querySelector('#info')
    
    // months of the year array
    const months = [
        'January', 'February', 'March', 
        'April', 'May', 'June', 
        'July', 'August', 'September', 
        'October', 'November', 'December'
    ]

    const monthNumber = parseInt(month.value, 10)  // convert to number
    let monthName = '';

    // Displaying the right month
    if (monthNumber >= 1 && monthNumber <= 12) {
        monthName = months[monthNumber - 1] // array indexing
    } else {
        monthName = 'Invalid Month' // invalid month
    }

    // displays the time the user was born to the HTML file
    info.innerHTML = `You were born on <strong>${date.value}</strong> <strong>${monthName}</strong> <strong>${year.value}</strong>`
}