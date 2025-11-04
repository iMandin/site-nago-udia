declare module 'three/examples/jsm/controls/OrbitControls' {
  import * as THREE from 'three';
  export class OrbitControls {
    constructor(camera: THREE.Camera, domElement: HTMLElement);
    enabled: boolean;
    enableDamping: boolean;
    update(): void;
    target: THREE.Vector3;
  }
}

declare module 'three/examples/jsm/loaders/FBXLoader' {
  import * as THREE from 'three';
  export class FBXLoader {
    constructor();
    load(
      url: string,
      onLoad: (object: THREE.Group & { animations: THREE.AnimationClip[] }) => void,
      onProgress?: (event: ProgressEvent<EventTarget>) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
    loadAsync(url: string): Promise<THREE.Group & { animations: THREE.AnimationClip[] }>;
  }
}
