/**
 * Game state manager for tracking score and progress
 */
export class GameState {
  constructor() {
    this.score = 0;
    this.levelStartTime = 0;
    this.loadFromStorage();
  }

  loadFromStorage() {
    try {
      const saved = localStorage.getItem('gameState');
      if (saved) {
        const data = JSON.parse(saved);
        this.score = data.score || 0;
        this.bestTimes = data.bestTimes || {};
      } else {
        this.bestTimes = {};
      }
    } catch {
      this.score = 0;
      this.bestTimes = {};
    }
  }

  saveToStorage() {
    try {
      localStorage.setItem(
        'gameState',
        JSON.stringify({
          score: this.score,
          bestTimes: this.bestTimes,
        }),
      );
    } catch {
      // localStorage not available
    }
  }

  startLevel() {
    this.levelStartTime = performance.now();
  }

  completeLevel(levelIndex) {
    const completionTime = Math.floor((performance.now() - this.levelStartTime) / 1000);
    const levelKey = `level_${levelIndex}`;

    // Add score based on completion time (bonus for faster completion)
    const timeBonus = Math.max(0, 100 - completionTime);
    this.score += 100 + timeBonus;

    // Track best time
    if (!this.bestTimes[levelKey] || completionTime < this.bestTimes[levelKey]) {
      this.bestTimes[levelKey] = completionTime;
    }

    this.saveToStorage();
    return { completionTime, timeBonus };
  }

  getBestTime(levelIndex) {
    return this.bestTimes[`level_${levelIndex}`] || null;
  }

  resetScore() {
    this.score = 0;
    this.saveToStorage();
  }
}
