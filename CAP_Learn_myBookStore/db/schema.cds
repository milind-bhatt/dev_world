//import CUID aspect, so that it can be used below
using {
    cuid,
    managed
} from '@sap/cds/common';

namespace tutorial.db;


entity Books : cuid, managed {
    title       : String;
    author      : Association to Authors;
    genre       : String;
    publishedAt : Date;
    pages       : Integer;
    price       : Decimal(4, 2);
    //composition is with upper case
    Chapters :
    Composition of
    many Chapters on Chapters.book = $self;
}

entity Authors : cuid, managed {
    name  : String;
    books : Association to many Books
                on books.author = $self;
}

entity Chapters : cuid, managed {
        number : Integer;
        //association is with lower case
    key book   : Association to Books;
}
