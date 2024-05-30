/* Global Phaser */
// Copyright (c) 2024 Dang All rights reserved
//
// Created by: Dang
// Created on: Apr 2024
// This file contains the JS functions for index.html

class GameScene extends Phaser.Scene {
    createCar() {
      const carXLocation = Math.floor(Math.random() * 1920) + 1
      let carXVelocity = Math.floor(Math.random()* 50) +1
      carXVelocity *= Math.round(Math.random()) ? 1 : -1
      const anCar = this.physics.add.sprite(carXLocation, -100, 'car')
      anCar.body.velocity.y = 200
      anCar.body.velocity.x = carXVelocity
      this.carGroup.add(anCar)
    }

    creatCoin() {
        const coinXLocation = Math.floor(Math.random() * 1920) + 1
        let coinXVelocity = Math.floor(Math.random()* 50) +1
        coinXVelocity *= Math.round(Math.random()) ? 1 : -1
        const anCoin = this.physics.add.sprite(coinXLocation, -100, 'coin')
        anCoin.body.velocity.y = 200
        anCoin.body.velocity.x = coinXVelocity
        this.coinGroup.add(anCoin)  
    }
  
    constructor() {
      super({ key: "gameScene" })
  
      this.background = null
      this.car = null
      this.score = 0
      this.scoreText = null
      this.scoreTextStyle = {font:'65px Arial', fill: '#ffffff', align: 'center' }
      this.gameOverTextStyle = { font: '65px Arial', fill: '#ff0000', align: 'center' }
      this.coin = null
    }
    /**  
    @param { object } data 
    */
    init(data) {
      this.cameras.main.setBackgroundColor("#0x5f6e7a")
    }
  
    preload() {
      console.log("Game Scene")
      this.load.image("roadBackground","./asset/gameScene.jpg")
      this.load.image("car","./asset/car.pn")
      this.load.image("otherCar", "asset/otherCar.jp")
      this.load.image('coin', "")
    }
    /**@param {object} data */
    create(data) {
      this.background = this.add.image(500, 400, "roadBackground").setOrigin(0,0)
      this.background.setScale(2.0)
  
      this.scoreText = this.add.text(10, 10, 'Score: ' + this.score.toString(), this.scoreTextStyle)
  
      this.car = this.physics.add.sprite(1920 / 2, 1080 - 100 , "car")
  
      this.carGroup = this.add.group()
      this.createCar()
  
    }
    /**
      *@param {number} delta
      *@param {number} time
     */
    update(time, delta) {
      const keyLeftObj =  this.input.keyboard.addKey("LEFT")
      const keyRightObj = this.input.keyboard.addKey("RIGHT")
  
      if (keyLeftObj.isDown === true){
        this.car.x-=15
        if(this.car.x<0){
          this.car.x=0
        }
      }
  
      if (keyRightObj.isDown === true) {
        this.car.x +=15
        if (this.car.x >1920) {
          this.car.x = 1920
        }
      }
    }
  }
  
  export default GameScene