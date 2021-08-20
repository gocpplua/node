let b3 = require('behavior3js')
export class OpenDoorNodes{
    private actions(action : any) {
        action('walkToDoor', {
            tick: function(tick : any) {
                console.log('[walkToDoor] tick.target', tick.target)
                console.log('[walkToDoor] tick._openNodes', tick._openNodes)
                if(tick.target && tick.target.happy){
                    tick.target.happy()
                }
                
                tick.blackboard.set('walking', 1);
                let name = tick.blackboard.get('name');
                console.log(name + ' is walking to the door');
        
                return b3.SUCCESS;
            }
        });
        action('openDoor', {
            tick: function(tick : any) {
                tick.blackboard.set('walking', 0);
                let name = tick.blackboard.get('name');
                console.log(name + ' is opening the door');
                return b3.SUCCESS;
            }
        });
        action('smashDoor', {
            tick: function(tick : any) {
                tick.blackboard.set('walking', 0);
                let name = tick.blackboard.get('name');
                console.log(name + ' is smashing the door');
        
                return b3.SUCCESS;
            }
        });
        action('walkThroughDoor', {
            tick: function(tick : any) {
                tick.blackboard.set('walking', 1);
                let name = tick.blackboard.get('name');
                console.log(name + ' is walking through the door');
        
                return b3.SUCCESS;
            }
        });
        action('closeDoor', {
            tick: function(tick : any) {
                tick.blackboard.set('walking', 0);
                let name = tick.blackboard.get('name');
                console.log(name + ' is closing the door');
        
                return b3.SUCCESS;
            }
        });
    }
        
    private conditions(condition : any) {
    condition('canIunlockTheDoor', {
        tick: function(tick : any) {
            var skill = tick.blackboard.get('lockpick-level');
            let name = tick.blackboard.get('name');
            if (!skill) {
                skill = 0;
                tick.blackboard.set('lockpick-level', skill);
            }
    
            if (skill > 5) {
                console.log(name + ' picked the lock');
                return b3.SUCCESS;
            }
    
            console.log(name + ' could not pick the lock');
    
            skill += 1;
            tick.blackboard.set('lockpick-level', skill);
            return b3.FAILURE;
        }
    });
    condition('IsDoorUnlocked', {
        tick: function(tick : any) {
            let name = tick.blackboard.get('name');
            var locked = tick.blackboard.get('locked');
            if (!locked) {
                return b3.SUCCESS;
            }
            console.log(name + ' notices the door is locked');
            return b3.FAILURE;
        }
    });
    }
    public init(action: any, condition: any) {
    this.actions(action);
    this.conditions(condition);
    }          
}
