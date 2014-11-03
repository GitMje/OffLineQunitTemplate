"use strict";
/// <reference path="sut.js" />

// Note: Replace the module name with a descriptive name
module('Example tests', {
    setup: function () {
        console.log('Starting test...');
        // Put any initialization that should be done for all tests here.
    },
    teardown: function () {
        console.log('...Completed test!');
        // Put any clean up that should be done for all tests here.
    }
});

// Note: Use the pattern of methodUnderTest_Condition_ExpectedBehavior
test('add_Input3Plus2_Returns5', function (assert) {
    ////////////////////////////////////////////////////////////////////////////
    // ARRANGE
    var expect = 5, 
        sut = new Example(),
        result;

    ////////////////////////////////////////////////////////////////////////////
    // ACT
    result = sut.add(3, 2);

    ////////////////////////////////////////////////////////////////////////////
    // ASSERT
    // For more examples goto link: http://api.qunitjs.com/category/assert/
    assert.strictEqual(result, expect, 'Assert equality');
});

// Note: Use the pattern of methodUnderTest_Condition_ExpectedBehavior
test('add_Input3Plus2WithoutNew_Returns5', function (assert) {
    ////////////////////////////////////////////////////////////////////////////
    // ARRANGE
    var expect = 5, 
        sut = Example(),
        result;

    ////////////////////////////////////////////////////////////////////////////
    // ACT
    result = sut.add(3, 2);

    ////////////////////////////////////////////////////////////////////////////
    // ASSERT
    // For more examples goto link: http://api.qunitjs.com/category/assert/
    assert.strictEqual(result, expect, 'Assert equality');
});