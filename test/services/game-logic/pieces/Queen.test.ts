import { Colors } from '../../../../src/enums';
import { Square } from '../../../../src/models/Square';
import { Queen } from '../../../../src/services/game-logic/pieces/Queen';

const createSquares = (coordinates: Array<[number, number]>): Square[] => {
    return Array.from(coordinates).map(([x, y]) => new Square(x, y));
};

const getExpectedPossibleMovesForStartingPosition = () => {
    return createSquares([
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 0],
        [5, 0],
        [6, 0],
        [7, 0],
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
        [0, 5],
        [0, 6],
        [0, 7],
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
        [5, 5],
        [6, 6],
        [7, 7]
    ]);
};

const getExpectedPossibleMovesForMiddlePosition = () => {
    return createSquares([
        [0, 2],
        [1, 2],
        [3, 2],
        [4, 2],
        [5, 2],
        [6, 2],
        [7, 2],
        [2, 0],
        [2, 1],
        [2, 3],
        [2, 4],
        [2, 5],
        [2, 6],
        [2, 7],
        [0, 0],
        [1, 1],
        [3, 3],
        [4, 4],
        [5, 5],
        [6, 6],
        [7, 7],
        [3, 1],
        [4, 0],
        [1, 3],
        [0, 4]
    ]);
};

const getExpectedPossibleMovesForRandomPosition = () => {
    return createSquares([
        [0, 3],
        [2, 3],
        [3, 3],
        [4, 3],
        [5, 3],
        [6, 3],
        [7, 3],
        [1, 0],
        [1, 1],
        [1, 2],
        [1, 4],
        [1, 5],
        [1, 6],
        [1, 7],
        [0, 4],
        [2, 2],
        [3, 1],
        [4, 0],
        [0, 2],
        [2, 4],
        [3, 5],
        [4, 6],
        [5, 7]
    ]);
};
describe('Queen', () => {
    test.each([
        [0, 0, getExpectedPossibleMovesForStartingPosition],
        [2, 2, getExpectedPossibleMovesForMiddlePosition],
        [1, 3, getExpectedPossibleMovesForRandomPosition]
    ])('should generate all possible moves for the piece', (startX, startY, expectedPossibleMoves) => {
        const queen = new Queen(new Square(startX, startY), Colors.BLACK);
        expect(queen.getPossibleMoves()).toEqual(expect.arrayContaining(expectedPossibleMoves()));
        expect(expectedPossibleMoves()).toEqual(expect.arrayContaining(queen.getPossibleMoves()));
    });
});