angular.
  module('destinationList').
  component('destinationList', {
    templateUrl: 'destination-list/destination-list.template.html',
    controller: function TDListController() {
      this.destinations = [
        {
          name: 'Bali, Indonesia',
          snippet: 'Bali is a living postcard, an Indonesian paradise that feels like a fantasy. Soak up the sun on a stretch of fine white sand, or commune with the tropical creatures as you dive along coral ridges or the colorful wreck of a WWII war ship.'
         }, {
          name: 'London, United Kingdom',
          snippet: "The crown jewels, Buckingham Palace, Camden Market…in London, history collides with art, fashion, food, and good British ale. A perfect day is different for everyone: culture aficionados shouldn't miss the Tate Modern and the Royal Opera House."
          }, {
          name: 'Paris, France',
         snippet: 'Lingering over pain au chocolat in a sidewalk café, relaxing after a day of strolling along the Seine and marveling at icons like the Eiffel Tower and the Arc de Triomphe… the perfect Paris experience combines leisure and liveliness with enough time to savor both an exquisite meal and exhibits at the Louvre.'
         }
      ];
    }
  });