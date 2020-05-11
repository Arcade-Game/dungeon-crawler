export const pushObstacle = (x,y,xx,yy, charX, charY, setCharX, setCharY, grid, getType, setGrid) => {
    let newGrid = [...grid]
    let pushToType = getType(xx,yy)
    let hero = grid[charY][charX]
    let boulder = grid[y][x]
    let pushTo = grid[yy][xx]
    let newHero = newGrid[charY][charX]
    let newBoulder = newGrid[y][x]
    let newPushTo = newGrid[yy][xx]

    if (boulder.type === 'wall' || pushToType === 'wall'){return}

    if (hero.level < boulder.level){
      if (hero.pushable === false || pushTo.level > boulder.level){return}
      else if (boulder.level > pushTo.level){
        newPushTo = {...newPushTo, pushable: true}
        newBoulder = {...newBoulder, pushable: false}
        setCharX(x)
        setCharY(y)
      }
    } else if (hero.level === boulder.level){
      if (hero.pushable === true){
        setCharX(x)
        setCharY(y)
      }
      if (hero.pushable === false){
        if (boulder.level < pushTo.level){return}
        if (boulder.level === pushTo.level && pushTo.pushable === true){return}
        if (boulder.level > pushTo.level){
          newPushTo = {...newPushTo, pushable: true}
          newBoulder = {...newBoulder, pushable: false}
          setCharX(x)
          setCharY(y)
        }
      }
    } else if (hero.level > boulder.level){
      setCharX(x)
      setCharY(y)
    }












    // if (hero.level > boulder.level){
    //   setCharX(x)
    //   setCharY(y)
    // } else if (hero.level === boulder.level){
    //   if (boulder.level < pushTo.level){return}
    //   if (boulder.level === pushTo.level){
    //     if (pushTo.pushable === true || pushToType === 'uneven' || pushToType === 'monster' || pushToType === 'chest'){return}
    //     if (pushToType === 'water'){
    //       newPushTo = {...newPushTo, type: 'push-bridge', pushable: false}
    //       newBoulder = {...newBoulder, pushable: false}
    //     } else if (pushToType === 'quicksand'){
    //       newBoulder = {...newBoulder, pushable: false}
    //     } else if (pushToType === 'lava'){
    //       newPushTo = {...newPushTo, type: 'push-bridge-lava2', pushable: false}
    //       newBoulder = {...newBoulder, pushable: false}
    //       setCharX(x)
    //       setCharY(y)
    //     } else if (pushToType === 'teleporter-1'){
    //       newGrid[newPushTo.end[1]][newPushTo.end[0]] = {...newGrid[newPushTo.end[1]][newPushTo.end[0]], pushable: true}
    //       newPushTo = {...newPushTo, type: 'broken-teleporter', pushable: false}
    //       newBoulder = {...newBoulder, pushable: false}
    //       setCharX(x)
    //       setCharY(y)
    //     } else if (pushToType === "empty" && pushTo.pushable !== true){
    //       newPushTo.pushable = true
    //       newBoulder = {...newBoulder, pushable: false}
    //       setCharX(x)
    //       setCharY(y)
    //     }
    //   } else if (boulder.level < pushTo.level){
        
    //   }
    // } 
















    // if(grid[y][x].type === 'cliff' && grid[charY][charX].type !== 'cliff'){return}
    // if(grid[y][x].type === 'uneven' && grid[charY][charX].type === 'cliff'){
    //   setCharX(x)
    //   setCharY(y)
    // }

    // if(grid[yy][xx].type === 'platform'){
    //   if(grid[yy][xx].pushable){return}
    //   if(grid[charY][charX].type === 'platform'){
    //     newGrid[yy][xx] = {...newGrid[yy][xx], pushable: true}
    //     newGrid[y][x] = {...newGrid[y][x], pushable: false}
    //     setCharX(x)
    //     setCharY(y)
    //   } 
    // } else if (grid[yy][xx].type !== 'cliff' && grid[yy][xx].type !== 'wall' && grid[yy][xx].type !== 'cliff'){
    //     newGrid[yy][xx] = {...newGrid[yy][xx], pushable: true}
    //     newGrid[y][x] = {...newGrid[y][x], pushable: false}
    //     setCharY(y)
    //     setCharX(x)
    // }
    // if(grid[yy][xx].pushable && grid[yy][xx].type === 'cliff'){return}
    // if(grid[charY][charX].type === 'cliff'){
    //   if(grid[yy][xx].type === 'cliff' && grid[y][x].type === 'cliff'){
    //     newGrid[yy][xx] = {...newGrid[yy][xx], pushable: true}
    //     newGrid[y][x] = {...newGrid[y][x], pushable: false}
    //     setCharX(x)
    //     setCharY(y)
    //   } else if (grid[yy][xx].type === 'empty' && grid[y][x].type === 'cliff'){
    //     newGrid[yy][xx] = {...newGrid[yy][xx], pushable: true}
    //     newGrid[y][x] = {...newGrid[y][x], pushable: false}
    //     setCharX(x)
    //     setCharY(y)
    //   } else if (grid[y][x].type !== 'cliff'){
    //     setCharX(x)
    //     setCharY(y)
    //   } else if (grid[yy][xx].type === 'water'){
    //     newGrid[yy][xx] = {...newGrid[yy][xx], type: 'push-bridge', pushable: false}
    //     newGrid[y][x] = {...newGrid[y][x], pushable: false}
    //   } else if (grid[yy][xx].type === 'lava'){
    //     newGrid[yy][xx] = {...newGrid[y][x], type: 'push-bridge-lava2', pushable: false}
    //     newGrid[y][x] = {...newGrid[y][x], pushable: false}
    //     setCharX(x)
    //     setCharY(y)
    //   } else if (grid[y][x].type === 'uneven'){
    //     setCharX(x)
    //     setCharY(y)
    //   } else if (grid[yy][xx].type === 'uneven'){
    //     newGrid[yy][xx] = {...newGrid[yy][xx], pushable: true}
    //     newGrid[y][x] = {...newGrid[y][x], pushable: false}
    //     setCharX(x)
    //     setCharY(y)
    //   } else if (grid[yy][xx].type === 'quicksand'){
    //     newGrid[y][x] = {...newGrid[y][x], pushable: false}
    //     setCharX(x)
    //     setCharY(y)
    //   } else if (grid[yy][xx].type === 'teleporter-1'){
    //     newGrid[newGrid[yy][xx].end[1]][newGrid[yy][xx].end[0]] = {...newGrid[newGrid[yy][xx].end[1]][newGrid[yy][xx].end[0]], pushable: true}
    //     newGrid[yy][xx] = {...newGrid[yy][xx], type: 'empty', itemObject: 'broken-teleporter', pushable: false}
    //     newGrid[y][x] = {...newGrid[y][x], pushable: false}
    //     setCharX(x)
    //     setCharY(y)
    //   } else if (grid[yy][xx].type === 'broken-teleporter'){
    //     newGrid[yy][xx] = {...newGrid[yy][xx], type: 'empty', pushable: true}
    //     newGrid[y][x] = {...newGrid[y][x], pushable: false}
    //     setCharX(x)
    //     setCharY(y)
    //   } else if (grid[yy][xx].type === 'platform'){
    //     newGrid[yy][xx] = {...newGrid[yy][xx], pushable: true}
    //     newGrid[y][x] = {...newGrid[y][x], pushable: false}
    //     setCharX(x)
    //     setCharY(y)
    //   }
    // } else if (grid[charY][charX].type === 'platform' && grid[y][x].type !== 'cliff'){ 
    //   setCharX(x)
    //   setCharY(y)
    // } else if (grid[charY][charX].pushable === true){
    //   setCharX(x)
    //   setCharY(y)
    // } else {
    //   if (pushToType === 'water'){
    //     newGrid[yy][xx] = {...newGrid[yy][xx], type: 'push-bridge', pushable: false}
    //     newGrid[y][x] = {...newGrid[y][x], pushable: false}
    //   } else if (pushToType === 'quicksand'){
    //     newGrid[y][x] = {...newGrid[y][x], pushable: false}
    //   } else if (pushToType === 'lava'){
    //     newGrid[yy][xx] = {...newGrid[yy][xx], type: 'push-bridge-lava2', pushable: false}
    //     newGrid[y][x] = {...newGrid[y][x], pushable: false}
    //     setCharX(x)
    //     setCharY(y)
    //   } else if (pushToType === 'teleporter-1'){
    //     newGrid[newGrid[yy][xx].end[1]][newGrid[yy][xx].end[0]] = {...newGrid[newGrid[yy][xx].end[1]][newGrid[yy][xx].end[0]], pushable: true}
    //     newGrid[yy][xx] = {...newGrid[yy][xx], type: 'broken-teleporter', pushable: false}
    //     newGrid[y][x] = {...newGrid[y][x], pushable: false}
    //     setCharX(x)
    //     setCharY(y)
    //   } else if (pushToType === "empty" && grid[yy][xx].pushable !== true){
    //     newGrid[yy][xx].pushable = true
    //     newGrid[y][x] = {...newGrid[y][x], pushable: false}
    //     setCharX(x)
    //     setCharY(y)
    //   }
    // }
    setGrid(newGrid)
  }