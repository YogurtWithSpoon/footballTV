let player = videojs('streamPlayer');
player.controls();

let buttonPlay = document.querySelector('.header__btn')
let channelName = document.getElementById('chanel_choose')
let forLink = document.getElementById('get_stream_link')
let link = 'https://tvplusonline.ru/getsignedurlcdn.php?channel='+channelName.value+'&quality=0'
let html = `<a href="`+link+`" target="_blank" class="redirect_link">Ссылка</a>`
div.insertAdjacentHTML('afterbegin', html);

$(channelName).on("input",function(ev){
    let redirect = document.querySelector('.redirect_link')
    redirect.remove()
    let link = 'https://tvplusonline.ru/getsignedurlcdn.php?channel='+$(ev.target).val()+'&quality=0'
    let html = `<a href="`+link+`" class="redirect_link" target="_blank">Ссылка</a>`
    div.insertAdjacentHTML('afterbegin', html);
  });


buttonPlay.addEventListener('click',function(){
    let link = document.querySelector('.channel_link').value
    let player = videojs('streamPlayer')
    player.src({type: 'application/x-mpegURL', src: link})
    link = ''
})


