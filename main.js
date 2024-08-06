function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 41.286887940960014, lng: 69.24195833282576 },
        zoom: 13
    });

    const marker = new google.maps.Marker({
        position: { lat: 41.286887940960014, lng: 69.24195833282576 },
        map: map,
        title: 'My Location'
    });
}