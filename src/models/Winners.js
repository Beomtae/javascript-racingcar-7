class Winners {
  static findWinners(carList) {
    let maxDistance = 0;
    let winners = [];
    carList.forEach(car => {
      if (car.distance > maxDistance) {
        maxDistance = car.distance;
        winners = [car.name];
      } else if (car.distance === maxDistance) {
        winners.push(car.name);
      }
    });
    return winners;
  }
}

export default Winners;