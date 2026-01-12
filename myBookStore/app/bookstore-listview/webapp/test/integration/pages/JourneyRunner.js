sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"pp/bookstorelistview/test/integration/pages/BooksList",
	"pp/bookstorelistview/test/integration/pages/BooksObjectPage"
], function (JourneyRunner, BooksList, BooksObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('pp/bookstorelistview') + '/test/flpSandbox.html#ppbookstorelistview-tile',
        pages: {
			onTheBooksList: BooksList,
			onTheBooksObjectPage: BooksObjectPage
        },
        async: true
    });

    return runner;
});

