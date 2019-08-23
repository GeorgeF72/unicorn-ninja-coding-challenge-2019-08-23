const unobstructedWestViewCount = buildings => {
  return buildings.reduce((visible, building) =>  visible.filter(b => b > building).concat(building), []).length
}

module.exports = { unobstructedWestViewCount }
