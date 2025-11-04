import * as THREE from 'three'
import { scene, camera, renderer, controls, clock, loadFbx } from './utils.js'
import Player from './Player.js'

async function init() {
  const speed = document.getElementById('speed')
  const checkboxes = document.querySelectorAll('.tab input')

  // === Scene, Camera, Renderer ===
  const defaultCameraPos = new THREE.Vector3(0, 0.9, 2.75)
  camera.position.copy(defaultCameraPos)

  const cameraTarget = new THREE.Vector3(0, defaultCameraPos.y, 0)
  controls.target.copy(cameraTarget)

  // Carregar modelo
  const { mesh } = await loadFbx({
    file: 'assets/fbx/model.fbx',
    axis: [0, 1, 0],
    angle: Math.PI
  })

  const player = new Player({ mesh })
  await player.setState('Ginga')

  scene.add(mesh)

  // === Funções ===
  const toggleCamera = () => {
    const newZ = camera.position.z > 0 ? -defaultCameraPos.z * 1.2 : defaultCameraPos.z
    const newY = camera.position.z > 0 ? defaultCameraPos.y * 0.75 : defaultCameraPos.y
    camera.position.set(defaultCameraPos.x, newY, newZ)
    cameraTarget.y = newY
    controls.target.copy(cameraTarget)
  }

  const mirrorModel = () => {
    mesh.applyMatrix4(new THREE.Matrix4().makeScale(-1, 1, 1))
  }

  const closeOthers = (e) => {
    checkboxes.forEach(el => {
      if (el !== e.target) el.checked = false
    })
  }

  // === Loop ===
  const loop = async () => {
    requestAnimationFrame(loop)
    const delta = clock.getDelta()
    const speedPercent = Number(speed.value) / 100
    await player.update(delta * speedPercent)
    controls.update()
    renderer.render(scene, camera)
  }
  loop()

  // === Eventos ===
  checkboxes.forEach(el => el.addEventListener('change', closeOthers))
  document.getElementById('camera')?.addEventListener('click', toggleCamera)
  document.getElementById('mirror')?.addEventListener('click', mirrorModel)
  document.addEventListener('click', () => navigator.wakeLock?.request('screen'))
  document.addEventListener('keydown', e => {
    if (e.code === 'KeyC') toggleCamera()
    if (e.code === 'KeyM') mirrorModel()
    if (e.code === 'ArrowLeft' || e.code === 'ArrowRight') speed.focus()
  })

  // === Hide preloader ===
  document.getElementById('preloader').style.display = 'none'
  document.getElementById('title').innerHTML = ''
}

// Inicializa quando a página carregar
if (typeof window !== 'undefined') {
  init()
}
