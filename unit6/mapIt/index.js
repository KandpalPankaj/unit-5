function initMap() {
    let arr = [{ id: 1, m: 1, position: { lat: 20.5937, lng: 78.9629 }, title: "india", },
    { id: 2, m: 2, position: { lat: 30.3165, lng:78.0322, }, title: "Lucknow", },
        { id: 3, m: 3, position: { lat: 30.8467, lng: 80.7462, }, title: "Unknown", },
        { id: 4, m: 4, position: { lat: 29.8467, lng: 80.8462, }, title: "Unknown", }]
    let map;

    let mapOption = {
        center: { lat: 20.5937, lng: 78.9629 },
        zoom: 8
    }
    map = new google.maps.Map(document.getElementById("map"), mapOption);

    arr.map((e) => {
        e.id = {
            position: e.position,
            title: e.title,

        }
        e.m = new google.maps.Marker(e.id)
        e.m.setMap(map)
    })
}