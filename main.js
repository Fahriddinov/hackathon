document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const previewContainer = document.getElementById('previewContainer');
    previewContainer.innerHTML = ''; 

    if (file) {
        const url = URL.createObjectURL(file);
        const preview = document.createElement(file.type.startsWith('video/') ? 'video' : 'img');
        
        preview.classList.add('preview');
        preview.src = url;
        
        if (file.type.startsWith('video/')) {
            preview.controls = true;
        }
        
        previewContainer.appendChild(preview);
    }
});


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