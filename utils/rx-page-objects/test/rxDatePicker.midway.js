var moment = require('moment');

describe('rxDatePicker', function () {
    var picker;

    before(function () {
        demoPage.go('#/elements/Forms');
    });

    describe('simple example', function () {
        var isoFormat = 'YYYY-MM-DD';
        var formatMonth = 'MM';
        var today = moment().format(isoFormat);
        var lastMonth = moment(today).clone().subtract(1, 'month').startOf('month');
        var nextMonth = moment(today).clone().add(1, 'month');
        var nextMonthName = moment(nextMonth).clone().format(formatMonth);

        before(function () {
            picker = new encore.rxDatePicker($('#dpSimple'));
        });

        describe('exercise', encore.exercise.rxDatePicker({
            instance: picker,
            selectedDate: moment().format(isoFormat)
        }));

        it('should close the calendar', function () {
            picker.close();
            expect(picker.isOpen()).to.eventually.eq(false);
        });

        it('should close the calendar by clicking somewhere else', function () {
            picker.open();
            $('body').click();
            expect(picker.isOpen()).to.eventually.eq(false);
        });

        it('should reopen the calendar and have the month unchanged', function () {
            picker.open();
            expect(picker.month).to.eventually.equal(nextMonthName);
            expect(picker.year).to.eventually.equal(nextMonth.year().toString());
            picker.previousMonth();
        });

        it('should display today as the current date', function () {
            expect(picker.date).to.eventually.equal(today);
        });

        it('should not select a date that is out of month', function () {
            picker.open();
            picker.date.then(function (currentDate) {
                picker.$$('.day.outOfMonth span').each(function (invalidDay) {
                    invalidDay.click();
                    expect(picker.date).to.eventually.equal(currentDate);
                });
            });
        });

        it('should highlight today\'s date with a special class', function () {
            expect(picker.isDateToday(today)).to.eventually.be.true;
        });

        it('should highlight the currently selected date with a special class', function () {
            expect(picker.isDateSelected(today)).to.eventually.be.true;
        });

        it('should update the date to one month from now', function () {
            picker.date = nextMonth.format(isoFormat);
            expect(picker.date).to.eventually.equal(nextMonth.format(isoFormat));
        });

        it('should update the date back to today', function () {
            picker.date = today;
            expect(picker.date).to.eventually.equal(today);
        });

        it('should update the date to the first of the month', function () {
            var firstOfMonth = moment(today).startOf('month').format(isoFormat);
            picker.date = firstOfMonth;
            expect(picker.date).to.eventually.equal(firstOfMonth);
        });

        it('should update the date to the last of the month', function () {
            var lastOfMonth = moment(today).endOf('month').format(isoFormat);
            picker.date = lastOfMonth;
            expect(picker.date).to.eventually.equal(lastOfMonth);
        });

        it('should update the date to one month ago', function () {
            picker.date = lastMonth.format(isoFormat);
            expect(picker.date).to.eventually.equal(lastMonth.format(isoFormat));
        });

    });

    describe('enabled, valid', function () {
        before(function () {
            picker = new encore.rxDatePicker($('#dpEnabledValid'));
        });

        it('should be enabled', function () {
            expect(picker.isEnabled()).to.eventually.eq(true);
        });

        it('should be valid', function () {
            expect(picker.isValid()).to.eventually.eq(true);
        });
    });//enabled, valid

    describe('enabled, invalid', function () {
        before(function () {
            picker = new encore.rxDatePicker($('#dpEnabledInvalid'));
        });

        it('should be enabled', function () {
            expect(picker.isEnabled()).to.eventually.eq(true);
        });

        it('should not be valid', function () {
            expect(picker.isValid()).to.eventually.eq(false);
        });
    });//enabled, invalid

    describe('disabled, valid', function () {
        before(function () {
            picker = new encore.rxDatePicker($('#dpDisabledValid'));
        });

        it('should not be enabled', function () {
            expect(picker.isEnabled()).to.eventually.eq(false);
        });

        it('should be valid', function () {
            expect(picker.isValid()).to.eventually.eq(true);
        });
    });//disabled, valid

    describe('disabled, invalid', function () {
        before(function () {
            picker = new encore.rxDatePicker($('#dpDisabledInvalid'));
        });

        it('should not be enabled', function () {
            expect(picker.isEnabled()).to.eventually.eq(false);
        });

        it('should not be valid', function () {
            expect(picker.isValid()).to.eventually.eq(false);
        });
    });//disabled, invalid
});
