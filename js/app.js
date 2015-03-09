/**
 * Motivational Quotes
 *
 * -> FYI: Code is only here to show potential use cases and is not optimized at all
 *
 * @author Kevin Scheffelmeier <kevin@ksch.io>
 */
angular
  .module('motivationalQuotes', [])
  .controller('QuotesCtrl', ['$scope', '$timeout', function($scope, $timeout) {

    $scope.quote = null;

    /*
     * Quotes
     */
    var quotes = [
      [
        'Follow your gut!',
        '#DE291C',
        '#FCF6EB'
      ],
      [
        'Experiment. Fail. Learn. Repeat.',
        '#2E282A',
        '#FDE8E9'
      ],
      [
        'This is a bullshit free zone!',
        '#CD5334',
        '#F6F4F3'
      ],
      [
        'Innovate or die!',
        '#48A9A6',
        '#F7F0F0'
      ],
      [
        'Done is better than perfect!',
        '#3F7CAC',
        '#FBFBFF'
      ],
      [
        'Get shit done!',
        '#101419',
        '#FFF'
      ],
      [
        'Always deliver more than expected.',
        '#3D2527',
        '#FFEED6'
      ],
      [
        'Life is short. Do stuff that matters.',
        '#D3EAEF',
        '#031926'
      ],
      [
        'Passion never fails.',
        '#EFEBCE',
        '#353B3C'
      ],
      [
        'Less meetings. More doing.',
        '#CDDDDD',
        '#051014'
      ],
      [
        'Fuck mediocrity!',
        '#7284A8',
        '#F8F8F8'
      ],
      [
        'Fuck it ship it!',
        '#A5978B',
        '#FFF'
      ]
    ];

    /*
     * Get random quote
     */
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    /*
     * Set quote
     */
    $scope.quote = randomQuote[0];

    /*
     * Apply styling and center vertically and horizontally
     */
    $(window).resize(function() {

      $timeout(function() {

        $('body').css('background-color', randomQuote[1]);

        $('#quote').css({
          'position'   : 'absolute',
          'left'       : '50%',
          'top'        : '50%',
          'margin-left': -($('#quote').outerWidth() / 2),
          'margin-top' : -($('#quote').outerHeight() / 2),
          'color'      : randomQuote[2]
        }).fadeIn('fast');
      });
    });

    $(window).resize();
  }]);