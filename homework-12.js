/*  3. Создать структуру на ваш выбор, как было показано в лекции (имеется ввиду - с машинами/бьюти-продуктами). 
Придумайте свою структуру и реализуйте наследуемость классов*/

// **"Устройства умного дома"**
class SmartDevice {
  constructor(name, brand, powerStatus = false) {
    this.name = name;
    this.brand = brand;
    this.powerStatus = powerStatus; // true = on, false = off
  }
  turnOn() {
    this.powerStatus = true;
    console.log(`${this.name} ${this.brand} включен(а).`);
  }
  turnOff() {
    this.powerStatus = false;
    console.log(`${this.name} ${this.brand} выключен(а).`);
  }
}

class SmartLamp extends SmartDevice {
  constructor(name, brand, brightness = 50) {
    super(name, brand, false);
    this.brightness = brightness; // 0-100
  }
  
  setBrightness(level) {
    if (!this.powerStatus) {
      console.log('Сначала включите лампу.');
      return;
    } 
    if (level >= 0 && level <= 100) {
      this.brightness = level;
      console.log(`Яркость лампы ${this.brand} установлена на ${level}.`);
    } else {
      console.log('Уровень яркости должен быть в диапазоне от 0 до 100.');
    }
  }
}

class SmartConditioner extends SmartDevice {
  constructor(name, brand, temperature = 24) {
    super(name, brand, false);
    this.temperature = temperature; // в градусах Цельсия от 16 до 30
  }
  
  setTemperature(degree) {
    if (!this.powerStatus) {
      console.log('Сначала включите кондиционер.');
      return;
    }
    if (degree >= 16 && degree <= 30) {
      this.temperature = degree;
      console.log(`Температура кондиционера ${this.brand} установлена на ${degree}°C.`);
    } else {
      console.log('Температура должна быть в диапазоне от 16 до 30 градусов Цельсия.');
    }
  }
}

class SmartSpeaker extends SmartDevice {
  constructor(name, brand, volume = 50) {
    super(name, brand, false);
    this.volume = volume; // 0-100
  }
  
  setVolume(level) {
    if (!this.powerStatus) {
      console.log('Сначала включите колонку.');
      return;
    }
    if (level >= 0 && level <= 100) {
      this.volume = level;
      console.log(`Громкость колонки ${this.brand} установлена на ${level}.`);
    } else {
      console.log('Уровень громкости должен быть в диапазоне от 0 до 100.');
    }
  }
}

class SmartVacuum extends SmartDevice {
  constructor(name, brand, cleaningMode = 'auto') {
    super(name, brand, false);
    this.cleaningMode = cleaningMode; // auto, spot, edge
  }
  
  changeCleaningMode(mode) {
    if (!this.powerStatus) {
      console.log('Сначала включите пылесос.');
      return;
    }
    const validModes = ['auto', 'spot', 'edge'];
    if (validModes.includes(mode)) {
    this.cleaningMode = mode;
    console.log(`Режим уборки пылесоса ${this.brand} изменен на ${mode}.`);
    } else {
      console.log('Недопустимый режим уборки. Доступные режимы: auto, spot, edge.');
    }
  }
}

// Пример использования
const lamp = new SmartLamp('Лампа', 'Philips');
lamp.setBrightness(80);
lamp.turnOn();
lamp.setBrightness(150);
lamp.setBrightness(80);

const conditioner = new SmartConditioner('Кондиционер', 'Samsung');
conditioner.setTemperature(22);
conditioner.turnOn();
conditioner.setTemperature(50);
conditioner.setTemperature(22);

const speaker = new SmartSpeaker('Яндекс Станция', 'Yandex');
speaker.turnOn();
speaker.setVolume(70);
const vacuum = new SmartVacuum('Пылесос', 'Dyson');
vacuum.turnOn();
vacuum.changeCleaningMode('spot');
