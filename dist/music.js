const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	    {
	        name: 'だから僕は音楽を辞めた',
	        artist: 'ヨルシカ',
	        url: 'http://music.163.com/song/media/outer/url?id=1357953768.mp3',
	        cover: 'http://p2.music.126.net/ks136mj7FcZXgZ8IF-cpSA==/109951163986681435.jpg'
	    },
	    {
	        name: 'ノーチラス',
	        artist: 'ヨルシカ',
	        url: 'http://music.163.com/song/media/outer/url?id=1387098940.mp3',
	        cover: 'http://p2.music.126.net/oH-hPC-coG6spFpbaA4xjw==/109951164327687331.jpg'
	    },
	    {
	        name: 'ただ君に晴れ',
	        artist: 'ヨルシカ',
	        url: 'http://music.163.com/song/media/outer/url?id=557579321.mp3',
	        cover: 'http://p1.music.126.net/FHi1cWVObsNewrw-Jf2w3g==/109951163289889776.jpg'
	    },
	    {
	        name: '願い~あの頃のキミへ~',
	        artist: '當山みれい',
	        url: 'http://music.163.com/song/media/outer/url?id=488388942.mp3',
	        cover: 'http://p2.music.126.net/kbLlBkGfEcA3RJyC5JhkDA==/18346451021830743.jpg'
	    }
    ]
});