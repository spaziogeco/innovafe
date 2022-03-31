<template lang="html">
  <div class="container">
    <div class="row">
      <div id="canvas-container" class="canvas" data-aos="zoom-out">
      </div>
    </div>
  </div>
</div>
</template>

<script>
import gsap from 'gsap'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
export default {
  mounted(){

    const scene = new THREE.Scene();
    const container = document.getElementById('canvas-container');
    const camera = new THREE.PerspectiveCamera( 75, container.offsetWidth / container.offsetHeight, 0.1, 1000 );
    const renderer =  new THREE.WebGLRenderer({ alpha: true, antialias: true});
    const controls = new OrbitControls( camera, renderer.domElement );
    controls.enableZoom = false;

    // const containerWidth = $(container).offsetWidth;
    // const containerHeight = $(container).offsetHeight;


    renderer.setSize( container.offsetWidth, container.offsetHeight );
    // renderer.setSize($(container).width(), $(container).height());
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild( renderer.domElement );
    const material = new THREE.MeshPhongMaterial()
    //create a sphere

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1, 60, 60),
      new THREE.MeshBasicMaterial({
        // color: 0xFF0000
        map: new THREE.TextureLoader().load('8081_earthmap10k.jpg'),
        // bumpMap: new THREE.TextureLoader().load('8081_earthmap10k.jpg'),
        // bumpScale: 0.015
      })
    );

    // const mesh = new THREE.Mesh(
    //   new THREE.SphereBufferGeometry(0.009,20,20),
    //   new THREE.MeshBasicMaterial({
    //     color:0xff0000,
    //     side: THREE.DoubleSide
    //   })
    // )


    // const mesh1 = new THREE.Mesh(
    //   new THREE.SphereBufferGeometry(0.009,20,20),
    //   new THREE.MeshBasicMaterial({color:0xff0000})
    // )
    //
    // const mesh2 = new THREE.Mesh(
    //   new THREE.SphereBufferGeometry(0.009,20,20),
    //   new THREE.MeshBasicMaterial({color:0xff0000})
    // )
    //
    // const mesh3 = new THREE.Mesh(
    //   new THREE.SphereBufferGeometry(0.009,20,20),
    //   new THREE.MeshBasicMaterial({color:0xff0000})
    // )

    function convertLatLngToCartesian(p){
      let lat = (90-p.lat) * (Math.PI/180);
      let lng = (180+p.lng) * (Math.PI/180);
      let x = -(Math.sin(lat)*Math.cos(lng));
      let z = (Math.sin(lat)*Math.sin(lng))
      let y = (Math.cos(lat))
      return{x,y,z}
    }

    // function convertLatLngToCartesian2(lat,lon){
    //   var phi = (90-lat)*(Math.PI/180);
    //   var theta = (lon+180)*(Math.PI/180);
    //   let x = -(Math.sin(phi)*Math.cos(theta));
    //   let z = (Math.sin(phi)*Math.sin(theta));
    //   let y = (Math.cos(phi))
    //   return{x,y,z}
    // }


    const arrayPoint = [
      {
        name: 'Milano',
        players: 10,
        lat: 45.166667,
        lng: 9.166667
      },
      {
        name: 'Los Angeles',
        players: 20,
        lat: 34.052234,
        lng: -118.243685
      },
      {
        name: 'Pavia',
        players: 1,
        lat: 45.4654219,
        lng: 9.1859243
      },
      {
        name: 'johannesburg',
        players: 36,
        lat: -26.195246,
        lng: 28.034088
      }
    ]

    // let point1 = {
    //   lat: 45.166667, //sopra e sotto
    //   lng: 9.166667//destra sinistra
    // }
    //
    //
    // let point2 = {
    //   lat: 34.052234,
    //   lng: -118.243685
    // }
    //
    // let point3 ={
    //   lat: -26.195246,
    //   lng: 28.034088
    // }

    // let point4 ={
    //   lat: 	45.4654219,
    //   lng: 9.1859243
    // }

    for (var i = 0; i < arrayPoint.length; i++) {
      let pos = convertLatLngToCartesian(arrayPoint[i])
      let players = arrayPoint[i].players/1000;
      // console.log(arrayPoint[i].players/100);
      // //loader-model
      // const loader = new GLTFLoader();
      // // Load a glTF resource
      // loader.load( 'plane.glb', function ( gltf ) {
      // loader.position.set(pos.x,pos.y,pos.z)
      // scene.add( gltf.scene );
      //
      // });
      const sphere2 = new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 60, 60),
        new THREE.MeshBasicMaterial({
          color: 0xFF0000
        })
      );
      scene.add( sphere2 );
      const map = new THREE.TextureLoader().load( 'GPS-PNG-Clipart2.png' );
      const material = new THREE.SpriteMaterial( { map: map} );
      const sprite = new THREE.Sprite( material )
      // sprite.material.rotation = 4 * Math.PI * pos.z;
      let center = new THREE.Vector3();
      sprite.lookAt(center)
      sprite.scale.set( 0.1, 0.2, 0.1 );
      // sprite.pivot = new THREE.Vector2(0.5, 1) // 50%, 100% pivot at center bottom
      scene.add( sprite );

      const mesh = new THREE.Mesh(
        new THREE.SphereBufferGeometry(players,20,20),
        // new THREE.PlaneGeometry(0.1,0.1),
        new THREE.MeshBasicMaterial({
          color:0xff0000,
          side: THREE.DoubleSide,
          // map: new THREE.TextureLoader().load('GPS-PNG-Clipart.png'),
          transparent: true
        })
      )
      // let center = new THREE.Vector3();
      //
      sprite.position.set(pos.x,pos.y,pos.z)
      // mesh.updateWorldMatrix(true, false);
      // mesh.getWorldPosition(center);
      mesh.lookAt(0,0,0)
      mesh.lookAt(0,0,0)

      // mesh.rotation.set(new THREE.Vector3( 0, 0, Math.PI / 2));
      // mesh.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0, 0.05 ) );
      // mesh.up = new THREE.Vector3(0,0,1);

      scene.add(mesh)
    }


    // let pos = convertLatLngToCartesian(point1)
    // let pos1 = convertLatLngToCartesian(point2)
    // let pos2 = convertLatLngToCartesian(point3)
    // let pos3 = convertLatLngToCartesian(point4)
    // // console.log(pos)
    //
    //
    //   mesh.position.set(pos.x,pos.y,pos.z)
    //   mesh1.position.set(pos1.x,pos1.y,pos1.z)
    //   mesh2.position.set(pos2.x,pos2.y,pos2.z)
    //   mesh3.position.set(pos3.x,pos3.y,pos3.z)
    //
    //   scene.add(mesh)
    //   scene.add(mesh1)
    //   scene.add(mesh2)
    //   scene.add(mesh3)



    const group = new THREE.Group()
    group.add(sphere)
    scene.add(group)

    camera.position.z = 2;

    const mouse = {
      x: undefined,
      y: undefined
    }

    function animate() {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
      // sphere.rotation.y += 0.003
      // gsap.to(group.rotation, {
      //   x: -mouse.y * 0.3,
      //   y: mouse.x * 0.5,
      //   duration: 2
      // })
    }
    animate();


    // addEventListener('mousemove' , () => {
    //   mouse.x = (event.clientX / innerWidth) * 2 - 1
    //   mouse.y = -(event.clientY / innerHeight) * 2 + 1
    //   // console.log(mouse)
    // });




  }
}
</script>

<style lang="css" scoped>
#canvas-container{
  height: 100vh;
}
</style>
