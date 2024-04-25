import { masodfokuEgyenletMegoldasa } from "./main.js"

export function Tesztesetek(){
    
    const TESZTESETEK = [
        {
            a: 3,
            b: 4,
            c: 1,
            vartX1: -0.3333333333333333,
            vartX2: -1,
            id: 0
        },
        {
            a: 3,
            b: 25,
            c: 5,
            vartX1:-0.20504522533176228,
            vartX2:-8.128288108001572,
            id: 1
        },
        {
            a: 13,
            b: 49,
            c: 8,
            vartX1: -0.17102543000419518,
            vartX2: -3.598205339226574, 
            id: 2
        },
        {
            a: 15,
            b: 89,
            c: 38,
            vartX1: -0.4631136359166135,
            vartX2: -5.47021969741672, 
            id: 3
        },
        {
            a: Number.EPSILON,
            b: Number.MAX_SAFE_INTEGER,
            c: 42,
            vartX1: 0,
            vartX2: -4.0564819207303336e+31, 
            id: 4
        },
        {
            a: 15,
            b: Number.MIN_SAFE_INTEGER,
            c: 18,
            vartX1: 600479950316066.1,
            vartX2: 0, 
            id: 5
        },
        {
            a: 15,
            b: Number.MAX_SAFE_INTEGER,
            c: 18,
            vartX1: 0,
            vartX2: -600479950316066.1, 
            id: 6
        },
        {
            a: Math.PI,
            b: 32,
            c: 18,
            vartX1: -0.5975555205428252,
            vartX2: -9.588360837338477, 
            id: 7
        },
        {
            a: 1000,
            b: 100000,
            c: 1000,
            vartX1: -0.01000100020004902,
            vartX2: -99.98999899979995, 
            id: 8
        },

        //SZANDEKOS HIBAS BEMENET
        
        {
            a:1,
            b:2,
            c:5,
            vartX1: "HIBA",
            vartX2: "HIBA", 
            id: 9
        }
      
    ];

    TESZTESETEK.forEach(function(teszt){
        let eredmeny= masodfokuEgyenletMegoldasa(teszt.a,teszt.b,teszt.c)
        console.assert(
            teszt.vartX1 === eredmeny.X1,
            `vart = ${teszt.vart} a:${teszt.a} b:${teszt.b} c:${teszt.c} kapott:${eredmeny} indexedik: ${teszt.id}`,
            `HIBA`

        );
        console.assert(
            teszt.vartX2 === eredmeny.X2,
            `vart = ${teszt.vart} a:${teszt.a} b:${teszt.b} c:${teszt.c} kapott: ${eredmeny} indexedik: ${teszt.id}`,
            `HIBA`

        );
    });


}