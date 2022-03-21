<script context='module'>
    export async function load({ fetch }) {
        const alb = await fetch('http://localhost:8081/album')
        const album = await alb.json()
        const m = await fetch('http://localhost:8081/music')
        const music = await m.json()
        if (alb.ok && m.ok) {
            return {
                props: { album, music }
            }
        }
        return {
            status: 301,
            redirect: '/reviews'
        }
    }
</script>

<script>
    import { onMount } from 'svelte'
    import { fade } from 'svelte/transition'

    import Button from '$lib/button.svelte'

    export let album = []
    export let music = []

    onMount(() => {
        let observer = new IntersectionObserver(elts => {
            elts.forEach(elt => {
                if (elt.isIntersecting == true) elt.target.style.opacity = 1
                else elt.target.style.opacity = 0
            })
        }, { threshold: .35 })

        let album = document.querySelectorAll('.container')
        // album.forEach(alb => observer.observe(alb))
    })

//	// function setAvg() {
	// 	for (let i = 0; i < albums.length; i++) {
	// 		let info = albums[i]
	// 		let avg
	// 		let total = 0
	// 		for(let i = 0; i< info.rating.length; i++) {
	// 			total += info.rating[i]
	// 			avg = +(total / info.rating.length).toFixed(2)
	// 			info.average = avg
	// 		}
	// 	}
	// }
//	// setAvg()

	function sortMusic() {
		music.sort((a, b) => { return a.track - b.track })
	}
	sortMusic()

    function sortAlbum() {
        album.sort((a, b) => { return a.pike - b.pike })
    }
    sortAlbum()
</script>

<section in:fade={{delay: 600}} out:fade={{duration: 200}} class='reviews' data-scroll-container>
    <!-- <div class="first-page"> -->
        <h1>Reviews</h1>
        <div class="intro">
            <p>
                Below you'll find the most honest, accurate and unbias ratings of Buckethead's 
                ongoing extensive Pike album series. These albums have been rated by Natternet, 
                a Buckethead fan since 2002 who has heard Buckethead's entire known discography 
                (currently standing at over 400+ albums).
            </p>
            <p>
                There are also videos of each rated Pike with song samples which can be viewed 
                by clicking each albums cover art.
            </p>
            <p>
                These ratings are based on the classic 5 star rating system shown below.
            </p>
        </div>
        <div class='add-album'>
            <a class="button" sveltekit:noscroll href='reviews/addalb'>
                <Button def={true}>Add album</Button>
            </a>
            <p>{album.length} albums | {music.length} musics</p>
            <p>{+(music.length / album.length).toFixed(2)} musics/album</p>
        </div>
    <!-- </div> -->
    {#each album as alb}
        <div class="container" data-scroll>
            <div class='album-title'>
                <div class="title">
                    {#if alb.pike}
                        <h2>Pike {alb.pike}</h2>
                    {/if}
                    <h2><i>"{alb.name}"</i></h2>
                </div>
                <div>
                    <a class="button" sveltekit:prefetch sveltekit:noscroll href='reviews/updatealbum/{alb.id}'>
                        <Button upda={true}>Update</Button>
                    </a>
                    <a class="button" sveltekit:noscroll href='http://localhost:8081/deletealbum/{alb.id}'>
                        <Button del={true}>Delete</Button>
                    </a>
                </div>
            </div>
            <div class='album'>
                <img src={alb.cover} class='cover' alt=''>
                <div class='music-container'>
                    {#each music as m}
                        {#if m.id_Album == alb.id}
                            <div class="music">
                                <p><span>{m.track}.</span> {m.title}</p>
                                <div>
                                    <a class="button" sveltekit:prefetch sveltekit:noscroll href='reviews/updatemusic/{m.id}'>
                                        <Button upda={true}>Update</Button>
                                    </a>
                                    <a class="button" sveltekit:noscroll href='http://localhost:8081/deletemusic/{m.id}'>
                                        <Button del={true}>Delete</Button>
                                    </a>
                                    <form action="">
                                        <input type="number" min="1" max="10">
                                        <input type="submit" value="Vote">
                                    </form>
                                </div>
                            </div>
                        {/if}
                    {/each}
                    <div class="add-music">
                        <a sveltekit:noscroll href='reviews/addmusic/{alb.id}'>
                            <Button def={true}>Add song</Button>
                        </a>
                    </div>
                </div>
            </div>
            <div class='averages'>
                <p>Overall average:
                    <br>
                    <span>N/A</span>
                </p>
                <p>Personal average:
                    <br>
                    <span>N/A</span>
                </p>
                <!-- <div class="personal-avg">
                    <p>Personal average:</p>
                    <a sveltekit:prefetch sveltekit:noscroll href='reviews/{alb.id}'>
                        <Button def={true}>Vote</Button>
                    </a>
                </div> -->
            </div>
        </div>
    {/each}
</section>

<style>
    .intro p {
        margin: 40px 0;
        text-align: center;
    }
    .add-album {
        margin: 0 auto;
        width: fit-content;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .container {
        margin: 20px 0 60px;
        padding: 40px 0;
        background: transparent;
        border-radius: 6px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: relative;
        transition: .6s cubic-bezier(0,0,.5,1);
    }
    .album-title {
        padding: 10px 0;
        display: flex;
        width: fit-content;
        position: relative;
        align-items: center;
    }
    .album-title::before,
    .album-title::after {
        content: '';
        width: 100vw;
        height: 1px;
        position: absolute;
        top: 50%;
    }
    .album-title::before {
        background: #211e1e;
        right: 100%;
    }
    .album-title::after {
        background: #f05454;
        left: 100%;
    }
    .title {
        margin: 0 10px;
    }
    .title h2 {
        display: inline-block;
    }
    .button {
        margin: 0 10px;
    }
    .album {
        padding: 10px;
        display: flex;
        justify-content: space-between;
    }
    .cover {
        margin: 20px 0;
        width: 280px;
        height: 280px;
        border-radius: 6px;
    }
    .music-container {
        margin: 0 0 0 20px;
        width: 70%;
    }
    .add-music {
        margin: 20px;
    }
    .music {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .music p {
        margin: 10px 0;
        transition: .4s cubic-bezier(0,0,.5,1);
    }
    .music span {
        font-family: consolas;
        font-size: 14px;
    }
    .music div {
        transition: .4s cubic-bezier(0,0,.5,1);
    }
    .music form input {
        margin: 0 10px;
    }
    .music form input:not([type=submit]) {
        width: 60px;
    }
    .music div,
    .album-title div:last-of-type {
        display: flex;
    }
    .averages {
        text-align: center;
        display: flex;
        justify-content: space-evenly;
        position: relative;
    }
    .averages p span {
        font-size: 1.1em;
        font-weight: 600;
    }
</style>