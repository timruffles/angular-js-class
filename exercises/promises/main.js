angular.module("exercise",[])
.controller("StoryCtrl", StoryCtrl)
.factory("stories", stories)
.factory("redditApi", redditApi)



function StoryCtrl(stories, $scope) {
  $scope.stories = stories.subreddit("angularjs");

  $scope.expand = function() {
  }
}

function stories(redditApi) {

  function Story(data) {
    angular.extend(this, data);
  }

  Story.prototype = {
    get comments() {
      if(this._comments) {
        return this._comments;
      }
      return this._comments = 
        promiseForArrayToArray(redditApi.comments(this));
    }
  };

  return {
    subreddit: function(id) {
      return promiseForArrayToArray(redditApi.subreddit(id), create);
    }
  }

  function create(data) {
    return new Story(data);
  }



  function promiseForArrayToArray(promise, create) {
    create = create || angular.identity;
    var array = [];
    array.$promise = promise;
    
    promise
      .then(function(xs) {
        xs.forEach(function(x) {
          array.push(create(x));
        });
      });

    return array;
  }
}

function redditApi($http) {
  var REDDIT_URL = "http://www.reddit.com/r/";

  // for speed, you might like to switch this out
  // to load the initial story JSON
  // var REDDIT_URL = "./";

  return {
    subreddit: function(id) {
      return $http.get(REDDIT_URL + id + ".json")
        .then(function(resp) {

          return resp.data.data.children.map(function(c) {
            return c.data;
          });

        })
    },
    comments: function(story) {
      // if wifi isn't working
      // story.permalink = "comments";
      return $http.get(REDDIT_URL + story.permalink + ".json")
        .then(function(resp) {
          return resp.data[1].data.children.map(function(c) {
            return c.data;
          });
        });
    },
  }
}

