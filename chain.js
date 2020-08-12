class Sling{
    constructor(bodyA,bodyB)
    
    {
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:.06,
            lenght:40
    
    
    
        }
    this.bodyB=bodyB
    this.sling=Matter.Constraint.create(options)
    World.add(world,this.sling)
    
    
    
    
    
    
    
    }
    display(){
    var pointA=this.sling.bodyA.position
    var pointB=this.sling.bodyB.position
    
    
    
        
    
    
    }
    
    
    
    
    
    }