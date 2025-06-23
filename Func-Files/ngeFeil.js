/* { node TablerSample_01a_Formatting.js } */
//


/* Nge-import Modul */
import {DekTip} from './TablerSample_Storaging.js';

//import os from 'os';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import {dirname} from 'path';
//
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
/* Nge-import Modul */
//
/* Cari Nilai */
import {theBunch, theType, theCategory} from './TablerSample_Storaging.js';
//
// Nama-Nama Bunch-Type //
import {BunTip_G01,BunTip_S02,BunTip_A03, BunTip_M04D,BunTip_H05E, BunTip_CloF6} from './TablerSample_Storaging.js';
// Nama-Nama Bunch-Type //
 //
import {get_G01_1,get_G01_2,get_G01_3, get_G01_4,get_G01_5, get_G01_6} from './TablerSample_Storaging.js';
import {get_S02_1,get_S02_2,get_S02_3, get_S02_4,get_S02_5, get_S02_6} from './TablerSample_Storaging.js';
import {get_A03_1,get_A03_2,get_A03_3, get_A03_4,get_A03_5, get_A03_6} from './TablerSample_Storaging.js';
//
import {get_dM04_1,get_dM04_2,get_dM04_3, get_dM04_4,get_dM04_5, get_dM04_6} from './TablerSample_Storaging.js';
import {get_eH05_1,get_eH05_2,get_eH05_3, get_eH05_4,get_eH05_5, get_eH05_6} from './TablerSample_Storaging.js';
//
import {get_cloFin6_1,get_cloFin6_2,get_cloFin6_3, get_cloFin6_4,get_cloFin6_5, get_cloFin6_6} from './TablerSample_Storaging.js';
/* Cari Nilai */


/* Isi header */
const bunch_Ab01 = (theBunch);
const type_Bt02 = (theType);
const category_Cc03 = (theCategory);
 //
//
/* Isi header */


/* Struktur header */
const defaultan = (((2**2)+(3**2))*(2));
//
const sampLeAuto = (() => {
    let globalCounter = (0);
    return (totalSamples) => {
        const start = (globalCounter + 1);
        const samples = [];
        for(let i = 0; i < totalSamples; i++) {
            samples.push(
                {
                IDS: `${(start + i).toString().padStart(4, '0')}`,  // Auto-pad 4 digit
                SampleName: 'FILLING_NAME',  // [Nama utama]
                SampLias: 'FILLING_OTHERNAME_FROM_NAME',  // [Nama Lain]
                Segmented: 'FILLING_SIDED',  // [Segmen mana]
                WorldFrom: 'FILLING_WORLD_LIVE'  // [Dari mana]
            });
        }
        (globalCounter += totalSamples); // Update counter
        return samples;
    };
})();


const geneStrukSampel = {
    /* Bunch - Gaster */
    [bunch_Ab01[(1)-1]]: {  // [G]
        DeskName: `Kamen Rider ${(bunch_Ab01[(1)-1])}'s Samples`,
        CodeName: (bunch_Ab01[(1)-1][(0)]),
        /* Type - Fossil */
        [type_Bt02[(1)-1]]: {  // [GF]
            DeskName: (BunTip_G01[(2)-1]),
            CodeName: (type_Bt02[(2)-1][(0)]),
            CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(2)-1][(0)])),
            [category_Cc03[(1)-1]]: {  // [GFB]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [GFL]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [GFD]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [GFK]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [GFW]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [GF.Eld]
                CodeName: (category_Cc03[(6)-1].slice(0, 3)),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(1)-1][(0)]) +
                ('_') + (category_Cc03[(6)-1].slice(0, 3))),
                ___SagPents___: (sampLeAuto(defaultan))
            }
        },
        /* Type - Jarl */
        [type_Bt02[(2)-1]]: {  // [GJ]
            DeskName: (BunTip_G01[(2)-1]),
            CodeName: (type_Bt02[(2)-1][(0)]),
            CombName: ((bunch_Ab01[(1)-1][(0)])+(type_Bt02[(2)-1][(0)])),
            [category_Cc03[(1)-1]]: {  // [GJB]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [GJL]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [GJD]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [GJK]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [GJW]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [GJ.Eld]
                CodeName: (category_Cc03[(6)-1].slice(0, 3)),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(2)-1][(0)]) +
                ('_') + (category_Cc03[(6)-1].slice(0, 3))),
                ___SagPents___: (sampLeAuto(defaultan))
            },
        },
        /* Type - Virtual */
        [type_Bt02[(3)-1]]: {  // [GV]
            DeskName: (BunTip_G01[(3)-1]),
            CodeName: (type_Bt02[(3)-1][(0)]),
            CombName: ((bunch_Ab01[(1)-1][(0)])+(type_Bt02[(3)-1][(0)])),
            [category_Cc03[(1)-1]]: {  // [GVB]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [GVL]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [GVD]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [GVK]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [GVW]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [GV.Eld]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(3)-1][(0)]) +
                ('_') + (category_Cc03[(6)-1].slice(0, 3))),
                ___SagPents___: (sampLeAuto(defaultan))
            },
        },
        /* Type - Raincoat */
        [type_Bt02[(4)-1]]: {  // [GR]
            DeskName: (BunTip_G01[(4)-1]),
            CodeName: (type_Bt02[(4)-1][(0)]),
            CombName: ((bunch_Ab01[(4)-1][(0)])+(type_Bt02[(4)-1][(0)])),
            [category_Cc03[(1)-1]]: {  // [GRB]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [GRL]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [GRD]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [GRK]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [GRW]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [GR.Eld]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(4)-1][(0)]) +
                ('_') + (category_Cc03[(6)-1].slice(0, 3))),
                ___SagPents___: (sampLeAuto(defaultan))
            },
        },
        /* Type - Paperbag */
        [type_Bt02[(5)-1]]: {  // [GP]
            DeskName: (BunTip_G01[(5)-1]),
            CodeName: (type_Bt02[(5)-1][(0)]),
            CombName: ((bunch_Ab01[(5)-1][(0)])+(type_Bt02[(5)-1][(0)])),
            [category_Cc03[(1)-1]]: {  // [GPB]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [GPL]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [GPD]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [GPK]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [GPW]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [GP.Eld]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(5)-1][(0)]) +
                ('_') + (category_Cc03[(6)-1].slice(0, 3))),
                ___SagPents___: (sampLeAuto(defaultan))
            },
        },
        /* Type X - Trickster */
        [type_Bt02[(6)-1]]: {  // [G_Tri]
            DeskName: (BunTip_G01[(6)-1]),
            CodeName: (type_Bt02[(6)-1][(0)]),
            CombName: ((bunch_Ab01[(6)-1][(0)])+(type_Bt02[(6)-1][(0)])),
            [category_Cc03[(1)-1]]: {  // [G_Tri.B]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [G_Tri.L]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [G_Tri.D]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [G_Tri.K]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [G_Tri.W]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [G_Tri.Eld]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(6)-1][(0)]) +
                ('_') + (category_Cc03[(6)-1].slice(0, 3))),
                ___SagPents___: (sampLeAuto(defaultan))
            },
        },
    },
    //    
    /* Bunch - Spamor */
    [bunch_Ab01[(2)-1]]: {  // [S]
        DeskName: `Kamen Rider ${(bunch_Ab01[(2)-1])}'s Samples`,
        CodeName: (bunch_Ab01[(2)-1][(0)]),
        /* Type - Fossil */
        [type_Bt02[(1)-1]]: {  // [??]
            DeskName: (BunTip_S02[(1)-1]),
            CodeName: (type_Bt02[(1)-1][(0)]),
            CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(1)-1][(0)])),
            [category_Cc03[(1)-1]]: {  // [???]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [???]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [???]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [???]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [???]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [???]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(6)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            }
        },
        /* Type - Jarl */
        [type_Bt02[(2)-1]]: {  // [??]
            DeskName: (BunTip_S02[(2)-1]),
            CodeName: (type_Bt02[(2)-1][(0)]),
            CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(2)-1][(0)])),
            [category_Cc03[(1)-1]]: {  // [???]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [???]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [???]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [???]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [???]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [???]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(6)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            }
        },
        /* Type - Virtual */
        [type_Bt02[(3)-1]]: {  // [??]
            DeskName: (BunTip_S02[(3)-1]),
            CodeName: (type_Bt02[(3)-1][(0)]),
            CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(3)-1][(0)])),
            [category_Cc03[(1)-1]]: {  // [???]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [???]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [???]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [???]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [???]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [???]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(6)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            }
        },
        /* Type - Raincoat */
        [type_Bt02[(4)-1]]: {  // [??]
            DeskName: (BunTip_S02[(4)-1]),
            CodeName: (type_Bt02[(4)-1][(0)]),
            CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(4)-1][(0)])),
            [category_Cc03[(1)-1]]: {  // [???]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [???]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [???]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [???]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [???]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [???]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(6)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            }
        },
        /* Type - Paperbag */
        [type_Bt02[(5)-1]]: {  // [??]
            DeskName: (BunTip_S02[(5)-1]),
            CodeName: (type_Bt02[(5)-1][(0)]),
            CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(5)-1][(0)])),
            [category_Cc03[(1)-1]]: {  // [???]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [???]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [???]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [???]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [???]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [???]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(6)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            }
        },
        /* Type X - Trickster */
        [type_Bt02[(6)-1]]: {  // [??]
            DeskName: (BunTip_S02[(6)-1]),
            CodeName: (type_Bt02[(6)-1][(0)]),
            CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(6)-1][(0)])),
            [category_Cc03[(1)-1]]: {  // [???]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [???]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [???]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [???]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [???]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [???]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(6)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            }
        },
    },
    //
    /* Bunch - Accesive */
    [bunch_Ab01[(3)-1]]: {  // [A]
        DeskName: `Kamen Rider ${(bunch_Ab01[(3)-1])}'s Samples`,
        CodeName: (bunch_Ab01[(3)-1][(0)]),
        /* Type - Fossil */
        [type_Bt02[(1)-1]]: {  // [??]
            DeskName: (BunTip_A03[(1)-1]),
            CodeName: (type_Bt02[(1)-1][(0)]),
            CombName: ((bunch_Ab01[(3)-1][(0)]) + (type_Bt02[(1)-1][(0)])),
            [category_Cc03[(1)-1]]: {  // [???]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [???]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [???]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(3)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [???]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(4)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [???]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(5)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [???]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(6)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(6)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            }
        },
        /* Type - Jarl */
        [type_Bt02[(2)-1]]: {  // [??]
            [category_Cc03[(1)-1]]: {  // [???]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [???]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [???]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(3)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [???]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(4)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [???]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(5)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [???]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(6)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(6)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            }
        },
        /* Type - Virtual */
        [type_Bt02[(3)-1]]: {  // [??]
            [category_Cc03[(1)-1]]: {  // [???]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [???]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [???]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(3)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [???]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(4)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [???]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(5)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [???]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(6)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(6)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            }
        },
        /* Type - Raincoat */
        [type_Bt02[(4)-1]]: {  // [??]
            [category_Cc03[(1)-1]]: {  // [???]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [???]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [???]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(3)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [???]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(4)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [???]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(5)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [???]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(6)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(6)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            }
        },
        /* Type - Paperbag */
        [type_Bt02[(5)-1]]: {  // [??]
            [category_Cc03[(1)-1]]: {  // [???]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [???]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [???]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(3)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [???]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(4)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [???]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(5)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [???]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(6)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(6)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            }
        },
        /* Type X - Trickster */
        [type_Bt02[(6)-1]]: {  // [??]
            [category_Cc03[(1)-1]]: {  // [???]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [???]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [???]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(3)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [???]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(4)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [???]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(5)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [???]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(6)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(6)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            }
        },
    },

    /* Bunch - Mistress */
    [bunch_Ab01[(4)-1]]: {  // [M]
        DeskName: `Kamen Rider ${(bunch_Ab01[(4)-1])}'s Samples`,
        CodeName: (bunch_Ab01[(4)-1][(0)]),
        /* Type - Fossil */
        [type_Bt02[(1)-1]]: {  // [??]
            [category_Cc03[(1)-1]]: {  // [???]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [???]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [???]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(3)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [???]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(4)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [???]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(5)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [???]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(6)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(6)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            }
        },
        /* Type - Jarl */
        [type_Bt02[(2)-1]]: {  // [??]
            [category_Cc03[(1)-1]]: {  // [???]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [???]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [???]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(3)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [???]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(4)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [???]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(5)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [???]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(6)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(6)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            }
        },
        /* Type - Virtual */
        [type_Bt02[(3)-1]]: {  // [??]
            [category_Cc03[(1)-1]]: {  // [???]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [???]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [???]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(3)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [???]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(4)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [???]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(5)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [???]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(6)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(6)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            }
        },
        /* Type - Raincoat */
        [type_Bt02[(4)-1]]: {  // [??]
            [category_Cc03[(1)-1]]: {  // [???]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [???]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [???]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(3)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [???]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(4)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [???]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(5)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [???]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(6)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(6)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            }
        },
        /* Type - Paperbag */
        [type_Bt02[(5)-1]]: {  // [??]
            [category_Cc03[(1)-1]]: {  // [???]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [???]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [???]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(3)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [???]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(4)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [???]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(5)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [???]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(6)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(6)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            }
        },
        /* Type X - Trickster */
        [type_Bt02[(6)-1]]: {  // [??]
            [category_Cc03[(1)-1]]: {  // [???]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [???]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [???]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(3)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [???]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(4)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [???]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(5)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [???]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(6)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(6)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            }
        },
    },
    //
    /* Bunch - Hunfle */
    [bunch_Ab01[(5)-1]]: {  // [H]
        DeskName: `Kamen Rider ${(bunch_Ab01[(5)-1])}'s Samples`,
        CodeName: (bunch_Ab01[(5)-1][(0)]),
        /* Type - Fossil */
        [type_Bt02[(1)-1]]: {  // [??]
            [category_Cc03[(1)-1]]: {  // [???]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [???]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [???]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(3)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [???]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(4)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [???]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(5)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [???]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(6)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(6)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            }
        },
        /* Type - Jarl */
        [type_Bt02[(2)-1]]: {  // [??]
            [category_Cc03[(1)-1]]: {  // [???]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [???]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [???]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(3)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [???]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(4)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [???]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(5)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [???]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(6)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(6)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            }
        },
        /* Type - Virtual */
        [type_Bt02[(3)-1]]: {  // [??]
            [category_Cc03[(1)-1]]: {  // [???]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [???]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [???]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(3)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [???]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(4)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [???]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(5)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [???]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(6)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(6)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            }
        },
        /* Type - Raincoat */
        [type_Bt02[(4)-1]]: {  // [??]
            [category_Cc03[(1)-1]]: {  // [???]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [???]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [???]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(3)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [???]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(4)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [???]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(5)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [???]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(6)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(6)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            }
        },
        /* Type - Paperbag */
        [type_Bt02[(5)-1]]: {  // [??]
            [category_Cc03[(1)-1]]: {  // [???]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [???]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [???]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(3)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [???]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(4)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [???]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(5)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [???]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(6)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(6)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            }
        },
        /* Type X - Trickster */
        [type_Bt02[(6)-1]]: {  // [??]
            [category_Cc03[(1)-1]]: {  // [???]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [???]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [???]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(3)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [???]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(4)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [???]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(5)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [???]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(6)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(6)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            }
        },
    },

    /* Bunch X - Clovin */
    [bunch_Ab01[(6)-1]]: {  // [Clo]
        DeskName: `Kamen Rider ${(bunch_Ab01[(6)-1])}'s Special Samples`,
        CodeName: (bunch_Ab01[(6)-1].slice(0, 3)),
        /* Type - Fossil */
        [type_Bt02[(1)-1]]: {  // [??]
            [category_Cc03[(1)-1]]: {  // [???]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [???]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [???]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(3)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [???]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(4)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [???]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(5)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [???]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(6)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(6)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            }
        },
        /* Type - Jarl */
        [type_Bt02[(2)-1]]: {  // [??]
            [category_Cc03[(1)-1]]: {  // [???]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [???]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [???]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(3)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [???]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(4)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [???]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(5)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [???]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(6)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(6)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            }
        },
        /* Type - Virtual */
        [type_Bt02[(3)-1]]: {  // [??]
            [category_Cc03[(1)-1]]: {  // [???]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [???]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [???]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(3)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [???]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(4)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [???]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(5)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [???]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(6)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(6)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            }
        },
        /* Type - Raincoat */
        [type_Bt02[(4)-1]]: {  // [??]
            [category_Cc03[(1)-1]]: {  // [???]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [???]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [???]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(3)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [???]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(4)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [???]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(5)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [???]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(6)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(6)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            }
        },
        /* Type - Paperbag */
        [type_Bt02[(5)-1]]: {  // [??]
            [category_Cc03[(1)-1]]: {  // [???]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [???]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [???]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(3)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [???]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(4)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [???]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(5)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [???]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(6)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(6)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            }
        },
        /* Type X - Trickster */
        [type_Bt02[(6)-1]]: {  // [??]
            [category_Cc03[(1)-1]]: {  // [???]
                CodeName: (category_Cc03[(1)-1][(0)]),
                CombName: ((bunch_Ab01[(1)-1][(0)]) + (type_Bt02[(1)-1][(0)]) + (category_Cc03[(1)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(2)-1]]: {  // [???]
                CodeName: (category_Cc03[(2)-1][(0)]),
                CombName: ((bunch_Ab01[(2)-1][(0)]) + (type_Bt02[(2)-1][(0)]) + (category_Cc03[(2)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(3)-1]]: {  // [???]
                CodeName: (category_Cc03[(3)-1][(0)]),
                CombName: ((bunch_Ab01[(3)-1][(0)]) + (type_Bt02[(3)-1][(0)]) + (category_Cc03[(3)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(4)-1]]: {  // [???]
                CodeName: (category_Cc03[(4)-1][(0)]),
                CombName: ((bunch_Ab01[(4)-1][(0)]) + (type_Bt02[(4)-1][(0)]) + (category_Cc03[(4)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(5)-1]]: {  // [???]
                CodeName: (category_Cc03[(5)-1][(0)]),
                CombName: ((bunch_Ab01[(5)-1][(0)]) + (type_Bt02[(5)-1][(0)]) + (category_Cc03[(5)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            },
            [category_Cc03[(6)-1]]: {  // [???]
                CodeName: (category_Cc03[(6)-1][(0)]),
                CombName: ((bunch_Ab01[(6)-1][(0)]) + (type_Bt02[(6)-1][(0)]) + (category_Cc03[(6)-1][(0)])),
                ___SagPents___: (sampLeAuto(defaultan))
            }
        },
    },
};
/* Struktur header */


/* Sistem Topangan */
function updatePlaceholders(samples) {
    if (!Array.isArray(samples)) return [];
    
    return samples.map(sample => {
      // Hanya update jika masih ada placeholder
      const shouldUpdateName = sample.SampleName.includes('FILLING_NAME');
      const shouldUpdateAlias = sample.SampLias.includes('FILLING_OTHERNAME');
      
      return {
        ...sample,
        SampleName: shouldUpdateName ? generateUniqueName() : sample.SampleName,
        SampLias: shouldUpdateAlias ? generateAlias(sample.SampleName) : sample.SampLias
      };
    });
  }
/* Sistem Topangan */


/* Struktur Jaluran */
const namaFolder = ('Z000_Sampel-5616');
//
const namaFile01 = ('Tabel_5616_Sampel');  // Namain File-01
const namaFile02 = ('Heading_Sampling');  // Namain File-02
//
const namaForm01 = ('json');  // Formatin File
//
const FileForm01 = ([namaFile01, namaForm01].join('.'));
const FileForm02 = ([namaFile02, namaForm01].join('.'));
//
const jalurKini = (path.join(__dirname));
const jalurPisah = (jalurKini.split('\\'));
//
const misah_CDBack = (jalurPisah.pop());
const jl_CDBack = (jalurPisah.join('\\'));
//
const jalurTempuhan = (path.join(__dirname));
const jalurPenuh = (path.join(jl_CDBack, namaFolder, FileForm01));

//const x = ([namaFile02, namaForm01].join('.'));
/* Struktur Jaluran */


/* Generate JSON */
// Fungsi untuk memastikan folder ada
function tempatJaluran(filePath) {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    console.log(`Folder [${dir}] berhasil dibuat!`);
    return true; // atau bisa mengembalikan nilai lain jika diperlukan
}

// Modifikasi fungsi bikin JSON
function generateJSON(filePath, templateData) {
    console.log('');
    
    /* [1. Cek folder] */
    tempatJaluran(filePath);
    //
    /* [2. Cek file existing] */
    let existingData = {};
    if(fs.existsSync(filePath)) {
        const rawData = fs.readFileSync(filePath);
        existingData = JSON.parse(rawData);
        console.log(`File [${FileForm02}] ditemukan, memproses merge data...`);
    }
    //
    /* [3. Safe Merge] */
    function safeMerge(target, source) {
        // 1. Handle root level properties
        const merged = { ...target };
    
        // 2. Iterasi semua key dari source
        for (const key of Object.keys(source)) {
        // Jika target tidak punya key ini, copy seluruh struktur
        if (!merged.hasOwnProperty(key)) {
            merged[key] = JSON.parse(JSON.stringify(source[key]));
        }
        // Jika ada dan merupakan object, merge recursively
        else if (typeof source[key] === 'object' && !Array.isArray(source[key])) {
            merged[key] = safeMerge(merged[key], source[key]);
        }
        // Untuk array, hanya tambah jika kosong
        else if (Array.isArray(source[key]) && (!merged[key] || merged[key].length === 0)) {
            merged[key] = [...source[key]];
        }
        }
        
        return merged;
    }
    //
    /* [4. Merge data] */
    const mergedData = safeMerge(existingData, templateData);
    mergedData.___SagPents___ = updatePlaceholders(mergedData.___SagPents___);  // <-- Apply update
    //
    /* [5. Buat backup] */
    if(fs.existsSync(filePath)) {
        fs.copyFileSync(filePath, jalurPenuh);
        console.log(`Backup telah dibuat: ${FileForm01}`);
    }
    //
    /* [6. Simpan file baru] */
    const jsonString = JSON.stringify(mergedData, null, 2);
    fs.writeFileSync(filePath, jsonString);
    console.log(`File [${FileForm01}] berhasil diupdate!`);
    //
    console.log('|');
    //
    console.log('Alamat File terkini:');
    console.log(`${path.resolve(filePath)}`);
    //
    console.log('');
}
 //
//

//const parsedData = JSON.parse(data);
 //
function initFile() {
    try {
        // Cek apakah file ada
        if (fs.existsSync(FileForm01)) {
            // Baca isi file
            const rawData = fs.readFileSync(FileForm01, 'utf-8');
            // Handle jika file kosong
            if (rawData.trim() === '') {
                console.log('File ditemukan tapi kosong, regenerating...');
                fs.writeFileSync(FileForm01, JSON.stringify(geneStrukSampel, null, 2));
                return geneStrukSampel;
            }

            // Parse data jika berisi
            return JSON.parse(rawData);
        } else {
            // Generate file jika tidak ada
            console.log('File tidak ditemukan, generating...');
            fs.writeFileSync(FileForm01, JSON.stringify(geneStrukSampel, null, 2));
            return geneStrukSampel;
        }
    } catch (error) {
        // Handle error parsing JSON
        if (error instanceof SyntaxError) {
            console.error('File corrupt, regenerating...');
            fs.writeFileSync(FileForm01, JSON.stringify(geneStrukSampel, null, 2));
            return geneStrukSampel;
        } else {
            throw error;
        }
    }
}
 //
try {
    const data = initFile();
    console.log('Data berhasil diproses:', data);
  } catch (error) {
    console.error('Error:', error);
  }
/* Generate JSON */


/* Pemberitahuan Output */
const As3gm3nt01 = [get_G01_1,get_G01_2,get_G01_3, get_G01_4,get_G01_5, get_G01_6];
const Bs3gm3nt01 = As3gm3nt01.flat();
const Hitung1A = (Bs3gm3nt01.reduce((sum, value) => (sum + value), 0));
 //
const As3gm3nt02 = [get_S02_1,get_S02_2,get_S02_3, get_S02_4,get_S02_5, get_S02_6];
const Bs3gm3nt02 = As3gm3nt02.flat();
const Hitung2B = (Bs3gm3nt02.reduce((sum, value) => (sum + value), 0));
 //
const As3gm3nt03 = [get_A03_1,get_A03_2,get_A03_3, get_A03_4,get_A03_5, get_A03_6];
const Bs3gm3nt03 = As3gm3nt03.flat();
const Hitung3C = (Bs3gm3nt03.reduce((sum, value) => (sum + value), 0));
 //
const As3gm3ntD04 = [get_dM04_1,get_dM04_2,get_dM04_3, get_dM04_4,get_dM04_5, get_dM04_6];
const Bs3gm3ntD04 = As3gm3ntD04.flat();
const Hitung4MD = (Bs3gm3ntD04.reduce((sum, value) => (sum + value), 0));
 //
const As3gm3ntE05 = [get_eH05_1,get_eH05_2,get_eH05_3, get_eH05_4,get_eH05_5, get_eH05_6];
const Bs3gm3ntE05 = As3gm3ntE05.flat();
const Hitung5HE = (Bs3gm3ntE05.reduce((sum, value) => (sum + value), 0));
 //
const As3gm3ntClo6F = [get_cloFin6_1,get_cloFin6_2,get_cloFin6_3, get_cloFin6_4,get_cloFin6_5, get_cloFin6_6];
const Bs3gm3ntClo6F = As3gm3ntClo6F.flat();
const Hitung6CloFin = (Bs3gm3ntClo6F.reduce((sum, value) => (sum + value), 0));
 //
const HiTotal_abc = ((Hitung1A)+(Hitung2B)+(Hitung3C));
const HiTotal_deF = ((Hitung4MD)+(Hitung5HE)+(Hitung6CloFin));
 //
const HiTotal_ALL = ((HiTotal_abc)+(HiTotal_deF));
//
function hasiLuar(){
    /* [1. Meng-Output] */
    // 'bunch_Ab01' //
    // 'type_Bt02' //
    // 'category_Cc03' //
    /* [1. Meng-Output] */
     //
    /* [2. Inisialisasi] */
    const s4mpl3_alpbet = (26);
    //
    const ngItung01 = bunch_Ab01.length;
    const ngItung02 = type_Bt02.length;
    const ngItung03 = category_Cc03.length;
    //
    const AhasilAn1_2 = (ngItung01*ngItung02);
    //const BhasilAn1_2 = (HiTotal_ALL);
    const hasilAn12_3 = (AhasilAn1_2*ngItung03);
    //
    const totalSampel = (s4mpl3_alpbet*hasilAn12_3);
    /* [2. Inisialisasi] */
     //
    /* [3. Pengeluaran] */
    process.stdout.write(`"[${ngItung01}] Deck milik masing-masing `);
    process.stdout.write(`[${ngItung01}] Rider!"`);
    console.log('');
    console.log(`(${bunch_Ab01.join(', ')})`);
    //
    console.log('|');
    //
    process.stdout.write(`"[${ngItung02}] Tipe di tiap Deck, `);
    process.stdout.write(`maka terdapat [${AhasilAn1_2}] Tipe!"`);
    console.log('');
    console.log(`(${type_Bt02.join(', ')})`);
    //
    console.log('|');
    //
    process.stdout.write(`"Terdapat [${ngItung03}] Kategori di tiap `);
    process.stdout.write(`[${AhasilAn1_2}] Kategori, `);
    process.stdout.write(`maka terdapat [${hasilAn12_3}] Kategori!"`);
    console.log('');
    console.log(`(${category_Cc03.join(', ')})`);
    //
    console.log('|');
    //
    process.stdout.write(`"Di setiap [${hasilAn12_3}] Kategori, ada `);
    process.stdout.write(`sekitar semuanya [${s4mpl3_alpbet}] Sampel."`);
    console.log('');
    console.log(`"Maka totalnya semua terdapat [${totalSampel}] Sampel!"`);
    //
    console.log('|');
    //
    console.log(`"Terbagi lagi ada terdapat [${HiTotal_ALL}] Segmen."`);
     //
    //console.log('?');
    /* [3. Pengeluaran] */

    console.log('');
}
/* Pemberitahuan Output */


/* Uji Coba */
function cekNama_BunTip() {
    //
    const DekTipEd000 = DekTip.map(group => 
        group.map(item => `[${item}]`)
    );
    //
    const DekTipEd001 = DekTipEd000.map(subArray => subArray.join(", "));
     //
    for(let i = 0; i < DekTipEd001.length; i++) {
        console.log(`{${DekTipEd001[i]}}`);
        if(i !== DekTipEd001.length - 1) {
            console.log(`|#|`);
        }
    }
    //
    console.log('');
}
//
function cekSekmen() {
    /* Apabila ada yg gak sesuai, coba cek 'TablerSample_NameGroup01b.js' pada 'get'-nya */
    //
    const tabspl01 = As3gm3nt01.map(subArray => subArray.join(', '));
    const toxsum01 = As3gm3nt01.map(subArray => subArray.reduce((total, num) => total + num, 0));
    console.log(`[${tabspl01.join('].[')}]`);
    console.log(`= [${toxsum01.join(']:[')}]`);
    console.log(`= [${Hitung1A}]`);
    //
    console.log('~');
    //
    const tabspl02 = As3gm3nt02.map(subArray => subArray.join(', '));
    const toxsum02 = As3gm3nt02.map(subArray => subArray.reduce((total, num) => total + num, 0));
    console.log(`[${tabspl02.join('].[')}]`);
    console.log(`= [${toxsum02.join(']:[')}]`);
    console.log(`= [${Hitung2B}]`);
    //
    console.log('~');
    //
    const tabspl03 = As3gm3nt03.map(subArray => subArray.join(', '));
    const toxsum03 = As3gm3nt03.map(subArray => subArray.reduce((total, num) => total + num, 0));
    console.log(`[${tabspl03.join('].[')}]`);
    console.log(`= [${toxsum03.join(']:[')}]`);
    console.log(`= [${Hitung3C}]`);
    //
    console.log('~');
    //
    const tabspl_D4 = As3gm3ntD04.map(subArray => subArray.join(', '));
    const toxsum_D4 = As3gm3ntD04.map(subArray => subArray.reduce((total, num) => total + num, 0));
    console.log(`[${tabspl_D4.join('].[')}]`);
    console.log(`= [${toxsum_D4.join(']:[')}]`);
    console.log(`= [${Hitung4MD}]`);
    //
    console.log('~');
    //
    const tabspl_E5 = As3gm3ntE05.map(subArray => subArray.join(', '));
    const toxsum_E5 = As3gm3ntE05.map(subArray => subArray.reduce((total, num) => total + num, 0));
    console.log(`[${tabspl_E5.join('].[')}]`);
    console.log(`= [${toxsum_E5.join(']:[')}]`);
    console.log(`= [${Hitung5HE}]`);
    //
    console.log('~');
    //
    const tabspl_F6X = As3gm3ntClo6F.map(subArray => subArray.join(', '));
    const toxsum_F6X = As3gm3ntClo6F.map(subArray => subArray.reduce((total, num) => total + num, 0));
    console.log(`[${tabspl_F6X.join('].[')}]`);
    console.log(`= [${toxsum_F6X.join(']:[')}]`);
    console.log(`= [${Hitung6CloFin}]`);
    //
    console.log('');
}
//
function cekAllSekmen() {
    //
    console.log(`${HiTotal_ALL}`);
    //
    console.log('');
}
/* Uji Coba */


/* Jalankan! */
/* // */
generateJSON(jalurPenuh, geneStrukSampel);
hasiLuar();
 //
 //
//cekNama_BunTip();
//
cekSekmen();
//cekAllSekmen();
/* Jalankan! */


//
/* { node TablerSample_01a_Formatting.js } */
