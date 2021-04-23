import Goods from "./Goods.js";

class Goods2 extends Goods {
    constructor(name,amount,image,count,classname,sale) {
        super(name, amount, image, count,classname);
        this.sale = sale;
    }
    draw(sale) {
        this.sale = sale;
        super.draw();
        if (this.sale == true) {
            console.log("Есть скидки");
            document.querySelector(this.classname).innerHTML += "You have discount!!!"
        } else {
            document.querySelector(this.classname).innerHTML += "Sorry, you don't have discount((("
            console.log("Скидок нет");
        }

    }
}

export default Goods2;
