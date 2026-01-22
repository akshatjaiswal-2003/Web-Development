const reels = [
    {
        isMuted: true,
        username: "travel_with_aryan",
        userProfile: "https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Morning vibes ✨🌄",
        likeCount: 1240,
        isLiked: true,
        commentCount: 86,
        shareCount: 34,
        isFollowed: true,
        video: "./video/v1.mp4"
    },
    {
        isMuted: true,
        username: "foodie_ritika",
        userProfile: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Street food >>> fancy food 😋🔥",
        likeCount: 982,
        isLiked: false,
        commentCount: 57,
        shareCount: 21,
        isFollowed: false,
        video: "./video/v2.mp4"
    },
    {
        isMuted: true,
        username: "fitness_by_rohan",
        userProfile: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Consistency is the key 💪",
        likeCount: 2145,
        isLiked: true,
        commentCount: 132,
        shareCount: 58,
        isFollowed: true,
        video: "./video/v3.mp4"
    },
    {
        isMuted: true,
        username: "campus_life_lpu",
        userProfile: "https://images.unsplash.com/photo-1726654368753-3ddc7c13e37a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Another day at campus 🏫❤️",
        likeCount: 1560,
        isLiked: false,
        commentCount: 94,
        shareCount: 40,
        isFollowed: true,
        video: "./video/v4.mp4"
    },
    {
        isMuted: true,
        username: "code_with_akshat",
        userProfile: "https://images.unsplash.com/photo-1726654368753-3ddc7c13e37a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "DSA grind never stops 🚀💻",
        likeCount: 1890,
        isLiked: true,
        commentCount: 120,
        shareCount: 65,
        isFollowed: true,
        video: "./video/v5.mp4"
    },
    {
        isMuted: true,
        username: "music_mania",
        userProfile: "https://images.unsplash.com/photo-1726654368753-3ddc7c13e37a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Feel the rhythm 🎶✨",
        likeCount: 740,
        isLiked: false,
        commentCount: 41,
        shareCount: 18,
        isFollowed: false,
        video: "./video/v6.mp4"
    },
    {
        isMuted: true,
        username: "wanderlust_neha",
        userProfile: "https://images.unsplash.com/photo-1726654368753-3ddc7c13e37a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Lost in the mountains 🏔️💙",
        likeCount: 2680,
        isLiked: true,
        commentCount: 176,
        shareCount: 92,
        isFollowed: true,
        video: "./video/v7.mp4"
    },
    {
        isMuted: true,
        username: "daily_motivation",
        userProfile: "https://images.unsplash.com/photo-1726654368753-3ddc7c13e37a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Believe in yourself 🌟",
        likeCount: 1120,
        isLiked: false,
        commentCount: 68,
        shareCount: 29,
        isFollowed: false,
        video: "./video/v8.mp4"
    },
    {
        isMuted: true,
        username: "tech_updates",
        userProfile: "https://images.unsplash.com/photo-1726654368753-3ddc7c13e37a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "AI is changing everything 🤖🔥",
        likeCount: 1985,
        isLiked: true,
        commentCount: 143,
        shareCount: 77,
        isFollowed: true,
        video: "./video/v9.mp4"
    },
    {
        isMuted: true,
        username: "late_night_thoughts",
        userProfile: "https://images.unsplash.com/photo-1726654368753-3ddc7c13e37a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Silence speaks louder 🌙🖤",
        likeCount: 860,
        isLiked: false,
        commentCount: 52,
        shareCount: 24,
        isFollowed: false,
        video: "./video/v10.mp4"
    }
];
var allReel = document.querySelector('.all-reels')

var isMuted = true;

function addData() {
    var sum = ""
    reels.forEach(function (elem, idx) {
        sum = sum + `<div class="reel">
                    <video autoplay loop ${elem.isMuted ? 'muted':''} src="${elem.video}"></video>
                    <div class="mute" id=${idx}>
                        ${elem.isMuted?'<i class="ri-volume-mute-line"></i>':'<i class="ri-volume-up-line"></i>'}
                    </div>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}" alt="">
                            <h4>${elem.username}</h4>
                            <button id=${idx} class="follow">${elem.isFollowed ? 'Unfollow' : 'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div id=${idx} class="like">
                            <h4 class="love-icon icon">${elem.isLiked ? '<i class="love ri-heart-3-fill"></i>' : '<i class="ri-heart-line"></i>'}</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon icon"><i class="ri-share-forward-fill"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
                        </div>
                    </div>
                </div>`
    })

    allReel.innerHTML = sum
}

addData()

allReel.addEventListener('click', function (dets) {
    if (dets.target.className == 'like') {
        if (!reels[dets.target.id].isLiked) {
            reels[dets.target.id].likeCount++
            reels[dets.target.id].isLiked = true
        }
        else {
            reels[dets.target.id].likeCount--
            reels[dets.target.id].isLiked = false
        }
        addData()
    }
    if (dets.target.className == 'follow') {
        if (!reels[dets.target.id].isFollowed) {
            reels[dets.target.id].isFollowed = true
        }
        else {
            reels[dets.target.id].isFollowed = false
        }
        addData()
    }
    if (dets.target.className == 'mute') {
        if (!reels[dets.target.id].isMuted) {
            reels[dets.target.id].isMuted = true
        }
        else {
            reels[dets.target.id].isMuted = false
        }
        addData()
    }
})