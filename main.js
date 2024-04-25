

// Másodfokú egyenlet calculator online http://eprog.hu/oktatas/javascript/feladat05.html

import { Tesztesetek } from "./teszt.js";

export function masodfokuEgyenletMegoldasa(a, b, c) {
    const eredmeny = [];
    let X1;
    let X2; 
    if(a === 0) {
        return "HIBA: az 'a' erteke nem lehet 0"
    }if((-b - Math.sqrt(b * b - 4 * a * c)) < 0 ){
        return "nincs eredmeny";
    } else {
        let x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
        let x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
         eredmeny = {
            X1: x1,
            X2: x2,

        }
    return eredmeny;
    };
}

console.log(masodfokuEgyenletMegoldasa(0,20,42));

Tesztesetek();
