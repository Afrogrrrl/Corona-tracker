import { Model } from 'radiks';

// Checkup models symptoms that can change every day. Should be asked daily.
export default class Checkup extends Model {
    static className = 'Checkup';
    static schema = {
        dailyFeeling: Number,
        temperature: Number,
        closeContactConfirmed: Boolean,
        closeContactSuspected: Boolean,
        hasFever: Boolean,
        hasChills: Boolean,
        hasWeakness: Boolean, 
        hasLimbPain: Boolean,
        hasCough: Boolean,
        hasSniffling: Boolean,
        hasDiarrhea: Boolean,
        hasSoreThroat: Boolean,
        hasHeadache: Boolean,
        hasShortnessOfBreath: Boolean,
    }
};