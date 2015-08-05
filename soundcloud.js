/**
 * SoundCloud Starter
 * by @joericho
 * Licensed: MIT
 */

/* OK. Let's create some variables */
var clientId  = '8f773ee549efcb257380b73483e01fc6';
var userName  = 'childish-gambino';
var container = '#container';

/* Create the AJAX request */
$.ajax({
    url: 'http://api.soundcloud.com/users/' + userName + '/tracks.json?client_id=' + clientId,
    dataType: 'json',
    success: function(url){
        var data = url[5];
        console.log(data)
        var item = {
            'item': [{
                title: data.title,
                artwork: data.artwork_url,
                permalink: data.permalink_url
            }]
        };

        /* Setup templating (mustache) */
        template = $('#template').html(),
        output   = Mustache.render(template, item);
        $(container).append(output);
    }
});