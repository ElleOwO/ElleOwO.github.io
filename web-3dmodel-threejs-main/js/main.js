import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";

let object;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
const loader = new GLTFLoader();
let controls; // Declare controls variable

//Keep track of the mouse position, so we can make the eye move
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;


// Create a WebGL renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); // Append the renderer's DOM element to the body

function loadModel(objToRender) {
    // Clear the existing scene
    scene.children.length = 0;

    // Load the new model
    loader.load(
        `../web-3dmodel-threejs-main/models/${objToRender}/scene.gltf`,
        function (gltf) {
            object = gltf.scene;
            scene.add(object);
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function (error) {
            console.error(error);
        }
    );
}

function initScene() {
    //Add lights to the scene, so we can actually see the 3D model
    const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
    topLight.position.set(500, 500, 500) //top-left-ish
    topLight.castShadow = true;
    scene.add(topLight);

    const ambientLight = new THREE.AmbientLight(0x333333, 4);
    scene.add(ambientLight);

    // Set camera position
    camera.position.z = 2; // Update this value

    // Initialize controls when needed
    if (controls) {
        controls.dispose();
    }
    controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 0;
    controls.maxDistance = 1;

    // Render the scene
    function animate() {
        requestAnimationFrame(animate);
        if (object) {
            object.rotation.y = -2.3 + mouseX / window.innerWidth * 5;
            object.rotation.x = -1.0 + mouseY * 2 / window.innerHeight;
            object.position.set(0, 0, -0.5);        }
        renderer.render(scene, camera);
    }

    animate();
}


// Add a listener to the window, so we can resize the window and the camera
window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

document.onmousemove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
}

// Export loadModel function
export { loadModel, initScene };

initScene();
loadModel("kuromi");

// Add other utility functions or settings as needed...
