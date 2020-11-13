const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    order: 'random',
    theme: '#ffa7e8',
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
	    },
	    {
	        name: '花に亡霊',
	        artist: 'ヨルシカ',
	        url: 'http://music.163.com/song/media/outer/url?id=1442466883.mp3',
	        cover: 'http://p1.music.126.net/_Os98d4NSKf-vLo_93QoEg==/109951164927614269.jpg'
	    },
	    {
	        name: 'DAYBREAK FRONTLINE',
	        artist: '鹿乃',
	        url: 'http://music.163.com/song/media/outer/url?id=537854739.mp3',
	        cover: 'http://p1.music.126.net/iLcmytETSkZgd8xcGVEO5A==/109951163200361748.jpg'
	    }
    ]
});