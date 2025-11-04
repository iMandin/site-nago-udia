import * as THREE from 'three'
import { loadFbxAnimations, sample, setButton } from './utils.js'
import IdleState from './states/IdleState.js'
import SpecialState from './states/SpecialState.js'

export default class Player {
  #loading = false

  constructor({ mesh }) {
    this.mesh = mesh
    this.mixer = new THREE.AnimationMixer(mesh)
    this.actions = {}
    this.lastAnimTime = Date.now()
    this.interval = 6 // seconds

    // DOM references só se document existir (cliente)
    if (typeof document !== 'undefined') {
      this.title = document.getElementById('title')
      this.randomMoves = document.getElementById('random-moves')
      this.buttons = document.querySelectorAll('.idle,.special')
      this.moves = [...document.querySelectorAll('.special')].map(btn => btn.innerText)

      this.buttons.forEach(btn => btn.addEventListener('click', e => {
        if (this.isReady) this.setState(e.currentTarget.innerText)
      }))
    }
  }

  /* GETTERS & SETTERS */

  set loading(isLoading) {
    this.#loading = isLoading
    if (this.buttons) {
      this.buttons.forEach(btn => setButton(btn, isLoading))
    }
  }

  get loading() {
    return this.#loading
  }

  get isIdle() {
    return this.currentState instanceof IdleState
  }

  get isReady() {
    return !this.loading && this.isIdle
  }

  get hasPrevMove() {
    return this.moves?.includes(this.oldState?.name)
  }

  get timeSinceLastMove() {
    return (Date.now() - this.lastAnimTime) / 1000
  }

  get shouldReplay() {
    return this.randomMoves && !this.randomMoves.checked && this.hasPrevMove
  }

  /* FSM */

  async setState(name) {
    if (!this.actions[name]) {
      this.loading = true
      const animation = await loadFbxAnimations([name])
      this.actions[name] = this.mixer.clipAction(animation[0])
      this.loading = false
    }

    this.oldState = this.currentState
    if (this.oldState) {
      if (this.oldState.name == name) return
      this.oldState.exit()
    }
    const State = this.moves.includes(name) ? SpecialState : IdleState
    this.currentState = new State(this, name)
    this.currentState.enter(this.oldState)
  }

  /* UPDATE */

  countdown() {
    if (!this.title) return
    const secondsLeft = Math.ceil(this.interval - this.timeSinceLastMove)
    if (secondsLeft < 4 && secondsLeft > 0)
      this.title.innerHTML = secondsLeft
  }

  async chooseState() {
    if (!this.randomMoves) return
    if (this.isReady && this.timeSinceLastMove > this.interval)
      if (this.shouldReplay)
        await this.setState(this.oldState.name)
      else if (this.randomMoves.checked)
        await this.setState(sample(this.moves))
  }

  async update(delta) {
    this.currentState?.update()

    if (this.shouldReplay) this.countdown()
    await this.chooseState()

    this.mixer.update(delta)
  }
}
