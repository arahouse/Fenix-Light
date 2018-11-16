//  ===============================================================
var Events          = {},
    App             = {};
alarmFading = function() {
    $('#alarm').fadeIn(600);
};

var BrowserInfo = {
    getBrowserInfo: function() {
        var userAgent = navigator.userAgent;
        var browserName = BrowserInfo.getBrowserName(userAgent);
        var browserVersion = BrowserInfo.getBrowserVersion(userAgent, browserName).split(".")[0];
        if((browserName == 'chrome')&&(browserVersion < 44)){
            alarmFading();
        }
        if((browserName == 'firefox')&&(browserVersion < 40)){
            alarmFading();
        }
        if((browserName == 'ie')&&(browserVersion < 10)){
            alarmFading();
        }
        if((browserName == 'newie')&&(browserVersion < 10)){
            alarmFading();
        }
        return browserName + ' ' + browserVersion;
    },

    getBrowserName: function(userAgent) {
        if (userAgent.search(/MSIE/) > -1) return "ie";
        else if (userAgent.search(/Edge/) > -1) return "edge";
        else if (userAgent.search(/Firefox/) > -1) return "firefox";
        else if (userAgent.search(/Opera/) > -1) return "opera";
        else if (userAgent.search(/Chrome/) > -1) return "chrome";
        else if (userAgent.search(/Safari/) > -1) return "safari";
        else if (userAgent.search(/Konqueror/) > -1) return "konqueror";
        else if (userAgent.search(/Iceweasel/) > -1) return "iceweasel";
        else if (userAgent.search(/SeaMonkey/) > -1) return "seamonkey";
        else if (userAgent.search(/rv/) > -1) return "newie";
        else return 'unknown';
    },

    getBrowserVersion: function(userAgent, browserName) {
        var version = '';
        switch (browserName) {
            case "ie" : version = (userAgent.split("MSIE ")[1]).split(";")[0];break;
            case "newie" : version = userAgent.split("rv:")[1];break;
            case "edge" : version = userAgent.split("Edge/")[1];break;
            case "firefox" : version = userAgent.split("Firefox/")[1];break;
            case "opera" : version =  userAgent.split("Version/")[1];break;
            case "chrome" : version = (userAgent.split("Chrome/")[1]).split(" ")[0];break;
            case "safari" : version = (userAgent.split("Version/")[1]).split(" ")[0];break;
            case "konqueror" : version = (userAgent.split("KHTML/")[1]).split(" ")[0];break;
            case "iceweasel" : version = (userAgent.split("Iceweasel/")[1]).split(" ")[0];break;
            case "seamonkey" : version = userAgent.split("SeaMonkey/")[1];break;
            default: version = 'unknown';
        }
        return version.split(".")[0];
    }

};

Events = {
    init: function(){
        $('#alarm-close').click(function(){
            $('#alarm').slideToggle();
        });
    }
};

App = {
    init: function(){
        BrowserInfo.getBrowserInfo();
        Events.init();
    }
};

$(document).ready(function(){
    App.init();
});