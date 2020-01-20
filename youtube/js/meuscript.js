var nomeCanal = 'Curso em vídeo';

$(document).ready(function(){
    $.get("https://www.googleapis.com/youtube/v3/channels", {
        part:'contentDetails',
        forUsername: nomeCanal,
        key: ''},
        function(data){
        console.log(data.items[0].contentDetails.relatedPlaylists.uploads);
        }
    )
});
