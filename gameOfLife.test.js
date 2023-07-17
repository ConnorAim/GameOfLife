const gameOfLifeArray = [
    {
       
   cell: {status: 1},
       
   neighbors: [
       
   {status: 1},
   {status: 1},
   {status: 1},
   {status: 0},
   {status: 0},
    ]
    },
   ]
   function testStatus(cell) {
    const aliveNeighborsCount = cell.neighbors.filter(neighbor => neighbor.status === 1).length;
  
    if (cell.cell.status === 1) {
      // Cell is alive
      if (aliveNeighborsCount < 2 || aliveNeighborsCount > 3) {
        // Cell dies due to underpopulation or overcrowding
        return false;
      } else {
        // Cell survives
        return true;
      }
    } else {
      // Cell is dead
      if (aliveNeighborsCount === 3) {
        // Cell becomes alive due to reproduction
        return true;
      } else {
        // Cell remains dead
        return false;
      }
    }
  }
describe('gameOfLife', () => {
    it("should return 1 if the cell has two or three live neighbours and is already a live cell", () => {
       const currentCell = testStatus(gameOfLifeArray[0])
       expect(currentCell).toBe(true)
   })

})
describe('gameOfLife', () => {
   it("Any live cell with two or three live neighbours lives on to the next generation.", () => {
      const currentCell = testStatus(gameOfLifeArray[0])
      expect(currentCell).toBe()
  })

})
describe('gameOfLife', () => {
   it("Any live cell with more than three live neighbours dies, as if by overpopulation.", () => {
  const currentCell = testStatus(gameOfLifeArray[0])
  expect(currentCell).toBe()
})

})
describe('gameOfLife', () => {
   it("Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction", () => {
  const currentCell = testStatus(gameOfLifeArray[0])
  expect(currentCell).toBe()
})

})
