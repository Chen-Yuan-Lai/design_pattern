const car = {
  noOfWheels: 4,
  start() {
    return "started";
  },
  stop() {
    return "stopped";
  },
};

// 使用 Object.create 創建新對象並指定原型
const myCar = Object.create(car, { owner: { value: "John" } });
console.log(myCar.__proto__ === car);
