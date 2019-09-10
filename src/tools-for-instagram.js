function toolsForInstagram() {
    global.fs = require('fs');
    global.sleep = require('./sleep.js');
    global.login =  require('./login.js');
    global.getFollowers = require('./getFollowers.js');
    global.getFollowing = require('./getFollowing.js');
    global.readFollowers = require('./readFollowers.js');
    global.readFollowing = require('./readFollowing.js');
    global.getUserInfo = require('./getUserInfo.js');
    global.likeUrl = require('./likeUrl.js');
    global.recentHashtagList = require('./recentHashtagList.js');
    global.topHashtagList = require('./topHashtagList.js');
    global.likePost = require('./likePost.js');
    global.recentLocationList = require('./recentLocationList.js');
    global.topLocationList = require('./topLocationList.js');
    global.savePosts = require('./savePosts.js');
    global.followUser = require('./followUser.js');
    global.followUserByPost = require('./followUserByPost');
    global.unfollowUser = require('./unfollowUser.js');
    global.getLikeActivityByHours = require('./getLikeActivityByHours.js');
    global.getFollowActivityByHours = require('./getFollowActivityByHours.js');
    global.getUnfollowActivityByHours = require('./getUnfollowActivityByHours.js');
    global.isTimeInRange = require('./isTimeInRange.js');
    global.getLikeActivityFromHourToNow = require("./getLikeActivityFromHourToNow.js");
    global.getFollowActivityFromHourToNow = require("./getFollowActivityFromHourToNow.js");
    global.lastLikeMinutesAgo = require("./lastLikeMinutesAgo.js");
    global.lastFollowMinutesAgo = require("./lastFollowMinutesAgo.js");
    global.removeCookie = require('./removeCookie.js');
    global.likeRecentHashtagsByIntervals = require("./likeRecentHashtagsByIntervals.js");
    global.followRecentHashtagsByIntervals = require('./followRecentHashtagsByIntervals.js');
    global.loadConfig = require('./loadConfig.js');
    global.viewStoriesFromUser = require('./viewStoriesFromUser.js');
    global.viewStoriesFromId = require('./viewStoriesFromId.js');
    global.viewStoriesFromFollowing = require('./viewStoriesFromFollowing.js');
    global.viewStoriesFromFollowers = require('./viewStoriesFromFollowers.js');
}

module.exports = toolsForInstagram();