
class Goods {
    constructor(name,amount,image,count,classname) {
        this.name = name;
        this.amount = amount;
        this.image = image;
        this.count = count;
        this.classname = classname;
    }
    draw() {
        let div = document.createElement('div');
        div.className = "out-3";
        div.style.height = "70px";
        div.innerHTML = `<img src=${this.image} width="60px" height="60px" alt={}>`;
        document.querySelector(this.classname).append(div);
    }

}

export default Goods;
