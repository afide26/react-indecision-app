'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Car class
// make
// model
// vin
// getDescription

var Person = function () {
  function Person() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Anonymous";
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: 'setAge',
    value: function setAge() {
      return this.age > 0 ? 's' : '';
    }
  }, {
    key: 'getDescription',
    value: function getDescription() {
      return 'Hi, my name is ' + this.name + '. I am ' + this.age + ' year' + this.setAge() + ' old.';
    }
  }, {
    key: 'getGreeting',
    value: function getGreeting() {
      return 'Hi my name is ' + this.name + ', I am ' + this.age + ' year' + this.setAge() + ' old.';
    }
  }]);

  return Person;
}();

var Student = function (_Person) {
  _inherits(Student, _Person);

  function Student(name, age, major) {
    _classCallCheck(this, Student);

    var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

    _this.major = major;
    return _this;
  }

  _createClass(Student, [{
    key: 'hasMajor',
    value: function hasMajor() {
      return !!this.major;
    }
  }, {
    key: 'getDescription',
    value: function getDescription() {
      var description = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'getDescription', this).call(this);
      if (this.hasMajor()) {
        description += ' My major is ' + this.major + '.';
      }
      return description;
    }
  }]);

  return Student;
}(Person);

var Traveller = function (_Person2) {
  _inherits(Traveller, _Person2);

  function Traveller(name, age, location) {
    _classCallCheck(this, Traveller);

    var _this2 = _possibleConstructorReturn(this, (Traveller.__proto__ || Object.getPrototypeOf(Traveller)).call(this, name, age));

    _this2.homeLocation = location;
    return _this2;
  }

  _createClass(Traveller, [{
    key: 'hasHomeLocation',
    value: function hasHomeLocation() {
      return !!this.homeLocation;
    }
  }, {
    key: 'getGreeting',
    value: function getGreeting() {
      var greeting = _get(Traveller.prototype.__proto__ || Object.getPrototypeOf(Traveller.prototype), 'getGreeting', this).call(this);

      if (this.hasHomeLocation()) {
        greeting += ' I hail from ' + this.homeLocation + '.';
      }

      return greeting;
    }
  }]);

  return Traveller;
}(Person);

// const me = new Student('Alan Fidelino',45, 'Computer Science');
// const anon = new Student(undefined, 25);

// console.log(me);
// console.log(me.getGreeting());
// console.log(me.getDescription())

// console.log(me.hasMajor());
// console.log(`--------------------`);
// console.log(anon);
// console.log(anon.getGreeting());
// console.log(anon.hasMajor());
// console.log(`--------------------`);

var jetSetter = new Traveller('Alan Fidelino', 45, 'Sydney, Australia');
var anonTraveller = new Traveller(undefined, undefined, 'Nowhere');
console.log('--------------------');
console.log(jetSetter);
console.log(jetSetter.getGreeting());
console.log('--------------------');
console.log(anonTraveller);
console.log(anonTraveller.getGreeting());
