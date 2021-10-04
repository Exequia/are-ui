import { AuthEffects } from './auth/auth.effects';
import { RouterEffects } from './router/router.effects';
import { BetsEffects } from './bets/bets.effects';

export const effects: any[] = [AuthEffects, RouterEffects, BetsEffects];
