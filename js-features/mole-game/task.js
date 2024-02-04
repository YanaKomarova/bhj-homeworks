(() => {
    let playing = true,
      activeHole = 1,
      deadCount = 0,
      lostCount = 0;
  
    const stop = () => (playing = false),
      getHole = index => document.getElementById(`hole${index}`),
      deactivateHole = index => {
        const hole = getHole(index);
        hole.classList.remove('hole_has-mole');
      },
      activateHole = index => {
        const hole = getHole(index);
        hole.classList.add('hole_has-mole');
      },
      next = () =>
        setTimeout(() => {
          if (!playing) {
            return;
          }
          deactivateHole(activeHole);
          activeHole = Math.floor(1 + Math.random() * 9);
          activateHole(activeHole);
          next();
        }, 800);
  
    next();
  
    for (let i = 1; i <= 9; i++) {
      const hole = getHole(i);
      hole.onclick = () => {
        if (hole.classList.contains('hole_has-mole')) {
          deadCount++;
          document.getElementById('dead').textContent = deadCount;
        } else {
          lostCount++;
          document.getElementById('lost').textContent = lostCount;
        }
      };
    }
  })();