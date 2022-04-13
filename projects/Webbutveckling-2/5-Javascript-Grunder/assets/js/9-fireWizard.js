var body = document.querySelector("body");
var fireWizard = document.getElementById("imgfireWizard");
var healthBar = document.getElementById("health");
var manaBar = document.getElementById("mana");
var takeDamage = document.getElementById("damage");
var manaPotion = document.getElementById("manaPotion");
var castSpell = document.getElementById("spell");
var buttonContainer = document.getElementById("buttonContainer");
var restart = document.getElementById("retryButton");
var hiddenSection = document.querySelector(".hiddenSection");
var manabarTest = document.getElementById("manaBar");
var healthbarTest = document.getElementById("healthBar");

var isgameOver = false; 

var hero = {
    name: "Tom",
    health: 100,
    mana: 50,
    takeDamage: function() {
        if(this.health <= 100 && this.health > 0) {
            this.health -= 15;
            healthBar.innerHTML = `Health:${this.health}`;
            healthbarTest.value -= 15;
            if(this.health <= 75) {
                 imgfireWizard.setAttribute('src', '../assets/images/75hp.png');
            }   if(this.health <= 50) {
                imgfireWizard.setAttribute('src','../assets/images/50hp.png')
            } if(this.health <= 20) {
                imgfireWizard.setAttribute('src','../assets/images/20hp.png')
            }
        }
        if(this.health <= 0) {
            imgfireWizard.setAttribute('src', '../assets/images/död.png')
        }
    },
    addMana: function() {
        if(this.mana > 0 && this.mana <= 140) {
            this.mana += 10;
            manabarTest.value += 10;
            manaBar.innerHTML = `Mana: ${this.mana}`;
        }
        if(this.mana <= 150) {
            this.mana == 150;
            manaBar.innerHTML = `Mana: ${this.mana}`;
        }
        if(this.mana == 0) {
            this.mana = 0;
            manaBar.innerHTML = `Mana: ${this.mana}`;
        }
    },
    castSpell: function() {
        if(this.mana > 0) {
            this.mana -= 20;
            manabarTest.value -= 20;
            manaBar.innerHTML = `Mana: ${this.mana}`;
        } if(this.mana < 0) {
            this.mana = 0;
            manaBar.innerHTML = `Mana: 0`;
        }
    },
    gameOver: function() {
        if(this.health <= 0) {
            healthBar.innerHTML = `You are dead`;
            manaBar.innerHTML = `Mana: 0`;
            this.mana = 0;
            this.health = 0;
            isgameOver = true;
            fireWizard.classList.add("dead");
            body.classList.add("bgStretch");
            hiddenSection.classList.add("gameOver");
        }
    },
    tryAgain: function() {
        if(isgameOver == true) {
            this.health = 100; 
            this.mana = 50;
            manabarTest.value = 50;
            healthbarTest.value = 100;
            manaBar.innerHTML = `Mana: 50`;
            healthBar.innerHTML = `Health: 100`
            imgfireWizard.setAttribute("src","../assets/images/fire_wizard_by_glowner4_d9xitbi-fullview.png");
            isgameOver = false; 
            hiddenSection.classList.remove("gameOver");
            fireWizard.classList.remove("dead");
            body.classList.remove("bgStretch");
        }
    },
}

manaPotion.addEventListener("click",function(){
    hero.addMana();
})

takeDamage.addEventListener("click", function(){
    hero.takeDamage();
    hero.gameOver();
})

castSpell.addEventListener("click", function(){
    hero.castSpell();
})

restart.addEventListener("click", function(){
    hero.tryAgain();
})