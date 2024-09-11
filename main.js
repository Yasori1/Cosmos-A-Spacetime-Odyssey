var camera1, camera2, scene1, scene2, renderer1, renderer2;

var isUserInteracting=false,
    onMouseDownMouseX = 0,
    onMouseDownMouseY=0,
    lon=0,
    onMouseDownMouseLon=0,
    lat=0,
    onMouseDownMouseLat=0,
    phi=0,
    theta=0;

init();
animate();

function init(){
    var container1, mesh1;
    var container2, mesh2;

    container1=document.getElementById('space-container');
    container2 = document.getElementById('space-container-top');

    camera1 = new THREE.PerspectiveCamera(155, window.innerWidth / window.innerHeight,1,1500);
    camera1.target = new THREE.Vector3(0,0,0);

    camera2 = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight,1,1500);
    camera12.target = new THREE.Vector3(0,0,0);

    scene1 = new THREE.Scene();
    scene2 = new THREE.Scene();

    var geometry1 = new THREE.SphereGeometry(1500,160,40);
    geometry1.scale(-1,1,1)

    var geometry2 = new THREE.SphereGeometry(500,160,400);
    geometry2.scale(-1,1,1);

  THREE.TextureLoader.prototype.crossOrigin='';

    var material1= new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1037366/space-blue.jpg')
    });

    var material2 = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1037366/space2.svg')
    });
}
