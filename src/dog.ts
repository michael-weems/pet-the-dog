import {rule3} from './utils';
import * as THREE from 'three';
export class Dog {
  windTime: number;
  bodyInitPositions: any[];
  maneParts: any[];
  threegroup: THREE.Group;
  yellowMat: THREE.MeshLambertMaterial;
  redMat: THREE.MeshLambertMaterial;
  pinkMat: THREE.MeshLambertMaterial;
  whiteMat: THREE.MeshLambertMaterial;
  purpleMat: THREE.MeshLambertMaterial;
  greyMat: THREE.MeshLambertMaterial;
  blackMat: THREE.MeshLambertMaterial;
  body: THREE.Mesh<THREE.CylinderGeometry, any>;
  bodyVertices: number[];
  leftKnee: THREE.Mesh<THREE.BoxGeometry, any>;
  rightKnee: THREE.Mesh<THREE.BoxGeometry, any>;
  backLeftFoot: THREE.Mesh<THREE.BoxGeometry, any>;
  backRightFoot: THREE.Mesh<THREE.BoxGeometry, any>;
  frontRightFoot: THREE.Mesh<THREE.BoxGeometry, any>;
  frontLeftFoot: THREE.Mesh<THREE.BoxGeometry, any>;
  mane: THREE.Group;
  face: THREE.Mesh<THREE.BoxGeometry, any>;
  mustaches: any[];
  mustache1: THREE.Mesh<THREE.BoxGeometry, any>;
  mustache2: any;
  mustache3: any;
  mustache4: any;
  mustache5: THREE.Mesh<THREE.BoxGeometry, any>;
  mustache6: THREE.Mesh<THREE.BoxGeometry, any>;
  spot1: THREE.Mesh<THREE.BoxGeometry, any>;
  spot2: any;
  spot3: any;
  spot4: any;
  spot5: any;
  spot6: any;
  spot7: any;
  spot8: any;
  leftEye: THREE.Mesh<THREE.BoxGeometry, any>;
  rightEye: THREE.Mesh<THREE.BoxGeometry, any>;
  leftIris: THREE.Mesh<THREE.BoxGeometry, any>;
  rightIris: THREE.Mesh<THREE.BoxGeometry, any>;
  mouth: THREE.Mesh<THREE.BoxGeometry, any>;
  smile: THREE.Mesh<THREE.TorusGeometry, any>;
  lips: THREE.Mesh<THREE.BoxGeometry, any>;
  rightEar: THREE.Mesh<THREE.BoxGeometry, any>;
  leftEar: THREE.Mesh<THREE.BoxGeometry, any>;
  nose: THREE.Mesh<THREE.BoxGeometry, any>;
  head: THREE.Group;
  tHeagRotY: any;
  tHeadRotX: any;
  tHeadPosX: any;
  tHeadPosY: any;
  tHeadPosZ: any;
  tEyeScale: any;
  tIrisYScale: any;
  tIrisZScale: any;
  tIrisPosY: any;
  tLeftIrisPosZ: any;
  tRightIrisPosZ: any;
  tRightKneeRotZ: any;
  tLeftKneeRotZ: any;
  tLipsPosX: any;
  tLipsPosY: any;
  tSmilePosX: any;
  tMouthPosZ: any;
  tSmilePosZ: any;
  tSmilePosY: any;
  tSmileRotZ: any;
  constructor() {
    this.windTime = 0;
    this.bodyInitPositions = [];
    this.maneParts = [];
    this.threegroup = new THREE.Group();
    this.yellowMat = new THREE.MeshLambertMaterial({
      color: 0xfdd276,
      // shading: THREE.FlatShading,
    });
    this.redMat = new THREE.MeshLambertMaterial({
      color: 0xad3525,
      // shading: THREE.FlatShading,
    });

    this.pinkMat = new THREE.MeshLambertMaterial({
      color: 0xe55d2b,
      // shading: THREE.FlatShading,
    });

    this.whiteMat = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      // shading: THREE.FlatShading,
    });

    this.purpleMat = new THREE.MeshLambertMaterial({
      color: 0x451954,
      // shading: THREE.FlatShading,
    });

    this.greyMat = new THREE.MeshLambertMaterial({
      color: 0x653f4c,
      // shading: THREE.FlatShading,
    });

    this.blackMat = new THREE.MeshLambertMaterial({
      color: 0x302925,
      // shading: THREE.FlatShading,
    });

    const bodyGeom = new THREE.CylinderGeometry(30, 80, 140, 4);
    const maneGeom = new THREE.BoxGeometry(40, 40, 15);
    const faceGeom = new THREE.BoxGeometry(80, 80, 80);
    const spotGeom = new THREE.BoxGeometry(4, 4, 4);
    const mustacheGeom = new THREE.BoxGeometry(30, 2, 1);
    mustacheGeom.applyMatrix4(new THREE.Matrix4().makeTranslation(15, 0, 0));

    const earGeom = new THREE.BoxGeometry(20, 20, 20);
    const noseGeom = new THREE.BoxGeometry(40, 40, 20);
    const eyeGeom = new THREE.BoxGeometry(5, 30, 30);
    const irisGeom = new THREE.BoxGeometry(4, 10, 10);
    const mouthGeom = new THREE.BoxGeometry(20, 20, 10);
    const smileGeom = new THREE.TorusGeometry(12, 4, 2, 10, Math.PI);
    const lipsGeom = new THREE.BoxGeometry(40, 15, 20);
    const kneeGeom = new THREE.BoxGeometry(25, 80, 80);
    kneeGeom.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 50, 0));
    const footGeom = new THREE.BoxGeometry(40, 20, 20);

    // body
    this.body = new THREE.Mesh(bodyGeom, this.yellowMat);
    this.body.position.z = -60;
    this.body.position.y = -30;
    this.bodyVertices = [0, 1, 2, 3, 4, 10];

    if (this.body.isMesh) {
      const position = this.body.geometry.attributes.position;
      const vector = new THREE.Vector3();

      for (let i = 0, l = position.count; i < l; i++) {
        const tv = vector.fromBufferAttribute(position, i);
        this.bodyInitPositions.push({x: tv.x, y: tv.y, z: 70});
      }
    }

    // for (let i = 0; i < this.bodyVertices.length; i++) {
    //   const tv = this.body.geometry.vertices[this.bodyVertices[i]];
    //   tv.z = 70;
    //   //tv.x = 0;
    //   this.bodyInitPositions.push({x: tv.x, y: tv.y, z: tv.z});
    // }

    // knee
    this.leftKnee = new THREE.Mesh(kneeGeom, this.yellowMat);
    this.leftKnee.position.x = 65;
    this.leftKnee.position.z = -20;
    this.leftKnee.position.y = -110;
    this.leftKnee.rotation.z = -0.3;

    this.rightKnee = new THREE.Mesh(kneeGeom, this.yellowMat);
    this.rightKnee.position.x = -65;
    this.rightKnee.position.z = -20;
    this.rightKnee.position.y = -110;
    this.rightKnee.rotation.z = 0.3;

    // feet
    this.backLeftFoot = new THREE.Mesh(footGeom, this.yellowMat);
    this.backLeftFoot.position.z = 30;
    this.backLeftFoot.position.x = 75;
    this.backLeftFoot.position.y = -90;

    this.backRightFoot = new THREE.Mesh(footGeom, this.yellowMat);
    this.backRightFoot.position.z = 30;
    this.backRightFoot.position.x = -75;
    this.backRightFoot.position.y = -90;

    this.frontRightFoot = new THREE.Mesh(footGeom, this.yellowMat);
    this.frontRightFoot.position.z = 40;
    this.frontRightFoot.position.x = -22;
    this.frontRightFoot.position.y = -90;

    this.frontLeftFoot = new THREE.Mesh(footGeom, this.yellowMat);
    this.frontLeftFoot.position.z = 40;
    this.frontLeftFoot.position.x = 22;
    this.frontLeftFoot.position.y = -90;

    // mane

    this.mane = new THREE.Group();

    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        const manePart = new THREE.Mesh(maneGeom, this.redMat);
        manePart.position.x = j * 40 - 60;
        manePart.position.y = k * 40 - 60;

        let amp;
        let zOffset;
        const periodOffset = Math.random() * Math.PI * 2;
        let angleOffsetY, angleOffsetX;
        let angleAmpY, angleAmpX;
        let xInit, yInit;

        if (
          (j === 0 && k === 0) ||
          (j === 0 && k === 3) ||
          (j === 3 && k === 0) ||
          (j === 3 && k === 3)
        ) {
          amp = -10 - Math.floor(Math.random() * 5);
          zOffset = -5;
        } else if (j === 0 || k === 0 || j === 3 || k === 3) {
          amp = -5 - Math.floor(Math.random() * 5);
          zOffset = 0;
        } else {
          amp = 0;
          zOffset = 0;
        }

        this.maneParts.push({
          mesh: manePart,
          amp: amp,
          zOffset: zOffset,
          periodOffset: periodOffset,
          xInit: manePart.position.x,
          yInit: manePart.position.y,
        });
        this.mane.add(manePart);
      }
    }

    this.mane.position.y = -10;
    this.mane.position.z = 80;
    //this.mane.rotation.z = Math.PI/4;

    // face
    this.face = new THREE.Mesh(faceGeom, this.yellowMat);
    this.face.position.z = 135;

    // Mustaches

    this.mustaches = [];

    this.mustache1 = new THREE.Mesh(mustacheGeom, this.greyMat);
    this.mustache1.position.x = 30;
    this.mustache1.position.y = -5;
    this.mustache1.position.z = 175;
    this.mustache2 = this.mustache1.clone();
    this.mustache2.position.x = 35;
    this.mustache2.position.y = -12;
    this.mustache3 = this.mustache1.clone();
    this.mustache3.position.y = -19;
    this.mustache3.position.x = 30;
    this.mustache4 = this.mustache1.clone();
    this.mustache4.rotation.z = Math.PI;
    this.mustache4.position.x = -30;
    this.mustache5 = new THREE.Mesh(mustacheGeom, this.blackMat);
    this.mustache5 = this.mustache2.clone();
    this.mustache5.rotation.z = Math.PI;
    this.mustache5.position.x = -35;
    this.mustache6 = new THREE.Mesh(mustacheGeom, this.blackMat);
    this.mustache6 = this.mustache3.clone();
    this.mustache6.rotation.z = Math.PI;
    this.mustache6.position.x = -30;

    this.mustaches.push(this.mustache1);
    this.mustaches.push(this.mustache2);
    this.mustaches.push(this.mustache3);
    this.mustaches.push(this.mustache4);
    this.mustaches.push(this.mustache5);
    this.mustaches.push(this.mustache6);

    // spots
    this.spot1 = new THREE.Mesh(spotGeom, this.redMat);
    this.spot1.position.x = 39;
    this.spot1.position.z = 150;

    this.spot2 = this.spot1.clone();
    this.spot2.position.z = 160;
    this.spot2.position.y = -10;

    this.spot3 = this.spot1.clone();
    this.spot3.position.z = 140;
    this.spot3.position.y = -15;

    this.spot4 = this.spot1.clone();
    this.spot4.position.z = 150;
    this.spot4.position.y = -20;

    this.spot5 = this.spot1.clone();
    this.spot5.position.x = -39;
    this.spot6 = this.spot2.clone();
    this.spot6.position.x = -39;
    this.spot7 = this.spot3.clone();
    this.spot7.position.x = -39;
    this.spot8 = this.spot4.clone();
    this.spot8.position.x = -39;

    // eyes
    this.leftEye = new THREE.Mesh(eyeGeom, this.whiteMat);
    this.leftEye.position.x = 40;
    this.leftEye.position.z = 120;
    this.leftEye.position.y = 25;

    this.rightEye = new THREE.Mesh(eyeGeom, this.whiteMat);
    this.rightEye.position.x = -40;
    this.rightEye.position.z = 120;
    this.rightEye.position.y = 25;

    // iris
    this.leftIris = new THREE.Mesh(irisGeom, this.purpleMat);
    this.leftIris.position.x = 42;
    this.leftIris.position.z = 120;
    this.leftIris.position.y = 25;

    this.rightIris = new THREE.Mesh(irisGeom, this.purpleMat);
    this.rightIris.position.x = -42;
    this.rightIris.position.z = 120;
    this.rightIris.position.y = 25;

    // mouth
    this.mouth = new THREE.Mesh(mouthGeom, this.blackMat);
    this.mouth.position.z = 171;
    this.mouth.position.y = -30;
    this.mouth.scale.set(0.5, 0.5, 1);

    // smile
    this.smile = new THREE.Mesh(smileGeom, this.greyMat);
    this.smile.position.z = 173;
    this.smile.position.y = -15;
    this.smile.rotation.z = -Math.PI;

    // lips
    this.lips = new THREE.Mesh(lipsGeom, this.yellowMat);
    this.lips.position.z = 165;
    this.lips.position.y = -45;

    // ear
    this.rightEar = new THREE.Mesh(earGeom, this.yellowMat);
    this.rightEar.position.x = -50;
    this.rightEar.position.y = 50;
    this.rightEar.position.z = 105;

    this.leftEar = new THREE.Mesh(earGeom, this.yellowMat);
    this.leftEar.position.x = 50;
    this.leftEar.position.y = 50;
    this.leftEar.position.z = 105;

    // nose
    this.nose = new THREE.Mesh(noseGeom, this.greyMat);
    this.nose.position.z = 170;
    this.nose.position.y = 25;

    // head
    this.head = new THREE.Group();
    this.head.add(this.face);
    this.head.add(this.mane);
    this.head.add(this.rightEar);
    this.head.add(this.leftEar);
    this.head.add(this.nose);
    this.head.add(this.leftEye);
    this.head.add(this.rightEye);
    this.head.add(this.leftIris);
    this.head.add(this.rightIris);
    this.head.add(this.mouth);
    this.head.add(this.smile);
    this.head.add(this.lips);
    this.head.add(this.spot1);
    this.head.add(this.spot2);
    this.head.add(this.spot3);
    this.head.add(this.spot4);
    this.head.add(this.spot5);
    this.head.add(this.spot6);
    this.head.add(this.spot7);
    this.head.add(this.spot8);
    this.head.add(this.mustache1);
    this.head.add(this.mustache2);
    this.head.add(this.mustache3);
    this.head.add(this.mustache4);
    this.head.add(this.mustache5);
    this.head.add(this.mustache6);

    this.head.position.y = 60;

    this.threegroup.add(this.body);
    this.threegroup.add(this.head);
    this.threegroup.add(this.leftKnee);
    this.threegroup.add(this.rightKnee);
    this.threegroup.add(this.backLeftFoot);
    this.threegroup.add(this.backRightFoot);
    this.threegroup.add(this.frontRightFoot);
    this.threegroup.add(this.frontLeftFoot);

    this.threegroup.traverse(
      (object: {castShadow: boolean; receiveShadow: boolean}) => {
        if (object instanceof THREE.Mesh) {
          object.castShadow = true;
          object.receiveShadow = true;
        }
      }
    );
  }

  updateBody(speed: number) {
    this.head.rotation.y += (this.tHeagRotY - this.head.rotation.y) / speed;
    this.head.rotation.x += (this.tHeadRotX - this.head.rotation.x) / speed;
    this.head.position.x += (this.tHeadPosX - this.head.position.x) / speed;
    this.head.position.y += (this.tHeadPosY - this.head.position.y) / speed;
    this.head.position.z += (this.tHeadPosZ - this.head.position.z) / speed;

    this.leftEye.scale.y +=
      (this.tEyeScale - this.leftEye.scale.y) / (speed * 2);
    this.rightEye.scale.y = this.leftEye.scale.y;

    this.leftIris.scale.y +=
      (this.tIrisYScale - this.leftIris.scale.y) / (speed * 2);
    this.rightIris.scale.y = this.leftIris.scale.y;

    this.leftIris.scale.z +=
      (this.tIrisZScale - this.leftIris.scale.z) / (speed * 2);
    this.rightIris.scale.z = this.leftIris.scale.z;

    this.leftIris.position.y +=
      (this.tIrisPosY - this.leftIris.position.y) / speed;
    this.rightIris.position.y = this.leftIris.position.y;
    this.leftIris.position.z +=
      (this.tLeftIrisPosZ - this.leftIris.position.z) / speed;
    this.rightIris.position.z +=
      (this.tRightIrisPosZ - this.rightIris.position.z) / speed;

    this.rightKnee.rotation.z +=
      (this.tRightKneeRotZ - this.rightKnee.rotation.z) / speed;
    this.leftKnee.rotation.z +=
      (this.tLeftKneeRotZ - this.leftKnee.rotation.z) / speed;

    this.lips.position.x += (this.tLipsPosX - this.lips.position.x) / speed;
    this.lips.position.y += (this.tLipsPosY - this.lips.position.y) / speed;
    this.smile.position.x += (this.tSmilePosX - this.smile.position.x) / speed;
    this.mouth.position.z += (this.tMouthPosZ - this.mouth.position.z) / speed;
    this.smile.position.z += (this.tSmilePosZ - this.smile.position.z) / speed;
    this.smile.position.y += (this.tSmilePosY - this.smile.position.y) / speed;
    this.smile.rotation.z += (this.tSmileRotZ - this.smile.rotation.z) / speed;
  }

  look(xTarget: any, yTarget: any) {
    this.tHeagRotY = rule3(xTarget, -200, 200, -Math.PI / 4, Math.PI / 4);
    this.tHeadRotX = rule3(yTarget, -200, 200, -Math.PI / 4, Math.PI / 4);
    this.tHeadPosX = rule3(xTarget, -200, 200, 70, -70);
    this.tHeadPosY = rule3(yTarget, -140, 260, 20, 100);
    this.tHeadPosZ = 0;

    this.tEyeScale = 1;
    this.tIrisYScale = 1;
    this.tIrisZScale = 1;
    this.tIrisPosY = rule3(yTarget, -200, 200, 35, 15);
    this.tLeftIrisPosZ = rule3(xTarget, -200, 200, 130, 110);
    this.tRightIrisPosZ = rule3(xTarget, -200, 200, 110, 130);

    this.tLipsPosX = 0;
    this.tLipsPosY = -45;

    this.tSmilePosX = 0;
    this.tMouthPosZ = 174;
    this.tSmilePosZ = 173;
    this.tSmilePosY = -15;
    this.tSmileRotZ = -Math.PI;

    this.tRightKneeRotZ = rule3(
      xTarget,
      -200,
      200,
      0.3 - Math.PI / 8,
      0.3 + Math.PI / 8
    );
    this.tLeftKneeRotZ = rule3(
      xTarget,
      -200,
      200,
      -0.3 - Math.PI / 8,
      -0.3 + Math.PI / 8
    );

    this.updateBody(10);

    this.mane.rotation.y = 0;
    this.mane.rotation.x = 0;

    for (let i = 0; i < this.maneParts.length; i++) {
      const m = this.maneParts[i].mesh;
      m.position.z = 0;
      m.rotation.y = 0;
    }

    for (let i = 0; i < this.mustaches.length; i++) {
      const m = this.mustaches[i];
      m.rotation.y = 0;
    }

    if (this.body.isMesh) {
      const position = this.body.geometry.attributes.position;
      const vector = new THREE.Vector3();

      for (let i = 0, l = position.count; i < l; i++) {
        const tvInit = this.bodyInitPositions[i];

        const tv = vector.fromBufferAttribute(position, i);
        tv.x = tvInit.x + this.head.position.x;
      }
    }
  }

  cool(xTarget: number, yTarget: number) {
    this.tHeagRotY = rule3(xTarget, -200, 200, Math.PI / 4, -Math.PI / 4);
    this.tHeadRotX = rule3(yTarget, -200, 200, Math.PI / 4, -Math.PI / 4);
    this.tHeadPosX = rule3(xTarget, -200, 200, -70, 70);
    this.tHeadPosY = rule3(yTarget, -140, 260, 100, 20);
    this.tHeadPosZ = 100;

    this.tEyeScale = 0.1;
    this.tIrisYScale = 0.1;
    this.tIrisZScale = 3;

    this.tIrisPosY = 20;
    this.tLeftIrisPosZ = 120;
    this.tRightIrisPosZ = 120;

    this.tLipsPosX = rule3(xTarget, -200, 200, -15, 15);
    this.tLipsPosY = rule3(yTarget, -200, 200, -45, -40);

    this.tMouthPosZ = 168;
    this.tSmilePosX = rule3(xTarget, -200, 200, -15, 15);
    this.tSmilePosY = rule3(yTarget, -200, 200, -20, -8);
    this.tSmilePosZ = 176;
    this.tSmileRotZ = rule3(xTarget, -200, 200, -Math.PI - 0.3, -Math.PI + 0.3);

    this.tRightKneeRotZ = rule3(
      xTarget,
      -200,
      200,
      0.3 + Math.PI / 8,
      0.3 - Math.PI / 8
    );
    this.tLeftKneeRotZ = rule3(
      xTarget,
      -200,
      200,
      -0.3 + Math.PI / 8,
      -0.3 - Math.PI / 8
    );

    this.updateBody(10);

    this.mane.rotation.y = -0.8 * this.head.rotation.y;
    this.mane.rotation.x = -0.8 * this.head.rotation.x;

    let dt = 20000 / (xTarget * xTarget + yTarget * yTarget);
    dt = Math.max(Math.min(dt, 1), 0.5);
    this.windTime += dt;

    for (let i = 0; i < this.maneParts.length; i++) {
      const m = this.maneParts[i].mesh;
      const amp = this.maneParts[i].amp;
      const zOffset = this.maneParts[i].zOffset;
      const periodOffset = this.maneParts[i].periodOffset;

      m.position.z =
        zOffset + Math.sin(this.windTime + periodOffset) * amp * dt * 2;
    }

    this.leftEar.rotation.x = ((Math.cos(this.windTime) * Math.PI) / 16) * dt;
    this.rightEar.rotation.x = ((-Math.cos(this.windTime) * Math.PI) / 16) * dt;

    for (let i = 0; i < this.mustaches.length; i++) {
      const m = this.mustaches[i];
      const amp = i < 3 ? -Math.PI / 8 : Math.PI / 8;
      m.rotation.y = amp + Math.cos(this.windTime + i) * dt * amp;
    }

    if (this.body.isMesh) {
      const position = this.body.geometry.attributes.position;
      const vector = new THREE.Vector3();

      for (let i = 0, l = position.count; i < l; i++) {
        const tvInit = this.bodyInitPositions[i];
        const tv = vector.fromBufferAttribute(position, tvInit);
        tv.x = tvInit.x + this.head.position.x;
        this.bodyInitPositions.push({x: tv.x, y: tv.y, z: 70});
      }
    }
  }
}
