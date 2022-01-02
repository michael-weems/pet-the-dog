import {
  Camera,
  DirectionalLight,
  HemisphereLight,
  Mesh,
  Scene,
  WebGLRenderer,
} from 'three';
import THREE = require('three');
import {Dog} from './dog';
import {Hand} from './hand';

/**
 * THREEJS RELATED VARIABLES
 */
let scene: Scene;
let camera: Camera;
//let     controls:
let fieldOfView: number;
let aspectRatio: number;
let nearPlane: number;
let farPlane: number;
let shadowLight: DirectionalLight;
let backLight: DirectionalLight;
let light: HemisphereLight;
let renderer: WebGLRenderer;
let container: HTMLElement;

//SCENE
let floor: Mesh;
let dog: any;
let hand: any;
let isBlowing = false;

//SCREEN VARIABLES

let HEIGHT: number;
let WIDTH: number;
let windowHalfX: number;
let windowHalfY: number;
let mousePos: {x: number; y: number} = {x: 0, y: 0};
const dist = 0;

//INIT THREE JS, SCREEN AND MOUSE EVENTS

function init() {
  scene = new THREE.Scene();
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;
  aspectRatio = WIDTH / HEIGHT;
  fieldOfView = 60;
  nearPlane = 1;
  farPlane = 2000;
  camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane
  );
  camera.position.z = 800;
  camera.position.y = 0;
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(WIDTH, HEIGHT);
  renderer.shadowMapEnabled = true;
  container = document.getElementById('world') as HTMLElement;
  container.appendChild(renderer.domElement);
  windowHalfX = WIDTH / 2;
  windowHalfY = HEIGHT / 2;
  window.addEventListener('resize', onWindowResize, false);
  document.addEventListener('mousemove', handleMouseMove, false);
  document.addEventListener('mousedown', handleMouseDown, false);
  document.addEventListener('mouseup', handleMouseUp, false);
  document.addEventListener('touchstart', handleTouchStart, false);
  document.addEventListener('touchend', handleTouchEnd, false);
  document.addEventListener('touchmove', handleTouchMove, false);
  /*
  controls = new THREE.OrbitControls( camera, renderer.domElement);
  //*/
}

function onWindowResize() {
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;
  windowHalfX = WIDTH / 2;
  windowHalfY = HEIGHT / 2;
  renderer.setSize(WIDTH, HEIGHT);
  //   camera.aspect = WIDTH / HEIGHT;
  //   camera.updateProjectionMatrix();
}

function handleMouseMove(event: {clientX: any; clientY: any}) {
  mousePos = {x: event.clientX, y: event.clientY};
}

function handleMouseDown(_event: any) {
  isBlowing = true;
}
function handleMouseUp(_event: any) {
  isBlowing = false;
}

function handleTouchStart(event: {
  touches?: string | any[];
  preventDefault: () => void;
}) {
  if (!event.touches) return;
  if (event.touches.length > 1) {
    event.preventDefault();
    mousePos = {x: event.touches[0].pageX, y: event.touches[0].pageY};
    isBlowing = true;
  }
}

function handleTouchEnd(_event: any) {
  //mousePos = {x:windowHalfX, y:windowHalfY};
  isBlowing = false;
}

function handleTouchMove(event: {
  touches?: string | any[];
  preventDefault: () => void;
}) {
  if (!event.touches) return;
  if (event.touches.length === 1) {
    event.preventDefault();
    mousePos = {x: event.touches[0].pageX, y: event.touches[0].pageY};
    isBlowing = true;
  }
}

function createLights() {
  light = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.5);

  shadowLight = new THREE.DirectionalLight(0xffffff, 0.8);
  shadowLight.position.set(200, 200, 200);
  shadowLight.castShadow = true;
  //   shadowLight.shadowDarkness = 0.2;

  backLight = new THREE.DirectionalLight(0xffffff, 0.4);
  backLight.position.set(-100, 200, 50);
  //   backLight.shadowDarkness = 0.1;
  backLight.castShadow = true;

  scene.add(backLight);
  scene.add(light);
  scene.add(shadowLight);
}

function createFloor() {
  floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(1000, 500),
    new THREE.MeshBasicMaterial({color: 0xebe5e7})
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -100;
  floor.receiveShadow = true;
  scene.add(floor);
}

function createLion() {
  dog = new Dog();
  scene.add(dog.threegroup);
}

function createFan() {
  hand = new Hand();
  hand.threegroup.position.z = 350;
  scene.add(hand.threegroup);
}

function loop() {
  render();
  const xTarget = mousePos.x - windowHalfX;
  const yTarget = mousePos.y - windowHalfY;

  hand.isBlowing = isBlowing;
  hand.update(xTarget, yTarget);
  if (isBlowing) {
    dog.cool(xTarget, yTarget);
  } else {
    dog.look(xTarget, yTarget);
  }
  requestAnimationFrame(loop);
}

function render() {
  //   if (controls) controls.update();
  renderer.render(scene, camera);
}

init();
createLights();
createFloor();
createLion();
createFan();
loop();
