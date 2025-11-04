declare module 'three/examples/jsm/loaders/FBXLoader' {
  import { Group, AnimationMixer } from 'three';
  export class FBXLoader {
    load(url: string, onLoad: (obj: Group & { animations: any[] }) => void, onProgress?: (e: ProgressEvent) => void, onError?: (e: ErrorEvent) => void): void;
  }
}

declare module 'three/examples/jsm/controls/OrbitControls' {
  import { Camera, Renderer } from 'three';
  export class OrbitControls {
    constructor(camera: Camera, domElement: HTMLElement);
    enableDamping: boolean;
    update(): void;
  }
}
