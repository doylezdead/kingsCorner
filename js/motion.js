/* This collection will define the motion and appearance of the cards.
This will include the movement of the cards in and out of
the hand and on the field. */

$(document).ready(function(){
    // Get some globals going and kick off any other initializers.
    blank_card_template = Handlebars.compile($("#blank_card_template").html());
    card_template = Handlebars.compile($("#card_template").html());
});
