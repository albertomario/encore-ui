describe('rxSearchBox', function () {
    before(function () {
        demoPage.go('#/elements/Forms');
    });

    describe('default rxSearchBox', encore.exercise.rxSearchBox({
        instance: encore.rxSearchBox.initialize($('.default-search-box'))
    }));

    describe('disabled rxSearchBox', encore.exercise.rxSearchBox({
        instance: encore.rxSearchBox.initialize($('.disabled-search-box')),
        disabled: true
    }));

    describe('custom, wide rxSearchBox', encore.exercise.rxSearchBox({
        instance: encore.rxSearchBox.initialize($('.wide-search-box')),
        placeholder: 'Filter by any...'
    }));
});
