import type { Actor } from '../../beats/album';
import { DAN_POSES } from '../../figures';

/**
 * Chapter 2's performers as the cinemas show them. 琪官 Qiguan, as Pincai describes him (p12): rouge
 * and powder blended, fragile enough to break at a touch, a voice clearer than an oriole's.
 */
export const QIGUAN: Actor = { name: '琪官', emblem: '', motif: 'jade-moon', facts: [], flower: 'peach', pose: DAN_POSES[6], seal: '琪官' };

/** 琴官 Qinguan (p13): beyond any painter; perhaps Du Liniang returned from the grave. */
export const QINGUAN: Actor = { name: '琴官', emblem: '', motif: 'jade-moon', facts: [], flower: 'plum', pose: DAN_POSES[1], seal: '琴官' };
