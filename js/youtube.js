// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
  // <div id='player'></div>
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8',  //An6LvWQuj_8 모든 소스를 넣으면 제어가 안된다. 대신 아이디만을 붙이면 제어가 가능하다.
    playerVars: {
      autoplay: true, //자동재생
      loop: true, //무한반복
      playlist: 'An6LvWQuj_8' //만약 loop를 넣는다면 한개 영상이 끝나고 다음에 플레이할 영상 리스트를 넣어주어야 한다.
    },
    events: {
      onReady: function (event) {
        event.target.mute() //음소거
      }
    }
  });
}