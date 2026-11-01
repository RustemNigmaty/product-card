/*3. Реализовать абстрактный класс Drink (абстрактный он, потому что не должен иметь экземпляров. 
Он используется только для наследования). От него мы будем создавать наследников 
- лимонад, чай, кофе и прочие напитки, которые посчитаете нужным. Их должно быть от 3 до 5.*/
class Drink {
//Наш абстрактный класс должен содержать общие свойства, связанные со всеми напитками (это то, что есть у каждого напитка), а это:
  #temperature;
  constructor (name, size, price, temperature) {
    this.name = name;//• название
    this.size = size;//• размер
    this.price = price;//• цена
    this.#temperature = temperature; //• температура (приватный). Почему? Потому что мы не можем влиять на температуру вне класса.*/ 
  }
/*Также наш класс должен содержать общие методы, такие как:
• получить информацию про напиток */
  getInfo () {
    return `Напиток: ${this.name}, размер: ${this.size} мл, цена: ${this.price} руб.`;
  }
//• получить температуру напитка
  getTemperature () {
    return `Напиток ${this.name}, температура ${this.#temperature}.`;
  }
//• установить температуру напитка
  setTemperature (newTemp) {
    this.#temperature = newTemp;
    console.log(`Температура ${this.name} изменена на ${this.#temperature}°C.`);
  }
//• приготовить напиток (приватный)
  #prepareDrink () {
    console.log(`Напиток ${this.name} успешно приготовлен.`);
  }
//• подать напиток
  serveDrink () {
    this.#prepareDrink();
    console.log(`Пожалуйста, ваш ${this.name}! Температура: ${this.#temperature}°C.`)
  }
}
/*После уже реализовываем наследников, например для кофе нам нужны дополнительные параметры, 
помимо тех 4, что названы выше. Это вид зёрен, вид молока и прочее. */
class Coffee extends Drink {
  constructor(name, size, price, temperature, beanType, milkType, sugarAmount) {
    super(name, size, price, temperature);
    this.beanType = beanType;
    this.milkType = milkType;
    this.sugarAmount = sugarAmount;
  }
  getInfo() {
    const baseInfo = super.getInfo();
    return `${baseInfo} Зерно: ${this.beanType}, молоко: ${this.milkType}, сахар: ${this.sugarAmount}.`
  }
}
class Tea extends Drink {
  constructor(name, size, price, temperature, teaType, milkType, sugarAmount) {
    super(name, size, price, temperature);
    this.teaType = teaType;
    this.milkType = milkType;
    this.sugarAmount = sugarAmount;
  }
  getInfo() {
    const baseInfo = super.getInfo();
    return `${baseInfo} Вид чая: ${this.teaType}, молоко: ${this.milkType}, сахар: ${this.sugarAmount}.`
  }
}
class Lemonade extends Drink {
  constructor(name, size, price, temperature, iceAmount, withoutSugar) {
    super(name, size, price, temperature);
    this.iceAmount = iceAmount;
    this.withoutSugar = withoutSugar;
  }
  getInfo() {
    const baseInfo = super.getInfo();
    const sugarText = this.withoutSugar ? "Без сахара" : "Содержит сахар"
    return `${baseInfo} Лёд: ${this.iceAmount} кубика(ов), ${sugarText}.`
  }
}
//ТЕСТЫ
//---Тест 1. Тестируем кофе.---
console.log('---Тест 1. Тестируем кофе.---');
const cappuccino = new Coffee ('Каппучино', 250, 199, 95, "Арабика", "Безлактозное", "2 кусочка");
console.log(cappuccino.getInfo());
cappuccino.setTemperature(65);
cappuccino.serveDrink();
console.log('\n');
//---Тест 2. Тестируем чай.---
console.log('---Тест 2. Тестируем чай.---');
const greenfild = new Tea ('Гринфилд', 300, 99, 100, "Крупный лист", "Топленое", "2 ложки");
console.log(greenfild.getInfo());
greenfild.setTemperature(60);
greenfild.serveDrink();
console.log('\n');
//---Тест 3. Тестируем лимонад.---
console.log('---Тест 3. Тестируем лимонад.---');
const mojito = new Lemonade ('Мохито', 500, 149, 30, 3, true);
console.log(mojito.getInfo());
mojito.setTemperature(16);
mojito.serveDrink();
console.log('\n');

class Cafe {
  constructor(cafeName, cafeLocation) {
    this.cafeName = cafeName;
    this.cafeLocation = cafeLocation;
  }
  getInfo() {
    return `Название кафе: "${this.cafeName}", месторасположение кафе: ${this.cafeLocation}`
  }
  orderDrink(drink) {
    console.log(`Кафе "${this.cafeName}" приняло заказ на ${drink.getInfo()}`);
    drink.serveDrink();
  }
}
//ТЕСТ
//---Тест 4. Тестируем заказ кофе.---
console.log('---Тест 4. Тестируем заказ кофе.---');
const myCafe = new Cafe ('Кофе Даром', "Центральная площадь");
const espresso = new Coffee ('Эспрессо', 150, 169, 95, "Американо", "Сливки", "без сахара");
console.log(myCafe.getInfo());
myCafe.orderDrink(espresso);

