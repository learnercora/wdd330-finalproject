export default class PageTotalData {
  constructor(totalData) {
    this.totalData = totalData;
  }
  init() {
    this.displayTotalData();
  }
  displayTotalData() {
    const totalDataElement = document.querySelector(".total-data");
    totalDataElement.innerHTML = this.totalData.toString();
  }
}
