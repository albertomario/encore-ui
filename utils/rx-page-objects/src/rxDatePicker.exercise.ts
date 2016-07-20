///<reference path="../typings/globals/mocha/index.d.ts"/>
///<reference path="../typings/globals/chai/index.d.ts"/>
///<reference path="../typings/globals/chai-as-promised/index.d.ts"/>
///<reference path="../typings/globals/lodash/index.d.ts"/>

import {expect} from 'chai';
import * as _ from 'lodash';

import * as component from './rxDatePicker.page';

interface rxDatePickerExerciseOptions {
    instance?: component.rxDatePicker;
    isPresent?: boolean;
    isDisplayed?: boolean;
    isEnabled?: boolean;
    isValid?: boolean;
};

/**
 * rxDatePicker exercises.
 * @exports exercise/rxDatePicker
 * @param {Object} options - Test options. Used to build valid tests.
 * @param {rxDatePicker} [options.instance=new rxDatePicker()] - Component to exercise.
 * @param {Boolean} [options.isPresent=true] - Whether or not the datepicker is present.
 * @param {Boolean} [options.isDisplayed=true] - Whether or not the datepicker is displayed.
 * @param {Boolean} [options.isValid=true] - Whether or not the datepicker is valid.
 * @example
 * describe('default exercises', encore.exercise.rxDatePicker({
 *     instance: myPage.datepicker, // select one of many pagination instances from your page objects
 *     isValid: false
 * }));
 */
export function rxDatePicker (options: rxDatePickerExerciseOptions) {
    if (options === undefined) {
        options = {};
    }

    options = _.defaults(options, {
        instance: new component.rxDatePicker(),
        isPresent: true,
        isDisplayed: true,
        isEnabled: true,
        isValid: true
    });

    // avoid mangling mocha's `this` context by not using fat-arrow syntax
    return function () {
        var datepicker;

        before(function () {
            datepicker = options.instance;
        });

        it(`should ${options.isEnabled ? '' : 'not '}be enabled`, function () {
            expect(datepicker.isEnabled).to.eventually.equal(options.isEnabled);
        });
    };

};
