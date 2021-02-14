let container;
let camera;
let renderer;
let scene;
let cameraz = 1;
let parasol;
let angle = 0;

function init(){
    
    container = document.getElementById('scene');

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.set(-1, 1, cameraz)

    const ambient = new THREE.AmbientLight(0x404040,3);
    scene.add(ambient)

    const light = new THREE.DirectionalLight(0xffffff,2)
    light.position.set(10,10,10)
    scene.add(light)

    renderer = new THREE.WebGLRenderer({alpha: true});
	renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement)

    let loader = new THREE.GLTFLoader();
    loader.load("./3d/parasol.gltf", function(gltf){
        const root = gltf.scene;
        scene.add(root);
        parasol = gltf.scene.children[0]
        animate()
    })

}

function animate(){

    requestAnimationFrame(animate)
    parasol.rotation.y+=0.05;
    camera.position.z = (camera.position.z + 0.005)%7;
    console.log(camera.position.z)
	// camera.position.z = 400 * Math.sin( time );
    renderer.render( scene, camera );

}

init()