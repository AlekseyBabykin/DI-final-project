import { makeAutoObservable } from "mobx";

export class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Fridge" },
      { id: 2, name: "Smartphone" },
      { id: 3, name: "Laptop" },
      { id: 4, name: "TV" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
      { id: 3, name: "Lenovo" },
      { id: 4, name: "Asus" },
      { id: 5, name: "Samsung" },
    ];
    this._devices = [
      {
        id: 1,
        name: "12pro",
        price: 25000,
        rating: 5,
        img: `https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2021%2F09%2Fiphone-13_vs_iphone-12_compare.jpg`,
      },
      {
        id: 2,
        name: "12pro",
        price: 25000,
        rating: 5,
        img: `https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2021%2F09%2Fiphone-13_vs_iphone-12_compare.jpg`,
      },
      {
        id: 3,
        name: "12pro",
        price: 25000,
        rating: 5,
        img: `https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2021%2F09%2Fiphone-13_vs_iphone-12_compare.jpg`,
      },
      {
        id: 4,
        name: "12pro",
        price: 25000,
        rating: 5,
        img: `https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2021%2F09%2Fiphone-13_vs_iphone-12_compare.jpg`,
      },
      {
        id: 5,
        name: "12pro",
        price: 25000,
        rating: 5,
        img: `https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2021%2F09%2Fiphone-13_vs_iphone-12_compare.jpg`,
      },
      {
        id: 6,
        name: "12pro",
        price: 25000,
        rating: 5,
        img: `https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2021%2F09%2Fiphone-13_vs_iphone-12_compare.jpg`,
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }
  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }
  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }
  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
