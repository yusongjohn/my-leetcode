/*
 * @lc app=leetcode.cn id=355 lang=javascript
 *
 * [355] Design Twitter
 */

// @lc code=start

var Twitter = function () {
    this.usersMap = new Map();
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    const twitterPerson = this.getPerson(userId);
    this.usersMap.get(userId).postTweet(tweetId);
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    const twitterPerson = this.getPerson(userId);
    let allNews = [...twitterPerson.tweetIds];

    twitterPerson.followeeIds.forEach(followeeId => {
        allNews.push(...this.getPerson(followeeId).tweetIds);
    });

    allNews = [...new Set(allNews)]
    allNews.sort((b, a) => a.tweetIdCount - b.tweetIdCount);
    return allNews.splice(0, 10).map(item => item.tweetId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) { // followerId 关注 followeeId    
    const twitterPerson = this.getPerson(followerId);
    twitterPerson.follow(followeeId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) { // followerId 关注 followeeId
    const twitterPerson = this.getPerson(followerId);
    twitterPerson.unfollow(followeeId);
};

Twitter.prototype.getPerson = function (userId) {
    if (!this.usersMap.get(userId)) {
        this.usersMap.set(userId, new TwitterPerson(userId))
    }
    return this.usersMap.get(userId);
}


function TwitterPerson(userId) {
    this.userId = userId;
    this.followeeIds = []; // 我关注了那些人
    this.tweetIds = [];
}

TwitterPerson.tweetIdCount = 0; // 文章发表先后顺序

TwitterPerson.prototype.postTweet = function (tweetId) {
    this.tweetIds.push({ tweetId, tweetIdCount: TwitterPerson.tweetIdCount++ });
}

TwitterPerson.prototype.follow = function (followeeId) {
    this.followeeIds.push(followeeId);
}

TwitterPerson.prototype.unfollow = function (followeeId) {
    const index = this.followeeIds.findIndex(tempId => tempId === followeeId)
    if (index >= 0) {
        this.followeeIds.splice(index, 1)
    }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
// @lc code=end

// ["Twitter","postTweet","getNewsFeed","follow","postTweet","getNewsFeed","unfollow","getNewsFeed"]
// [[],        [1,5],        [1]         ,[1,2]  ,[2,6],          [1],       [1,2],      [1]]

// const instance = new Twitter();
// instance.postTweet(1, 5)
// instance.getNewsFeed(1); // 5 
// instance.follow(1, 2);
// instance.postTweet(2, 6); // 6,5 
// instance.getNewsFeed(1);
// instance.unfollow(1, 2);
// instance.getNewsFeed(1); // 5

// ["Twitter","postTweet","getNewsFeed","follow","getNewsFeed","unfollow","getNewsFeed"]
// [[],           [1,1],      [1],        [2,1],      [2],        [2,1],      [ 2]]

// const instance = new Twitter();
// instance.postTweet(1, 1)
// instance.getNewsFeed(1) // 1
// instance.follow(2, 1)
// instance.getNewsFeed(2) // 1
// instance.unfollow(2, 1)
// instance.getNewsFeed(2)