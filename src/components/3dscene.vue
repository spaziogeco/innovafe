<template lang="html">
  <div class="container-3d container-fluid">
    <div class="container">
      <div class="row">
        <div id="canvas-container" data-aos="zoom-out">
          <iframe title="Cartoon Low Poly World Map 3D model - Sketchfab" class="c-viewer__iframe" src="https://sketchfab.com/models/e87fa1e143f84348a915b7fe1376d957/embed?autostart=1&amp;internal=1&amp;tracking=0&amp;ui_infos=0&amp;ui_snapshots=1&amp;ui_stop=0&amp;ui_watermark=0" id="api-frame" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking="true" execution-while-out-of-viewport="true" execution-while-not-rendered="true" web-share="true" allowfullscreen=""></iframe>
        </div>
        <div class="btn__normal" data-aos="flip-up"><router-link to="/classifica">SCOPRI LA CLASSIFICA</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
export default {
  mounted(){

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer();
    const controls = new OrbitControls( camera, renderer.domElement );
    const container = document.getElementById('canvas-container');
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );

    const loader = new GLTFLoader();

    const geometry = new THREE.BoxGeometry();
    			const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    			const cube = new THREE.Mesh( geometry, material );
    			scene.add( cube );

    			camera.position.z = 5;

    			function animate() {
    				requestAnimationFrame( animate );

    				cube.rotation.x += 0.01;
    				cube.rotation.y += 0.01;

    				renderer.render( scene, camera );
    			};

    			animate();
}
}
</script>

<style lang="css" scoped>

.btn__normal{
    transition: all .2s linear;
    width: auto;
    margin: auto;
    min-width: 400px;
}

.btn__normal a{
  margin: auto;
  text-align: center;
  background: #035d8bc2;
  display: block;
  width: auto;
  padding: 15px 30px;
  border-radius: 30px;
  color: #fff;
  box-shadow: -1px 6px 3px #00000029;
  max-width: fit-content;
  text-decoration: none;
  font-weight: 600;
  font-size: 21px;
  transition: all .2s linear;
}

.btn__normal:hover{
  transform: scale(1.1);
}

.btn__normal:hover a{
  background: #035d8b;
}

.container-3d{
  background: #fff;
  padding-bottom:30px;
}

#canvas-container{
  overflow: hidden;
  margin-top: 50px;
  margin-bottom: 50px;
}
.scene{
  height: 350px;
  background: #fff;
}
iframe{
  width:100%;
  height: 500px;
}
</style>
