var nomeCanal = 'Curso em vídeo';

$(document).ready(function(){
    $.get("https://www.googleapis.com/youtube/v3/channels", {
        part:'contentDetails',
        forUsername: nomeCanal,
        key: 'AIzaSyCHYKL6Td-X6EJBJbEv1PEgft5LWDbWLwg'},
        function(data){
        console.log(data.items[0].contentDetails.relatedPlaylists.uploads);
        }
    )
});