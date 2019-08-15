const pi = Math.PI

class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return pi * this.diameter
    }

    get area() {
        return pi * Math.pow(this.radius, 2)
    }

    set diameter(newDiameter) {
        return this.radius = newDiameter/2 
      
    }

    set circumference(newCircumference) {
       return this.radius = newCircumference/( pi * 2)
    }

    set area(newArea) {
        return this.radius = Math.sqrt(newArea/pi)
       
    }
}