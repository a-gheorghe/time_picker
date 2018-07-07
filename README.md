# Time Picker

In this project, I created an implementation of a time-picker using HTML, CSS, and JS. 

## Getting started

To see this project locally:
- clone the repo or download it onto your computer
- open `index.html` any internet browser

## Description

The page has three input forms for separate events. Each event has its own event name, location, and time associated with it.
The time can be set by either manually filling in the input field OR by clicking the clock icon beside the time input field.

### Clicking the clock icon will trigger a modal to appear:
  - This modal will by default render showing 12:00 AM if a time is not specified in the input field
  - Otherwise, the modal will show the time in the input field

### Modal:
  - The hour clock shows first by default
  - To see / set the minutes, click on the minutes text in the modal header
  - The time can be changed by clicking the hour / minute numbers
  - Clicking OK sets the associated input field with the chosen time
  - CLicking CANCEL reverts back to the previous input time value (or 12:00 AM if no previous value)

## Screenshots

**On page load** 

![alt text](./screenshots/baseline.png?raw=true "Baseline")

**Filling in event details, setting time to `09:00 PM `** 

![alt text](./screenshots/first_clock_input.png?raw=true "First input")

**Modal loads with `9:00 PM` selected** 

![alt text](./screenshots/modal_first_clock.png?raw=true "First modal")

**Changing the time to `11:28 PM`**

![alt text](./screenshots/modal_first_clock_changed.png?raw=true "Changing first modal")

**This change is reflected in the input field** 

![alt text](./screenshots/updated_first_clock.png?raw=true "Change in input field")

**The different events each can be set with their own times**

![alt text](./screenshots/second_clock_input.png?raw=true "Diff events, diff times")

**Responsive, can be used in mobile as well** 

![alt text](./screenshots/mobile_view.png?raw=true "Mobile view")





