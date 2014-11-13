angular.module("exercise",[])
.controller("StoryCtrl", StoryCtrl)
.factory("stories", stories)
.factory("redditApi", redditApi)


function redditApi($http) {
  // TODO this is the only factory you'll need to modify
  // TODO try to do this *without* asking for the $q service
  var REDDIT_URL = "http://www.reddit.com/r/";

  // for speed, you might like to switch this out
  // to load the initial story JSON
  // var REDDIT_URL = "./";

  return {
    subreddit: function(id) {
      // TODO 
      // return a promise for an array of stories
      // using $http.get(REDDIT_URL + id + ".json")
      // - the data is in `resp.data.data.children`
      // - each item in `children` has `data` property with the stuff we want (e.g `title`)
    },
    comments: function(story) {
      // TODO 
      // return a promise for an array of comments
      // using $http.get(REDDIT_URL + story.permalink + ".json")
      // - the data is in `resp.data[1].data.children`
      // - each item in `children` has `data` property with the stuff we want (e.g `title`)

      //if wifi isn't working
      // story.permalink = "comments";
    },
  }
}



function StoryCtrl(stories, $scope) {
  $scope.stories = stories.subreddit("angularjs");
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
    // you'll note this is pretty similar to $resource's API
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

