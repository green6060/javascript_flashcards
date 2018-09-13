// count number of cards

// JQuery event listening for "click" event on addCardButton
//// JQuery insert html for new card, when "click" event fires. JQuery replace card classes, 
//// based on the number of cards on the page. 
/**********************************************************************************************/
//// Changes to page after each "click" event should go as follows:
////
//// IF number_of_cards == 0, insert "<row class='row' id='row_1'></row>" into "<container></container>",
////// insert "<column class="col-12" id="card_1"></column>" into "<row class="row"></row>. Add 1 to number_of_cards
////
//// IF number_of_cards == 1, insert "<column class='col-6' id='card_2'></column>" into "<row class='row'></row>
////// card classes of row_1 should ALL be "Col-6"
////
//// IF number_of_cards == 2, insert "<column class='col-4' id='card_3'></column>" into "<row class='row'></row>
////// card classes of row_1 should ALL be "Col-4

//// IF number_of_cards == 3, insert "<column class='col-3' id='card_1'></column>" into "<row class='row'></row>
////// card classes of row_1 should ALL be "Col-6

//// IF number_of_cards == 4, card classes should ALL be "Col-3"

//// IF number_of_cards == 5, card classes should ALL be "Col-4"


if (number_of_cards % 4 == 0) {
//// insert "<row class='row' id='row_${number_of_cards/4}'></row>" into "<container></container>"
}else if (number_of_cards % 2 ==)