import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import * as THREE from 'three';

//declare const init:any;

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html'
})
export class LaboratoryComponent implements OnInit {
/*
callfun(){
	init();
}
*/
  constructor() {
  	/*

   	let ww = window.innerWidth;
    let wh = window.innerHeight;

      let renderer = new THREE.WebGLRenderer({canvas : document.getElementById('scene')});
      renderer.setSize(ww,wh);

      let scene = new THREE.Scene();

      let camera = new THREE.PerspectiveCamera(50,ww/wh, 0.1, 10000 );
      camera.position.set(0,0,500);
      scene.add(camera);

      //Add a light in the scene
      let directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
      directionalLight.position.set( 0, 0, 350 );
      directionalLight.lookAt(new THREE.Vector3(0,0,0));
      scene.add( directionalLight );

      //Load the obj file
      this.loadOBJ();
      */

  }

  ngOnInit() {	
	//this.callfun();
  }
  /*

  loadOBJ(){
  	      //Manager from ThreeJs to track a loader and its status
      var manager = new THREE.LoadingManager();
      //Loader for Obj from Three.js
      var loader = new THREE.OBJLoader( manager );
      
      //Launch loading of the obj file, addBananaInScene is the callback when it's ready 
      loader.load( 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/banana.obj', this.addBananaInScene);
  }


  addBananaInScene(object){

      let banana = object;
      //Move the banana in the scene
      banana.rotation.x = Math.PI/2;
      banana.position.y = -200;
      banana.position.z = 50;
      //Go through all children of the loaded object and search for a Mesh
      object.traverse( function ( child ) {
        //This allow us to check if the children is an instance of the Mesh constructor
        if(child instanceof THREE.Mesh){
          child.material.color = new THREE.Color(0X00FF00);
          //Sometimes there are some vertex normals missing in the .obj files, ThreeJs will compute them
          child.geometry.computeVertexNormals();
        }
      });
      //Add the 3D object in the scene
      scene.add(banana);
      this.render();

  }

  render(){
  	   requestAnimationFrame(render);

      //Turn the banana
      banana.rotation.z += .01;

      renderer.render(scene, camera);
  }

*/
}
