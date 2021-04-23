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
            document.querySelector(this.classname).innerHTML += "Есть скидка для Вас!!!"
        } else {
            document.querySelector(this.classname).innerHTML += "Увы,на этой неделе скидок нет((("
            console.log("Скидок нет");
        }

    }
}

export default Goods2;
