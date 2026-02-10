import { GameState } from '../state';

describe('GameState', () => {
  let gameState;

  beforeEach(() => {
    localStorage.clear();
    gameState = new GameState();
  });

  describe('initialization', () => {
    it('should initialize score to 0', () => {
      expect(gameState.score).toBe(0);
    });

    it('should initialize bestTimes to empty object', () => {
      expect(gameState.bestTimes).toEqual({});
    });

    it('should load existing state from localStorage', () => {
      localStorage.setItem(
        'gameState',
        JSON.stringify({
          score: 500,
          bestTimes: { level_0: 30 },
        })
      );
      const loaded = new GameState();
      expect(loaded.score).toBe(500);
      expect(loaded.bestTimes).toEqual({ level_0: 30 });
    });

    it('should handle corrupted localStorage data', () => {
      localStorage.setItem('gameState', 'invalid json');
      const loaded = new GameState();
      expect(loaded.score).toBe(0);
      expect(loaded.bestTimes).toEqual({});
    });
  });

  describe('saveToStorage', () => {
    it('should save score and bestTimes to localStorage', () => {
      gameState.score = 250;
      gameState.bestTimes = { level_1: 45 };
      gameState.saveToStorage();

      const saved = JSON.parse(localStorage.getItem('gameState'));
      expect(saved.score).toBe(250);
      expect(saved.bestTimes).toEqual({ level_1: 45 });
    });
  });

  describe('startLevelTimer', () => {
    it('should set levelStartTime', () => {
      gameState.startLevelTimer();
      expect(gameState.levelStartTime).toBeGreaterThan(0);
    });
  });

  describe('completeLevel', () => {
    beforeEach(() => {
      jest.spyOn(performance, 'now').mockReturnValue(5000);
      gameState.startLevelTimer();
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('should add base score of 100 plus time bonus', () => {
      // Simulate 10 seconds completion (90 bonus)
      jest.spyOn(performance, 'now').mockReturnValue(15000);
      gameState.completeLevel(0);
      expect(gameState.score).toBe(190); // 100 + 90
    });

    it('should return completion time and time bonus', () => {
      jest.spyOn(performance, 'now').mockReturnValue(25000); // 20 seconds
      const result = gameState.completeLevel(0);
      expect(result.completionTime).toBe(20);
      expect(result.timeBonus).toBe(80);
    });

    it('should have zero time bonus for slow completion', () => {
      jest.spyOn(performance, 'now').mockReturnValue(150000); // 145 seconds
      const result = gameState.completeLevel(0);
      expect(result.timeBonus).toBe(0);
    });

    it('should track best time for level', () => {
      jest.spyOn(performance, 'now').mockReturnValue(35000); // 30 seconds
      gameState.completeLevel(5);
      expect(gameState.bestTimes['level_5']).toBe(30);
    });

    it('should update best time if faster', () => {
      gameState.bestTimes['level_3'] = 60;
      jest.spyOn(performance, 'now').mockReturnValue(45000); // 40 seconds
      gameState.completeLevel(3);
      expect(gameState.bestTimes['level_3']).toBe(40);
    });

    it('should not update best time if slower', () => {
      gameState.bestTimes['level_3'] = 20;
      jest.spyOn(performance, 'now').mockReturnValue(45000); // 40 seconds
      gameState.completeLevel(3);
      expect(gameState.bestTimes['level_3']).toBe(20);
    });

    it('should save to storage after completion', () => {
      const saveSpy = jest.spyOn(gameState, 'saveToStorage');
      jest.spyOn(performance, 'now').mockReturnValue(15000);
      gameState.completeLevel(0);
      expect(saveSpy).toHaveBeenCalled();
    });
  });

  describe('getBestTime', () => {
    it('should return best time for a level', () => {
      gameState.bestTimes['level_2'] = 55;
      expect(gameState.getBestTime(2)).toBe(55);
    });

    it('should return null for levels without best time', () => {
      expect(gameState.getBestTime(99)).toBe(null);
    });
  });

  describe('resetScore', () => {
    it('should reset score to 0', () => {
      gameState.score = 1000;
      gameState.resetScore();
      expect(gameState.score).toBe(0);
    });

    it('should save to storage after reset', () => {
      const saveSpy = jest.spyOn(gameState, 'saveToStorage');
      gameState.resetScore();
      expect(saveSpy).toHaveBeenCalled();
    });
  });
});
