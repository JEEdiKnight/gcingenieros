(function () {
    var app = angular.module('myApp', []);

    app.controller('TabController', function () {
        this.tab = 1;

        this.setTab = function (tabId) {
            this.tab = tabId;
            if (tabId === 5 && !this.map) {
                var myLatLng = new google.maps.LatLng(-12.074700, -77.032431), mapOptions = {
                    center: myLatLng,
                    zoom: 16,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                this.map = new google.maps.Map(document.getElementById('map-canvas'),
                                               mapOptions);
                var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: this.map,
                    title: "GC Ingenieros"
                });
                marker.setMap(this.map);
            }
        };

        this.isSet = function (tabId) {

            return this.tab === tabId;
        };
    });
    app.controller('QuienesSomosTabController', function() {
        this.qsTab = 1;

        this.setQSTab = function (tabId) {
            this.qsTab = tabId;
        };

        this.isQSSet = function (tabId) {
            return this.qsTab === tabId;
        };
    });
    app.controller('ServiciosTabController', function () {
        this.tab = 1;

        this.setTab = function (tabId) {
            this.tab = tabId;
        };

        this.isSet = function (tabId) {
            return this.tab === tabId;
        };
    });
})();