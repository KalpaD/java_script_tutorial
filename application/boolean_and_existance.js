var a;
/**
All three follwing values which implies the lack of existance 
will be resolve to false. That can be used to check the existance of a variable easily as
demonastrated below.
    Boolean(undefined) -> false
    Boolean(null) - > false
    Boolean("") -> false
*/

if (a) {
    console.log('Something is there from 1st check');
}

/*
 But the there is one catch here. If there is any posibility for 'a' to become 0.
 The we have bit of a problem since 
 Boolean(0) -> false
 
 But that does not mean 'a' does not exists it mean 'a' = 0.
 Hence in that case we might have to something like this.
*/
a = 0;

if(a || a === 0) {
    console.log('Something is there from 2nd check');
}