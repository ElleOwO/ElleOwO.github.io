import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

//Keep the 3D object on a global variable, so we can access it later
let object;

//create three.js scene
const scene = new THREE.Scene();
//create cam perspective
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
//new Web GLTF loader
const loader = new GLTFLoader();

let controls; // Declare controls variable


//Mouse position, keeps track so we can make model move
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

//create a WEBGL renderer

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true  }); //Alpha: true allows for the transparent background;
renderer.setSize()
renderer.setSize(window.innerWidth, window.innerHeight);

//USE ID NAME TO ADD CANVAS TO HTML
//document.body.appendChild(renderer.domElement); // Append the renderer's DOM element to the body
document.getElementById("container-melody").appendChild(renderer.domElement);

function loadModel(objToRender) {
    // Clear the existing scene

                //RESTORE CODE IN COMMENT BELOW IF WEIRD

    //scene.children.length = 0;

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
function loadMelody(objToRender) {
    // Clear the existing scene

    //RESTORE CODE IN COMMENT BELOW IF WEIRD

    //scene.children.length = 0;

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


    // Render the scene
    function animate() {
        requestAnimationFrame(animate);
        if (object) {
            object.rotation.y = -2.3 + mouseX / window.innerWidth * 5;
            object.rotation.x = -1.0 + mouseY * 2 / window.innerHeight;
            object.position.set(0, -0.5, -0.5);        }
        renderer.render(scene, camera);
    }

    animate();
}


// Add a listener to the window, so we can resize the window and the camera
/**window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);*/


document.onmousemove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
}

// Export loadModel function
export { loadModel, initScene };
