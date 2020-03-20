import { Model } from 'radiks';

// Evaluation models a user's initial clinical health status. One-off questions.
export default class Evaluation extends Model {
    static className = 'Evaluation';
    static schema = {
        isCurrentSmoker: Boolean,
        age: Number,
        livesAlone: Boolean,
        hasHighRiskJob: Boolean,
        lastTravelDate: Date,
        hasLungDisease: Boolean,
        hasDiabetes: Boolean,
        hasHeartDisease: Boolean,
        hasObesity: Boolean,
        isPregnant: Boolean,
        takesSteroids: Boolean,
        takesImmunodepressants: Boolean,
        hasFluShot: Boolean
    }
};