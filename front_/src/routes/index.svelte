<script>
    import { onMount } from 'svelte'
    import { fade } from 'svelte/transition'

    onMount(() => {
        function setStars(num) {
            for (let i = 0; i < num; i++) {
                let stars = document.createElement('div')
                stars.setAttribute('class', 'stars')
                stars.setAttribute('data-speed', Math.floor(Math.random() * 10 + 1))

                stars.style.left = 100 * Math.random() + '%'

                let speed = stars.getAttribute('data-speed')
                let scale

                speed < 6 ? scale = 1
                    : speed < 8 ? scale = (speed * .1) + 1
                    : scale = (speed * .1) + 2

                stars.style.transform = `scale(${scale})`

                stars.animate([{
                    transform: `translateY(1vh) scale(${scale})`
                }, {
                    transform: `translateY(-101vh) scale(${scale})`
                }], {
                    duration: (Math.random() * scale + 1) * 20000,
                    delay: -i * 1600,
                    iterations: Infinity
                })

                document.querySelector('.home').appendChild(stars)
            }
        }
        setStars(20)
    })
</script>

<section in:fade={{delay: 600}} out:fade={{duration: 200}} class='home'>
    <h1>BH Land</h1>
    <p>
        Representing guitar hero Buckethead, his life, his music and much more.We are very proud to be the first 
        and most trusted creator of original Buckethead content, as well as the publisher of more Buckethead 
        articles, stories and insight than anyone else in the career of the GOAT. Anything you've ever wanted 
        to know about Buckethead (whilst respecting his private life) is right here.
    </p>
    <p>
        Our videos are highly informative featuring everything from interviews, Top 10's, lists, reviews, 
        stories, insights, music videos, animations, recommendations and more.We're constantly uploading & 
        updating our web content on our website as well as other social media platforms such as Youtube, 
        Facebook, Twitter, Instagram & many more. So be sure to look out for us across all social media.
    </p>
    <p>
        Thank you for your support, we hope you continue to enjoy our content as we continue to grow Natternet. 
        If you'd like to submit an article, video content, video request or for any other matter, you can 
        contact us using the message link provided in the footer of all of our pages.
    </p>
    <p>Woo!!</p>
</section>

<style>
    .home {
        margin: 0;
        padding: 60px;
        max-width: 100%;
        height: 100vh;
        background: #110908;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    p, h1 {
        margin: 20px 0;
        color: #f7ece6;
        text-align: center;
    }
</style>