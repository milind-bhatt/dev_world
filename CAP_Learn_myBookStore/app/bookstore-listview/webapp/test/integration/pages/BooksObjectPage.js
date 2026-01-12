sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'pp.bookstorelistview',
            componentId: 'BooksObjectPage',
            contextPath: '/Books'
        },
        CustomPageDefinitions
    );
});