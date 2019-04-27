const TILE_WIDTH = 32;

const MOVE_STAND = 0;
const MOVE_LEFT = 1;
const MOVE_RIGHT = 2;
const MOVE_DOWN = 3;
const MOVE_UP = 4;
const MOVE_TURN = 5;
const MOVE_ICE_MAKE = 6;
const MOVE_ICE_REMOVE = 7;
const MOVE_ICE_MOVING = 8;
const MOVE_ICE_CHECK = 9;
const MOVE_RIP = 10;
const MOVE_PUSH = 8;

const DIR_LEFT = -1;
const DIR_RIGHT = 1;

const ANIM_STANDARD_DELAY = 2;
const ANIM_FRAME_COUNT = 16;
const ANIM_LEFT_ROW = 1;
const ANIM_RIGHT_ROW = 0;
const ANIM_RUN_START = 0;
const ANIM_RUN_END = 3;
const ANIM_STAND = 4;
const ANIM_TURN_START = 4;
const ANIM_TURN_END = 7;
const ANIM_FALL_START = 8;
const ANIM_FALL_END = 9;
const ANIM_BIG_FALL_START = 10;
const ANIM_BIG_FALL_END = 11;
const ANIM_PUSH_START = 12;
const ANIM_PUSH_END = 13;
const ANIM_JUMP_START = 14;
const ANIM_JUMP_END = 15;
const ANIM_STAND_START = 16;
const ANIM_STAND_END = 17;
const ANIM_ICE_START = 18;
const ANIM_ICE_END = 19;
const ANIM_CROUCH_START = 20;
const ANIM_CROUCH_END = 22;
const ANIM_RIP_START = 23;
const ANIM_RIP_END = 24;
const ANIM_SLEEP_START = 25;
const ANIM_SLEEP_END = 26;

const TILE_MIDDLE = 0;
const TILE_LEFT = 32;
const TILE_RIGHT = 64;
const TILE_BOTH = 96;
const TILE_TOP = 128;
const TILE_BOTTOM = 160;

const OBJECT_BACKGROUND = 0;
const OBJECT_WALL = 1;
const OBJECT_FIRE = 6;
const OBJECT_ICE = 3;
const OBJECT_OUT = -2;
const OBJECT_PLAYER = 7;
const OBJECT_METAL = 4;

const STATE_PLAY = 1;
const STATE_START = 2;
