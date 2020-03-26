/**
 * 
 * @param {string} profilerId 
 * @param {string} mode 
 * @param {number} actualTime 
 * @param {number} baseTime 
 * @param {number} startTime 
 * @param {number} commitTime 
 * @param {object} interactions 
 * 
 * noting down the updates from the render of the components.
 */

export const clockPerformance = (profilerId, mode, actualTime, baseTime, startTime, commitTime, interactions) => {
    // console.info({profilerId, mode, actualTime, baseTime, startTime, commitTime, interactions });
    console.table({ profilerId, mode, actualTime, baseTime, startTime, commitTime, interactions });
} 