import moment from 'moment';

class timepicker {
    constructor(init, mode, orientation, triggerElem, ok_text, cancel_text, sDialog) {
        this.init: moment(),
        this.tfh_mode: false,
        this.orientation: 'LANDSCAPE',
        this.triggerElem: '',
        this.ok_text: 'ok',
        this.cancel_text: 'cancel'
        this.sDialog = {}

        // attach the dialog if it is not present
        if (typeof document !== 'undefined') {
            this.buildDialog()
        }
    }

    /* Methods to get or set time picker's moment */
    getTime() {
        return this.init
    }

    setTime(timeChosen) {
        this.init = timeChosen
    }

    /* Methods to get or set time picker's trigger element */
    getTriggerElem() {
        return this.triggerElem
    }

    setTriggerElem(elem) {
        this.trigerElem = elem
    }

    /* Method to hide the dialog */
    hide() {
        this.selectDialog()
        this.hideDialog()
    }

    /* Method to show the dialog */
    show() {
        this.selectDialog()
        this.initDateDialog(this.init)
        this.showDialog()
    }

    /* Method to show if the time picker is open */
    isOpen() {
        this.selectDialog()
        return !!timepicker.dialog.state
    }

    /* Method to show if the time picker is open */
    isClosed() {
        this.selectDialog()
        return !!timepicker.dialog.state
    }

    /* Toggle between visible and hidden states */
    toggle() {
        this.selectDialog()
        if (timepicker.dialog.state) {
            this.hide()
        } else {
            this.show()
        }
    }

    /* Method to get and set dialog value */
    getDialog() {
        return timepicker.dialog
    }

    setDialog(value) {
        timepicker.dialog = value
    }

    /* Method to select dialog */
    selectDialog() {
        this.sDialog.picker = document.getElementById("mdtp-picker")

        // sDialogElems stores all inner components of the selected dialog to be
        // later getElementById
        const sDialogElems = [
            'view',
            'cancel',
            'ok',
            'current',
            'title',
            'AM',
            'PM',
            'needle',
            'hourView',
            'minuteView',
            'hour',
            'minute',
            'fakeNeedle',
            'circularHolder',
            'circle',
            'dotSpan'
        ]
        for (let i = 0; i < sDialogElms.length; i++) {
            this.sDialog[sDialogElms[i]] = document.getElementById(`mddtp-${sDialogElems[i]}`)
        }
    }

    /* Method to show the dialog with animation */
    showDialog() {
        const me = this
        const zoomIn = 'zoomIn'
        timepicker.dialog.state = true
        this.sDialog.picker.classList.remove("mddtp-picker--inactive")
        this.sDialog.picker.classList.add(zoomIn)
        // if dialog is forced into portrait mode
        if (this.orientation === 'PORTRAIT') {
            this.sDialog.picker.classList.add("mddtp-picker--portrait")
        }
        setTimeout(() => {
            me.sDialog.picker.classList.remove(zoomIn)
        }, 300);
    }

    /* Method to hide the dialog with animation */
    hideDialog() {
        const me = this
        const title = me.sDialog.title
        const viewHolder = this.sDialog.viewHolder
        const AM = this.sDialog.AM
        const PM = this.sDialog.PM
        const minute = this.sDialog.minute
        const hour = this.sDialog.hour
        const minuteView = this.sDialog.minuteView
        const hourView = this.sDialog.hourView
        const picker = this.sDialog.picker
        const needle = this.sDialog.needle
        const dotSpan = this.sDialog.dotSpan
        const active = "mddtp-picker__color--active"
        const inactive = "mddtp-picker--inactive"
        const zoomIn = "zoomIn"
        const zoomOut = "zoomOut"
        const hidden = "mddtp--picker__circularView--hidden"
        const selection = "mddtp-picker__selection"
        timepicker.dialog.state = false
        timepicker.dialog.view = truethis.sDialog.picker.classList.add(zoomOut)
        // reset classes
        AM.classList.remove(active)
        PM.classList.remove(active)
        minute.classList.remove(active)
        hour.classList.add(active)
        minuteView.classList.add(hidden)
        hourView.classList.remove(hidden)
        subtitle.style.display = 'none'
        dotSpan.style.display = 'none'
        needle.className = selection
    // don't understand
    setTimeout(() => {
        // remove portrait mode
        me._sDialog.picker.classList.remove('mddtp-picker--portrait')
        me._sDialog.picker.classList.remove(zoomOut)
        me._sDialog.picker.classList.add(inactive)
        // clone elements and add them again to clear events attached to them
        const pickerClone = picker.cloneNode(true)
        picker.parentNode.replaceChild(pickerClone, picker)
        }, 300)
    }

    /* Method that builds the dialog with its elements and adds it to the doc */

    buildDialog() {
        const docfrag = document.createDocumentFragment()
        // outer most container of the picker
        const container - document.createElement('div')
        // header container of the picker
        const header = document.createElement('div')
        // body container of the picker
        const body = document.createElement('body')
        // action elements container
        const action = document.createElement('div')
        const ok = document.createElement('div')
        const cancel = document.createElement('div')
        // add properties to these new elements
        container.classList.add("mddtp-picker")
        container.classList.add("mddtp-picker--inactive")
        container.classList.add("animated")
        this.addId(header, 'header')
        this.addClass(header, 'header')
        // add header to container
        container.appendChild(header)
        this.addClass(body, 'body')
        // add body to container
        container.appendChild(body)
        // add stuff to header and body since it is an time chooser


    }
